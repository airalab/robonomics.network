<template>

  <ul class="ul-nostyle">
    <li class="share" :class="classes" v-if="assets" v-for="(asset, key) in assets" :key="key">
      <ShareItem :asset=asset />
    </li>
  </ul>

</template>




<script>

import ShareItem from '~/components/ShareItem.vue'

export default {
  components: {
      ShareItem
    },

  props: {
    assets: { type: Array, default: () => [] },
    classes: ''
  }

}
</script>
