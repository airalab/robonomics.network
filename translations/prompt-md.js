import dotenv from "dotenv";
import fs from "node:fs";
import chalk from 'chalk';
import { encode, decode } from 'gpt-tokenizer';

import OpenAI from "openai";

// Load environment variables from .env file
dotenv.config();

import {configMD} from './tr-config.js';

const key = configMD.key;

// reference for ai translation
const defaultReference = 'You can adjust the tone and style, taking into account the cultural connotations and regional differences of certain words. As a translator, you need to translate the original text into a translation that meets the standards of accuracy and elegance.';

const url = 'https://api.openai.com/v1/chat/completions';
const defaultLocale = configMD.defaultLocale;
const locales = configMD.locales; // array with all locales
const inputFolder = configMD.inputFolder; // folder with default files
const outputFolder = configMD.outputFolder; // endpoint translations folder
const isInProgress = []; // to notify when all jobs are completed
const changedFiles = []; // array of modified files to translate

const openai = new OpenAI({
  apiKey: key, 
});

const readMarkdown = (filePath) => {
  return fs.readFileSync(filePath, 'utf8');
};

const writeFile = (filePath, data) => {
  fs.writeFileSync(filePath, data, 'utf8');
}

const checkExistingFiles = (path) => {
  if (fs.existsSync(path)) {
    return true
  } else {
    return false
  }
}

const deleteFile = (path) => {
  locales.map(locale => {
    if(fs.existsSync(`${outputFolder}${locale}/${path}`))
    fs.unlinkSync(`${outputFolder}${locale}/${path}`)
  })

}

const translationData = (from, to, input) => [
  {
    role: "system",
    content: [
      `Translate the markdown file from ${from} to ${to} according to the BCP 47 standard.`,
      `DO NOT add anything, new tags or additional markdown tags.`,
      `DO NOT CHANGE custom tags.`,
      `Translate ONLY the given prompt; do not add anything new.`,
      `Remove occurrences of \`\`\`${to}`,
      `Change locale value in frontmatter from ${from} to ${to} if necessary.`,
      `DO NOT change or translate 'related' value in frontmatter.`,
      `DO NOT change or translate any tags (they usually start with <).`,
      `DO NOT change or translate any link or URL paths.`,
      `Here are some references to help with better translation: ---${defaultReference}---`,
      `Ensure the output remains a valid markdown file.`,
      `REMEMBER: do NOT add anything new, just return the same text translated to the target language.`,
    ].join('\n')
  },
  {
    role: "user",
    content: input
  }
];

const translateMD = async (from, to, input, output, file, locale) => {
  const tokenLimit = 1000;
  const encodedInput = encode(input);
  const chunksOfDoc = [];

  if (encodedInput.length > tokenLimit) {
    const parts = Math.ceil(encodedInput.length / 500);
    let sliceAmount = 0;

    for (let i = 0; i < parts; i++) {
      chunksOfDoc.push(decode(encodedInput.slice(sliceAmount, sliceAmount + 500)));
      sliceAmount += 500;
    }
  }

  try {
    console.log(
      chalk.yellow(`🤖 Starting translation for ${file.replace(/\..+$/, '')}`),
      '-', chalk.magenta(locale)
    );

    let result = '';

    if (chunksOfDoc.length) {
      console.log(chalk.bgBlueBright('⏳ Translation may take some time, please wait...⌛️'));
      const translatedChunks = [];

      for await (const chunk of chunksOfDoc) {
        const response = await openai.chat.completions.create({
          model: 'gpt-4.1',
          messages: translationData(from, to, chunk, defaultReference),
          temperature: 0,
          top_p: 1,
        });

        translatedChunks.push(response.choices[0].message.content);
      }

      result = translatedChunks.join('');
    } else {
      const response = await openai.chat.completions.create({
        model: 'gpt-4.1',
        messages: translationData(from, to, input, defaultReference),
        temperature: 0,
        top_p: 1,
      });

      result = response.choices[0].message.content;
    }

    writeFile(output, result);
    console.log(
      chalk.green(`✅ Translation completed -`),
      chalk.greenBright(`${locale}/${file.replace(/\..+$/, '')}`)
    );

    isInProgress.pop();
    if (!isInProgress.length) {
      console.log(chalk.magentaBright('All done 💠'));
    }

  } catch (error) {
    console.error(
      chalk.red("❌ Error calling OpenAI API:"),
      error?.message || error
    );
    throw error;
  }
};


// check if doc in default folder was removed and delete the doc from all the locales
const checkDeletedFile = () => {
  const defaultDir = fs.readdirSync(inputFolder).filter(f => f.includes('mdx'));
  const localeDir = fs.readdirSync(`${outputFolder}${locales[0]}/`).filter(f => f.includes('mdx'))

  if (JSON.stringify(defaultDir) !== JSON.stringify(localeDir)) {
    const res = localeDir.filter(x => !defaultDir.includes(x));

    res.map(file => {
      deleteFile(file)
    })
  }
}

const getFileUpdatedDate = (path) => {
  const ago24 = new Date().getTime() - (24*3600*1000)
  const stats = fs.statSync(path) 

  let randomLocaleFile = 0;

  if(fs.existsSync(`${outputFolder}ru/${path.split("/").pop()}`)) {
    randomLocaleFile = fs.statSync(`${outputFolder}ru/${path.split("/").pop()}`);
  }
  if(stats.mtimeMs > ago24 && randomLocaleFile.mtimeMs < stats.mtimeMs && !changedFiles.includes(path.split("/").pop())) {
    changedFiles.push(path.split("/").pop())
  } else {
    return
  }
}


const setChangedFiles = async () => {
  
  console.log(chalk.bgGreenBright('🤖 checking modified markdown files 🤖 '))
  for await (const file of fs.readdirSync(inputFolder)) {
    if (file.includes('mdx')) {
      getFileUpdatedDate(`${outputFolder}${file}`)
    }
  }

  if(changedFiles.length) {
    changedFiles.forEach(modFile => {
      deleteFile(modFile)
    })
  }
}

const set = async () => {
  await setChangedFiles();
  console.log(chalk.yellow('🤖 getting markdown files from 🤖 ', inputFolder))
  for await (const locale of locales) {
    for await (const file of fs.readdirSync(inputFolder)) {
      if(file.includes('mdx')) {
        if(!checkExistingFiles(`${outputFolder}${locale}/${file}`)) {
          isInProgress.push('+');
          await translateMD(defaultLocale, locale, readMarkdown(inputFolder + file), `${outputFolder}${locale}/${file}`, file, locale)
        }
      }
    }
  }

  if(!isInProgress.length) {
    console.log(chalk.magentaBright('all done 💠'))
  }
}

checkDeletedFile();
set();