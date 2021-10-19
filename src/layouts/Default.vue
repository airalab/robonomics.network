<template>
  <transition name="fade" appear>
   
  
    <div class="screen">
    <!-- <div class="screen" :class="BannerLink('/kusama-slot')?'banner':''"> -->

      <header class="header">
        <g-link class="banner-top" to="https://dapp.robonomics.network/#/staking/">
          <div class="layout__content">
            Stake XRT 🤖
          </div>
        </g-link>

        <div class="header-content">
          <div class="header-logo">
            <g-link to="/"><g-image :alt="$static.metadata.siteName + ' logotype'" src="~/assets/images/robonomics-logo.svg"/></g-link>
          </div>

          <div class="header-side">

            <nav class="header-nav sidetext">
                <g-link to="/intro">{{$ts('Intro')}}</g-link>
                <g-link to="/vision">Vision</g-link>
                <!-- <g-link to="/kusama-slot">{{$ts('Crowdloan')}}</g-link> -->
                <g-link to="/community/#docs">{{$ts('Docs')}}</g-link>
                <g-link to="/blog">{{$ts('Blog')}}</g-link>
            </nav>

            <languageSwitcher/>

          </div>

          
        </div>
      </header>

      <div class="screen-content">
        
        <slot/>
        <ClientOnly> <Footer/> </ClientOnly>
      </div>

      <div class="sidetext sidetext-left">
        <g-link to="/timeline">Founded in 2015</g-link> &nbsp; &bull; &nbsp; 
        <g-link :to="this.releaseLink">Latest release {{ this.releaseTime }}</g-link>
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

  .banner-top {
    height: var(--space-bannertop);
    display: flex;
    justify-content: center;
    align-items: center;

    padding-right: var(--screen-padding-right);
    padding-left: var(--screen-padding-right);

    text-decoration: none;
    overflow: hidden;

    background-color: var(--color-purple-mid);
    color: var(--color-light) !important;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;

    text-shadow: 2px 2px 0px var(--color-blue);
    font-family: var(--font-family-code);

    // background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">\
		// 	<text x="20" y="20" font-size="10" style="fill:#ccc">🤖</text>\
		// 	</svg>');
		// 	background-size: 30px 30px;

    &:hover {
      color: #fff !important;
    }
  }

  .header {
    --logo-padding: 0.6rem;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index:1000;

    background-color: var(--body-bg);

    &-logo {
      width: calc( var(--screen-padding-left) - calc(var(--logo-padding)*1.5));
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

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: var(--screen-padding-top);
    padding-left: var(--logo-padding);
    padding-right: var(--screen-padding-right);
  }


  // @media screen and (max-width:840px) {
  //   .header {
  //     align-items: center;
  //   }
  // }

  .sidetext {
    font-family: var(--font-family-code);
    font-size: calc(var(--base-font-size) * 0.8);
    text-transform: uppercase;

    @media screen and (max-width: 350px) {
      font-size: 70%;
    }
  }

  .sidetext a:not(.button) {
    color: var(--text-color);
    text-decoration: none;
  }

  .sidetext-left {
    position:  fixed;
    left: calc(var(--screen-padding-left)/4);
    bottom: calc(var(--screen-padding-bottom)/1.8);

    transform: rotate(-90deg);
    transform-origin: 0 0;
    white-space: nowrap;
    
    &, a {
      &.active--exact { opacity: .5; }
    }
  }


.screen {
	position: relative;
  background-color: var(--color-gray-light);
  border-style: solid;
  border-color: #fff;
  border-width: 0 var(--screen-padding-right) 0 var(--screen-padding-left);
  padding-top: var(--screen-padding-top);
  padding-bottom: var(--screen-padding-bottom);
  height: 100vh;

	&::-webkit-scrollbar { display: none; }
	scrollbar-width: none;

	// background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">\
	// 		<text x="30" y="30" font-size="12" style="fill:#ccc">•</text>\
	// 		</svg>');
	// 		background-size: 60px 60px;

  &:after {
    content: "";
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: var(--screen-padding-bottom);
    background: #fff;
    z-index: 1000;
  }
}

.screen-content {
  background-color: var(--color-gray-light);
  // padding-bottom: var(--space);
}

// for pages with banner
// .screen.banner {
//  padding-top: calc(var(--screen-padding-top) + var(--space-bannertop));
// }

.header-side {
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > * {
    &:not(:last-child) {
      margin-right: var(--space);
    }
  }
}

</style>


<script>

import axios from 'axios'
import moment from 'moment'

export default {

  components: {
    Footer: () => import('~/components/Footer.vue'),
    languageSwitcher: () => import('~/components/languageSwitcher.vue'),
  },
  data () {
    return {
      release: null,
      update: null,
      releaseTime: null,
      releaseLink: null
    }
  },
  methods: {
    BannerLink(p) {
      let current = this.$router.currentRoute.path
      current = current.replace(/\/$/,'')
      return current != p
    }
  },
  async mounted () {
      try {
        const results = await axios.get(
          'https://api.github.com/repos/airalab/robonomics/releases/latest'
        )

        this.release = results.data;
        this.update = this.release['published_at'];
        this.releaseTime = moment(this.update).from();
        this.releaseLink = this.release['html_url'];

      } catch (error) {
        console.log(error)
      }
    }
}
</script>
