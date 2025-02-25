<template>
  <div v-bind="$attrs" :class="classes" aria-label="3d model for outdoor sensor Altruist" ref="modelContainer">
    <g-image src="~/assets/images/hardware-2025/altruist/new-yellow/Altruist-Layout-1.webp" immediate />
    <g-image src="~/assets/images/hardware-2025/altruist/new-yellow/Altruist-Layout-2.webp" immediate />
    <g-image src="~/assets/images/hardware-2025/altruist/new-yellow/Altruist-Layout-3.webp" immediate />
    <g-image src="~/assets/images/hardware-2025/altruist/new-yellow/Altruist-Layout-4.webp" immediate />
    <g-image src="~/assets/images/hardware-2025/altruist/new-yellow/Altruist-Layout-5.webp" immediate />
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
      scrollProgress: 0
    };
  },

  computed: {
    classes() {
      return {
        model: true,
        'model-noanimation': this.noanimation
      };
    }
  },

  mounted() {
    window.addEventListener('scroll', this.updateScrollProgress);
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.updateScrollProgress);
  },

  methods: {
    updateScrollProgress() {
      const rect = this.$refs.modelContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const lowerQuarterScreen = windowHeight * 0.75;
      const maxScroll = windowHeight + rect.height;
      
      if (rect.top > lowerQuarterScreen) {
        this.scrollProgress = 0;
      } else {
        const scrollPos = Math.min(Math.max(windowHeight - rect.top, 0), maxScroll);
        this.scrollProgress = Math.max(0, Math.min(1, (scrollPos - lowerQuarterScreen) / (maxScroll - lowerQuarterScreen)));
      }
      
      if (!this.noanimation) {
        const images = this.$refs.modelContainer.querySelectorAll('.model:not(.model-noanimation) img');
        images.forEach(img => {
          img.style.transition = 'transform 0.5s ease-out';
          img.style.setProperty('--koef', this.scrollProgress);
        });
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
  max-width: 400px;
  margin: 0 auto;
}

.model img {
  display: block;
  width: 100%;
  --koef: 0;
  --opengap: 50px;
  transition: transform 0.5s ease-out;
}

.model img:first-child {
  margin-bottom: calc(var(--opengap) * var(--koef) * 5);
}

.model img:not(:first-child) {
  position: absolute;
  left: 0;
  top: 0;
}

.model img:nth-child(1) {
  position: relative;
  z-index: 7;
}

.model img:nth-child(2) {
  z-index: 7;
  transform: translateY(calc(var(--opengap) * var(--koef) * 4));
}

.model img:nth-child(3) {
  z-index: 6;
  transform: translateY(calc(var(--opengap) * var(--koef) * 3));
}

.model img:nth-child(4) {
  z-index: 5;
  transform: translateY(calc(var(--opengap) * var(--koef) * 4));
}

.model img:nth-child(5) {
  z-index: 3;
  transform: translateY(calc(var(--opengap) * var(--koef) * 3));
}

@media screen and (max-width: 850px) {
  .model img {
    --opengap: 50px !important;
  }
}

@media screen and (max-width: 650px) {
  .model img {
    --opengap: 30px !important;
  }
}

@media screen and (max-width: 400px) {
  .model img {
    --opengap: 20px !important;
  }
}
</style>
