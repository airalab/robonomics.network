<template>
  <transition name="fade" appear>
  
    <div class="screen">
      <a class="banner" href="https://robonomics.network/blog/winter-robonomics-school/">
        <g-image src="~/assets/images/banners/wschool-video.png" class="hovercontent"/>
        <span>Robonomics winter school 10 - 24 February 2021</span>
        <g-image src="~/assets/images/banners/wschool-video.png" class="hovercontent"/>
      </a>

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

.screen {
  .banner {
    display: block;
    // position: sticky;
    // top: 0;
    // z-index: 100;

    padding: calc(var(--space) * 0.3) var(--screen-padding);
    background: #590FB7;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-decoration: none;
    text-align: center;
    font-weight: 500;

    .hovercontent {
      visibility: hidden;
      opacity: 0;
      width: 0;
    }

    & > * {
      display: inline-block;
      vertical-align: middle;
      vertical-align: -moz-middle-with-baseline;
      vertical-align: -webkit-baseline-middle;
    }

    & > *:not(:last-child) {
      margin-right: calc(var(--space) * 0.5);
    }

    img {
      max-height: var(--space);
    }

    &:hover {
      color: #fff;
      background: #6699FF;
      padding-top: calc(var(--space) * 0.6);
      padding-bottom: calc(var(--space) * 0.6);

      .hovercontent {
        animation: FadeIn 0.4s ease-out forwards;
        width: auto;
      }
    }
  }
}

</style>


<script>

import Vue from 'vue'

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
