// Import main css
import '~/assets/style/index.scss'

// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Default from '~/layouts/Default.vue'

import Inview from 'vueinview'

export default function (Vue, { router, head, isClient }) {
  head.htmlAttrs = { prefix: 'og: https://ogp.me/ns#', lang: 'en' }

  if (isClient) {
    if (
      global.location.pathname === "/en/" ||
      global.location.pathname === "/en"
    ) {
      global.location.href = global.location.origin;
    }
  }
  // Set default layout as a global component
  Vue.component('layout', Default)

  Vue.use(Inview)
  // Inview.offset(0)

  head.script.push({
    src:"https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit",
    body:true
  })
}