<template>
  <div class="risc-v-model" ref="model">
    <div data-part="0" class="risc-v-model-part risc-v-model-part-1" ref="part1">
      <g-image src="~/assets/images/hardware-2025/risc-v-model-1.png" quality="75" immediate />
    </div>
    <div data-part="1" class="risc-v-model-part risc-v-model-part-2" ref="part2">
      <g-image src="~/assets/images/hardware-2025/risc-v-model-2.png" quality="75" immediate />
    </div>
    <div data-part="2" class="risc-v-model-part risc-v-model-part-3" ref="part3">
      <g-image src="~/assets/images/hardware-2025/risc-v-model-3.png" quality="75" immediate />
    </div>
    <div data-part="3" class="risc-v-model-part risc-v-model-part-4" ref="part4">
      <g-image src="~/assets/images/hardware-2025/risc-v-model-4.png" quality="75" immediate />
    </div>
    <div data-part="4" class="risc-v-model-part risc-v-model-part-5" ref="part5">
      <g-image src="~/assets/images/hardware-2025/risc-v-model-5.png" quality="75" immediate />
    </div>
    <div data-part="5" class="risc-v-model-part risc-v-model-part-6" ref="part6">
      <g-image src="~/assets/images/hardware-2025/risc-v-model-6.png" quality="75" immediate />
    </div>
    <div data-part="6" class="risc-v-model-part risc-v-model-part-7" ref="part7">
      <g-image src="~/assets/images/hardware-2025/risc-v-model-7.png" quality="75" immediate />
    </div>
    <div data-part="7" class="risc-v-model-part risc-v-model-part-8" ref="part8">
      <g-image src="~/assets/images/hardware-2025/risc-v-model-8.png" quality="75" immediate />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      observer: null,
      scrollPos: 0,
      initialOffset: -40, // Starting offset for parts
      distance: 12,        // Distance between parts
      parts: [],  
      speed: 7,           // Store part elements for easy access
    };
  },

  computed: {
    chaoticPositions() {
      return Array.from(this.parts).map(part => parseFloat(part.style.top));
    },
  },

  methods: {
    callback(entries) {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          console.log('Model in sight');
          window.addEventListener('scroll', this.throttledScrollHandler);
        } else {
          console.log('Model out of sight');
          window.removeEventListener('scroll', this.throttledScrollHandler);
        }
      });
    },

    throttledScrollHandler: function() {
      this.updatePartPositions();
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

    checkHeight(container) {
      const absoluteElements = document.querySelectorAll('.risc-v-model-part');
      
      let maxHeight = 0;
      
      absoluteElements.forEach(element => {
        const elementBottom = element.offsetTop + element.offsetHeight;
        if (elementBottom > maxHeight) {
          maxHeight = elementBottom;
        }
      });

      container.style.height = maxHeight + 10 + 'px';
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
          ? (2 * scrollRatio ** 2.8) 
          : (1 - (2 * (1 - scrollRatio) ** this.speed));

        // Calculate new top position based on easing function
        const newTopPosition = this.initialOffset + (index * this.distance) * (1 - easeInOut * this.speed);
        part.style.top = `${newTopPosition}px`; // Set new top position in pixels

        // Update the max top position if the current one is greater
        if (newTopPosition > maxTopPosition) {
          maxTopPosition = newTopPosition;
        }
        
        this.checkHeight(this.$refs.model)
      });

    },
    
    onScroll() {
      this.scrollPos = window.scrollY; // Update current scroll position
    }
  },

  mounted() {
    this.parts = this.$refs.model.querySelectorAll('.risc-v-model-part'); // Select all parts
    this.observer = new IntersectionObserver(this.callback, {
      threshold: 0.3,
    });
    this.observer.observe(this.$refs.model);
    
    // Create a throttled version of updatePartPositions
    this.throttledScrollHandler = this.throttle(this.updatePartPositions, 50);
    
    window.addEventListener('scroll', this.onScroll); // Track scroll position

    if(this.$route.path.includes('devices')) {
      this.speed = 4
      this.initialOffset = -30
    }
  },

  beforeDestroy() {
    this.observer.disconnect();
    window.removeEventListener('scroll', this.onScroll); // Clean up scroll event listener
  },
}
</script>

<style scoped>
.risc-v-model {
  position: relative;
  height: 480px;         /* Initial height */
  max-width: 520px;     /* Max width */
  width: 100%;
  overflow: hidden;
  transform: scale(1.3);
}

.risc-v-model-part {
  position: absolute;
  left: 0;
  top: 0;
  max-width: 520px;
  height: auto;          /* Allow height to be auto for images */
  transition: top 0.2s ease; /* Smooth transition for top property */
}

/* Adjust these positions for each part */
.risc-v-model-part-1 { top: 0px; z-index: 11; }
.risc-v-model-part-2 { top: 10px; z-index: 10; }
.risc-v-model-part-3 { top: 20px; z-index: 9; }
.risc-v-model-part-4 { top: 30px; z-index: 8; }
.risc-v-model-part-5 { top: 40px; z-index: 7; }
.risc-v-model-part-6 { top: 50px; z-index: 6; }
.risc-v-model-part-7 { top: 60px; z-index: 5; }
.risc-v-model-part-8 { top: 70px; z-index: 4; }

@media screen and (max-width: 520px) {
  .risc-v-model {
    top: 26px;
    /* min-height: 420px; Adjusted for smaller screens */
    /* height: 100%; */
  }
}

@media screen and (max-width: 350px) {
  .risc-v-model {
    top: 32px;
    /* min-height: 420px; Adjusted for smaller screens */
    /* height: 100%; */
  }
}
</style>
