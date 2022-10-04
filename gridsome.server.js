// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {

  // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  api.loadSource(async store => {
    store.addMetadata('home', 'https://robonomics.network')
    store.addMetadata('discord', 'https://discord.gg/JpaN2XAmqY')
    store.addMetadata('twitter', 'https://twitter.com/AIRA_Robonomics')
  })


  // all locales
  const locales = ["en", "ru", "zh", "es", "ko", "de", "ja", "pt", "az", "it", "tr", "fr"]


  // Use the Pages API here: https://gridsome.org/docs/pages-api/
  api.createManagedPages(({ createPage }) => {
    createPage(
      {
          path: '/en/',
          component: 'src/pages/redirect.vue',
          context: {
            redirect: '/'
          }
      }
    ),

    locales.forEach(locale => {
      if( locale != 'en') {
        createPage({
          path: `/${locale}/blog-translations/:title`,
          component: './src/templates/BlogTranslations.vue'
        })
      } else {
        createPage({
          path: `/blog-translations/:title`,
          component: './src/templates/BlogTranslations.vue'
        })
      }
    })
  })
}
