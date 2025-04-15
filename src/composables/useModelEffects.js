// composables/useModelEffects.js

import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue';

export function useModelEffects(props, options = {}) {
  const scrollProgress = ref(0);
  const colors = options.colors || ['blue', 'yellow', 'pink']; // now customizable!
  const colorIndex = ref(0);
  const cycleCount = ref(0);
  const maxCycles = 5;
  const colorChangeDelay = 500;
  const lastColorChangeTime = ref(0);
  const hasEnteredViewport = ref(false);
  const imagesLoaded = ref(false);
  const modelContainer = ref(null);

  const showColor = computed(() => colors[colorIndex.value]);
  const classes = computed(() => ({
    model: true,
    'model-noanimation': props.noanimation
  }));

  const checkViewport = () => {
    if (props.noanimation && !hasEnteredViewport.value) {
      const element = modelContainer.value;
      if (element.classList.contains('in-viewport')) {
        hasEnteredViewport.value = true;
        startColorCycle();
      }
    }
  };

  const startColorCycle = () => {
    if (cycleCount.value < maxCycles) {
      colorIndex.value = (colorIndex.value + 1) % colors.length;
      if (colorIndex.value === 0) {
        cycleCount.value++;
      }
      setTimeout(startColorCycle, colorChangeDelay);
    }
  };

  const updateScrollProgress = () => {
    const rect = modelContainer.value.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const lowerQuarterScreen = windowHeight * 0.75;
    const maxScroll = windowHeight + rect.height;

    if (rect.top > lowerQuarterScreen) {
      scrollProgress.value = 0;
    } else {
      const scrollPos = Math.min(Math.max(windowHeight - rect.top, 0), maxScroll);
      scrollProgress.value = Math.max(0, Math.min(1, (scrollPos - lowerQuarterScreen) / (maxScroll - lowerQuarterScreen)));
    }

    const isVisible = rect.top < windowHeight && rect.bottom > 0;
    const now = Date.now();

    if (isVisible && cycleCount.value < maxCycles && now - lastColorChangeTime.value > colorChangeDelay) {
      colorIndex.value = (colorIndex.value + 1) % colors.length;
      if (colorIndex.value === 0) {
        cycleCount.value++;
      }
      lastColorChangeTime.value = now;
    }

    if (cycleCount.value >= maxCycles) {
      colorIndex.value = 0;
    }

    if (!props.noanimation) {
      const images = modelContainer.value.querySelectorAll('.model:not(.model-noanimation) .img');
      images.forEach(img => {
        img.style.setProperty('--koef', scrollProgress.value);
      });
    }
  };

  const checkImagesLoaded = () => {
    const images = modelContainer.value.querySelectorAll('img');
    let loadedCount = 0;

    images.forEach(img => {
      if (img.complete) {
        loadedCount++;
      } else {
        img.onload = () => {
          loadedCount++;
          if (loadedCount === images.length) {
            imagesLoaded.value = true;
          }
        };
      }
    });

    if (loadedCount === images.length) {
      imagesLoaded.value = true;
    }
  };

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.target) {
        entry.target.classList.toggle('in-viewport', entry.isIntersecting);
      }
    });
  };

  watch(imagesLoaded, (newValue) => {
    if (newValue) {
      if (!props.noanimation) {
        window.addEventListener('scroll', updateScrollProgress);
      } else {
        setTimeout(() => {
          checkViewport();
          window.addEventListener('scroll', checkViewport);
        }, 1000);
      }
    }
  });

  onMounted(() => {
    checkImagesLoaded();

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '-300px 0px',
    });

    if (modelContainer.value) {
      observer.observe(modelContainer.value);
    }
  });

  onBeforeUnmount(() => {
    if (!props.noanimation) {
      window.removeEventListener('scroll', updateScrollProgress);
    } else {
      window.removeEventListener('scroll', checkViewport);
    }
  });

  return {
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
    modelContainer
  };
}
