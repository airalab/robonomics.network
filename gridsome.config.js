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

    {
      // Google Tag Manager
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-WJ83CPC',
        enabled: true,
        debug: false
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
           
           ['@noxify/gridsome-plugin-remark-embed', {'enabledProviders' : ['Youtube']}],
          //  ['gridsome-plugin-remark-prismjs-all', {
          //     noInlineHighlight: false,
          //     showLineNumbers: true,     //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
          //     prompt: {                   //  `require("prismjs/plugins/command-line/prism-command-line.css");`
          //         user: `root`,
          //         host: `localhost`,
          //         global: false,
          //     }
          // }],
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
          // ['gridsome-plugin-remark-prismjs-all', {
          //   noInlineHighlight: false,
          //   showLineNumbers: true,     //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
          //   prompt: {                   //  `require("prismjs/plugins/command-line/prism-command-line.css");`
          //       user: `root`,
          //       host: `localhost`,
          //       global: false,
          //   }
          // }],
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
          //  ['gridsome-plugin-remark-prismjs-all', {
          //    noInlineHighlight: false,
          //    showLineNumbers: true,     //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
          //    prompt: {                   //  `require("prismjs/plugins/command-line/prism-command-line.css");`
          //        user: `root`,
          //        host: `localhost`,
          //        global: false,
          //    }
          // }],
          ['remark-highlight.js'],
        ]
      }
    },
    
  ],

  // transformers: {
  //   remark: {
  //     // global remark options
  //     autolinkHeadings: false,
  //     plugins: [
  //       ['remark-highlight.js'],
  //       ['@noxify/gridsome-plugin-remark-embed', {'enabledProviders' : ['Youtube']}]
  //     ]
  //   }
  // },

  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
