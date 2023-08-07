import { initI18n } from 'i18n-pro'
import arDefault from './Arabic.json';
import ruDefault from './Russian.json';
import zhDefault from './Chinese.json';
import enDefault from './English.json';

// for blog
import arBlog from './blog/Arabic.json';
import ruBlog from './blog/Russian.json';
import zhBlog from './blog/Chinese.json';
import enBlog from './blog/English.json';

const en = Object.assign(enBlog, enDefault);
const ar = Object.assign(arBlog, arDefault);
const ru = Object.assign(ruBlog, ruDefault);
const zh = Object.assign(zhBlog, zhDefault);


const {
  t,
  setI18n,
  withI18n,
  
} = initI18n({
  namespace: 'networkTranslations',
  langs: {
    en,
    ar,
    ru,
    zh,
  },
  locale: typeof window !== "undefined" ? (window.localStorage.getItem('locale') || 'en') : 'en'
})



export {
  t,
  setI18n,
  withI18n,
}