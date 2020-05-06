<template>
  <Layout>
    <div class="homepage">
      <g-image :alt="$static.metadata.siteName" src="~/assets/images/robonomics-logo.svg" class="homepage__logo"/>
      <g-image :alt="$static.metadata.siteName" src="~/assets/images/robonomics-logo.svg" class="homepage__logo_reflect"/>
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


    &__logo{
      margin-top: calc( var(--space) * 3 );
    }

    &__logo_reflect{
      transform-origin: 50% 50%;
      transform: scaleY(-1);
      position: absolute;
      top: calc( var(--space) * 8 );
      left: calc( 50% - 4rem );

      opacity: .3;
    }
  }
</style>
