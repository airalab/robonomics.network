<template>
  <div class="altruist-model" ref="model2">
    <div data-part="1" class="altruist-model-part altruist-model-part-1" ref="part1">
      <g-image src="~/assets/images/hardware-2025/altruist-model-1.webp" quality="75" immediate />
    </div>
    <div data-part="8" class="altruist-model-part altruist-model-part-2" ref="part2">
      <g-image src="~/assets/images/hardware-2025/altruist-model-2.webp" quality="75" immediate />
    </div>
    <div data-part="3" class="altruist-model-part altruist-model-part-3" ref="part3">
      <g-image src="~/assets/images/hardware-2025/altruist-model-3.webp" quality="75" immediate />
    </div>
    <div data-part="4" class="altruist-model-part altruist-model-part-4" ref="part4">
      <g-image src="~/assets/images/hardware-2025/altruist-model-4.webp" quality="75" immediate />
    </div>
    <div data-part="5" class="altruist-model-part altruist-model-part-5" ref="part5">
      <g-image src="~/assets/images/hardware-2025/altruist-model-5.webp" quality="75" immediate />
    </div>
    <div data-part="6" class="altruist-model-part altruist-model-part-6" ref="part6">
      <g-image src="~/assets/images/hardware-2025/altruist-model-6.webp" quality="75" immediate />
    </div>
    <div data-part="7" class="altruist-model-part altruist-model-part-7" ref="part7">
      <g-image src="~/assets/images/hardware-2025/altruist-model-7.webp" quality="75" immediate />
    </div>
    <div data-part="8" class="altruist-model-part altruist-model-part-8" ref="part8">
      <g-image src="~/assets/images/hardware-2025/altruist-model-8.webp" quality="75" immediate />
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
      lastScrollPosition: 0,
      parts: [],      
      speed: 25, 
      distance: 50,      // Distance between parts
      initialOffset: 0,  // Set initial offset for assembly
      randomHeight: 150,
      animationDelay: true,
      gap: 35
    };
  },

  methods: {
    callback(entries) {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting && !this.$route.path.includes('altruist')) {
          if(this.animationDelay) {
            setTimeout(() => {
              window.addEventListener('scroll', this.throttledScrollHandler);
              this.animationDelay = false
            }, 800)
          } else {
            window.addEventListener('scroll', this.throttledScrollHandler);
          }

        } else {
          window.removeEventListener('scroll', this.throttledScrollHandler);
        }

        if(isIntersecting && this.$route.path.includes('altruist')) {
          this.disassemble()
        } else {
          this.assemble()
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

        if ((document.body.getBoundingClientRect()).top < this.scrollPos) {
          if(parseInt(window.getComputedStyle(this.parts[0]).getPropertyValue("top")) < 0 || parseInt(window.getComputedStyle(this.parts[1]).getPropertyValue("top")) < 0) {
                this.parts[0].style.top = '2px';
                this.parts[1].style.top = '2px';
                this.parts[2].style.top = '2px';
                this.parts[3].style.top = '1px';
                this.parts[4].style.top = '1px';
                this.parts[5].style.top = '1px';
                this.parts[6].style.top = '1px';
                this.parts[7].style.top = '2px';
            return
          } 
        }

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
        
        this.checkHeight(this.$refs.model2)

        part.style.top = `${newTopPosition}px`; // Set new top position in pixels

        // Update the max top position if the current one is greater
        if (newTopPosition > maxTopPosition) {
          maxTopPosition = newTopPosition;
        }
        // saves the new position for iteration.
	      this.scrollPos = (document.body.getBoundingClientRect()).top;
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

    disassemble() {

      // Sequentially apply transform one by one
      this.parts.forEach((part, index) => {
        const partEl = document.querySelector('.altruist-page').querySelector(`.altruist-model-part-${index + 1}`);
        const index1 = partEl.getAttribute('data-part');
        const translateY = this.getTranslateY(index1);
        partEl.style.opacity = 1;
        partEl.style.transform = `translate(0, ${translateY}px)`
        
      });
    },
    assemble() {
      // Reset all parts to (0, 0) and rotate -90deg
      this.parts.forEach((part, index) => {
        const partEl = document.querySelector('.altruist-page').querySelector(`.altruist-model-part-${index + 1}`);
        partEl.style.opacity = 0;
        partEl.style.transform = 'translate(0, 0)';
      });
    },
    getTranslateY(index) {
      // First part stays in place, others move with a gap of 10px between each
      if (index === '1') return 0; // First part stays at the top
      return index * this.gap; // 10px gap between each part (each part height + margin)
    },
  },

  mounted() {
    if (window.matchMedia("(max-width: 460px)").matches) {
      this.distance = 30;
      this.randomHeight = 115
    }

    if (window.matchMedia("(max-width: 390px)").matches) {
      this.gap = 20
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

    this.throttledScrollHandler = this.throttle(this.updatePartPositions, 100);

    if(this.$route.path.includes('devices') && !this.$route.path.includes('altruist')) {
      this.speed = 15
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
  height: 320px;
  max-width: 520px;     
  width: 100%;
  top: -120px;
  transform: scale(1.3);
  transition: height 0.2s ease-out;
}

.altruist-page.altruist-model {
  top: 50%;
  left: var(--space);
  left: var(--space);
  height: 435px;
  transform: scale(1.3) rotate(-90deg) translate(0%, -18%);
}

.altruist-model-part {
  position: absolute;
  left: 0;
  top: 0;
  max-width: 520px;
  height: auto;    /* Allow height to be auto for images */
  transition: top 0.2s ease, transform 0.7s ease, opacity 0.5s ease-in-out; /* Smooth transition for top property */
}

/* Adjust these positions for each part to be closer together */
/* .altruist-model-part-1 { top: 20px; z-index: 11; }
.altruist-model-part-2 { top: 140px; z-index: 10; }
.altruist-model-part-3 { top: 40px; z-index: 9; }
.altruist-model-part-4 { top: 60px; z-index: 8; }
.altruist-model-part-5 { top: 80px; z-index: 7; }
.altruist-model-part-6 { top: 100px; z-index: 6; }
.altruist-model-part-7 { top: 120px; z-index: 5; }
.altruist-model-part-8 { top: 140px; z-index: 5; } */

/* assembled state */
.altruist-model-part-1 { top: 0px; z-index: 11; }
.altruist-model-part-2 { top: 2px; z-index: 10; }
.altruist-model-part-3 { top: 2px; z-index: 9; }
.altruist-model-part-4 { top: 1px; z-index: 8; }
.altruist-model-part-5 { top: 1px; z-index: 7; }
.altruist-model-part-6 { top: 1px; z-index: 6; }
.altruist-model-part-7 { top: 1px; z-index: 5; }
.altruist-model-part-8 { top: 2px; z-index: 5; }


@media screen and (max-width: 770px) {
  .altruist-page.altruist-model {
    height: 380px;
    transform: scale(1.0) rotate(-90deg) translate(-2%, -66%);
  }
}

@media screen and (max-width: 560px) {
  .altruist-page.altruist-model {
    height: 240px;
    transform: scale(0.8) rotate(-90deg) translate(-7%, -102%);
  }
}


@media screen and (max-width: 460px) {
  .altruist-model {
    top: -90px;
    height: 260px;
  }
}

@media screen and (max-width: 380px) {
  .altruist-model {
    top: -70px;
  }

  .altruist-page.altruist-model {
    height: 220px;
    transform: scale(0.8) rotate(-90deg) translate(-7%, -64%);
  }
}

</style>
