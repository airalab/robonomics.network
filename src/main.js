import '~/assets/style/animation.css'
import '~/assets/style/base.css'
import '~/assets/style/buttons.css'
import '~/assets/style/forms.css'
import '~/assets/style/layouts.css'
import '~/assets/style/reset.css'
import '~/assets/style/typography.css'
import '~/assets/style/utils.css'
import '~/assets/style/variables.css'
import '~/assets/style/fonts.css'

import 'gridsome-remark-katex/node_modules/katex/dist/katex.min.css'

import Vue from 'vue'
import Vuex from 'vuex'
import Default from '~/layouts/Default.vue'
import Contacts from '~/components/Contacts.vue'


// directive for animation in view
import inViewportDirective from 'vue-in-viewport-directive'
Vue.directive('in-viewport', inViewportDirective)

// tracker component
import userTracker from 'vue-client-actions-tracker-component'
import '../node_modules/vue-client-actions-tracker-component/dist/vue-client-actions-tracker-component.css'

export default function (Vue, { router, head, isClient, appOptions }) {
  // head.htmlAttrs = { prefix: 'og: https://ogp.me/ns#', lang: 'en' }

  Vue.use(Vuex);

  if (isClient) {
    const vueSmoothScroll = require('vue2-smooth-scroll').default
    Vue.use(vueSmoothScroll)


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

  appOptions.store = new Vuex.Store({
    state: {
      showHeader: true,
    },
   mutations: {
    TOGGLE_SHOW_HEADER(state, showHeader) {
      state.showHeader = showHeader
    }
   },
  });

  // Set default layout as a global component
  Vue.component('layout', Default)
  Vue.component('Contacts', Contacts)

  if(isClient) {
    Vue.use(userTracker);
  }
  
}