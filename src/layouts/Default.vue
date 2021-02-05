<template>
  <transition name="fade" appear>
  
    <div class="screen">
      <!--<a class="banner" href="http://localhost:8083/blog/winter-robonomics-school/" v-if="BannerLink('/blog/winter-robonomics-school/')">-->
      <a class="banner" href="/blog/winter-robonomics-school/">
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

        <div class="calendar">
          <g-image class="calendar-i-1" alt="Download Free Calendar 2021 Robonomics" src="~/assets/images/banners/calendar-2.png" />
          <g-image class="calendar-i-2" alt="Download Free Calendar 2021 Robonomics" src="~/assets/images/banners/calendar-3.png" />
          <g-image class="calendar-i-3" alt="Download Free Calendar 2021 Robonomics" src="~/assets/images/banners/calendar-4.png" />
          <g-image class="calendar-i-4" alt="Download Free Calendar 2021 Robonomics" src="~/assets/images/banners/calendar-5.png" />
          <g-image class="calendar-i-5" alt="Download Free Calendar 2021 Robonomics" src="~/assets/images/banners/calendar-6.png" />
        </div>

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

  .calendar {
    --i-width: 160px;

    position: absolute;
    bottom: 0;
    left: calc(50% - (var(--i-width)*5)/2 + var(--i-width) * 1.5 );
    text-align: center;
  
    img {
      display: inline-block;
      width: var(--i-width);

      position: relative;
    }

    @for $i from 1 through 5 {
      .calendar-i-#{$i} {
        left: calc(var(--i-width) * 0.5 * #{$i} * (-1));
      }
    }
  }

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


  @media screen and (max-width:840px) {
    .header {
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
  // data: {
  //   currentRoute: window.location.pathname
  // },
  components: {
    Footer: () => import('~/components/Footer.vue')
  },
  methods: {
    // BannerLink(p) {
    //   return window.location.pathname != p;
    // }
  }
}
</script>
