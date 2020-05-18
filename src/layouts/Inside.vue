<template>
  <transition name="fade" appear>
    <div class="layout insidepage screen">

      <div class="layout__content">
        <g-link to="/" class="logo"><g-image :alt="$static.metadata.siteName + ' logotype'" src="~/assets/images/robonomics-logo.svg"/></g-link>
      </div>
    
      <slot/>

      <Footer/>

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
  .insidepage{
    .logo {
      width: 4rem;
      margin-bottom: var(--space);
    }
  }
</style>


<script>
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Footer
  }
}
</script>
