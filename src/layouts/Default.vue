<template>
  <transition name="fade" appear>

      
        
        <div class="screen">

          <div class="header">
            <div class="header-logo backdrop-light">
              <g-link to="/"><g-image :alt="$static.metadata.siteName + ' logotype'" src="~/assets/images/robonomics-logo.svg"/></g-link>
            </div>

            <nav class="header-nav">
                <g-link to="/land/say-hello-to-robonomics">Hello!</g-link>
                <g-link to="/community#intouch">Community</g-link>
                <g-link to="/timeline">Timeline</g-link>
                <g-link to="/blog">Blog</g-link>
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
      width: 4rem;
      padding: 0.5rem;
      background-color: var(--body-bg);

      a, img { display: block; }
    }

    &-nav{
      margin-right: var(--screen-padding);

      a {
        padding: calc(var(--screen-padding)/4);
        text-decoration: none;
        font-size: .9rem;
        color: var(--text-color);
        // background-color: var(--body-bg);

        &.active--exact { opacity: .5; }
      }
    }
  }

  .backdrop-light {
    background-color: rgba(255,255,255,0.3);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
  }

  @media screen and (max-width:840px) {
    .header {
      background-color: rgba(255,255,255,0.3);
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);

      align-items: center;
    }

    .header-logo {
      width: 3rem;
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
