<template>
  <Layout>
    <div class="homepage" itemscope itemtype="http://schema.org/Product">
        <div class="layout__content">
          <g-image itemprop="logo" :alt="$static.metadata.siteName + ' logotype'" src="~/assets/images/robonomics-logo.svg" class="homepage__logo"/>
          <h1 v-html="$static.metadata.siteName" itemprop="name"/>
        </div>

        <div class="homepage__description">
          <div class="layout__content">

            <p itemprop="description" v-html="$static.metadata.siteDescription" />

            <nav class="homepage__menu" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
              <g-link to="https://github.com/airalab/robonomics/releases" target="_blank" itemprop="url"><span itemprop="name">Releases</span></g-link>
              <g-link to="https://wiki.robonomics.network" target="_blank" itemprop="url"><span itemprop="name">WIKI</span></g-link>
              <g-link to="https://dapp.robonomics.network" target="_blank" itemprop="url"><span itemprop="name">DApp</span></g-link>
              <g-link to="/" itemprop="url"><span itemprop="name">Community</span></g-link>
            </nav>

          </div>


          <div class="roboHands" v-in-viewport.once>
          
            <div class="roboHands__move left">
              <div class="roboHands__left">
                <g-image src="~/assets/images/robotHand1-1.svg" class="roboHands__left__1" />
                <g-image src="~/assets/images/robotHand1-2.svg" class="roboHands__left__2" />
                <g-image src="~/assets/images/robotHand1-3.svg" class="roboHands__left__3" />
                <g-image src="~/assets/images/robotHand1-4.svg" class="roboHands__left__4" />
                <g-image src="~/assets/images/robotHand1-5.svg" class="roboHands__left__5" />
                <g-image src="~/assets/images/robotHand1-6.svg" class="roboHands__left__6" />
                <g-image src="~/assets/images/robotHand1-7.svg" class="roboHands__left__7" />
                <g-image src="~/assets/images/robotHand1-8.svg" class="roboHands__left__8" />
                <g-image src="~/assets/images/robotHand1-9.svg" class="roboHands__left__9" />
                <g-image src="~/assets/images/robotHand1-10.svg" class="roboHands__left__10" />
                <g-image src="~/assets/images/robotHand1-11.svg" class="roboHands__left__11" />
              </div>
            </div>

            <div class="roboHands__move right">
              <div class="roboHands__right">
                <g-image src="~/assets/images/robotHand2-1.svg" class="roboHands__right__1" />
                <g-image src="~/assets/images/robotHand2-2.svg" class="roboHands__right__2" />
                <g-image src="~/assets/images/robotHand2-3.svg" class="roboHands__right__3" />
                <g-image src="~/assets/images/robotHand2-4.svg" class="roboHands__right__4" />
                <g-image src="~/assets/images/robotHand2-5.svg" class="roboHands__right__5" />
                <g-image src="~/assets/images/robotHand2-6.svg" class="roboHands__right__6" />
                <g-image src="~/assets/images/robotHand2-7.svg" class="roboHands__right__7" />
                <g-image src="~/assets/images/robotHand2-8.svg" class="roboHands__right__8" />
                <g-image src="~/assets/images/robotHand2-9.svg" class="roboHands__right__9" />
                <g-image src="~/assets/images/robotHand2-10.svg" class="roboHands__right__10" />
                <g-image src="~/assets/images/robotHand2-11.svg" class="roboHands__right__11" />
                <g-image src="~/assets/images/robotHand2-12.svg" class="roboHands__right__12" />
                <g-image src="~/assets/images/robotHand2-13.svg" class="roboHands__right__13" />
                <g-image src="~/assets/images/robotHand2-14.svg" class="roboHands__right__14" />
                <g-image src="~/assets/images/robotHand2-15.svg" class="roboHands__right__15" />

              </div>
            </div>
          
        </div>
        </div>

    </div>

  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>

<style lang="scss">
  .homepage{
    text-align: center;

    &__logo, &__logo_reflect{
      display: inline-block;
      width: 11rem;
    }

    &__logo_reflect{
      transform-origin: 50% 50%;
      transform: scaleY(-1);
      opacity: .2;
    }

    h1{
      padding-bottom: 0.3rem;
      text-shadow: rgba(3, 165, 237, .3) 0 0.3rem;
    }

    &__menu{
      display: inline-block;
      border: 1px solid var(--color-dark);
      padding: calc(var(--space)/2);
      margin-top: calc(var(--space)/2);

      box-shadow: .2rem .2rem 0 var(--color-dark);
      background-color: var(--color-light);

      a{
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        font-weight: 400;

        display: block;
        margin-bottom: 0.1rem;
      }
    }


    &__description{
      position: relative
    }

    .roboHands{
      &__left, &__right{
        top: 6rem;
      }
    }
  }
</style>

<script>
  import Vue from 'vue'
  import inViewportDirective from 'vue-in-viewport-directive'
  Vue.directive('in-viewport', inViewportDirective)

  export default {
    mounted() {
      this.scale();
      window.addEventListener('resize', this.scale);
    },

    beforeDestroy() {
      window.removeEventListener('resize', this.scale);
    },

    methods: {
      scale(){
        this.scaleRatio('.roboHands__move.left', '.roboHands__left');
        this.scaleRatio('.roboHands__move.right', '.roboHands__right');
      },

      scaleRatio(parent, element){
        var ratio = (document.querySelector(parent).offsetWidth / document.querySelector(element).offsetWidth).toFixed(2);
        
        document.querySelector(element).style.transform = 'scale(' + ratio +')';
      }
    }
  }
</script>

