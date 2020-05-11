<template>
  <Layout>
    <div class="homepage layout__content" itemscope itemtype="http://schema.org/Product">
        <g-image itemprop="logo" :alt="$static.metadata.siteName + ' logotype'" src="~/assets/images/robonomics-logo.svg" class="homepage__logo"/>
      
        <h1 v-html="$static.metadata.siteName" itemprop="name"/>

        <div class="homepage__description">
          <p itemprop="description" v-html="$static.metadata.siteDescription" />

          <nav class="homepage__menu" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
            <g-link to="https://github.com/airalab/robonomics/releases" target="_blank" itemprop="url"><span itemprop="name">Releases</span></g-link>
            <g-link to="https://wiki.robonomics.network" target="_blank" itemprop="url"><span itemprop="name">WIKI</span></g-link>
            <g-link to="https://dapp.robonomics.network" target="_blank" itemprop="url"><span itemprop="name">DApp</span></g-link>
            <g-link to="/" itemprop="url"><span itemprop="name">Community</span></g-link>
          </nav>
        </div>

        <!-- <div class="decor-arms">
          <div class="arm-1">
            <RobotHand11 />

            <span class="sprite-basic-robotHand1-1"></span>
            <span class="sprite-basic-robotHand1-2"></span>
            <span class="sprite-basic-robotHand1-3"></span>
            <span class="sprite-basic-robotHand1-4"></span>
            <span class="sprite-basic-robotHand1-5"></span>
            <span class="sprite-basic-robotHand1-6"></span>
            <span class="sprite-basic-robotHand1-7"></span>
            <span class="sprite-basic-robotHand1-8"></span>
            <span class="sprite-basic-robotHand1-9"></span>
            <span class="sprite-basic-robotHand1-10"></span>
            <span class="sprite-basic-robotHand1-11"></span>
          </div>

          <div class="arm-2">
            <span class="sprite-basic-robotHand2-1"></span>
            <span class="sprite-basic-robotHand2-2"></span>
            <span class="sprite-basic-robotHand2-3"></span>
            <span class="sprite-basic-robotHand2-4"></span>
            <span class="sprite-basic-robotHand2-5"></span>
            <span class="sprite-basic-robotHand2-6"></span>
            <span class="sprite-basic-robotHand2-7"></span>
            <span class="sprite-basic-robotHand2-8"></span>
            <span class="sprite-basic-robotHand2-9"></span>
            <span class="sprite-basic-robotHand2-10"></span>
            <span class="sprite-basic-robotHand2-11"></span>
            <span class="sprite-basic-robotHand2-12"></span>
            <span class="sprite-basic-robotHand2-13"></span>
            <span class="sprite-basic-robotHand2-14"></span>
            <span class="sprite-basic-robotHand2-15"></span>
          </div>
        </div> -->

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

      a{
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        font-weight: 400;

        display: block;
        margin-bottom: 0.1rem;
      }
    }
  }
</style>

<script>
  import RobotHand11 from '~/assets/images/robotHand1-1.svg'

  export default {
    components: {
      RobotHand11
    }
  }
</script>

