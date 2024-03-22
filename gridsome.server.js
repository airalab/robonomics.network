// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require('fs');
const translateBlogPost = require("./functions/translations");
const proxy = require("http-proxy-middleware")

let allPossiblePaths = [];

module.exports = function (api) {  

  // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  api.loadSource(async store => {
    store.addMetadata('home', 'https://robonomics.network')
    store.addMetadata('discord', 'https://discord.gg/JpaN2XAmqY')
    store.addMetadata('twitter', 'https://twitter.com/AIRA_Robonomics')

  })

  api.configureServer(app => {
    app.use("/api", proxy({
        target: 'https://api.unisender.com/ru/',
        changeOrigin: true 
    }))
  })

  api.loadSource(async (actions) => {

      const collection = actions.getCollection('Post');

      collection.data().filter((e) => {
        if(e.locale === 'en')
        allPossiblePaths.push({path: e.path, name: e.fileInfo.name, content: e.content, title: e.title, description: e.description, cover_image: e.cover_image, abstract: e.abstract, author: e.author, tags: e.tags, related: e.related, published: e.published, id: e.id})
      })
    
  })

  // Use the Pages API here: https://gridsome.org/docs/pages-api/
  // api.createManagedPages( ({ createPage }) => {

  //   // all locales
  //   const locales =  ["ru", "zh", "es", "ko", "de", "ja", "pt", "az", "it", "tr", "fr", "uk", "ar", "nl"];

  //   createPage(
  //     {
  //         path: '/en/',
  //         component: 'src/pages/redirect.vue',
  //         context: {
  //           redirect: '/'
  //         }
  //     }
  //   )

  //   createPage(
  //     {
  //         path: `/white-paper-2022`,
  //         component: 'src/pages/redirect.vue',
  //         context: {
  //           redirect: '/white-paper'
  //         }
  //     }
  //   )

  //   createPage(
  //     {
  //       path: `/shop`,
  //       component: 'src/pages/redirect.vue',
  //       context: {
  //         redirect: '/merch'
  //       }
  //     }
  //   )

  //   createPage({
  //     path: `/robonomics_white_paper_en.pdf/`,
  //     component: 'src/pages/redirect.vue',
  //     context: {
  //       redirect: '/white-paper'
  //     }
  //   })

  //   locales.forEach(l => {
  //     createPage(
  //       {
  //           path: `/${l}/white-paper-2022`,
  //           component: 'src/pages/redirect.vue',
  //           context: {
  //             redirect: '/white-paper'
  //           }
  //       }
  //     )

  //     createPage({
  //       path: `/${l}/shop`,
  //       component: 'src/pages/redirect.vue',
  //       context: {
  //         redirect: '/merch'
  //       }
  //     })
  //   })
  
    
  //     allPossiblePaths.forEach(node => {

  //       const path = node.path.slice(0, -1).split("/").pop();

  //       // for blog posts translations
  //       // translateBlogPost(fs, path)
  
  //       // pages for not existing translations
  //       locales.forEach(locale => {
  //         if (fs.existsSync(`content/posts/${locale}/${node.name}.md`)) {
  //           console.log('exists');
  //         } else {
  //           createPage({
  //             path: `/blog/${locale}/${path}`,
  //             component: './src/templates/BlogTranslations.vue',
  //           })
  //         }
  //       });

        
  //     })
  // })
  
}
