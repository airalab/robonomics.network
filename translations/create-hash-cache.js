// if we do not have the hash file with all the mdx posts than run `yarn init-hash-cache` command in order to avoid unnecessary translation of all the files
import fs from 'node:fs';
import crypto from 'node:crypto';
import { configMD } from './tr-config.js';

const inputFolder = configMD.inputFolder;
const HASH_CACHE_FILE = './translations/hash-cache.json';

const getFileHash = (filePath) => {
  const content = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(content).digest('hex');
};

const generateInitialCache = () => {
  const cache = {};
  const files = fs.readdirSync(inputFolder).filter(f => f.endsWith('.mdx'));

  for (const file of files) {
    const fullPath = `${inputFolder}${file}`;
    cache[file] = getFileHash(fullPath);
  }

  
  fs.writeFileSync(HASH_CACHE_FILE, JSON.stringify(cache, null, 2), 'utf-8');
  console.log(`✅ Created initial hash cache with ${files.length} entries.`);
};

generateInitialCache();
