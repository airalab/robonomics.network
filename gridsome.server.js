// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require('fs');

module.exports = function (api) {
  

  // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  api.loadSource(async store => {
    store.addMetadata('home', 'https://robonomics.network')
    store.addMetadata('discord', 'https://discord.gg/JpaN2XAmqY')
    store.addMetadata('twitter', 'https://twitter.com/AIRA_Robonomics')
  })

  // Use the Pages API here: https://gridsome.org/docs/pages-api/
  api.createManagedPages(async ({ createPage, graphql }) => {
    createPage(
      {
          path: '/en/',
          component: 'src/pages/redirect.vue',
          context: {
            redirect: '/'
          }
      }
    )

    const { data } = await graphql(`{
      allPost {
        edges {
          node {
            id
            locale
            path
            fileInfo {
              name
            }
          }
        }
      }
    }`)

    const allPossiblePaths =  data.allPost.edges.filter((e) => {

      return e.node.locale === 'en'
    })



    allPossiblePaths.forEach(({ node }) => {
      // all locales
      const locales = ["ru", "zh", "es", "ko", "de", "ja", "pt", "az", "it", "tr", "fr"];
      const path = node.path.slice(0, -1).split("/").pop();

      locales.forEach(locale => {
        if (fs.existsSync(`content/posts/${locale}/${node.fileInfo.name}.md`)) {
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
