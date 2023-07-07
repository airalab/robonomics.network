<template>
  <transition name="fade" appear>
   
  
    <!-- <div class="screen"> -->
    <div class="screen banner">
      <span class="right-border"></span>

      <Header  v-if="$store.state.showHeader"/>

      <div class="screen-content">
        
        <slot/>
        <Contacts v-if="!$route.path.includes('contact')"/>
        <ClientOnly> <Footer/> </ClientOnly>
      </div>

      <div class="sidetext sidetext-left">
        <g-link to="/timeline">Founded in 2015</g-link> &nbsp; &bull; &nbsp; 
        <g-link :to="this.releaseLink">Latest release {{ this.releaseTime }}</g-link>
      </div>


      <client-only>

        <userTracker
          classCustom="my-tracker"
          @activateTracker="activateTracker"
        />

      </client-only>

    </div>
  
  </transition>
</template>




<style scoped>

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
    left: calc(var(--screen-padding-left)/6);
    bottom: calc(var(--screen-padding-bottom)/1.8);

    transform: rotate(-90deg);
    transform-origin: 0 0;
    white-space: nowrap;
    z-index: 900;
  }

  .sidetext-left.active--exact, .sidetext-left a.active--exact { opacity: .5; }


.screen {
	position: relative;
  background-color: var(--color-gray-light);
  border-style: solid;
  border-color: var(--header-bg);
  border-width: 0 calc(var(--screen-padding-right) * 0.8) calc(var(--screen-padding-right) * 0.8) calc(var(--screen-padding-left) * 0.8);
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
    height: calc(var(--screen-padding-right) * 0.8);
    background-color: var(--header-bg);
    z-index: 900;
  }

  .screen:before {
    content: "";
    position: fixed;
    left: 0;
    bottom: 0;
    height: 100%;
    width:  calc(var(--screen-padding-left) * 0.8);
    background-color: var(--header-bg);
    z-index: 900;
  }

  .right-border {
    position: fixed;
    right: 0;
    bottom: 0;
    height: 100%;
    width: calc(var(--screen-padding-right) * 0.8);
    background-color: var(--header-bg);
    z-index: 900;
  }


.screen-content {
  background-color: var(--color-gray-light);
}

/* .screen:not(.banner) {
 padding-top: calc(var(--screen-padding-top) + var(--space-bannertop));
} */

</style>


<script>

import axios from 'axios'
import moment from 'moment'

export default {

  components: {
    Header: () => import('~/components/Header.vue'),
    Footer: () => import('~/components/Footer.vue'),
    Contacts: () => import('~/components/Contacts.vue')
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
    },
    activateTracker() {
      if(this.$matomo) {
          this.$matomo && this.$matomo.setConsentGiven();
          this.$matomo && this.$matomo.enableLinkTracking();
          this.$matomo && this.$matomo.trackPageView();
      }
    }
  },

  created() {
    this.$store.commit('TOGGLE_SHOW_HEADER', true)
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
      };

      window.scrollTo(0,0);
  }
}
</script>
