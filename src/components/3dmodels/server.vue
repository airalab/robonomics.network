<template>
  <div v-bind="$attrs" :class="classes" aria-label="3d model for outdoor sensor Altruist" ref="modelContainer">
    <div class="img">
      <img src="/hardware-2025/risc-v/pink/RiscV-Layout-2.webp" alt="RiscV Layout 2" />
      <img v-if="showColor === 'yellow'" src="/hardware-2025/risc-v/yellow/RiscV-Layout-2.webp" alt="RiscV Layout 2" />
      <img v-if="showColor === 'blue'" src="/hardware-2025/risc-v/blue/RiscV-Layout-2.webp" alt="RiscV Layout 2" />
    </div>

    <div class="img">
      <img src="/hardware-2025/risc-v/pink/RiscV-Layout-1.webp" alt="RiscV Layout 1" />
      <img v-if="showColor === 'yellow'" src="/hardware-2025/risc-v/yellow/RiscV-Layout-1.webp" alt="RiscV Layout 1" />
      <img v-if="showColor === 'blue'" src="/hardware-2025/risc-v/blue/RiscV-Layout-1.webp" alt="RiscV Layout 1" />
    </div>

    <img class="img" src="/hardware-2025/risc-v/RiscV-Layout-3.webp" alt="RiscV Layout 3" />


    <img class="img" src="/hardware-2025/risc-v/RiscV-Layout-4.webp" alt="RiscV Layout 4" />

    <div class="img">
      <img src="/hardware-2025/risc-v/pink/RiscV-Layout-5.webp" alt="RiscV Layout 5" />
      <img v-if="showColor === 'yellow'" src="/hardware-2025/risc-v/yellow/RiscV-Layout-5.webp" alt="RiscV Layout 5" />
      <img v-if="showColor === 'blue'" src="/hardware-2025/risc-v/blue/RiscV-Layout-5.webp" alt="RiscV Layout 5" />
    </div>

  </div>
</template>

<script>

export default {
  props: {
    noanimation: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      scrollProgress: 0,
      colors: ['blue', 'pink', 'yellow'],
      colorIndex: 0,
      cycleCount: 0,
      maxCycles: 5,
      colorChangeDelay: 500, // Задержка в миллисекундах
      lastColorChangeTime: 0,
      hasEnteredViewport: false,
      imagesLoaded: false
    };
  },

  computed: {
    showColor() {
      return this.colors[this.colorIndex];
    },
    classes() {
      return {
        model: true,
        'model-noanimation': this.noanimation
      };
    }
  },

  watch: {
    imagesLoaded(newValue) {
      if (newValue) {
        if (!this.noanimation) {
        window.addEventListener('scroll', this.updateScrollProgress);
      } else {
        setTimeout(() => {
          this.checkViewport();
          window.addEventListener('scroll', this.checkViewport);
        }, 1000);
      }
      }
    }
  },

  mounted() {
    this.checkImagesLoaded();
  },

  beforeDestroy() {
    if (!this.noanimation) {
      window.removeEventListener('scroll', this.updateScrollProgress);
    } else {
      window.removeEventListener('scroll', this.checkViewport);
    }
  },

  methods: {
    checkViewport() {
      
      if (this.noanimation && !this.hasEnteredViewport) {
        const element = this.$refs.modelContainer;
        if (element.classList.contains('in-viewport')) {
          this.hasEnteredViewport = true;
          this.startColorCycle();
        }
      }
    },

    startColorCycle() {
      if (this.cycleCount < this.maxCycles) {
        this.colorIndex = (this.colorIndex + 1) % this.colors.length;
        if (this.colorIndex === 0) {
          this.cycleCount++;
        }
        setTimeout(this.startColorCycle, this.colorChangeDelay);
      }
    },

    updateScrollProgress() {
      const rect = this.$refs.modelContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const lowerQuarterScreen = windowHeight * 0.55;
      const maxScroll = windowHeight + rect.height;

      if (rect.top > lowerQuarterScreen) {
        this.scrollProgress = 0;
      } else {
        const scrollPos = Math.min(Math.max(windowHeight - rect.top, 0), maxScroll);
        this.scrollProgress = Math.max(0, Math.min(1, (scrollPos - lowerQuarterScreen) / (maxScroll - lowerQuarterScreen)));
      }

      const isVisible = rect.top < windowHeight && rect.bottom > 0;
      const now = Date.now();

      if (isVisible && this.cycleCount < this.maxCycles && now - this.lastColorChangeTime > this.colorChangeDelay) {
        this.colorIndex = (this.colorIndex + 1) % this.colors.length;
        if (this.colorIndex === 0) {
          this.cycleCount++;
        }
        this.lastColorChangeTime = now;
      }

      if (this.cycleCount >= this.maxCycles) {
        this.colorIndex = 0; 
      }

      if (!this.noanimation) {
        const images = this.$refs.modelContainer.querySelectorAll('.model:not(.model-noanimation) .img');
        images.forEach(img => {
          img.style.setProperty('--koef', this.scrollProgress);
        });
      }
    },

    checkImagesLoaded() {
      const images = this.$refs.modelContainer.querySelectorAll('img');
      let loadedCount = 0;

      images.forEach(img => {
        if (img.complete) {
          loadedCount++;
        } else {
          img.onload = () => {
            loadedCount++;
            if (loadedCount === images.length) {
              this.imagesLoaded = true;
            }
          };
        }
      });

      if (loadedCount === images.length) {
        this.imagesLoaded = true;
      }
    }
  }
};
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

.model .img img:nth-child(2), .model .img img:nth-child(5) {
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
  z-index: 8;
  transform: translateY(calc(var(--opengap) * var(--koef) * 2));
}

.model .img:nth-child(4) {
  z-index: 6;
  transform: translateY(calc(var(--opengap) * var(--koef) * 2));
}

.model .img:nth-child(5) {
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
