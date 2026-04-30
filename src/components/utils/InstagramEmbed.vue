<template>
  <div class="instagram">
    <iframe
      v-if="embedUrl"
      :src="embedUrl"
      frameborder="0"
      scrolling="no"
      allowtransparency="true"
      allowfullscreen
      loading="lazy"
    />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});

const embedUrl = computed(() => {
  if (!props.url) return null;

  const clean = props.url
    .split("?")[0] // 👈 remove ?img_index=3
    .replace(/\/$/, "")
    .replace("/reels/", "/p/")
    .replace("/reel/", "/p/");

  return `${clean}/embed`;
});
</script>

<style scoped>
.instagram {
  position: relative;
  width: 100%;
  max-width: 540px;
  margin: 32px auto;
  border-radius: 16px;
  overflow: hidden;

  /* fancy look */
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* aspect ratio */
.instagram::before {
  content: "";
  display: block;
  padding-top: 125%;
}

iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
