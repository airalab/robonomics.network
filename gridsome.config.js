// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Robonomics Framework',
  siteDescription: 'Robonomics Framework is a set of open-source packages for Robotics, Smart Cities and Industry 4.0 developers.',

  plugins: [],

  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      //  .options({
     //    svgo: {
     //      plugins: [
     //        { removeDimensions: true },
     //      ],
     //    },
      // });
  }
}
