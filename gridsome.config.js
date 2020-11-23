// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Robonomics Network',
  siteDescription: 'Secure, сost-effective, and futuristic IoT platform for connecting robotics under Polkadot and Ethereum control.',
  siteUrl: 'https://robonomics.network',

  titleTemplate: '%s',
  // titleTemplate: (title) => title ? `%s | ${title}` : '%s',

  // templates: {
  //   Post: "/blog/:title",
  //   Land: "/land/:title",
  //   Tag: "/blog/tag/:id",
  // },


  plugins: [
    {
      use: 'gridsome-plugin-yandex-metrika',
      options: {
        id: 47762995
      }
    },
    // {
    //   use: "@gridsome/plugin-google-analytics",
    //   options: {
    //     id: "UA-169310127-1",
    //   },
    // }

    {
      // Google Tag Manager
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-WJ83CPC',
        enabled: true,
        debug: true
      }
    },
    // {
    //   // Create posts from markdown files
    //   use: "@gridsome/source-filesystem",
    //   options: {
    //     typeName: "Post",
    //     path: "content/posts/*.md",
    //     refs: {
    //       // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
    //       tags: {
    //         typeName: "Tag",
    //         create: true,
    //       },
    //     },
    //   },
    // },

    // {
    //   // Create posts from markdown files
    //   use: "@gridsome/source-filesystem",
    //   options: {
    //     typeName: "Land",
    //     path: "content/land/*.md"
    //   },
    // },

    {
      // Create posts from markdown files
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Post",
        baseDir: "content/posts",
        route: '/blog/:title',
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
          // ['remark-highlight.js'],
          ['@noxify/gridsome-plugin-remark-embed', {'enabledProviders' : ['Youtube', 'Twitter', 'Gist']}]
        ]
      }
    },

    {
      // Create posts from markdown files
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Land",
        baseDir: "content/land",
        route: '/land/:title',
        template: './src/templates/Land.vue',
        plugins: [
          // ['remark-highlight.js'],
          ['@noxify/gridsome-plugin-remark-embed', {'enabledProviders' : ['Youtube', 'Twitter', 'Gist']}]
        ]
      },
      
    },
  ],

  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
