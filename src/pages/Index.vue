<template>
  <layout>

      <MetaInfo
        pageTitle = "Robonomics Network"
        pageDescription = "Robonomics is a decentralized cloud for storing digital twins of robotics and IoT devices. Robonomics enables economic and technical communication between machines and humans. Its decentralized architecture secures the end user's privacy."
      />

      <section class="banner">
        <div class="banner-content" :style="bannertransform">
          <svg-banner />
          <h1>Begin your adventure in the world of cyber punks</h1>
          <h4>#DePIN, #NetworkStates</h4>
        </div>
      </section>

      <div class="layout layout__content">
        <h2>Hardware for cyber punks 2025 line up</h2>
        <Products/>
      </div>

      <Member/>

      <div class="layout"> 
        <h2>Features of Each Device</h2>
        <div class="home__advantages grid-3">
          <div class="home__advantages-item">
            <h3 class="home__advantages-title home__advantages-title--scalable">Pure Open Source</h3>
            <p class="simple-text">Every device is fully open: you can find the source code, circuit schematics, and instructions for self-updating without the need to connect to any cloud servers. The devices are designed to ensure you can easily understand their structure and onboard components.</p>
          </div>
          <div class="home__advantages-item">
            <h3 class="home__advantages-title home__advantages-title--antiscam">Local and Global Availability</h3>
            <p class="simple-text">The combination of p2p communication and web3 cloud guarantees that your devices will always be accessible for interaction. No internet access? You can still connect directly to the device. Moving to a new region or going on vacation? Your devices will stay online and accessible wherever you are.</p>
          </div>
          <div class="home__advantages-item">
            <h3 class="home__advantages-title home__advantages-title--privacy">Privacy from the First Use</h3>
            <p class="simple-text">By utilizing open source, p2p, and web3, there’s no room for corporate tricks, ensuring your personal data is protected. All information is stored either locally or encrypted with your personal key in the web3 cloud.</p>
          </div>
        </div>
      </div>

      <div class="home__timeline">
        <div class="home__timeline-img">
          <g-image src="~/assets/images/home__hands.webp" alt="" aria-label="false" immediate />
        </div>
        <div class="layout layout__content">
          <h2>Interested in how the team reached this stage?</h2>
          <g-link to="/timeline/" class="advantages__link"><h5>The Robonomics Timeline</h5></g-link>
          <span>can guide you through our journey</span>
        </div>
      </div>

    
  </layout>
</template>

<script>
  import MetaInfo from '~/components/MetaInfo.vue'
  import Products from '~/components/Products.vue'
  import Member from '~/components/home/homeMember.vue'
  import SvgBanner from '~/components/svg/BannerIndex.vue'

  export default {

    components: {
      MetaInfo,
      Products,
      Member,
      SvgBanner
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

        console.log('this.bannershift', this.bannershift)
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
    color: var(--color-light);
    position: relative;
    z-index: 1;
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

  .home__advantages {
    margin-bottom: var(--space);
  }

  .home__advantages-title {
    padding-top: 160px;
    max-width: 204px;
    min-height: 240px;
    text-align: left;
    background-position: left;
    background-repeat: no-repeat;
  }

  .home__advantages-title--scalable {
    background-image: url("data:image/svg+xml,%3Csvg width='102' height='8' viewBox='0 0 102 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M101.854 4.35355C102.049 4.15829 102.049 3.84171 101.854 3.64645L98.6716 0.464466C98.4763 0.269204 98.1597 0.269204 97.9645 0.464466C97.7692 0.659728 97.7692 0.976311 97.9645 1.17157L100.793 4L97.9645 6.82843C97.7692 7.02369 97.7692 7.34027 97.9645 7.53553C98.1597 7.7308 98.4763 7.7308 98.6716 7.53553L101.854 4.35355ZM1 4.5H101.5V3.5H1V4.5Z' fill='%233F3F3F'/%3E%3Cpath d='M0.646446 4.35355C0.451187 4.15829 0.451187 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53554 0.464466C4.7308 0.659728 4.7308 0.976311 4.53554 1.17157L1.70711 4L4.53554 6.82843C4.7308 7.02369 4.7308 7.34027 4.53554 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM101.5 4.5H1V3.5H101.5V4.5Z' fill='%233F3F3F'/%3E%3C/svg%3E%0A");
  }


  .home__advantages-title--antiscam {
    background-image: url("data:image/svg+xml,%3Csvg width='102' height='14' viewBox='0 0 102 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 7C14.3689 -1 17.2751 -1 9.71882 7C2.16251 15 5.06878 15 18.4376 7C31.8065 -1 34.7128 -1 27.1565 7C19.6001 15 22.5064 15 35.8753 7C49.2441 -1 52.1504 -1 44.5941 7C37.0378 15 39.9441 15 53.3129 7C66.6818 -1 69.588 -1 62.0317 7C54.4754 15 57.3817 15 70.7505 7C84.1194 -1 87.0257 -1 79.4694 7C71.9131 15 74.8193 15 88.1882 7C101.557 -1 104.463 -1 96.907 7' stroke='%233F3F3F'/%3E%3C/svg%3E%0A");
  }

  .home__advantages-title--privacy {
    background-size: 109px 15px;
    background-image: url("../assets/images/hardware-2025/privacy.png");
  }

  .advantages__link {
    display: block;
    margin-bottom: calc(var(--space) * 0.3);
    text-align: center;
  }

  .advantages__link h5 {
    position: relative;
    display: inline-block;
    text-transform: none;
    letter-spacing: 0;
  }

  .advantages__link h5::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: var(--color-blue);
  }

  .home__timeline {
    margin-top: calc(var(--space) * 3);
  }

  .home__timeline .layout {
    margin-top: calc(var(--space) * 0.8);
  }

  .home__timeline-img {
    position: relative;
  }

  .home__timeline-img img {
    display: block;
    max-width: 720px;
    width: 100%;
    margin: 0 auto;
  }

  .home__timeline span {
    display: block;
    font-size: calc(var(--base-font-size) * 0.95);
    font-variation-settings: 'wght' 400, 'wdth' 100;
    text-align: center;
  }

  @media screen and (max-width: 990px) {

    .home__advantages-title {
      padding-top: 0;
      padding-right: 100px;
      max-width: unset;
      min-height: unset;
      background-position: right;
    }
  }


  @media screen and (max-width: 520px) {

    .home__timeline-img  {
      height: 124px;
      overflow: hidden
    }
    
    .home__timeline-img img {
      width: 446px;
      height: 124px;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

</style>