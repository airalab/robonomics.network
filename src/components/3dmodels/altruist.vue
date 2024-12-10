<template>
  <div v-bind="$attrs" :class="classes" aria-label="3d model for outdoor sensor Altruist" v-in-viewport='{ margin: "-300px 0%" }'>

    <template v-if="vertical">
      <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-1.webp" immediate />
      <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-2.webp" immediate />
      <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-3.webp" immediate />
      <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-4.webp" immediate />
      <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-5.webp" immediate />
      <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-6.webp" immediate />
      <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-7.webp" immediate />
      <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-8.webp" immediate />
    </template>
    <template v-else>
      <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-v-1.webp" immediate />
      <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-v-2.webp" immediate />
      <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-v-3.webp" immediate />
      <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-v-4.webp" immediate />
      <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-v-5.webp" immediate />
      <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-v-6.webp" immediate />
      <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-v-7.webp" immediate />
      <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-v-8.webp" immediate />
    </template>

  </div>
</template>

<script>
    export default {
        props: {
            vertical: {
                type: Boolean
            },
            noanimation: {
              type: Boolean,
              default: false
            }
        },

        computed: {
          classes() {
            return {
              [`model`]: true,
              [`model-vertical`]: this.vertical,
              [`model-gorizontal`]: !this.vertical,
              [`model-noanimation`]: this.noanimation,
            };
          },
        }
    }
</script>

<style scoped>

  
  @property --koef {
    syntax: '<number>';
    initial-value: 0;
    inherits: false;
  }

  @keyframes openmodel {
    /* 0% {--koef: 0} */
    100% {--koef: 1}
  }

   @keyframes closemodel {
    0% {--koef: 1}
    100% {--koef: 0}
  }

  .model {
    position: relative;
    width: 100%;
  }

  .model img {
    display: block;
  }

  .model:not(.model-noanimation) img {
    animation: openmodel 0.5s ease-in-out forwards;
    --opengap: 60px;
  }

  .model.model-noanimation img {
    --opengap: 20px;
    --koef: 1;
  }

  .model.above-viewport:not(.in-viewport):not(.model-noanimation) img {
    animation: closemodel 0.5s linear forwards;
  }

  .model-gorizontal img {
    width: calc(100% - var(--opengap) * 8);
  }

  .model-vertical img:first-child {
    margin-bottom: calc(var(--opengap) * var(--koef) * 6);
  }

  .model-vertical img {
    width: 100%;
  }

  .model img:not(:first-child) {
    position: absolute;
    left: 0;
    top: 0;
  }

  .model img:nth-child(1) {
    position: relative;
    z-index: 8;
  }

  .model img:nth-child(2) {
    z-index: 7;
  }

  .model-gorizontal img:nth-child(2) {
    transform: translateX(calc(var(--opengap) * var(--koef) * 6));
  }

  .model-vertical img:nth-child(2) {
    transform: translateY(calc(var(--opengap) * var(--koef) * 6));
  }

  .model img:nth-child(3) {
    z-index: 6;
  }

  .model-gorizontal img:nth-child(3) {
    transform: translateX(calc(var(--opengap) * var(--koef) * 1));
  }

  .model-vertical img:nth-child(3) {
    transform: translateY(calc(var(--opengap) * var(--koef) * 1));
  }

  .model img:nth-child(4) {
    z-index: 5;
  }

  .model-gorizontal img:nth-child(4) {
    transform: translateX(calc(var(--opengap) * var(--koef) * 2));
  }

  .model-vertical img:nth-child(4) {
    transform: translateY(calc(var(--opengap) * var(--koef) * 2));
  }

  .model img:nth-child(5) {
    z-index: 3;
  }

  .model-gorizontal img:nth-child(5) {
    transform: translateX(calc(var(--opengap) * var(--koef) * 3));
  }

  .model-vertical img:nth-child(5) {
    transform: translateY(calc(var(--opengap) * var(--koef) * 3));
  }

  .model img:nth-child(6) {
    z-index: 4;
  }

  .model-gorizontal img:nth-child(6) {
    transform: translateX(calc(var(--opengap) * var(--koef) * 4));
  }

  .model-vertical img:nth-child(6) {
    transform: translateY(calc(var(--opengap) * var(--koef) * 4));
  }

  .model img:nth-child(7) {
    z-index: 2;
  }

  .model-gorizontal img:nth-child(7) {
    transform: translateX(calc(var(--opengap) * var(--koef) * 5));
  }

  .model-vertical img:nth-child(7) {
    transform: translateY(calc(var(--opengap) * var(--koef) * 5));
  }

  .model img:nth-child(8) {
    z-index: 1;
  }

  .model-gorizontal img:nth-child(8) {
    transform: translateX(calc(var(--opengap) * var(--koef) * 6));
  }

  .model-vertical img:nth-child(8) {
    transform: translateY(calc(var(--opengap) * var(--koef) * 6));
  }

  /* + media query fallback */
  @media screen and (max-width: 850px) {
    .model img {
      --opengap: 50px;
    }
  }

  @media screen and (max-width: 650px) {
    .model img {
      --opengap: 30px;
    }
  }

  @media screen and (max-width: 400px) {
    .model img {
      --opengap: 20px;
    }
  }
  /* - media query fallback */

  /* + container query */
  .model {
    container-name: model;
    container-type: inline-size;
  }

  @container model (width < 800px) {
    .model img {
      --opengap: 50px;
    }
  }

  @container model (width < 600px) {
    .model img {
      --opengap: 40px;
    }
  }

  @container model (width < 450px) {
    .model img {
      --opengap: 30px;
    }
  }

  @container model (width < 350px) {
    .model img {
      --opengap: 20px;
    }
  }
  /* - container query */

</style>
