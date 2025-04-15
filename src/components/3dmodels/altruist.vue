<template>
  <div v-bind="$attrs" :class="classes" aria-label="3d model for outdoor sensor Altruist" ref="modelContainer">
    <div class="img">
      <img src="/images/hardware-2025/altruist/pink/Altruist-Layout-1.webp" alt="Altruist Layout 1" />
      <img v-if="showColor === 'yellow'" src="/images/hardware-2025/altruist/yellow/Altruist-Layout-1.webp" alt="Altruist Layout 1" />
      <img v-if="showColor === 'blue'" src="/images/hardware-2025/altruist/blue/Altruist-Layout-1.webp" alt="Altruist Layout 1" />
    </div>

    <div class="img">
      <img src="/images/hardware-2025/altruist/pink/Altruist-Layout-2.webp" alt="Altruist Layout 2" />
      <img v-if="showColor === 'yellow'" src="/images/hardware-2025/altruist/yellow/Altruist-Layout-2.webp" alt="Altruist Layout 2" />
      <img v-if="showColor === 'blue'" src="/images/hardware-2025/altruist/blue/Altruist-Layout-2.webp" alt="Altruist Layout 2" />
    </div>

    <img class="img" v-if="!noanimation" src="/images/hardware-2025/altruist/Altruist-Layout-3.webp" alt="Altruist Layout 3" />

    <div class="img">
      <img src="/images/hardware-2025/altruist/pink/Altruist-Layout-4.webp" alt="Altruist Layout 4" />
      <img v-if="showColor === 'yellow'" src="/images/hardware-2025/altruist/yellow/Altruist-Layout-4.webp" alt="Altruist Layout 4" />
      <img v-if="showColor === 'blue'" src="/images/hardware-2025/altruist/blue/Altruist-Layout-4.webp" alt="Altruist Layout 4" />
    </div>

  </div>
</template>


<script setup>
import { useModelEffects } from '../../composables/useModelEffects';

const props = defineProps({
  noanimation: {
    type: Boolean,
    default: false
  }
});

const {
  scrollProgress,
  colors,
  colorIndex,
  cycleCount,
  maxCycles,
  colorChangeDelay,
  lastColorChangeTime,
  hasEnteredViewport,
  imagesLoaded,
  showColor,
  classes,
  checkViewport,
  startColorCycle,
  updateScrollProgress,
  checkImagesLoaded,
  modelContainer
} = useModelEffects(props, {
  colors: ['pink', 'yellow', 'blue']
});

</script>


<style scoped>
@property --koef {
  syntax: '<number>';
  initial-value: 0;
  inherits: false;
}

.model {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.model .img {
  display: block;
  width: 100%;
  --koef: 0;
  --opengap: 50px;
  transition: transform 0.5s ease-out;
}

.model .img:first-child {
  margin-bottom: calc(var(--opengap) * var(--koef) * 5);
}

.model .img:not(:first-child) {
  position: absolute;
  left: 0;
  top: 0;
}

.model .img:nth-child(1) {
  position: relative;
  z-index: 7;
}

.model .img img:nth-child(2), .model .img img:nth-child(3) {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.model .img img:nth-child(3) {
  z-index: 2;
}

.model .img:nth-child(2) {
  z-index: 7;
  transform: translateY(calc(var(--opengap) * var(--koef) * 4));
}

.model .img:nth-child(3) {
  z-index: 6;
  transform: translateY(calc(var(--opengap) * var(--koef) * 3));
}

.model .img:nth-child(4) {
  z-index: 5;
  transform: translateY(calc(var(--opengap) * var(--koef) * 4));
}

.model .img:nth-child(5) {
  z-index: 3;
  transform: translateY(calc(var(--opengap) * var(--koef) * 3));
}

@media screen and (max-width: 850px) {
  .model .img {
    --opengap: 50px !important;
  }
}

@media screen and (max-width: 650px) {
  .model .img {
    --opengap: 30px !important;
  }
}

@media screen and (max-width: 400px) {
  .model .img {
    --opengap: 20px !important;
  }
}
</style>
