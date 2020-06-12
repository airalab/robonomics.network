// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Robonomics Network',
  siteDescription: 'Robonomics Network is a set of open-source packages for Robotics, Smart Cities and Industry 4.0 developers.',
  siteUrl: 'https://robonomics.network',

  titleTemplate: '%s',
  // titleTemplate: (title) => title ? `%s | ${title}` : '%s',

  plugins: [
    {
      use: 'gridsome-plugin-yandex-metrika',
      options: {
        id: 47762995
      }
    }
  ],

  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
