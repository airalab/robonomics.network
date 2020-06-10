<template>
  <transition name="fade" appear>
   
        <div class="layout insidepage screen">

          <div class="layout__content">
            <g-link to="/" class="logo"><g-image :alt="$static.metadata.siteName + ' logotype'" src="~/assets/images/robonomics-logo.svg"/></g-link>
          </div>
        
          <slot/>

          <ClientOnly> <Footer/> </ClientOnly>

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

      &:hover{
        transform: scale(1.5);
      }
    }
  }
</style>


<script>

export default {
  components: {
    Footer: () => import('~/components/Footer.vue')
  }
}
</script>
