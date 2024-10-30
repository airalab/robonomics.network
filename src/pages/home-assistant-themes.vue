<template>
  <layout>

    <MetaInfo
      pageTitle = "Home assistant themes"
      pageDescription = "Customize your Home Assistant with our free to use themes. Follow the instructions for installation on Github."
      :pageImage = "'/website_cover_themes.png'"
    />

    <section class="section themes__banner section__blue blue-banner">
      <div class="devices__main-title title-with-bg">
        <h1><span>{{ $t('Home assistant themes') }}</span></h1>
      </div>

      <div class="blue-banner-layout themes__banner-layout layout layout__content">
          <g-image class="themes__banner-img"  quality="75" aria-hidden="true" alt=""  src="~/assets/images/themes/themes-banner.png"/>
        <div class="themes-banner-content">
          <p class="blue-banner__text">{{ $t('Customize your Home Assistant with our free to use themes. Follow the instructions for installation on') }} <u>{{ $t('Github') }}</u></p>
          <g-image quality="75" aria-hidden="true" alt="" src="@/assets/images/logos-and-assets/logo-banner-text.svg" />
        </div>
      </div>
    </section>

    <section class="themes">
      <div class="layout layout__mid grid-2">
        <g-link to="https://github.com/airalab/home-assistant-themes"><g-image class="themes__banner-img"  quality="75" aria-hidden="true" alt=""  src="~/assets/images/themes/robonomics-theme.png"/></g-link>
        <g-link to="https://github.com/airalab/home-assistant-themes"><g-image class="themes__banner-img"  quality="75" aria-hidden="true" alt=""  src="~/assets/images/themes/black-and-white-theme.png"/></g-link>
        <g-link to="https://github.com/airalab/home-assistant-themes"> <g-image class="themes__banner-img"  quality="75" aria-hidden="true" alt=""  src="~/assets/images/themes/neon-theme.png"/></g-link>
        <g-link to="https://github.com/airalab/home-assistant-themes"> <g-image class="themes__banner-img"  quality="75" aria-hidden="true" alt=""  src="~/assets/images/themes/dark-theme.png"/></g-link>
        <g-link to="https://github.com/airalab/home-assistant-themes"> <g-image class="themes__banner-img"  quality="75" aria-hidden="true" alt=""  src="~/assets/images/themes/neon-green-theme.png"/></g-link>
        <g-link to="https://github.com/airalab/home-assistant-themes"> <g-image class="themes__banner-img"  quality="75" aria-hidden="true" alt=""  src="~/assets/images/themes/ai-theme.png"/></g-link>
      </div>
    </section>
    
  </layout>
</template>

<script>
export default {

  components: {
    MetaInfo: () => import("~/components/MetaInfo.vue"),
  }

}
</script>

<style scoped>

  @media screen and (max-width: 800px) {
    .grid-2 {
      grid-template-columns: 1fr;
    }
  }

  @media screen and (max-width: 650px) {
    .themes__banner-layout {
      grid-template-columns: 1fr;
    }
  }
</style>