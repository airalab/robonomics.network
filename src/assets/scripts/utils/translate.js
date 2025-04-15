// for easier translate function
// import * as m from '../../../paraglide/messages'; 
import { languageTag } from '../../../paraglide/runtime.js';
const message  = await import(`../../../paraglide/messages/${languageTag()}.js`);

const turnStringToTranslationKey = (string) => {
  if(typeof string === 'string')
  return string
    .normalize("NFD") // Normalize accents (e.g., é → e)
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-zA-Z0-9_]/g, "_") // Replace all non-alphanumeric characters with _
    .replace(/^(\d)/, "_$1"); // Prefix with _ if it starts with a number
}

async function translate(value) {
  const m  = await import(`../../../paraglide/messages/${languageTag()}.js`);
  const key = turnStringToTranslationKey(value);
  return m[key] ? m[key]() : value; 
}

function translateVue(value) {
  const key = turnStringToTranslationKey(value);
  return message[key] ? message[key]() : value; 
}

globalThis.$tr = translate;
globalThis.$trVue = translateVue;

export {translate, translateVue}