import '~/assets/style/animation.css'
import '~/assets/style/base.css'
import '~/assets/style/forms.css'
import '~/assets/style/layouts.css'
import '~/assets/style/reset.css'
import '~/assets/style/typography.css'
import '~/assets/style/utils.css'
import '~/assets/style/variables.css'
import '~/assets/style/fonts.css'

import Vue from 'vue'
import Vuex from 'vuex'


import Default from '~/layouts/Default.vue'

// components
import Contacts from '~/components/Contacts.vue'
import rbnetButton from '~/components/rbnetButton.vue'
import rbButton from '~/components/rbButton.vue'
import Youtube from '~/components/Youtube.vue'


// directive for animation in view
import inViewportDirective from 'vue-in-viewport-directive'
Vue.directive('in-viewport', inViewportDirective)

// for translations
import { t, setI18n, withI18n } from '../translations/i18n.js'

export default function (Vue, { router, head, isClient, appOptions }) {
  // head.htmlAttrs = { prefix: 'og: https://ogp.me/ns#', lang: 'en' }

  Vue.use(Vuex);

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
  Vue.component('rbnet-button', rbnetButton)
  Vue.component('rb-button', rbButton)
  Vue.component('Youtube', Youtube)

  // for translations
  Vue.prototype.$t = t; 
  Vue.prototype.$setI18n = setI18n;
  Vue.prototype.$withI18n = withI18n;


  if(isClient) {
    const vueSmoothScroll = require('vue2-smooth-scroll').default
    Vue.use(vueSmoothScroll)
  }
  
}