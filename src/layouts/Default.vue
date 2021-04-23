<template>
  <transition name="fade" appear>
  
    <div class="screen" :class="BannerLink('/kusama-slot')?'banner':''">

      <header class="header">
        <a id="banner-auction" href="/kusama-slot" v-if="BannerLink('/kusama-slot')">
          <div class="layout__content">
            <div id="banner-auction-title">
              <g-image alt="Astronaut on Mars with Robonomics and Kusama" src="~/assets/images/robonomics-kusama-mars.png" />
              ROBONOMICS PARACHAIN AUCTION
            </div>
          </div>
        </a>

        <div class="header-content">
          <div class="header-logo">
            <g-link to="/"><g-image :alt="$static.metadata.siteName + ' logotype'" src="~/assets/images/robonomics-logo.svg"/></g-link>
          </div>
          <nav class="header-nav sidetext">
              <g-link to="/community#intouch">Community</g-link>
              <g-link to="/timeline">Timeline</g-link>
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

  #banner-auction {
    display: block;
    text-decoration: none;
    overflow: hidden;

    background-color: var(--color-blue);
    color: #fff;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2px;

    padding-top: calc(var(--space) * 0.5);
    padding-right: var(--screen-padding-right);
    padding-left: var(--screen-padding-right);
    padding-bottom: calc(var(--space) * 0.5);
  }

  #banner-auction-title {
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
    // top: var(--logo-padding);
    // left: var(--logo-padding);
    // right: var(--screen-padding-right);
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

    padding-top: calc(var(--space) * 0.5);
    padding-bottom: calc(var(--space) * 0.5);
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

.screen {
  height: 100%;
	overflow: hidden;
	position: relative;

	background-color: var(--color-gray-light);
	border-style: solid;
  border-color: var(--body-bg);
  border-width: var(--screen-padding-top) var(--screen-padding-right) var(--screen-padding-bottom) var(--screen-padding-left);

	overflow-y: scroll;
	&::-webkit-scrollbar { display: none; }
	scrollbar-width: none;

	// background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">\
	// 		<text x="30" y="30" font-size="12" style="fill:#ccc">•</text>\
	// 		</svg>');
	// 		background-size: 60px 60px;
}

// for banner
.banner .screen-content {
  margin-top: calc(var(--space) * 3);

  @media screen and (max-width:375px) {
    margin-top: calc(var(--space) * 4);
  }
}

</style>


<script>

export default {
  components: {
    Footer: () => import('~/components/Footer.vue')
  },
  methods: {
    BannerLink(p) {
      return this.$router.currentRoute.path != p
      // return false
      // if(process.isClient) {
      //   return global.location.pathname != p
      // }
    }
  }
}
</script>
