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

import Default from '~/layouts/Default.vue'

// components
// import Contacts from '~/components/footer/Contacts.vue'
import rbButton from '~/components/rbButton.vue'
import rbImage from '~/components/rbImage.vue'
import rbCode from '~/components/rbCode.vue'
import rbGrid from '~/components/rbGridWrapper.vue'
import rbGridElement from '~/components/rbGridElement.vue'
import Card from '~/components/TextCard.vue'
import Youtube from '~/components/Youtube.vue'

// Post
import ExpiredInfo from '~/components/post/PostExpiredInfo.vue'


// directive for animation in view
import inViewportDirective from 'vue-in-viewport-directive'
Vue.directive('in-viewport', inViewportDirective)

// for translations
import { t, setI18n, withI18n } from '../translations/i18n.js'

export default function (Vue, { isClient }) {

  // Set default layout as a global component
  Vue.component('layout', Default)
  // Vue.component('Contacts', Contacts)
  Vue.component('rb-button', rbButton)
  Vue.component('rb-image', rbImage)
  Vue.component('rb-code', rbCode)
  Vue.component('rb-grid', rbGrid)
  Vue.component('rb-grid-element', rbGridElement)
  Vue.component('Card', Card)
  Vue.component('Youtube', Youtube)
  Vue.component('ExpiredInfo',  ExpiredInfo)


  // for translations
  Vue.prototype.$t = t; 
  Vue.prototype.$setI18n = setI18n;
  Vue.prototype.$withI18n = withI18n;


  if(isClient) {
    const vueSmoothScroll = require('vue2-smooth-scroll').default
    Vue.use(vueSmoothScroll)
  }
  
}