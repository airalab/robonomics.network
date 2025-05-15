<template>
  <div v-bind="$attrs" :class="classes" aria-label="3d model for Hikikomori" ref="modelContainer">

    <img class="img img-static" src="/images/hardware-2025/hikikomori/hikikomori.webp" />

    <div class="img">
      <img src="/images/hardware-2025/hikikomori/pink/Hikikomori-Layout-6.webp" alt="Hikikomori Layout 6" />
      <img v-if="showColor === 'yellow'" src="/images/hardware-2025/hikikomori/yellow/Hikikomori-Layout-6.webp" alt="Hikikomori Layout 6" />
      <img v-if="showColor === 'blue'" src="/images/hardware-2025/hikikomori/blue/Hikikomori-Layout-6.webp" alt="Hikikomori Layout 6" />
    </div>

    <img class="img" src="/images/hardware-2025/hikikomori/Hikikomori-Layout-5.webp" alt="Hikikomori Layout 5" />

    <img class="img" src="/images/hardware-2025/hikikomori/Hikikomori-Layout-4.webp" alt="Hikikomori Layout 4" />

    <div class="img">
      <img src="/images/hardware-2025/hikikomori/pink/Hikikomori-Layout-3.webp" alt="Hikikomori Layout 3" />
      <img v-if="showColor === 'yellow'" src="/images/hardware-2025/hikikomori/yellow/Hikikomori-Layout-3.webp" alt="Hikikomori Layout 3" />
      <img v-if="showColor === 'blue'" src="/images/hardware-2025/hikikomori/blue/Hikikomori-Layout-3.webp" alt="Hikikomori Layout 3" />
    </div>

    <div class="img">
      <img src="/images/hardware-2025/hikikomori/pink/Hikikomori-Layout-1.webp" alt="Hikikomori Layout 1" />
      <img v-if="showColor === 'yellow'" src="/images/hardware-2025/hikikomori/yellow/Hikikomori-Layout-1.webp" alt="Hikikomori Layout 1" />
      <img v-if="showColor === 'blue'" src="/images/hardware-2025/hikikomori/blue/Hikikomori-Layout-1.webp" alt="Hikikomori Layout 1" />
    </div>

    <img class="img" src="/images/hardware-2025/hikikomori/Hikikomori-Layout-2.webp" alt="Hikikomori Layout 2" />

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
  min-height: 484px;
  margin: 0 auto;
}

.model .img {
  display: block;
  width: 100%;
  --koef: 0;
  --opengap: 70px;
  transition: transform 0.5s ease-out;
}


.model .img:not(:first-child) {
  position: absolute;
  left: 0;
  top: 0;
}

.model .img:nth-child(1) {
  position: relative;
  z-index: 6;
}

.model .img img:nth-child(2), .model .img img:nth-child(5),  .model .img img:nth-child(6) {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.model .img:nth-child(2) {
  z-index: 9;
  transform: translateX(calc(var(--opengap) * var(--koef) * (5)));
}


.model .img:nth-child(3) {
  z-index: 9;
}

.model .img:nth-child(4) {
  z-index: 10;
  transform:translateX(calc(var(--opengap) * var(--koef) * (3)));
}

.model .img:nth-child(5) {
  z-index: 11;
  transform: translateX(calc(var(--opengap) * var(--koef) * (5)));
}

 .model .img:nth-child(6) {
  z-index: 11;
  transform:translateX(calc(var(--opengap) * var(--koef) * (7)));
 }

.model .img:nth-child(7) {
  z-index: 10;
  transform:translateX(calc(var(--opengap) * var(--koef) * (7)));
}

.model .img.img-static {
  z-index: 15;
  left: -20%;
}

.model-noanimation .img.img-static {
  left: 2%;
}

.model-noanimation {
  overflow: hidden;
  min-height: 430px;
}

@media screen and (max-width: 850px) {
  .model .img {
    --opengap: 50px !important;
  }

  .model .img.img-static {
    z-index: 15;
    left: 0%;
  }

  .model-noanimation {
    overflow: hidden;
    min-height: 364px;
  }
}

@media screen and (max-width: 650px) {
  .model .img {
    --opengap: 30px !important;
  }

  .model-noanimation {
    overflow: hidden;
    min-height: 470px;
  }
}

@media screen and (max-width: 400px) {
  .model .img {
    --opengap: 20px !important;
  }

  .model {
    max-width: 300px;
    min-height: 364px;
  }

  .model-noanimation {
    overflow: hidden;
    min-height: 425px;
  }
}
</style>
