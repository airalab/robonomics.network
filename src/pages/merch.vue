<template>
  
  <layout :title="$t('Robonomics merch')" >

    <MetaInfo
      pageTitle = "Robonomics merch"
      pageDescription = "We created shops on the biggest online markets for artists, check it out and find t-shirts, long sleeves, hoodies, shower curtains, pillows, blankets and other useful stuff."
      :pageImage = "'/website_cover_merch.png'"
    />

    <section class="layout">
      <!-- <g-image class="bannerimg" aria-hidden="true" src="~/assets/images/merch/banner.webp"/> -->

      <p class="layout layout__text">{{ $t('Grab your merch with unique Robonomics art painted by our gorgeous girls. We created shops on the biggest online markets for artists, check it out and find t-shirts, long sleeves, hoodies, shower curtains, pillows, blankets and other useful stuff.') }}</p>

      <section class="grid-3">
        <g-link class="oldy" v-for="store in stores" :key="store.id" :to="store.link" :data-geo="store.locale">
          <g-image :aria-label="store.label" :src="require(`!!assets-loader!@/assets/images/merch/${store.img}`)"/>
        </g-link>
      </section>
    </section>

  </layout>

</template>

<script>

export default {

  components: {
    MetaInfo: () => import("~/components/MetaInfo.vue")
  },

  data() {
    return {
      stores: [
        {
          id: 0,
          link: 'https://robonomics.threadless.com/',
          img: 'threadless.webp',
          locale: 'us',
          label: 'Threadless Marketplace (USA)'
        },
        {
          id: 1,
          link: 'https://www.redbubble.com/people/roboxart/shop?artistUserName=roboxart&iaCode=u-clothing',
          img: 'redbubble.webp',
          locale: 'eu',
          label: 'Redbubble Marketplace (Europe)'
        },
        {
          id: 2,
          link: 'https://robonomics.printdirect.ru/',
          img: 'printdirect.webp',
          locale: 'ru',
          label: 'Printdirect Marketplace (Russia)'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .layout {
    text-align: center;
    font-variation-settings: var(--font-flex-medium);
    margin-bottom: var(--space-section);
  }

  .bannerimg {
    display: inline-block;
    max-width: 300px;
  }

  .grid-3 {
    margin: var(--space) 0;
    gap: calc(var(--space) * 2);
  }

  .oldy {
    --oldy-padding: calc(var(--space) * 2);
    display: flex;
    align-content: center;
    justify-content: center;
  }

  .oldy img {
    display: block;
    max-height: 200px;
    object-fit: contain;
    width: 100%;
  }

  .oldy:before {
    content: attr(data-geo);
  }
</style>