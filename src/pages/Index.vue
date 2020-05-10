<template>
  <Layout>
    <div class="homepage layout__content" itemscope itemtype="http://schema.org/Product">
        <g-image itemprop="logo" :alt="$static.metadata.siteName + ' logotype'" src="~/assets/images/robonomics-logo.svg" class="homepage__logo"/>
      
        <h1 v-html="$static.metadata.siteName" itemprop="name"/>

        <g-image :alt="$static.metadata.siteName + ' logotype'" src="~/assets/images/robonomics-logo.svg" class="homepage__logo_reflect"/>

        <div class="homepage__description">
          <p class="hyphens" itemprop="description">During the development of Robonomics Network a lot of experiments happen. Tons of code written and erased after use. It was expected that many Smart City and Industry 4.0 cases could match by not so large count of programming patterns. We decided to generalise it as a set of open-source packages with the name Robonomics Framework.</p>

          <nav class="homepage__menu" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
            <g-link to="https://github.com/airalab/robonomics/releases" target="_blank" itemprop="url"><span itemprop="name">Releases</span></g-link>
            <g-link to="https://wiki.robonomics.network" target="_blank" itemprop="url"><span itemprop="name">WIKI</span></g-link>
            <g-link to="https://dapp.robonomics.network" target="_blank" itemprop="url"><span itemprop="name">DApp</span></g-link>
            <g-link to="/" itemprop="url"><span itemprop="name">Community</span></g-link>
          </nav>
        </div>
    </div>

  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
  .homepage{
    text-align: center;

    &__logo, &__logo_reflect{
      display: inline-block;
      width: 8rem;
    }

    &__logo_reflect{
      transform-origin: 50% 50%;
      transform: scaleY(-1);
      opacity: .2;
    }

    h1{
      margin: 1rem 0;
      padding-bottom: 0.3rem;
      text-shadow: rgba(3, 165, 237, .3) 0 0.3rem;
    }

    &__description{
      position: relative;
      top: -5.5rem;
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
