require('~/assets/style/base.css')
require('~/assets/style/animation.css')
require('~/assets/style/buttons.css')
require('~/assets/style/forms.css')
require('~/assets/style/layouts.css')
require('~/assets/style/reset.css')
require('~/assets/style/typography.css')
require('~/assets/style/utils.css')
require('~/assets/style/variables.css')

import Default from '~/layouts/Default.vue'
import Vue from 'vue'

// directive for animation in view
import inViewportDirective from 'vue-in-viewport-directive'
Vue.directive('in-viewport', inViewportDirective)

export default function (Vue, { router, head, isClient }) {
  // head.htmlAttrs = { prefix: 'og: https://ogp.me/ns#', lang: 'en' }

  if (isClient) {
    const vueSmoothScroll = require('vue2-smooth-scroll').default;
    Vue.use(vueSmoothScroll);
  }
  // Set default layout as a global component
  Vue.component('layout', Default)
}