// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const yaml = require('js-yaml')
const fs   = require('fs')

module.exports = {
  siteName: 'Robonomics Network',
  siteDescription: 'Futuristic, secure, and server-less IoT platform on top of Ethereum && Polkadot. Bringing economy of robots into the 4th industrial revolution.',
  siteUrl: 'https://robonomics.network',

  titleTemplate: '%s',

  prefetch: { mask: '^$', },

  plugins: [
    
    {
      // Create posts from markdown files
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Post",
        baseDir: "content/posts",
        // route: '/blog/:path',
        pathPrefix: '/blog',
        template: './src/templates/Post.vue',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: "Tag",
            create: true,
            route: '/blog/tag/:id',
            template: './src/templates/Tag.vue',
          },
        },
        plugins: [
          ['@noxify/gridsome-plugin-remark-embed', {'enabledProviders' : ['Youtube']}]
        ]
      }
    },

    {
      use: "gridsome-plugin-translateit",
      options: {
        locales: ["ar","de","el","en","es","fr","it","ja","ko","nl","pt","ru","uk","zh"],
        defaultLocale: "en",
        translations: [],
        collections: ['blog', 'jobs'],
        routes: yaml.load(fs.readFileSync('./src/data/locales/routes.yaml', 'utf8')),
        exclude: ["/blog/tag/"]
      }
    },

    {
      use: '@gridsome/plugin-sitemap'
      // options: {
      //   include: ['/blog', '/blog/**']
      //   // exclude: ['/exclude-me'],
      //   // config: {
      //   //   '/blog/*': {
      //   //     changefreq: 'monthly',
      //   //     priority: 0.5,
      //   //     lastmod: '2021-12-10',
      //   //   }
      //   // }
      // }
    },

    {
      use: "gridsome-plugin-google-sheets-post",
    },

    {
      use: 'gridsome-plugin-matomo',
      options: {
        host: 'https://matomo.robonomics.network/',
        siteId: 3,
      }
    }
  ],


  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')

    config.resolve.alias.set('@imagesMarkdown', '/content/posts/images')
  }
};
