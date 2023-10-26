<template>
      <header class="header">

        <div class="header-content" dir="ltr">
          <div class="header-logo">
            <g-link to="/">
              <div class="logo-robot">
                <g-image class="logo-robot__head" :alt="$static.metadata.siteName + ' logotype'" src="~/assets/images/robonomics-logo/logo-robot-head.svg" quality="75" />
                <g-image class="logo-robot__eye" :alt="$static.metadata.siteName + ' logotype'" src="~/assets/images/robonomics-logo/logo-robot-eye.svg" quality="75" />
              </div>
              <g-image class="hideMobile"  :alt="$static.metadata.siteName + ' logotype'" src="~/assets/images/robonomics-logo/logo-robonomics-text.svg" quality="75" />
            </g-link>
          </div>

          <div class="header-side" dir="ltr">
            <languageSwitcher/>
            <ThemeSwitcher/>
            <HeaderNav/>

          </div>

      
        </div>
      </header>
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
    padding-left: calc(var(--screen-padding-left) * 0.6);
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
    margin-right: 10px;
  }

  .logo-robot {
    position: relative;
  }

  .logo-robot__eye {
    position: absolute;
    top: 13px;
    left: 16px;
    animation-name: blink;
    animation-duration: 7s;
    animation-iteration-count: infinite;
  }


  .dark-theme .header-logo a img {
    filter:  grayscale(1) invert(1);
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

  }

  @media screen and (max-width: 650px) {
    .hideDesktop {
      display: block;
    }
    .hideMobile {
      display: none;
    }

    .logo-robot {
      width: 46px;
      height: 37px;
    }
    .logo-robot__head{
      width: 100%;
    }

    .logo-robot__eye {
      top: 16px;
      left: 19px;
    }
  }


  /* eye animation */
  @keyframes blink {
    0% {
      transform: none;
      animation-timing-function: ease-in;
    }
    2% {
      transform: translateY(1px) scaleY(0.2)
    }
    4% {
      animation-timing-function: ease-out;
    }
    6% {
      transform: none;
      animation-timing-function: ease-in;
    }
  }
  
</style>