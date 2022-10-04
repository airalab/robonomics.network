// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require('fs');

let allPossiblePaths = [];

module.exports = function (api) {  

  // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  api.loadSource(async store => {
    store.addMetadata('home', 'https://robonomics.network')
    store.addMetadata('discord', 'https://discord.gg/JpaN2XAmqY')
    store.addMetadata('twitter', 'https://twitter.com/AIRA_Robonomics')

  })

  api.loadSource(async (actions) => {

      const collection = actions.getCollection('Post');

      collection.data().filter((e) => {
        if(e.locale === 'en')
        allPossiblePaths.push({path: e.path, name: e.fileInfo.name})
      })
    
  })

  // Use the Pages API here: https://gridsome.org/docs/pages-api/
  api.createManagedPages( ({ createPage }) => {
    createPage(
      {
          path: '/en/',
          component: 'src/pages/redirect.vue',
          context: {
            redirect: '/'
          }
      }
    )
    
      allPossiblePaths.forEach(node => {
        // all locales
        const locales = ["ru", "zh", "es", "ko", "de", "ja", "pt", "az", "it", "tr", "fr"];
        const path = node.path.slice(0, -1).split("/").pop();
  
        locales.forEach(locale => {
          if (fs.existsSync(`content/posts/${locale}/${node.name}.md`)) {
            console.log('exists');
          } else {
            createPage({
              path: `/blog/${locale}/${path}`,
              component: './src/templates/BlogTranslations.vue',
            })
          }
        })
  
      })
  })
  
}
