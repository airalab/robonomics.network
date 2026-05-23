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

const cyberpunksShop = "https://cyberpunks.shop/";
const devicePaths = ["altruist/", "smart-home-server/", "hikikomori/", "energy-monitor/", "risc-v/"];
const localeCodes = Object.keys(locales).filter((c) => c !== defaultLocale).join("|");
const devicesNoSlashRe = localeCodes
  ? new RegExp(`^/(${localeCodes})/devices$|^/devices$`)
  : /^\/devices$/;

/** @type {Record<string, string>} */
const deviceRedirects = {};
for (const code of Object.keys(locales)) {
  const prefix = code === defaultLocale ? "" : `/${code}`;
  deviceRedirects[`${prefix}/devices`] = cyberpunksShop;
  for (const slug of devicePaths) {
    deviceRedirects[`${prefix}/devices/${slug}`] = cyberpunksShop;
  }
}

/** Dev: trailingSlash middleware 404s /devices before redirects; run before it in the stack. */
/** @returns {import('vite').Plugin} */
function devicesNoSlashRedirectPlugin() {
  return {
    name: "devices-no-slash-redirect",
    enforce: "post",
    configureServer(server) {
      return () => {
        server.middlewares.stack.unshift({
          route: "",
          handle(req, res, next) {
            const pathname = (req.url ?? "").split("?")[0];
            if (devicesNoSlashRe.test(pathname)) {
              res.writeHead(301, { Location: cyberpunksShop });
              res.end();
              return;
            }
            next();
          },
        });
      };
    },
  };
}

export default defineConfig({
  redirects: deviceRedirects,
  vite: {
    plugins: [devicesNoSlashRedirectPlugin()],
  },
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
    vue({ devtools: true }),
    i18n({
      locales,
      defaultLocale,
    }),
    mdx(),
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