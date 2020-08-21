<template>
  <transition name="fade" appear>
   
        <div class="layout insidepage screen">
          <g-link to="/" class="logo"><g-image :alt="$static.metadata.siteName + ' logotype'" src="~/assets/images/robonomics-logo.svg"/></g-link>
        
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
    
    padding-top: 1rem;

    @media screen and (max-width: 840px) {
		  padding-top: var(--space);
		}

    .logo {
      width: 6rem;
      transition: 0.4s ease-out all;

      &:hover{
        transform: scale(1.2);
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
