<template>
  <div class="case-page__text">
    <div class="layout__mid img-top" v-if="img && imageOutside">
      <g-image quality="75" :class="imgClasses" v-if="img && imageOutside && imageTop" :src="require(`!!assets-loader!@/assets/images/cases/${img}`)" :alt="imgAlt" />
    </div>
    <div class="case-page__text-container layout__text">
      <g-image quality="75"  :class="imgClasses" v-if="img && !imageOutside && imageTop" :src="require(`!!assets-loader!@/assets/images/cases/${img}`)" :alt="imgAlt" />

      <h2 v-if="title && !subtitle">{{title}}</h2>
      <h4 v-if="title && subtitle">{{title}}</h4>
      <p v-if="!multiple">{{ text }}</p>
      <div class="case-page__text-wrapper" v-else>
        <slot/>
      </div>
      <g-image quality="75"  :class="imgClasses"  v-if="img && !imageOutside && !imageTop" :src="require(`!!assets-loader!@/assets/images/cases/${img}`)" :alt="imgAlt" />
    </div>
    <div class="layout__mid layout img-bottom" v-if="imageOutside && !imageTop">
      <g-image quality="75" :class="imgClasses" v-if="img && imageOutside && !imageTop" :src="require(`!!assets-loader!@/assets/images/cases/${img}`)" :alt="imgAlt" />
    </div>
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
    multiple: {
      type: Boolean,
      default: false
    },
    subtitle: {
      type: Boolean,
      default: false
    },
    imageOutside: {
      type: Boolean,
      default: false
    },
    imageTop: {
      type: Boolean,
      default: false
    },
    imgClasses: {
      type: String,
      default: ''
    }
  }

}
</script>

<style>
  .case-page__text {
    margin-bottom: calc(var(--space) * 3);
  }

  .case-page__text-wrapper p {
    margin-bottom: var(--space-text);
  }

  .case-page__text-container img {
    display: block;
    margin: 0 auto;
  }

  .case-page__text .img-top {
    margin: 0 auto;
    margin-bottom: calc(var(--space) * 0.7);
  }

  .case-page__text .bg {
    padding: var(--space);
    padding-right: 0;
    width: 100%;
    background-color: #fff;
    margin: 0 auto;
    margin-top: calc(var(--space) * 0.7);
  }
  .img-bottom {
    padding: 0;
  }

</style>