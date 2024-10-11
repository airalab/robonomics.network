<template>
  
  <layout :withGap="false">

    <MetaInfo
      pageTitle = "Robonomics merch"
      pageDescription = "We created shops on the biggest online markets for artists, check it out and find t-shirts, long sleeves, hoodies, shower curtains, pillows, blankets and other useful stuff."
      :pageImage = "'/website_cover_merch.png'"
    />

    <section class="merch__banner section__blue blue-banner">
      <div class="merch__main-title title-with-bg">
        <h1><span>{{ $t('Robonomics merch') }}</span></h1>
      </div>

      <div class="blue-banner-layout layout layout__content">
          <g-image class="merch__banner-img"  quality="75" aria-hidden="true" alt=""  src="~/assets/images/merch/merch-banner-girls.png"/>
        <div class="merch-banner-content">
          <p class="blue-banner__text">{{ $t('Grab your merch with unique Robonomics art painted by our gorgeous girls. We created shops on the biggest online markets for artists, check it out and find t-shirts, long sleeves, hoodies, shower curtains, pillows, blankets and other useful stuff.') }} </p>
          <g-image quality="75" aria-hidden="true" alt="" src="@/assets/images/logos-and-assets/logo-banner-text.svg" />
        </div>
      </div>
    </section>

    <section class="merch-stores">
      <div class="layout layout__mid grid-3">
        <ShopItem
          v-for="store in stores" 
          :key="store.id" 
          :link="store.link"
          :image="store.img"
          :locale="store.locale"
        />
      </div>
    </section>



  </layout>

</template>

<script>

export default {

  components: {
    MetaInfo: () => import("~/components/MetaInfo.vue"),
    ShopItem: () => import("~/components/shop/ShopItem.vue"),
  },

  data() {
    return {
      stores: [
        {
          id: 0,
          link: 'https://robonomics.threadless.com/',
          img: 'threadless.png',
          locale: 'us'
        },
        {
          id: 1,
          link: 'https://www.redbubble.com/people/roboxart/shop?artistUserName=roboxart&iaCode=u-clothing',
          img: 'redbubble.png',
          locale: 'eu'
        },
        {
          id: 2,
          link: 'https://robonomics.printdirect.ru/',
          img: 'printdirect.png',
          locale: 'ru'
        }
      ]
    }
  }
}
</script>

<style scoped>

.blue-banner-layout {
  padding-bottom: 0;
}
.merch__banner-img {
  height: 104%;
}

.merch-stores {
  padding-bottom: calc( var(--space) * 3);
}

@media screen and (max-width: 780px) {

  .blue-banner-layout {
    grid-template-columns: 1fr;
  }

  .merch-banner-content {
    order: -1;
  }
}

</style>