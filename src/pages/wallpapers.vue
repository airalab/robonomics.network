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
            <WallpapersItem v-for="item in regular" :key="item.id" :item="item"/>
          </div>
        </section>

        <section class="wallpapers-phone">
          <h2>{{ $t('Wallpapers for phones') }}</h2>
          <div class="grid-3 animate-inside" v-in-viewport.once>
            <WallpapersItem v-for="item in phone" :key="item.id" :item="item"/>
          </div>
        </section>

        <section class="wallpapers-phone">
          <h2>{{ $t('Hidden wallpapers') }}</h2>
          <div class="animate-inside" v-in-viewport.once>
            <WallpapersItem hidden v-for="item in hidden.wallpapers" :key="item.id" :item="item" :icons="hidden.icons"/>
          </div>
        </section>

      </div>
    </section>

  </layout>
</template>

<script>
export default {

  components: {
    MetaInfo: () => import("~/components/MetaInfo.vue"),
    WallpapersItem: () => import("~/components/wallpapers/WallpapersItem.vue"),
  },

  data() {
    return {
      regular: [
        {
          id: 0,
          text: this.$t('Robot and electrics sheep artboard'),
          link: '/wallpapers/regular/robot-and-electrics-sheep-artboard.jpg',
        },
        {
          id: 1,
          text: this.$t('Robot and apple artboard'),
          link: '/wallpapers/regular/robot-and-apple-artboard.jpg',
        },
        {
          id: 2,
          text: this.$t('Robot and cosmonaut artboard'),
          link: '/wallpapers/regular/robot-and-cosmonaut-artboard.jpg',
        },
        {
          id: 3,
          text: this.$t('Robot and cat artboard'),
          link: '/wallpapers/regular/robot-and-cat-artboard.jpg',
        },
        {
          id: 4,
          text: this.$t('Space travelers artboard'),
          link: '/wallpapers/regular/space-travelers-artboard.jpg',
        },
        {
          id: 5,
          text: this.$t('Coloured astronaut artboard'),
          link: '/wallpapers/regular/coloured-astronaut-artboard.jpg',
          image: 'coloured-astronaut-artboard.jpg'
        },
        {
          id: 6,
          text: this.$t('Black and white astronaut artboard'),
          link: '/wallpapers/regular/bw-astronaut-artboard.jpg'
        }
      ],
      phone: [
        {
          id: 0,
          text: this.$t('Robot and electrics sheep artboard'),
          link: '/wallpapers/phone/robot-and-electrics-sheep-artboard.jpg',
        },
        {
          id: 1,
          text: this.$t('Robot and apple artboard'),
          link: '/wallpapers/phone/robot-and-apple-artboard.jpg',
        },
        {
          id: 2,
          text: this.$t('Robot and cosmonaut artboard'),
          link: '/wallpapers/phone/robot-and-cosmonaut-artboard.jpg',
        },
        {
          id: 3,
          text: this.$t('Robot and cat artboard'),
          link: '/wallpapers/phone/robot-and-cat-artboard.jpg',
        },
        {
          id: 4,
          text: this.$t('Space travelers artboard'),
          link: '/wallpapers/phone/space-travelers-artboard.jpg',
        },
        {
          id: 5,
          text: this.$t('Coloured astronaut artboard'),
          link: '/wallpapers/phone/coloured-astronaut-artboard.jpg',
        },
        {
          id: 6,
          text: this.$t('Black and white astronaut artboard'),
          link: '/wallpapers/regular/bw-astronaut-artboard.jpg'
        }
      ],
      hidden: {
        wallpapers: [
          {
            id: 0,
            text: this.$t('Black and white astronaut artboard'),
            link: '/wallpapers/hidden/bw-astronaut-artboard.jpg'
          }
        ],
        icons: [
          {
            id: 0,
            type: this.$t('icons for macos'),
            link: '/wallpapers/hidden/icons-for-os.zip',
          },
          {
            id: 1,
            type: this.$t('icons for windows'),
            link: '/wallpapers/hidden/icons-for-windows.zip',
          }
        ]
      }
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