import dotenv from "dotenv";
import fs from "node:fs";
import chalk from 'chalk';
import { encode, decode } from 'gpt-tokenizer';
import { glob } from 'glob';

import OpenAI from "openai";

// Load environment variables from .env file
dotenv.config();

import {config} from './tr-config.js';

const key = config.key;

// reference for ai translation
const defaultReference = 'You can adjust the tone and style, taking into account the cultural connotations and regional differences of certain words. As a translator, you need to translate the original text into a translation that meets the standards of accuracy and elegance.';


const defaultLocale = config.defaultLocale;
const locales = config.locales; // array with all locales
const outputFolder = config.outputFolder; // endpoint translations folder
const differences = []; // array to check deleted lines
const isInProgress = []; // to notify when all jobs are complete

const openai = new OpenAI({
  apiKey: key, 
});

const readFile = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf8');
  return data;
};

const writeFile = (filePath, data, translation=false, locale=defaultLocale) => {
  const jsonStr = JSON.stringify(data, null, "\t").replace(/]|[[]/g, '');

  let path = filePath;
  if(!filePath) {
    if(locale !== defaultLocale) {
      path = `${outputFolder}${locale}.json`
    } else {
      path = `${outputFolder}${defaultLocale}.json`
    }
  }

  if(translation) {
    fs.writeFileSync(path, data, 'utf8');
  } else {
    fs.writeFileSync(path, jsonStr, 'utf8');
  }
};

const allFiles = async () => {
  const files = await glob(config.allFiles, { ignore: config.excludeFiles })
  return files
}

const checkExistingFiles = (path) => {
  if (fs.existsSync(path)) {
    return true
  } else {
    return false
  }
}

const translateNewLine = async (from, to, input, locale) => {
  try {
    console.log(
      chalk.yellow(`🤖 starting translation for a new line - ${input}`),
      '-',
      chalk.magenta(locale)
    );

    const response = await openai.chat.completions.create({
      model: "gpt-4.1",
      messages: [
        {
          role: "system",
          content: [
            `Translate this string from ${from} to ${to}.`,
            `Do NOT add any commas or dots IF there are none in the original text and do NOT change the case of the original words.`
          ].join('\n')
        },
        {
          role: "user",
          content: input
        }
      ],
      temperature: 0,
      top_p: 1,
    });

    const result = response.choices[0].message.content;
    console.log(
      chalk.green(`✅ translation completed -`),
      chalk.greenBright(`new line for ${locale} translated`)
    );
    return result;
  } catch (error) {
    console.error(
      chalk.red(" ❌ Error calling ChatGPT API:"),
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}

const checkDeletedLine = (path, arr) => {
  const mainObj = JSON.parse(readFile(path));
  const arrayOfObjects = Object.entries(JSON.parse(readFile(path))).map(entry => toValidJSKey(entry[1]))
  const newArr = [];

  arr.map(entry => {
    newArr.push(...Object.keys(entry))
  })

  arrayOfObjects.filter(x => {
    if(!newArr.includes(toValidJSKey(x).replace(/^["'](.+(?=["']$))["']$/, '$1'))) {
      differences.push(x.trim())
    }
  })


  if(differences.length > 0) {
    differences.map(i => {
      // removing deleted lines
      delete mainObj[i];
      writeFile(path, mainObj)

      // removing deleted lines in all locales files
      locales.forEach(l => {
        const pathWithLocale = `${outputFolder}${l}.json`;
        if(checkExistingFiles(pathWithLocale)){
          const localeObj = JSON.parse(readFile(pathWithLocale))
          if(localeObj[i]) {
            delete localeObj[i];
            writeFile(pathWithLocale, localeObj)
          }
        }
      })
    })
  }

}

const updateFile = async (path, key, item) => {

  console.log(chalk.gray(`🔄 Checking key: ${key}`));

  // checking existing key
  const exsObject = JSON.parse(readFile(path));
  if (!Object.keys(exsObject).includes(toValidJSKey(key.trim()))) {
    exsObject[toValidJSKey(key.trim())] = key.trim();
    // Updating file
    writeFile(path, exsObject)
  }
    // updating all locale files
    for await (const l of locales) {
      const pathWithLocale = `${outputFolder}${l}.json`;
      if (checkExistingFiles(pathWithLocale)) {
        if(!Object.keys(JSON.parse(readFile(pathWithLocale))).includes(toValidJSKey(key.trim()))) {
          const newKey = await translateNewLine(defaultLocale, l, key.trim(), l);
          const localeObj = JSON.parse(readFile(pathWithLocale))
          localeObj[toValidJSKey(key.trim())] = newKey;
          writeFile(pathWithLocale, localeObj)
        } else {
          console.log(chalk.gray(`- Key ${l} - ${key} already exists, skipping add`));
        }
      }
    }

    isInProgress.pop();
}

const translationData = (from, to, input) => {
  return [
    {
      role: "system",
      content: [
        `Translate the i18n JSON file from ${from} to ${to} according to the BCP 47 standard. Never translate the keys and leave them in English.`,
        `Here are some reference to help with better translation.  ---${defaultReference || ''}---`,
        `If there are any underscores in values, please, replace them with spaces.`,
        `Do NOT add any commas or dots if there are none in the original text and do NOT change the case of the original words.`,
        `Keep the keys the same as the original file and make sure the output remains a valid i18n JSON file.`
      ].join('\n')
    },
    {
      role: "user",
      content: input
    }
  ];
};

const translateFile = async (from, to, input, output, file, locale) => {
  const chunksOfFile = [];

  const tokenLimit = 1200;

  if (encode(input).length > tokenLimit) {
    const parts = Math.ceil(encode(input).length / tokenLimit);
    let sliceAmount = 0;

    for (let i = 0; i < parts; i++) {
      chunksOfFile.push(decode(encode(input).slice(sliceAmount, sliceAmount + tokenLimit)));
      sliceAmount += tokenLimit;
    }
  }

  try {
    console.log(chalk.yellow(`🤖 starting translation for ${file.replace(/\..+$/, '')}`), '-', chalk.magenta(locale));
    let result = '';

    if (chunksOfFile.length) {
      console.log(chalk.bgBlueBright('⏳ translation may take some time, please wait...⌛️'));
      const translatedChunks = [];

      for await (const chunk of chunksOfFile) {
        const response = await openai.chat.completions.create({
          model: "gpt-4",
          messages: translationData(from, to, chunk),
          temperature: 0,
          top_p: 1,
        });

        translatedChunks.push(JSON.parse(response.choices[0].message.content));
      }

      const obj = Object.assign({}, ...translatedChunks);
      writeFile('', JSON.stringify(obj, null, '\t'), true, locale);
    } else {
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: translationData(from, to, input),
        temperature: 0,
        top_p: 1,
      });

      result = response.choices[0].message.content;
      writeFile('', result, true, locale);
    }

    console.log(chalk.green(`✅ translation completed -`), chalk.greenBright(`${locale}/${file.replace(/\..+$/, '')}`));
  } catch (error) {
    console.error(
      chalk.red("❌ Error calling ChatGPT API:"),
      error?.message || error
    );
    throw error;
  }
};

