<template>
  <transition name="fade" appear>

      
        
        <div class="screen">

          <div class="header">
            <div class="header-logo">
              <g-link to="/"><g-image :alt="$static.metadata.siteName + ' logotype'" src="~/assets/images/robonomics-logo.svg"/></g-link>
            </div>

            <nav class="header-nav">
                <g-link to="/">Home</g-link>
                <g-link to="/community">Community</g-link>
                <g-link to="/timeline">Timeline</g-link>
                <!--<g-link to="/blog">Blog</g-link>-->
            </nav>
          </div>

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

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index:1000;

    display: flex;
    justify-content: space-between;

    &-logo {
      width: 5rem;
      padding: 1rem;
      background-color: var(--body-bg)
    }

    &-nav{
      // margin-top: var(--screen-padding);
      margin-right: var(--screen-padding);

      a {
        padding: calc(var(--screen-padding)/4);
        text-decoration: none;
        // font-size: calc(var(--screen-padding)/2.2);
        font-size: .9rem;
        color: var(--text-color);
        background-color: var(--body-bg);

        &.active--exact { opacity: .5; }
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
