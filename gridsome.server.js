// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })

  // api.createManagedPages(async ({ graphql, createPage}) => {
  //   // Use the Pages API here: https://gridsome.org/docs/pages-api
  //   const {data} = await graphql(`{
  //     allPost {
  //       edges {
  //         previous {
  //           id
  //         }
  //         next {
  //           id
  //         }
  //         node {
  //           id
  //           path
  //         }
  //       }
  //     }
  //   }
  //   `)

  //   data.allPost.edges.forEach(function (element) {
  //     createPage({
  //       path: element.node.path,
  //       component: './src/templates/Post.vue',
  //       context: {
  //         previousElement: (element.previous) ? element.previous.id : '##empty##',
  //         nextElement: (element.next) ? element.next.id : '##empty##',
  //         id: element.node.id
  //       }
  //     })
  //   })
  // })
}
