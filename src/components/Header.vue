<template>
  <client-only>
      <header class="header" v-if="$store.state.showHeader">

        <div class="header-content">
          <div class="header-logo">
            <g-link to="/">
              <g-image class="hideMobile" :alt="$static.metadata.siteName + ' logotype'" src="~/assets/images/robonomics-logo-solid.svg"/>
              <g-image class="hideDesktop" :alt="$static.metadata.siteName + ' logotype'" src="~/assets/images/robonomics-logo.svg"/>
            </g-link>
          </div>

          <div class="header-side">
            <languageSwitcher/>
            <ThemeSwitcher/>
            <HeaderNav/>

          </div>

      
        </div>
      </header>
  </client-only>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<script>
export default {

  components: {
    languageSwitcher: () => import('~/components/languageSwitcher.vue'),
    ThemeSwitcher: () => import('~/components/ThemeSwitcher.vue'),
    HeaderNav: () => import('~/components/HeaderNav.vue'),
  }

}
</script>

<style scoped>

  .hideDesktop {
    display: none;
  }
  .header-logo {
    padding-left: calc(var(--screen-padding-left) - 9px);
    /* max-width: 283px;
    width: 100%; */
    /* width: calc( var(--screen-padding-left) - calc(var(--logo-padding)*1.5)); */
    background-color: var(--header-bg);
  }

  .header-logo a {
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .header-logo a {
    color: currentColor;
  }

  .header-logo a img {
    margin-right: 20px;
  }


  .dark-theme .header-logo a img {
    filter:  grayscale(1) invert(1);
  }

  .logo-text {
    font-size: 1rem;
    white-space: nowrap;
    text-transform: uppercase;
    color: var(--color-dark);
  }

  .header {
    --logo-padding: 0.6rem;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index:1000;

    background-color: var(--header-bg);
  }

  /* .header-logo a, .header-logo img { display: block; } */
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: var(--screen-padding-top);
    padding: 2rem ;
    padding-left: var(--logo-padding);
    padding-right: var(--screen-padding-right);
  }

  .header-side {
    display: flex;
    justify-content: space-between;
    align-items: center;
  } 

  .header-side > *:not(:last-child) {
    margin-right: var(--space);
  }


  @media screen and (max-width: 950px) {

    .header-logo {
      margin-right: 10px;
    }

    .header-logo a svg {
      width: 100%;
    }
/* 
    .header-logo {
      max-width: 100px;
      width: 34%;
      padding-left: 40px;
    } */
  }

  @media screen and (max-width: 650px) {
    .hideDesktop {
      display: block;
    }
    .hideMobile {
      display: none;
    }
  }
  
</style>