const fs = require('fs');
const translateBlogPost = require('./functions/translations');

let allPossiblePaths = [];

module.exports = function (api) {
  // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  api.loadSource(async (store) => {
    store.addMetadata('home', 'https://robonomics.network');
    store.addMetadata('discord', 'https://discord.gg/JpaN2XAmqY');
    store.addMetadata('twitter', 'https://twitter.com/AIRA_Robonomics');
  });

  api.loadSource(async (actions) => {
    const collection = actions.getCollection('Post');

    // Detect updated files from the UPDATED_FILES environment variable
    const updatedFiles = process.env.UPDATED_FILES
      ? process.env.UPDATED_FILES.split('\n')
      : null;

    collection.data().filter((e) => {
      if (e.locale === 'en') {
        // Filter posts if incremental build is enabled
        if (
          !updatedFiles || // If UPDATED_FILES is null, include all posts
          updatedFiles.some((filePath) =>
            filePath.endsWith(`${e.fileInfo.name}.md`)
          )
        ) {
          allPossiblePaths.push({
            path: e.path,
            name: e.fileInfo.name,
            content: e.content,
            title: e.title,
            description: e.description,
            cover_image: e.cover_image,
            abstract: e.abstract,
            author: e.author,
            tags: e.tags,
            related: e.related,
            published: e.published,
            id: e.id,
          });
        }
      }
    });
  });

  // Use the Pages API here: https://gridsome.org/docs/pages-api/
  api.createManagedPages(({ createPage }) => {
    // Define locales
    const locales = [
      'ar',
      'de',
      'el',
      'en',
      'es',
      'fr',
      'it',
      'ja',
      'ko',
      'nl',
      'pt',
      'ru',
      'uk',
      'zh',
    ];

    // Static redirects
    createPage({
      path: '/en/',
      component: 'src/pages/redirect.vue',
      context: {
        redirect: '/',
      },
    });

    createPage({
      path: '/white-paper-2022',
      component: 'src/pages/redirect.vue',
      context: {
        redirect: '/white-paper',
      },
    });

    createPage({
      path: `/shop`,
      component: 'src/pages/redirect.vue',
      context: {
        redirect: '/merch',
      },
    });

    createPage({
      path: `/robonomics_white_paper_en.pdf/`,
      component: 'src/pages/redirect.vue',
      context: {
        redirect: '/white-paper',
      },
    });

    // Localized redirects
    locales.forEach((l) => {
      createPage({
        path: `/${l}/white-paper-2022`,
        component: 'src/pages/redirect.vue',
        context: {
          redirect: '/white-paper',
        },
      });

      createPage({
        path: `/${l}/shop`,
        component: 'src/pages/redirect.vue',
        context: {
          redirect: '/merch',
        },
      });
    });

    // Blog posts and translations
    allPossiblePaths.forEach((node) => {
      const path = node.path.slice(0, -1).split('/').pop();

      // For blog post translations
      // translateBlogPost(fs, path);

      // Create pages for missing translations
      locales.forEach((locale) => {
        if (fs.existsSync(`content/posts/${locale}/${node.name}.md`)) {
          console.log('exists');
        } else {
          createPage({
            path: `/blog/${locale}/${node.name}/`,
            component: 'src/pages/redirect.vue',
            context: {
              redirect: `/blog/${node.name.toLowerCase()}/`,
            },
          });
        }
      });
    });
  });
};
