<template>
  <div class="youtube-embed">
    <div class="youtube-embed__wrapper">
      <div class="youtube-embed__container">
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
  }

}
</script>

<style>

</style>