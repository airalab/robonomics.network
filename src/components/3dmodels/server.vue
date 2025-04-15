<template>
  <div v-bind="$attrs" :class="classes" aria-label="3d model for outdoor sensor Altruist" ref="modelContainer">
    <div class="img">
      <img src="/images/hardware-2025/risc-v/pink/RiscV-Layout-2.webp" alt="Altruist Layout 2" />
      <img v-if="showColor === 'yellow'" src="/images/hardware-2025/risc-v/yellow/RiscV-Layout-2.webp" alt="Altruist Layout 2" />
      <img v-if="showColor === 'blue'" src="/images/hardware-2025/risc-v/blue/RiscV-Layout-2.webp" alt="Altruist Layout 2" />
    </div>

    <div class="img">
      <img src="/images/hardware-2025/risc-v/pink/RiscV-Layout-5.1.webp" alt="Altruist Layout 5.1" />
      <img v-if="showColor === 'yellow'" src="/images/hardware-2025/risc-v/yellow/RiscV-Layout-5.1.webp" alt="Altruist Layout 5.1" />
      <img v-if="showColor === 'blue'" src="/images/hardware-2025/risc-v/blue/RiscV-Layout-5.1.webp" alt="Altruist Layout 5.1" />
    </div>

    <img class="img" src="/images/hardware-2025/risc-v/RiscV-Layout-3.webp" alt="Altruist Layout 3" />


    <img class="img" src="/images/hardware-2025/risc-v/RiscV-Layout-4.webp" alt="Altruist Layout 4" />

    <div class="img">
      <img src="/images/hardware-2025/risc-v/pink/RiscV-Layout-1.webp" alt="Altruist Layout 1" />
      <img v-if="showColor === 'yellow'" src="/images/hardware-2025/risc-v/yellow/RiscV-Layout-1.webp" alt="Altruist Layout 1" />
      <img v-if="showColor === 'blue'" src="/images/hardware-2025/risc-v/blue/RiscV-Layout-1.webp" alt="Altruist Layout 1" />
    </div>

    <div class="img">
      <img src="/images/hardware-2025/risc-v/pink/RiscV-Layout-5.webp" alt="Altruist Layout 5" />
      <img v-if="showColor === 'yellow'" src="/images/hardware-2025/risc-v/yellow/RiscV-Layout-5.webp" alt="Altruist Layout 5" />
      <img v-if="showColor === 'blue'" src="/images/hardware-2025/risc-v/blue/RiscV-Layout-5.webp" alt="Altruist Layout 5" />
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
  colors: ['blue', 'yellow', 'pink']
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
  max-width: 500px;
  margin: 0 auto;
}

.model .img {
  display: block;
  width: 100%;
  --koef: 0;
  --opengap: 70px;
  transition: transform 0.5s ease-out;
}

.model .img:first-child {
  margin-bottom: calc(var(--opengap) * var(--koef) * 4);
}

.model .img:not(:first-child) {
  position: absolute;
  left: 0;
  top: 0;
}

.model .img:nth-child(1) {
  position: relative;
  z-index: 10;
}

.model .img img:nth-child(2), .model .img img:nth-child(5),  .model .img img:nth-child(6) {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.model .img img:nth-child(3) {
  z-index: 2;
}

.model .img:nth-child(2) {
  z-index: 11;
  transform: translateY(calc(var(--opengap) * var(--koef) * 4));
}

.model .img:nth-child(3) {
  z-index: 8;
  transform: translateY(calc(var(--opengap) * var(--koef) * 2));
}

.model .img:nth-child(4) {
  z-index: 6;
  transform: translateY(calc(var(--opengap) * var(--koef) * 2));
}

.model .img:nth-child(5),.model .img:nth-child(6) {
  z-index: 3;
  transform: translateY(calc(var(--opengap) * var(--koef) * 4));
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
