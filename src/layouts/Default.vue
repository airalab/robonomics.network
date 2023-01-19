<template>
  <transition name="fade" appear>
   
  
    <!-- <div class="screen"> -->
    <div class="screen banner">
      <!-- <span class="left-border"></span> -->

      <Header/>

      <div class="screen-content">
        
        <slot/>
        <Contacts/>
        <ClientOnly> <Footer/> </ClientOnly>
      </div>

      <div class="sidetext sidetext-left">
        <g-link to="/timeline">Founded in 2015</g-link> &nbsp; &bull; &nbsp; 
        <g-link :to="this.releaseLink">Latest release {{ this.releaseTime }}</g-link>
      </div>

    </div>
  
  </transition>
</template>




<style scoped>

  .banner-top {
    position: relative;
    height: var(--space-bannertop);
    display: flex;
    justify-content: center;
    align-items: center;

    padding-right: var(--screen-padding-right);
    padding-left: var(--screen-padding-right);

    text-decoration: none;
    overflow: hidden;

    background-color: var(--color-blue);
    background-image: url(/ambassador-pattern.jpg);
    background-position: 0 50%;
    background-repeat: repeat-x;
    /* background-color: var(--color-red); */
    color: #fff !important;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    /* font-size: 90%; */
    line-height: 1;

    font-family: var(--font-family-code);
    text-shadow: 1px 1px 0 #000;

    /* background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">\
			<text x="20" y="20" font-size="10" style="fill:#ccc">🤖</text>\
			</svg>');
			background-size: 30px 30px; */
  }

  @media screen and (min-width: 700px) {
    .banner-top {
      font-size: 150%;
    }
  }

  .banner-top:after {
    content: "";
    background: rgba(0, 0, 0, 0.4);
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .banner-top > div {
    position: relative;
    z-index: 1;
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
    left: calc(var(--screen-padding-left)/5);
    bottom: calc(var(--screen-padding-bottom)/1.8);

    transform: rotate(-90deg);
    transform-origin: 0 0;
    white-space: nowrap;
  }

  .sidetext-left.active--exact, .sidetext-left a.active--exact { opacity: .5; }


.screen {
	position: relative;
  /* background-color: var(--color-gray-light); */
  border-style: solid;
  border-color: var(--header-bg);
  border-width: 0 calc(var(--screen-padding-right) * 0.8) 0 calc(var(--screen-padding-left) * 0.8);
  padding-top: var(--screen-padding-top);
  padding-bottom: var(--screen-padding-bottom);
  height: 100vh;
  scrollbar-width: none;
}


	.screen::-webkit-scrollbar { display: none; }


  /* .screen:after {
    content: "";
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: var(--screen-padding-bottom);
    background-color: var(--header-bg);
    z-index: 1000;
  } */

  /* .screen:before {
    content: "";
    position: fixed;
    left: 0;
    bottom: 0;
    height: 100%;
    width: calc(var(--screen-padding-right) * 3);
    background-color: var(--header-bg);
    z-index: 900;
  } */

  .left-border {
    position: fixed;
    right: 0;
    bottom: 0;
    height: 100%;
    width: calc(var(--screen-padding-right));
    background-color: var(--header-bg);
    z-index: 900;
  }


.screen-content {
  /* background-color: var(--color-gray-light); */
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
      };

      window.scrollTo(0,0);
  }
}
</script>
