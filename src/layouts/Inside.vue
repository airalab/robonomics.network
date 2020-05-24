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
      transition: 0.4s ease-out all;
      // margin-bottom: var(--space);

      &:hover{
        transform: scale(1.5);
      }
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
