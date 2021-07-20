<template>
  <transition name="fade" appear>
   
  
    <div class="screen" :class="BannerLink('/kusama-slot')?'banner':''">

      <header class="header">
        <!-- <a class="banner-top" href="/kusama-slot" v-if="BannerLink('/kusama-slot')">
          <div class="layout__content">
            <div id="banner-auction">
              <g-image alt="Astronaut on Mars with Robonomics and Kusama" src="~/assets/images/robonomics-kusama-mars.png" />
              ROBONOMICS PARACHAIN CROWDLOAN STARTED
            </div>
          </div>
        </a> -->

        <div class="header-content">
          <div class="header-logo">
            <g-link to="/"><g-image :alt="$static.metadata.siteName + ' logotype'" src="~/assets/images/robonomics-logo.svg"/></g-link>
          </div>
          <nav class="header-nav sidetext">
              <g-link to="/community#intouch">Community</g-link>
              <g-link to="/kusama-slot">Kusama slot</g-link>
              <g-link to="/vision">Vision</g-link>
              <g-link to="/blog">Blog</g-link>
          </nav>
        </div>
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

    &:hover {
      color: #fff !important;
    }
  }

  #banner-auction {
    position: relative;
    display: inline-block;

    &:after {
      content: " ++";
      opacity: 0;
      animation: blink 1s ease-out 0.3s forwards;
    }

    img {
      position: absolute;
      width: 85px;
      left: -100px;
      top: -10px;
      transform: translateY(100%);
      animation: BannerAuctionPic 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 1s forwards;
    }

    @media screen and (max-width: 560px) {
      img { display: none; }
    }
  }

  @keyframes BannerAuctionPic {
    to {
      transform: translateY(0);
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

  body {
 
    &:before, &:after {
      content:"";
      position: fixed;
      background-color: var(--body-bg);
      width: 100%;
      left: 0;
      z-index: 1000;
    }

    &:before {
      top: 0;
      height: var(--screen-padding-top);
    }

    &:after {
      bottom: 0;
      height: var(--screen-padding-bottom);
    }
  }

.screen {
	position: relative;
  border-style: solid;
  border-color: var(--body-bg);
  border-width: 0 var(--screen-padding-right) 0 var(--screen-padding-left);
	background-color: var(--color-gray-light);
  padding-top: calc(var(--screen-padding-top));
  padding-bottom: calc(var(--screen-padding-bottom));

	&::-webkit-scrollbar { display: none; }
	scrollbar-width: none;

	// background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">\
	// 		<text x="30" y="30" font-size="12" style="fill:#ccc">•</text>\
	// 		</svg>');
	// 		background-size: 60px 60px;
}

// for pages with banner
.screen.banner {
 padding-top: calc(var(--screen-padding-top) + var(--space-bannertop));
}

</style>


<script>

export default {
  components: {
    Footer: () => import('~/components/Footer.vue')
  },
  methods: {
    BannerLink(p) {
      let current = this.$router.currentRoute.path
      current = current.replace(/\/$/,'')
      return current != p
    }
  }
}
</script>
