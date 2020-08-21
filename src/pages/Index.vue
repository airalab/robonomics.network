<template>
  <layout-index>

      <MetaInfo
        :pageTitle = "'Home'"
        :pageDescription = "$static.metadata.siteDescription"
      />
    
      <g-image itemprop="logo" :alt="$static.metadata.siteName + ' logotype'" src="~/assets/images/robonomics-logo.svg" class="logo"/>
      <h1 v-html="$static.metadata.siteName" itemprop="name"/>

      <div class="homepage__description">
        <div class="layout__content">

          <p itemprop="description" v-html="$static.metadata.siteDescription" />
          <Navigation />

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

  </layout-index>
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
    
    .logo {
      width: 11rem;
    }

    h1 { margin-bottom: calc(var(--space)/2) }

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

  import Navigation from '~/components/Navigation.vue'
  import MetaInfo from '~/components/MetaInfo.vue'

  export default {

    components: {
      Navigation,
      MetaInfo
    },

    mounted() {
      this.scale();
      window.addEventListener('load', this.scale);
      window.addEventListener('resize', this.scale);
    },

    beforeDestroy() {
      window.removeEventListener('load', this.scale);
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

