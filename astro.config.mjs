// @ts-check
import { defineConfig } from 'astro/config';
import AutoImport from 'astro-auto-import';
import mdx from '@astrojs/mdx';
import vue from '@astrojs/vue';
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import paraglide from '@inlang/paraglide-astro';
import matomo from 'astro-matomo';
import sitemap from "@astrojs/sitemap";

const defaultLocale = "en";
const locales = {
  ar: "ar", 
  de: "de",
  el: "el",
  en: "en",
  es: "es",
  fr: "fr",
  it: "it",
  ja: "ja",
  ko: "ko",
  nl: "nl",
  pt: "pt",
  ru: "ru",
  uk: "uk",
  zh: "zh"
};

export default defineConfig({
  markdown: {
    syntaxHighlight: 'prism',
    gfm: true,
  },
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [AutoImport({
    imports: [
      '/src/components/RbButton.astro',
      '/src/components/RbImage.astro',
      '/src/components/RbCode.astro',
      '/src/components/RbGridWrapper.astro',
      '/src/components/RbGridElement.astro',
      '/src/components/TextCard.astro',
      '/src/components/post/PostCard.astro',
      '/src/components/post/PostExpiredInfo.astro',
      {
        // import { Tweet, YouTube } from 'astro-embed';
        'astro-embed': ['Tweet', 'YouTube']
      }
    ],
  }),
    mdx(), 
    vue({ devtools: true }),
    i18n({
      locales,
      defaultLocale,
    }),
    paraglide({
      project: './project.inlang',
      outdir: './src/paraglide', //where your files should be
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
    }),
    matomo({
      enabled: import.meta.env.PROD, // Only load in production
      // enabled: true, // Only load in production
      host: 'https://matomo.robonomics.network/',
      siteId: 3,
      disableCookies: true,
      viewTransition: {
        contentElement: "body"
      }
    }),
  ]
});