// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require('fs');

let allPossiblePaths = [];

// all blog locales for translation
let arBlogFile = fs.readFileSync('./translations/blog/Arabic.json');
let arBlog = JSON.parse(arBlogFile);

let zhBlogFile = fs.readFileSync('./translations/blog/Chinese.json');
let zhBlog = JSON.parse(zhBlogFile);

let ruBlogFile = fs.readFileSync('./translations/blog/Russian.json');
let ruBlog = JSON.parse(ruBlogFile);

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
        allPossiblePaths.push({path: e.path, name: e.fileInfo.name, content: e.content, title: e.title, description: e.description, cover_image: e.cover_image, abstract: e.abstract, author: e.author, tags: e.tags, related: e.related, published: e.published, id: e.id})
      })
    
  })

  // Use the Pages API here: https://gridsome.org/docs/pages-api/
  api.createManagedPages( ({ createPage }) => {

    // all locales
    const locales =  ["ru", "zh", "es", "ko", "de", "ja", "pt", "az", "it", "tr", "fr", "uk", "ar"];

    createPage(
      {
          path: '/en/',
          component: 'src/pages/redirect.vue',
          context: {
            redirect: '/'
          }
      }
    )

    createPage(
      {
          path: `/white-paper-2022`,
          component: 'src/pages/redirect.vue',
          context: {
            redirect: '/white-paper'
          }
      }
    )

    locales.forEach(l => {
      createPage(
        {
            path: `/${l}/white-paper-2022`,
            component: 'src/pages/redirect.vue',
            context: {
              redirect: '/white-paper'
            }
        }
      )
    })
  
    
      allPossiblePaths.forEach(node => {
        // keys for all locales for translation
        // const allAr = Object.keys(arBlog);
        // const allZh = Object.keys(zhBlog);
        // const allRu = Object.keys(ruBlog);

        const path = node.path.slice(0, -1).split("/").pop();
  
        // pages for not existing translations
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

        // code below translates blog post (if translation exists) for specific locale (e.g arabic)
        // change path and object for another locale to crate translation
        
        // let data = fs.readFileSync(`content/posts/ar/${path}.md`, 'utf-8');
        // this part replaces english text with the needed one 
        // allZh.forEach(el => {
        //   if(data.includes(el)) {
        //     data = data.replace(el, zhBlog[el]);
        //   }
        // });
        // and this part rewrites file and adding translated text instead of default one
        // fs.writeFile(`content/posts/zh/${path}.md`, data, 'utf8', function (err) {
        //   if (err) return console.log(err);
        // });

        // to automatically cope files to all locales
        // locales.forEach(l => {
        //   fs.copyFile(`content/posts/${path}.md`, `content/posts/${l}/${path}.md`, (err) => {
        //     if (err) throw err;
        //     console.log('file ws copied');
        //   });
        // })
      })
  })
  
}
