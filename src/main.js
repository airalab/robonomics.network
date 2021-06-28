import '~/assets/style/index.scss'
import Default from '~/layouts/Default.vue'

import Vue from 'vue'

// directive for animation in view
import inViewportDirective from 'vue-in-viewport-directive'
Vue.directive('in-viewport', inViewportDirective)

// for Home page now
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)



export default function (Vue, { router, head, isClient }) {
  head.htmlAttrs = { prefix: 'og: https://ogp.me/ns#', lang: 'en' }

  if (isClient) {
    if (
      global.location.pathname === "/en/" ||
      global.location.pathname === "/en"
    ) {
      global.location.href = global.location.origin;
    }

    const vueSmoothScroll = require('vue2-smooth-scroll').default;
    Vue.use(vueSmoothScroll);
  }
  // Set default layout as a global component
  Vue.component('layout', Default)

  // head.script.push({
  //   src: "https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit",
  //   body: true
  // })
}