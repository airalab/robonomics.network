// Import main css
import '~/assets/style/index.scss'

// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import layoutIndex from '~/layouts/Index.vue'
import layoutInside from '~/layouts/Inside.vue'

export default function (Vue, { router, head, isClient }) {
  if (
    window.location.pathname === "/en/" ||
    window.location.pathname === "/en"
  ) {
    window.location.href = window.location.origin;
  }
  // Set default layout as a global component
  Vue.component('layout-index', layoutIndex)
  Vue.component('layout-inside', layoutInside)
}
