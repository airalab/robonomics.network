<template>
  <transition name="fade" appear>
   
  
    <!-- <div class="screen"> -->
    <div class="screen banner">

      <header class="header">
        <!-- <g-link class="banner-top" to="/ambassador-program">
          <div class="layout__content">We launched Ambassador Program, join!</div>
        </g-link> -->

        <div class="header-content">
          <div class="header-logo">
            <g-link to="/">
              <!-- <g-image :alt="$static.metadata.siteName + ' logotype'" src="~/assets/images/robonomics-logo.svg"/> -->
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="283" height="35.196" viewBox="0 0 283 35.196">
                <defs>
                  <clipPath id="clip-path">
                    <rect id="Rectangle_8" data-name="Rectangle 8" width="40" height="35.196" transform="translate(0 0.001)" fill="none"/>
                  </clipPath>
                </defs>
                <g id="Group_5" data-name="Group 5" transform="translate(-21 -7.402)">
                  <text id="Robonomics_network" data-name="Robonomics network" transform="translate(66 34)" font-size="20" font-family="Roboto-Regular, Roboto" letter-spacing="0.03em"><tspan x="0" y="0">ROBONOMICS NETWORK</tspan></text>
                  <g id="Group_25" data-name="Group 25" transform="translate(21 7.401)">
                    <path id="Path_31" data-name="Path 31" d="M20.272,1.211,1.3,34.071H39.247Z" fill="none" stroke="#201600" stroke-miterlimit="10" stroke-width="0.4"/>
                    <g id="Group_24" data-name="Group 24">
                      <g id="Group_23" data-name="Group 23" clip-path="url(#clip-path)">
                        <path id="Path_32" data-name="Path 32" d="M38.087,32.636a1.337,1.337,0,1,1-.631,1.783,1.337,1.337,0,0,1,.631-1.783" fill="#201600"/>
                        <path id="Path_33" data-name="Path 33" d="M20.3,0a1.337,1.337,0,1,1-1.337,1.337A1.338,1.338,0,0,1,20.3,0" fill="#201600"/>
                        <path id="Path_34" data-name="Path 34" d="M1.337,32.523A1.337,1.337,0,1,1,0,33.86a1.338,1.338,0,0,1,1.337-1.337" fill="#201600"/>
                        <path id="Path_35" data-name="Path 35" d="M12.182,28.232H28.706l-8.262-4.36Z"/>
                        <path id="Path_36" data-name="Path 36" d="M20.118,13.176l-8.4,14.564,8.422-4.434Z"/>
                        <path id="Path_37" data-name="Path 37" d="M29.169,27.723l-8.388-14.53.069,10.056Z"/>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </g-link>
          </div>

          <div class="header-side">
            <HeaderNav/>
            <ThemeSwitcher/>
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

  .header-logo {
    padding-left: var(--screen-padding-left);
    max-width: 283px;
    width: 100%;
    /* width: calc( var(--screen-padding-left) - calc(var(--logo-padding)*1.5)); */
    background-color: var(--body-bg);
  }


  .header-logo svg {
    transition: fill 0.33s ease-in, stroke 0.33s ease-in;
  }

  .dark-theme .header-logo a svg  {
    stroke: #fff;
    fill: #fff;
  }

  .dark-theme .header-logo a svg path {
    stroke: #fff;
  }

  @media screen and (max-width: 950px) {
    .header-logo  {
      margin-top: 6px;
      max-width: 168px;
      width: 40%;
    }

    .header-logo a svg {
      width: 100%;
    }
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


  .header {
    --logo-padding: 0.6rem;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index:1000;

    background-color: var(--body-bg);
  }

  .header-logo a, .header-logo img { display: block; }
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: var(--screen-padding-top);
    padding: 2rem ;
    padding-left: var(--logo-padding);
    padding-right: var(--screen-padding-right);
  }

  .sidetext {
    font-family: var(--font-family-code);
    font-size: calc(var(--base-font-size) * 0.8);
    text-transform: uppercase;
  }

  @media screen and (max-width: 660px) {
    .header-logo  {
      /* margin-top: 0; */
      padding-left: 2rem;
      max-width: 220px;
      width: 100%;
    }
  }
  
  @media screen and (max-width: 480px) {
    .header-logo  {
      /* margin-top: 0; */
      max-width: 150px;
      width: 100%;
      margin-right: 5px;
    }
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
  border-color: var(--body-bg);
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
    background: var(--color-light);
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
    ThemeSwitcher: () => import('~/components/ThemeSwitcher.vue'),
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
