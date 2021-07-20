// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Robonomics Network',
  siteDescription: 'Futuristic, secure, and server-less IoT platform on top of Ethereum && Polkadot. Bringing economy of robots into the 4th industrial revolution.',
  siteUrl: 'https://robonomics.network',

  titleTemplate: '%s',

  plugins: [
    
    {
      // Create posts from markdown files
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Post",
        baseDir: "content/posts",
        route: '/blog/:path',
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
           
          ['@noxify/gridsome-plugin-remark-embed', {'enabledProviders' : ['Youtube']}],
          ['remark-highlight.js'],
        ]
      }
    },

    {
      // Create posts from markdown files
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Land",
        baseDir: "content/land",
        route: '/land/:path',
        template: './src/templates/Land.vue',
        plugins: [
          ['@noxify/gridsome-plugin-remark-embed', {'enabledProviders' : ['Youtube']}],
          ['remark-highlight.js'],
        ]
      }
    },

    {
      // Create posts from markdown files
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Community",
        baseDir: "content/community",
        route: '/community/:path',
        template: './src/templates/Community.vue',
        plugins: [
           ['@noxify/gridsome-plugin-remark-embed', {'enabledProviders' : ['Youtube']}],
          ['remark-highlight.js'],
        ]
      }
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
