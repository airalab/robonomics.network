<template>
  <a v-if="!hidden" :href="item.link" class="wallpapers__link oldy dark oldy__link" download>
    <div class="wallpapers__img">
      <g-image quality="75" alt="wallpaper" :src="item.link" />
    </div>
    <h3>{{ item.text }}</h3>
  </a>
  <div v-else class="oldy dark oldy__link">
    <a :href="item.link" class="wallpapers__link" download>
      <div class="wallpapers__img">
        <g-image quality="75" alt="wallpaper" :src="item.link" />
      </div>
      <h3>{{ item.text }}</h3>
    </a>
    <div class="wallpapers__icons">
      <h4>{{ $t('Additional icons for the wallpaper:') }}</h4>
      <div class="wallpapers__icons-wrapper">
        <a :href="icon.link" download v-for="icon in icons" :key="icon.key">
          {{ icon.type }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    item: {
      type: Object,
      default: null,
      required: true
    },
    hidden: {
      type: Boolean,
      default: false,
    },
    icons: {
      required: false
    }
  }

}
</script>

<style scoped>

  .wallpapers__icons {
    margin-top: var(--space);
  }

  .wallpapers__icons h4 {
    font-weight: 300;
    margin-bottom: calc(var(--space) * 0.5)
  }

  .wallpapers__icons-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .wallpapers__icons-wrapper a:first-of-type {
    margin-right: var(--space);
  }

</style>