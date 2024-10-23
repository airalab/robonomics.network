<template>
  <transition name="fade" appear mode="out-in">
   
    <div>
      <div class="loader-wrapper" v-show="!isLoaded">
        <Loader/>
      </div>

      <div v-show="isLoaded" class="screen">
  

        <Header :translated="translated" />

        <h1 v-if="title" v-html="title" class="pagetitle" />
        <g-link class="backlink" v-if="backlink" :to="backlink.link" :aria-label="backlink.label">&larr; {{backlink.title}}</g-link>

        <slot/>

        <ClientOnly>
          <Footer :translated="translated"/>
        </ClientOnly>

      </div>

    </div>
  
  </transition>
</template>


<script>

export default {

  components: {
    Header: () => import('~/components/header/Header.vue'),
    Footer: () => import('~/components/Footer.vue'),
    Loader: () => import('~/components/utils/Loader.vue'),
  },

  props: {
    backlink: {
      type: Object
    },
    translated: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
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


<style scoped>

  .pagetitle {
    background-color: var(--color-dark);
    color: var(--color-light);
    display: inline-block;
    font-size: calc(var(--base-font-size) * 1.1);
    font-variation-settings: var(--font-flex-bold);
    margin: 0 0 calc(var(--space) * 2);
    padding: 0.4rem var(--layout-sidepadding);
  }

  .backlink {
    color: var(--text-color);
    display: block;
    font-size: 0.8rem;
    font-variation-settings: var(--font-flex-bold);
    margin-left: var(--layout-sidepadding);
    margin-top: calc(var(--space) * -2);
    padding: 0.3rem 0;
    text-transform: uppercase;
  }

  .backlink:hover {
    color: var(--color-link);
  }

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
