// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Robonomics Network',
  siteDescription: 'Secure, сost-effective, and futuristic IoT platform for connecting robotics under Polkadot and Ethereum control.',
  siteUrl: 'https://robonomics.network',

  titleTemplate: '%s',

  plugins: [
    {
      use: 'gridsome-plugin-yandex-metrika',
      options: {
	      id: 47762995,
	      options:  {
	        clickmap:true,
	        trackLinks:true,
	        accurateTrackBounce:true,
	        webvisor:true
	      }
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
          // ['remark-highlight.js'],
          // ['remark-autolink-headings', {content: {
          //   type: 'text',
          //   value: '#'
          // }}],
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
        route: '/land/:path',
        template: './src/templates/Land.vue',
        plugins: [
          // ['remark-highlight.js'],
          // ['remark-autolink-headings', {content: {
          //   type: 'text',
          //   value: '#'
          // }}],
          ['@noxify/gridsome-plugin-remark-embed', {'enabledProviders' : ['Youtube', 'Twitter', 'Gist']}]
        ]
      },
      
    },
    
  ],

  transformers: {
    remark: {
      // global remark options
      autolinkHeadings: false
    }
  },

  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
