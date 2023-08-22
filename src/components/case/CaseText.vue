<template>
  <div class="case-page__text">
    <h2 v-if="title && !subtitle">{{title}}</h2>
    <h4 v-if="title && subtitle">{{title}}</h4>
    <p v-if="!multiply">{{ text }}</p>
    <div class="case-page__text-wrapper" v-else>
      <slot/>
    </div>
    <g-image immediate v-if="img" :src="require(`!!assets-loader!@/assets/images/cases/${img}`)" :alt="imgAlt" />
  </div>
</template>

<script>
export default {

  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    imgAlt: {
      type: String,
      default: 'image'
    },
    multiply: {
      type: Boolean,
      default: false
    },
    subtitle: {
      type: Boolean,
      default: false
    },
  }

}
</script>

<style>
  .case-page__text {
    margin-bottom: var(--space);
  }

  .case-page__text-wrapper p {
    margin-bottom: var(--space-text);
  }
</style>