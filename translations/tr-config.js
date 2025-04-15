import dotenv from "dotenv";
dotenv.config();

export const config = {
  key: process.env.PUBLIC_OPENAI_KEY, // your OPENAI key
  allFiles: ['**/*.+(astro|vue)', 'src/data/*.+(js)'], // array of files for translation (with the help of glob)
  excludeFiles: ['node_modules/**', 'dist/**'], // files to exclude from ai translation
  defaultLocale: 'en',
  locales: ["ar","de","el","en","es","fr","it","ja","ko","nl","pt","ru","uk","zh"], // array with all locales
  outputFolder: './messages/', // endpoint translations folder
  includeJSON: false, // json file that you want to translate, needs to be included in all files (for custom translation)
  JSONKey: '' // key to find values for translation in json file
}

export const configMD = {
  key: process.env.PUBLIC_OPENAI_KEY, // your OPENAI key
  inputFolder: './src/blog/', // folder with markdown files
  outputFolder: './src/blog/', // endpoint translations folder
  defaultLocale: 'en',
  locales: ["ar","de","el","es","fr","it","ja","ko","nl","pt","ru","uk","zh"], // array with all locales
}