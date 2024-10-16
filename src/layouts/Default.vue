<template>
  <transition name="fade" appear mode="out-in">
   
    <div>
      <div class="loader-wrapper" v-show="!isLoaded">
        <Loader/>
      </div>

      <div v-show="isLoaded" class="screen banner">
  

        <Header :translated="translated" />

        <slot/>

        <ClientOnly>
          <Footer :translated="translated"/>
        </ClientOnly>

      </div>

    </div>
  
  </transition>
</template>




<style scoped>

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.33s cubic-bezier(0,.44,.38,.99);
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .sidetext {
    font-size: calc(var(--base-font-size) * 0.6);
    text-transform: uppercase;
  }

  .sidetext a:not(.button) {
    color: var(--text-color);
    text-decoration: none;
  }

  .sidetext-left {
    position:  fixed;
    left: calc(var(--screen-padding-left) * 0.3);
    bottom: 0;

    transform: rotate(-90deg);
    transform-origin: 0 0;
    white-space: nowrap;
    z-index: 900;
  }

  .sidetext-left.active--exact, .sidetext-left a.active--exact { opacity: .5; }


.screen {
	position: relative;
  background-color: var(--color-light);
  padding-top: var(--screen-padding-top);
  padding-bottom: var(--screen-padding-bottom);
  height: 100vh;
  scrollbar-width: none;
}


	.screen::-webkit-scrollbar { display: none; }



.screen-content {
  position: relative;
  background-color: var(--color-light);
}

@media screen and (max-width: 680px) {
  .footer-form.layout__content {
    padding-left: 0;
  }
}

</style>


<script>

export default {

  components: {
    Header: () => import('~/components/header/Header.vue'),
    Footer: () => import('~/components/Footer.vue'),
    Loader: () => import('~/components/utils/Loader.vue'),
  },

  props: {
    withGap: {
      type: Boolean,
      default: true
    },
    translated: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      isLoaded: false,
    }
  },

  methods: {
    activateTracker() {
      this.$matomo && this.$matomo.disableCookies();
      this.$matomo && this.$matomo.trackPageView();
    }
  },

  async mounted () {

      window.scrollTo(0,0);

      this.activateTracker();

      setTimeout(() => {
        this.isLoaded = true;
      }, 1000)
  }
}
</script>
