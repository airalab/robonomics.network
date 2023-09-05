<template>
  <div class="youtube-embed">
    <div class="youtube-embed__wrapper">
      <div class="youtube-embed__container" :class="{'with-border': withBorder}" :style="{'width': width && width, 'height': height && height}">
          <iframe width="860" height="480" :src="src" :title="title" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    title: {
      type: String,
      default: "video title",
    },
    src: {
      type: String,
      default: "",
      required: true
    },
    withBorder: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: "auto"
    },
    height: {
      type: String,
      default: "0"
    }
  }

}
</script>

<style>

  .youtube-embed__container.with-border {
    border: 5px solid white;
    border-radius: 5px;
  }
</style>