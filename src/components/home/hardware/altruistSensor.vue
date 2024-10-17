<template>
  <div class="altruist-model" ref="model2">
    <div data-part="1" class="altruist-model-part altruist-model-part-1" ref="part1">
      <g-image src="~/assets/images/hardware-2025/altruist-model-1.png" quality="75" immediate />
    </div>
    <div data-part="8" class="altruist-model-part altruist-model-part-2" ref="part2">
      <g-image src="~/assets/images/hardware-2025/altruist-model-2.png" quality="75" immediate />
    </div>
    <div data-part="3" class="altruist-model-part altruist-model-part-3" ref="part3">
      <g-image src="~/assets/images/hardware-2025/altruist-model-3.png" quality="75" immediate />
    </div>
    <div data-part="4" class="altruist-model-part altruist-model-part-4" ref="part4">
      <g-image src="~/assets/images/hardware-2025/altruist-model-4.png" quality="75" immediate />
    </div>
    <div data-part="5" class="altruist-model-part altruist-model-part-5" ref="part5">
      <g-image src="~/assets/images/hardware-2025/altruist-model-5.png" quality="75" immediate />
    </div>
    <div data-part="6" class="altruist-model-part altruist-model-part-6" ref="part6">
      <g-image src="~/assets/images/hardware-2025/altruist-model-6.png" quality="75" immediate />
    </div>
    <div data-part="7" class="altruist-model-part altruist-model-part-7" ref="part7">
      <g-image src="~/assets/images/hardware-2025/altruist-model-7.png" quality="75" immediate />
    </div>
    <div data-part="8" class="altruist-model-part altruist-model-part-8" ref="part8">
      <g-image src="~/assets/images/hardware-2025/altruist-model-8.png" quality="75" immediate />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      observer: null,
      scrollPos: 0,
      maxScroll: 0,
      parts: [],      
      speed: 25, 
      distance: 60,      // Distance between parts
      initialOffset: 0,  // Set initial offset for assembly
      randomHeight: 150
    };
  },

  methods: {
    callback(entries) {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          window.addEventListener('scroll', this.throttledScrollHandler);
        } else {
          window.removeEventListener('scroll', this.throttledScrollHandler);
        }
      });
    },

    checkHeight(container) {
      const absoluteElements = document.querySelectorAll('.altruist-model-part');
      
      let maxHeight = 0;
      
      absoluteElements.forEach(element => {
        const elementBottom = element.offsetTop + element.offsetHeight;
        if (elementBottom > maxHeight) {
          maxHeight = elementBottom;
        }
      });

      container.style.height = maxHeight - this.randomHeight + 'px';
    },

    updatePartPositions() {
      const scrollPosition = window.scrollY; // Current scroll position
      const maxScroll = document.body.scrollHeight - window.innerHeight; // Maximum scroll value
      const scrollRatio = Math.min(1, Math.max(0, scrollPosition / maxScroll)); // Normalize scroll position

      // Initialize variable to track the maximum top position of parts
      let maxTopPosition = this.initialOffset;

      // Calculate new positions for each part based on the scroll ratio
      this.parts.forEach((part) => {
        const index = part.getAttribute('data-part');
        // Use a non-linear easing function for a smoother effect
        const easeInOut = scrollRatio < 0.5 
          ? (2 * scrollRatio ** 2.5) 
          : (1 - (2 * (1 - scrollRatio) ** this.speed));

        // Calculate new top position based on easing function
        const newTopPosition = this.initialOffset + (index * this.distance) * (1 - easeInOut * this.speed);
        part.style.top = `${newTopPosition}px`; // Set new top position in pixels

        // Update the max top position if the current one is greater
        if (newTopPosition > maxTopPosition) {
          maxTopPosition = newTopPosition;
        }
        
        this.checkHeight(this.$refs.model2)
      });

    },

    throttle(fn, wait) {
      let lastTime = 0;
      return (...args) => {
        const now = Date.now();
        if (now - lastTime >= wait) {
          lastTime = now;
          return fn.apply(this, args);
        }
      };
    },
  },

  mounted() {
    if (window.matchMedia("(max-width: 460px)").matches) {
      this.distance = 30;
      this.randomHeight = 115
    }

    window.addEventListener('resize', () => {
      if (window.matchMedia("(max-width: 460px)").matches) {
        this.distance = 30;
        this.randomHeight = 115
      }
    })

    this.parts = this.$refs.model2.querySelectorAll('.altruist-model-part');

    this.observer = new IntersectionObserver(this.callback, { threshold: 0.3 });
    this.observer.observe(this.$refs.model2);

    this.throttledScrollHandler = this.throttle(this.updatePartPositions, 50);

    if(this.$route.path.includes('devices')) {
      this.speed = 12
    }
  },

  beforeDestroy() {
    this.observer.disconnect();
    window.removeEventListener('scroll', this.throttledScrollHandler);
  },
};
</script>

<style scoped>
.altruist-model {
  position: relative;
  height: 620px;         /* Initial height */
  max-width: 520px;     /* Max width */
  width: 100%;
  top: -120px;
  overflow: hidden;
  transform: scale(1.3);
}

.altruist-model-part {
  position: absolute;
  left: 0;
  top: 0;
  max-width: 520px;
  height: auto;          /* Allow height to be auto for images */
  transition: top 0.2s ease; /* Smooth transition for top property */
}

/* Adjust these positions for each part to be closer together */
.altruist-model-part-1 { top: 20px; z-index: 11; }
.altruist-model-part-2 { top: 140px; z-index: 10; }
.altruist-model-part-3 { top: 40px; z-index: 9; }
.altruist-model-part-4 { top: 60px; z-index: 8; }
.altruist-model-part-5 { top: 80px; z-index: 7; }
.altruist-model-part-6 { top: 100px; z-index: 6; }
.altruist-model-part-7 { top: 120px; z-index: 5; }
.altruist-model-part-8 { top: 140px; z-index: 5; }


@media screen and (max-width: 460px) {
  .altruist-model {
    top: -90px;
  }
}

@media screen and (max-width: 380px) {
  .altruist-model {
    top: -70px;
  }
}
</style>
