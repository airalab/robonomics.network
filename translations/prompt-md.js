import dotenv from "dotenv";
import fs from "node:fs";
import chalk from 'chalk';
import crypto from 'node:crypto';
import { encode, decode } from 'gpt-tokenizer';
import OpenAI from "openai";
import { configMD } from './tr-config.js';

dotenv.config();

const key = configMD.key;
const defaultReference = 'You can adjust the tone and style, taking into account the cultural connotations and regional differences of certain words. As a translator, you need to translate the original text into a translation that meets the standards of accuracy and elegance.';
const defaultLocale = configMD.defaultLocale;
const locales = configMD.locales;
const inputFolder = configMD.inputFolder;
const outputFolder = configMD.outputFolder;
const HASH_CACHE_FILE = './translations/hash-cache.json';

const isInProgress = [];
const changedFiles = [];

const openai = new OpenAI({ apiKey: key });

const readMarkdown = (filePath) => fs.readFileSync(filePath, 'utf8');
const writeFile = (filePath, data) => fs.writeFileSync(filePath, data, 'utf8');
const checkExistingFiles = (path) => fs.existsSync(path);

const deleteFile = (path) => {
  locales.forEach(locale => {
    const filePath = `${outputFolder}${locale}/${path}`;
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  });
};

const getFileHash = (filePath) => {
  const content = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(content).digest('hex');
};

const loadHashCache = () => {
  if (!fs.existsSync(HASH_CACHE_FILE)) return {};
  return JSON.parse(fs.readFileSync(HASH_CACHE_FILE, 'utf-8'));
};

const saveHashCache = (cache) => {
  fs.writeFileSync(HASH_CACHE_FILE, JSON.stringify(cache, null, 2), 'utf-8');
};

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
          messages: translationData(from, to, chunk),
          temperature: 0,
          top_p: 1,
        });

        translatedChunks.push(response.choices[0].message.content);
      }

      result = translatedChunks.join('');
    } else {
      const response = await openai.chat.completions.create({
        model: 'gpt-4.1',
        messages: translationData(from, to, input),
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
  const localeDir = fs.readdirSync(`${outputFolder}${locales[0]}/`).filter(f => f.includes('mdx'));

  const deletedFiles = localeDir.filter(x => !defaultDir.includes(x));
  deletedFiles.forEach(file => deleteFile(file));
};

const setChangedFiles = async () => {
  console.log(chalk.bgGreenBright('🤖 checking modified markdown files (by hash) 🤖'));

  const currentHashCache = loadHashCache();
  const isFirstRun = Object.keys(currentHashCache).length === 0;

  for (const file of fs.readdirSync(inputFolder)) {
    if (!file.endsWith('.mdx')) continue;

    const filePath = inputFolder + file;
    const currentHash = getFileHash(filePath);

    // First run? Don’t mark files as changed
    if (!isFirstRun && currentHashCache[file] !== currentHash) {
      changedFiles.push(file);
    }
  }

  if (!isFirstRun && changedFiles.length) {
    changedFiles.forEach(deleteFile);
  }

  if (isFirstRun) {
    console.log(chalk.cyanBright('🟢 First run detected — no files will be translated.'));
  }
};


const set = async () => {
  await setChangedFiles();

  console.log(chalk.yellow('🤖 getting markdown files from 🤖 ', inputFolder));

  for await (const locale of locales) {
    for await (const file of fs.readdirSync(inputFolder)) {
      if (file.includes('mdx')) {
        const filePath = inputFolder + file;
        const outPath = `${outputFolder}${locale}/${file}`;

        if (!checkExistingFiles(outPath) || changedFiles.includes(file)) {
          isInProgress.push('+');
          await translateMD(defaultLocale, locale, readMarkdown(filePath), outPath, file, locale);
        }
      }
    }
  }

  if (!isInProgress.length) {
    console.log(chalk.magentaBright('all done 💠'));

    const newCache = {};
    for (const file of fs.readdirSync(inputFolder)) {
      if (!file.endsWith('.mdx')) continue;
      newCache[file] = getFileHash(inputFolder + file);
    }
    saveHashCache(newCache);
  }
};

checkDeletedFile();
set();