const translationsSet = async () => {
  console.log(chalk.yellow('🤖 getting json files 🤖'));
  console.log(chalk.blueBright("🚀 Starting translation process..."));
  const files = await allFiles();

  if (!files.length) {
    console.error(chalk.red("❌ No files matched your pattern. Check `config.allFiles`."));
    process.exit(1);
  }

  console.log(chalk.cyan(`🔍 Found ${files.length} file(s):`));
  for await (const locale of locales) {
    if(!checkExistingFiles(`${outputFolder}${locale}.json`)) {
      isInProgress.push('+');
      await translateFile(defaultLocale, locale, readFile(`${outputFolder}${defaultLocale}.json`), `${outputFolder}${locale}.json`, `${locale}.json`, locale)
    }
  }
}

const getJsonValues = (data, keyToFind) => {
  return Object.entries(data)
  .reduce((acc, [key, value]) => (key === keyToFind)
    ? acc.concat(value)
    : (typeof value === 'object')
    ? acc.concat(getJsonValues(value, keyToFind))
    : acc
  , [])
}

// transform json key to a valid js variable for it to be usable with paraglide.js
const toValidJSKey = (str) => {
  return str
    .normalize("NFD") // Normalize accents (e.g., é → e)
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-zA-Z0-9_]/g, "_") // Replace all non-alphanumeric characters with _
    .replace(/^(\d)/, "_$1"); // Prefix with _ if it starts with a number
};

const set = async () => {
  const res = await allFiles();
  const data = [];
  const trRegex = /\$(?:tr|trVue)\(["'`](.*?)["'`]\)/g;
  // creating json files from all content (excluding markdown)
  res.forEach(item => {
    if (item && !item.includes(config.includeJSON)) {
      const fileContent = readFile(item);
      
      let match;
      while ((match = trRegex.exec(fileContent)) !== null) {
        const originalText = match[1].trim();
        const jsonKey = toValidJSKey(originalText); // Replace spaces with underscores
        
        data.push({ [jsonKey]: originalText });
      }
    }
  
    if (item.includes(config.includeJSON)) {
      const d = Object.entries(JSON.parse(readFile(item))).map(entry => entry[1]);
      const res = getJsonValues(d, config.JSONKey);
      res.forEach(item => {
        const jsonKey = toValidJSKey(item); // Convert spaces to underscores
        data.push({ [jsonKey]: item });
      });
    }
  });


  if(!checkExistingFiles(`${outputFolder}${defaultLocale}.json`)) {
    writeFile(outputFolder + defaultLocale + '.json', Object.assign({},...data))
  } else {
    // deleting unused keys
    checkDeletedLine(outputFolder + defaultLocale + '.json', data);
    // checking if file was changed
    for await (const el of data) {
      isInProgress.push('+');
      await updateFile(`${outputFolder}${defaultLocale}.json`, Object.values(el)[0])
    }
  }

  console.log(chalk.greenBright(`✅ json files were created ✅ `))
  
  // setting translation for all locales
  await translationsSet();
  isInProgress.pop();
  if(isInProgress.length < 1) {
    console.log(chalk.magentaBright('all done 💠'))
  }
}

// start prompt
set();
