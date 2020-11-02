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

  templates: {
    Post: "/blog/:title",
    Tag: "/blog/tag/:id",
  },


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
    {
      // Create posts from markdown files
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "content/posts/*.md",
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: ["@gridsome/remark-prismjs"],
    },
  },

  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
