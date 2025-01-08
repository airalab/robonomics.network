<template>
  <layout>

      <MetaInfo
        pageTitle = "Robonomics Network"
        pageDescription = "Robonomics is a decentralized cloud for storing digital twins of robotics and IoT devices. Robonomics enables economic and technical communication between machines and humans. Its decentralized architecture secures the end user's privacy."
      />

      <div class="banner">
        <div class="banner-content" :style="bannertransform">
          <svg-banner />
          <h1>{{ $t('Begin your adventure in the world of cyberpunks') }}</h1>
          <h4>#DePIN, #NetworkStates</h4>
          <g-link to="/devices/" class="highlight">{{ $t('Smart devices from Robonomics') }}</g-link>
        </div>
      </div>

      <h2 class="title-lined"><span>{{ $t('Hardware for cyberpunks') }}</span></h2>
      <div class="layout layout__content">
        <DevicesList />
      </div>

      <section class="layout section">

        <h2 class="title-lined"><span>{{ $t('Our values') }}</span></h2>

        <div class="grid-3">
          <div>
            <g-image src="~/assets/images/lined-scalable.svg" immediate aria-hidden="true" />
            <h3 class="align-left m-t-0">{{ $t('Pure Open Source') }}</h3>
            <p>{{ $t('Our devices are designed for total transparency. Every product comes with open RISC-V processor, open-source code and circuit schematics, and local update instructions—no need for cloud connections. You’re empowered to understand, customize, and trust your technology from the ground up') }}.</p>
          </div>

          <div>
            <g-image src="~/assets/images/lined-wave.svg" immediate aria-hidden="true" />
            <h3 class="align-left m-t-0">{{ $t('Local and Global Availability') }}</h3>
            <p>{{ $t('The combination of p2p communication and web3 cloud guarantees that your devices will always be connected. No internet access? You can still connect directly to the device. Moving to a new region or going on vacation? Your devices will stay online and accessible wherever you are') }}.</p>
          </div>

          <div>
            <g-image src="~/assets/images/lined-key.svg" immediate aria-hidden="true" />
            <h3 class="align-left m-t-0">{{ $t('Privacy by design') }}</h3>
            <p>{{$t('By utilizing open source, p2p, and web3, there’s no room for corporate tricks, ensuring your personal data is protected. All information is stored either locally or encrypted with your personal key in the web3 cloud.')}}</p>
          </div>
        </div>

        <div class="timeline align-center">
          <g-image src="~/assets/images/home__hands.webp" aria-hidden="true" immediate />
          <h3 class="m-t-0">{{$t('Interested in how the team reached this stage?')}}</h3>
          <g-link to="/timeline/" class="highlight">{{ $t('The Robonomics Timeline') }}</g-link>
          <p>{{ $t('can guide you through our journey') }}</p>
        </div>
      </section>

  </layout>
</template>

<script>

  export default {

    components: {
      MetaInfo: () => import("@/components/MetaInfo.vue"),
      DevicesList: () => import ('@/components/blocks/DevicesList.vue'),
      SvgBanner: () => import ('@/components/svg/BannerIndex.vue'),
    },

    data() {
      return {
        bannershift: 0,
        scrollstarted: false
      }
    },

    computed: {
      bannertransform() {
        if(this.scrollstarted) {
          return 'transform: translateY(' + ((-1) * this.bannershift) + 'px);';
        }
      }
    },

    methods: {
      onScroll() {
      
        if(window.scrollY > 20 && window.scrollY < window.innerHeight/2) {
          this.scrollstarted = true;
          this.bannershift = window.scrollY / 3;
        }

        if(window.scrollY <= 20) {
          this.bannershift = 0;
        }
      },
    },

    mounted() {
      window.addEventListener('scroll', this.onScroll);
    },

    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll);
    }

  }
</script>


<style scoped>

  /* + banner */
  .banner {
    margin-bottom: calc(var(--space) * 3);
    position: relative;
  }

  .banner:before {
    background-color: var(--color-blue-notheme);
    background-image: url('../assets/images/robonomics-pattern.webp');
    background-size: 600px;
    border-radius: 4px;
    bottom: var(--layout-sidepadding);
    content: "";
    left: var(--layout-sidepadding);
    position: absolute;
    right: var(--layout-sidepadding);
    top: var(--layout-sidepadding);
  }

  .banner, .banner-content {
    padding: var(--layout-sidepadding);
  }

  .banner-content {
    background: var(--color-red);
    border-radius: 4px;
    position: relative;
    text-align: center;
    z-index: 1;
  }

  .banner-content, .banner-content a {
    color: var(--color-light);
  }

  .banner-content a.highlight {
    display: inline-block;
    margin-top: var(--space);
  }

  .banner-content a.highlight:hover {
    border-width: 2px;
  }

  .banner h1, .banner h4 {
    margin: 0;
    padding: 0;
  }

  .banner h4 { 
    font-weight: 400;
  }

  .banner svg {
    display: block;
    max-width: 700px;
    margin: var(--space) auto;
  }
  /* - banner */

  .timeline img {
    display: block;
    max-height: 215px;
    object-fit: contain;
    width: 100%;
    margin: calc(var(--space)*2) auto var(--space);
  }
</style>