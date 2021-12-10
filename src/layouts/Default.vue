<template>
  <transition name="fade" appear>
   
  
    <div class="screen">
    <!-- <div class="screen" :class="BannerLink('/kusama-slot/')?'banner':''"> -->

      <header class="header">
        <!-- <g-link class="banner-top" to="/kusama-slot" v-if="!BannerLink('/kusama-slot/')">
          <div class="layout__content">
            {{$ts('Crowdloan ended, get ready for the next round')}} -> 🤖
          </div>
        </g-link> -->

        <div class="header-content">
          <div class="header-logo">
            <g-link to="/"><g-image :alt="$static.metadata.siteName + ' logotype'" src="~/assets/images/robonomics-logo.svg"/></g-link>
          </div>

          <div class="header-side">

            <!-- <nav class="header-nav sidetext">
                <ul>
                  <li>
                    <span tabindex="0">Learn</span>
                    <ul>
                      <li><g-link to="/intro">{{$ts('Intro')}}</g-link></li>
                      <li><g-link to="/vision">Vision</g-link></li>
                      <li><g-link to="https://wiki.robonomics.network">Wiki</g-link></li>
                    </ul>
                  </li>
                  <li>
                    <span tabindex="0">Learn</span>
                    <ul>
                      <li><g-link to="/intro">{{$ts('Intro')}}</g-link></li>
                      <li><g-link to="/vision">Vision</g-link></li>
                      <li><g-link to="https://wiki.robonomics.network">Wiki</g-link></li>
                    </ul>
                  </li>
                </ul>
            </nav> -->

            <HeaderNav/>
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


<style scoped>

  /* .header-nav ul {
    list-style: none;
  }

  .header-nav ul, .header-nav li {
    margin: 0;
  }

  .header-nav ul li {
    display: inline-block;
  }

  .header-nav > ul li:not(:last-child) {
    margin-right: var(--space);
  }

  .header-nav ul ul {
    display: none;
  }

  .header-nav ul ul li {
    display: block;
  }

  .header-nav span {
    cursor: pointer;
  }

  .header-nav span:focus > ul {
    display: block;
  } */


  .banner-top {
    height: var(--space-bannertop);
    display: flex;
    justify-content: center;
    align-items: center;

    padding-right: var(--screen-padding-right);
    padding-left: var(--screen-padding-right);

    text-decoration: none;
    overflow: hidden;

    background-color: var(--color-red);
    color: var(--color-light) !important;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;

    text-shadow: 2px 2px 0px #AF0098;
    font-family: var(--font-family-code);

    /* background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">\
			<text x="20" y="20" font-size="10" style="fill:#ccc">🤖</text>\
			</svg>');
			background-size: 30px 30px; */
  }

  .banner-top:hover {
    color: #fff !important;
    background-color: #AF0098;
  }
  

  .header {
    --logo-padding: 0.6rem;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index:1000;

    background-color: var(--body-bg);
  }

    .header-logo {
      width: calc( var(--screen-padding-left) - calc(var(--logo-padding)*1.5));
      background-color: var(--body-bg);
    }

  .header-logo a, .header-logo img { display: block; }
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: var(--screen-padding-top);
    padding-left: var(--logo-padding);
    padding-right: var(--screen-padding-right);
  }

  .sidetext {
    font-family: var(--font-family-code);
    font-size: calc(var(--base-font-size) * 0.8);
    text-transform: uppercase;
  }

  @media screen and (max-width: 350px) {
      .sidetext { font-size: 70%; }
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
  }

  .sidetext-left.active--exact, .sidetext-left a.active--exact { opacity: .5; }


.screen {
	position: relative;
  background-color: var(--color-gray-light);
  border-style: solid;
  border-color: #fff;
  border-width: 0 var(--screen-padding-right) 0 var(--screen-padding-left);
  padding-top: var(--screen-padding-top);
  padding-bottom: var(--screen-padding-bottom);
  height: 100vh;
  	scrollbar-width: none;
}

	.screen::-webkit-scrollbar { display: none; }


  .screen:after {
    content: "";
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: var(--screen-padding-bottom);
    background: #fff;
    z-index: 1000;
  }


.screen-content {
  background-color: var(--color-gray-light);
}

/* .screen:not(.banner) {
 padding-top: calc(var(--screen-padding-top) + var(--space-bannertop));
} */

.header-side {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-side > *:not(:last-child) {
      margin-right: var(--space);
    }

</style>


<script>

import axios from 'axios'
import moment from 'moment'

export default {

  components: {
    Footer: () => import('~/components/Footer.vue'),
    languageSwitcher: () => import('~/components/languageSwitcher.vue'),
    HeaderNav: () => import('~/components/HeaderNav.vue'),
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
      // current = current.replace(/\/$/,'')
      // return current != p
      return current.includes(p)
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
