<template>
  <transition name="fade" appear>
  
    <div class="screen">
      <header class="header">
        <div class="header-logo">
          <g-link to="/"><g-image :alt="$static.metadata.siteName + ' logotype'" src="~/assets/images/robonomics-logo.svg"/></g-link>
        </div>
        <nav class="header-nav sidetext">
            <g-link to="/community#intouch">Community</g-link>
            <g-link to="/timeline">Timeline</g-link>
            <g-link to="/blog">Blog</g-link>
        </nav>
      </header>

      <div class="screen-content">
        <slot/>
        <ClientOnly> <Footer/> </ClientOnly>
      </div>
    </div>
  
  </transition>
</template>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>


<style lang="scss">

  .header {
    --logo-padding: 0.6rem;

    position: fixed;
    top: var(--logo-padding);
    left: var(--logo-padding);
    right: var(--screen-padding);
    z-index:1000;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: var(--body-bg);

    &-logo {
      width: calc( var(--screen-padding) - var(--logo-padding));
      background-color: var(--body-bg);

      a, img { display: block; }
    }

    &-nav{
  
      a:not(:last-child) {
        margin-right: var(--space);
      }

      a {
        &.active--exact { opacity: .5; }
      }
    }
  }

  // .backdrop-light {
  //   background-color: rgba(255,255,255,0.3);
  //   -webkit-backdrop-filter: blur(10px);
  //   backdrop-filter: blur(10px);
  // }

  @media screen and (max-width:840px) {
    .header {
      // background-color: rgba(255,255,255,0.3);
      // -webkit-backdrop-filter: blur(10px);
      // backdrop-filter: blur(10px);

      align-items: center;
    }
  }

  .sidetext {
    font-family: var(--font-family-code);
    font-size: calc(var(--base-font-size) * 0.8);
    text-transform: uppercase;
  }

  .sidetext a:not(.button) {
    color: var(--text-color);
    text-decoration: none;
  }

</style>


<script>

import Vue from 'vue'

import Inview from 'vueinview'
Vue.use(Inview)
// Inview.offset(0)

import inViewportDirective from 'vue-in-viewport-directive'
Vue.directive('in-viewport', inViewportDirective)

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

export default {
  components: {
    Footer: () => import('~/components/Footer.vue')
  }
}
</script>
