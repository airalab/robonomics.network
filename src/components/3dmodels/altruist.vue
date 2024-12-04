<template>
  <div v-bind="$attrs" class="model" aria-label="3d model for outdoor sensor Altruist" v-in-viewport='{ margin: "-300px 0%" }'>

    <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-v-1.webp" immediate />
    <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-v-2.webp" immediate />
    <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-v-3.webp" immediate />
    <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-v-4.webp" immediate />
    <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-v-5.webp" immediate />
    <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-v-6.webp" immediate />
    <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-v-7.webp" immediate />
    <g-image src="~/assets/images/hardware-2025/altruist/Altruist-Layout-v-8.webp" immediate />

  </div>
</template>

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

    /*
    --height: 300px;
    width: 100%;
    height: var(--height);
    */

    width: 100%;
    /* max-width: 700px; */
  }

  .model img {
    animation: openmodel 0.5s ease-in-out forwards;
    --opengap: 60px;

    display: block;
    width: calc(100% - var(--opengap) * 8);
    /* height: 100%;
    object-fit: contain;
    width: auto; */
  }

  .model.above-viewport:not(.in-viewport) img {
    animation: closemodel 0.5s linear forwards;
  }

  .model img:not(:first-child) {
    position: absolute;
    left: 0;
    top: 0;
  }

  .model img:nth-child(1) {
    position: relative;
    z-index: 8;
    /* left: calc(var(--opengap) * var(--koef) * 0); */
  }

  .model img:nth-child(2) {
    z-index: 7;
    transform: translateX(calc(var(--opengap) * var(--koef) * 6));
    /* left: calc(var(--opengap) * var(--koef) * 6); */
  }

  .model img:nth-child(3) {
    z-index: 6;
    /* left: calc(var(--opengap) * var(--koef) * 1); */
    transform: translateX(calc(var(--opengap) * var(--koef) * 1));
  }

  .model img:nth-child(4) {
    z-index: 5;
    /* left: calc(var(--opengap) * var(--koef) * 2); */
    transform: translateX(calc(var(--opengap) * var(--koef) * 2));
  }

  .model img:nth-child(5) {
    z-index: 3;
    /* left: calc(var(--opengap) * var(--koef) * 3); */
    transform: translateX(calc(var(--opengap) * var(--koef) * 3));
  }

  .model img:nth-child(6) {
    z-index: 4;
    /* left: calc(var(--opengap) * var(--koef) * 4); */
    transform: translateX(calc(var(--opengap) * var(--koef) * 4));
  }

  .model img:nth-child(7) {
    z-index: 2;
    /* left: calc(var(--opengap) * var(--koef) * 5); */
    transform: translateX(calc(var(--opengap) * var(--koef) * 5));
  }

  .model img:nth-child(8) {
    z-index: 1;
    /* left: calc(var(--opengap) * var(--koef) * 6); */
    transform: translateX(calc(var(--opengap) * var(--koef) * 6));
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
