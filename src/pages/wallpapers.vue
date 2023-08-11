<template>
  <layout>
    <MetaInfo
      pageTitle = "Robonomics Wallpapers"
      pageDescription = "We created beautiful Robonomics themed wallpapers for different devices that you can use!"
      :pageImage = "'/website_cover_wallpapers.png'"
    />

    <section class="wallpapers">
      <div class="layout layout__content text-center container">
        <h1>{{$t('Robonomics wallpapers')}}</h1>

        <!-- regular wallpapers -->
        <section class="wallpapers-regular">
          <h2>{{ $t('Regular wallpapers') }}</h2>
          <div class="grid-3 animate-inside" v-in-viewport.once>
            <WallpapersItem v-for="item in wallpapers.regular" :key="item.id" :item="item"/>
          </div>
        </section>

        <section class="wallpapers-phone">
          <h2>{{ $t('Wallpapers for phones') }}</h2>
          <div class="grid-3 animate-inside" v-in-viewport.once>
            <WallpapersItem v-for="item in wallpapers.phone" :key="item.id" :item="item"/>
          </div>
        </section>

        <section class="wallpapers-phone">
          <h2>{{ $t('Hidden wallpapers') }}</h2>
          <div class="animate-inside" v-in-viewport.once>
            <WallpapersItem hidden v-for="item in wallpapers.hidden.wallpapers" :key="item.id" :item="item" :icons="wallpapers.hidden.icons"/>
          </div>
        </section>

      </div>
    </section>

  </layout>
</template>

<script>
  import items from '@/data/wallpapers.yaml'
export default {

  components: {
    MetaInfo: () => import("~/components/MetaInfo.vue"),
    WallpapersItem: () => import("~/components/WallpapersItem.vue"),
  },

  computed: {
    wallpapers() {
      return items;
    }
  }

}
</script>

<style scoped>
  .wallpapers h1 {
    padding-bottom: var(--space);
    border-bottom: 1px solid var(--color-gray-mid);
  }

  .wallpapers h2 {
    font-weight: 300;
  }

  .wallpapers section {
    margin-bottom: var(--space);
  }
</style>