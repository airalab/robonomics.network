import '~/assets/style/animation.css'
import '~/assets/style/base.css'
import '~/assets/style/buttons.css'
import '~/assets/style/forms.css'
import '~/assets/style/layouts.css'
import '~/assets/style/reset.css'
import '~/assets/style/typography.css'
import '~/assets/style/utils.css'
import '~/assets/style/variables.css'


import 'katex/dist/katex.min.css';

import Default from '~/layouts/Default.vue'
import Vue from 'vue'
import VueKatex from 'vue-katex';

import Contacts from '~/components/Contacts.vue';



// directive for animation in view
import inViewportDirective from 'vue-in-viewport-directive'
Vue.directive('in-viewport', inViewportDirective)

export default function (Vue, { router, head, isClient }) {
  // head.htmlAttrs = { prefix: 'og: https://ogp.me/ns#', lang: 'en' }

  if (isClient) {
    const vueSmoothScroll = require('vue2-smooth-scroll').default;
    Vue.use(vueSmoothScroll);
    Vue.use(VueKatex);


    //Rewrite route
    // router.beforeEach(async (to, from, next) => {

    //     // do not rewrite build paths
    //     if (process.isServer) {
    //       return next()
    //     }

    //     if (to.path === "/community/") {
    //       if (to.hash === "#token") {
    //         return next({
    //           path: '/xrt/',
    //           replace: true
    //         })
    //       }
    //     } else {
    //       return next()
    //     }
    // })
  }
  // Set default layout as a global component
  Vue.component('layout', Default)
  Vue.component('Contacts', Contacts)
  
}