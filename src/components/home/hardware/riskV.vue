<template>
  <div class="risk-v-model" ref="model">
    <div data-part="0" class="risk-v-model-part risk-v-model-part-1" ref="part1">
      <g-image src="~/assets/images/hardware-2025/risk-v-model-1.png" quality="75" immediate />
    </div>
    <div data-part="1" class="risk-v-model-part risk-v-model-part-2" ref="part2">
      <g-image src="~/assets/images/hardware-2025/risk-v-model-2.png" quality="75" immediate />
    </div>
    <div data-part="2" class="risk-v-model-part risk-v-model-part-3" ref="part3">
      <g-image src="~/assets/images/hardware-2025/risk-v-model-3.png" quality="75" immediate />
    </div>
    <div data-part="3" class="risk-v-model-part risk-v-model-part-4" ref="part4">
      <g-image src="~/assets/images/hardware-2025/risk-v-model-4.png" quality="75" immediate />
    </div>
    <div data-part="2" class="risk-v-model-part risk-v-model-part-5" ref="part5">
      <g-image src="~/assets/images/hardware-2025/risk-v-model-5.png" quality="75" immediate />
    </div>
    <div data-part="4" class="risk-v-model-part risk-v-model-part-6" ref="part6">
      <g-image src="~/assets/images/hardware-2025/risk-v-model-6.png" quality="75" immediate />
    </div> 
    <div data-part="5" class="risk-v-model-part risk-v-model-part-7" ref="part7">
      <g-image src="~/assets/images/hardware-2025/risk-v-model-7.png" quality="75" immediate />
    </div>
    <div data-part="6" class="risk-v-model-part risk-v-model-part-8" ref="part8">
      <g-image src="~/assets/images/hardware-2025/risk-v-model-8.png" quality="75" immediate />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      observer: null,
      scrollPos: 0,
      totalParts: 8,
      initialOffset: 0,
      distance: 3
    }
  },

  computed: {
    chaoticPositions() {
      return  Array.from(document.querySelectorAll('.risk-v-model-part')).map(part => parseFloat(part.style.left));
    },
  },

  methods: {

    callback(entries) {
      entries.forEach(({ target, isIntersecting}) => {
          if (isIntersecting) {
            console.log('in sight')
            window.addEventListener('scroll', this.onScroll)
          } 
      });
    },

    updatePartPositions() {
      const scrollPosition = window.scrollY; // Current scroll position
      const maxScroll = document.body.scrollHeight - window.innerHeight; // Maximum scroll value
      const scrollRatio = Math.min(1, Math.max(0, scrollPosition / maxScroll)); // Normalize scroll position
      const parts = document.querySelectorAll('.risk-v-model-part')

      // Calculate new positions for each part based on the scroll ratio
      parts.forEach((part) => {
        const index = part.getAttribute('data-part')
          // Calculate new top position
          const newTopPosition = this.initialOffset + (index * this.distance) * (1 - scrollRatio * 5.5); // Adjust multiplier for faster effect
          
          // When scrolling down, align the parts
          // const targetLeftPosition = 10 + index * 2.5; // Align left positions in a straight line
          // Set the new positions
          part.style.top = `${newTopPosition}%`; // Set the new top position as a percentage
          // part.style.left = `${scrollRatio === 1 ? targetLeftPosition : this.chaoticPositions[index]}%`; // Align or revert to chaotic position
      });
    },
    
    onScroll() {
      if(this.$refs.model && this.scrollPos >= this.scrollPos - this.$refs.model.clientHeight ) {
        // let top = parseInt(window.getComputedStyle(this.$refs.part4).getPropertyValue("top").slice(0, -2));
        this.updatePartPositions()
        // if ((document.body.getBoundingClientRect()).top > this.scrollPos)
        //  {
        //   this.updatePartPositions()
        //  } else {
        //   if(top < -4.15) {
        //     this.updatePartPositions()
        //   }
        // }
      }
      this.scrollPos = document.body.getBoundingClientRect().top;
    }
  },

  mounted() {
    this.observer = new IntersectionObserver(this.callback, {
      threshold: 0.5,
    });
    this.observer.observe(this.$refs.model)
  },

  beforeDestroy() {
    this.observer.disconnect();
  },



}
</script>

<style scoped>

.risk-v-model {
  position: relative;
  min-height: 480px;
  height: 100%;
  max-width: 520px;
  width: 100%;
  overflow: hidden;
}

.risk-v-model-part {
  position: absolute;
  left: 0;
  top: 0;
  max-width: 520px;
  height: 100%;
  transition: top 0.2s ease, left 0.2s ease;
}

.risk-v-model-part-1 {
  top: 0px;
  /* top: 80px; */
  z-index: 11;
  animation: part1 infinite ease-in-out 5s alternate;
} 

.risk-v-model-part-2 {
  /* top: 50px; */
  top: 10px;
  z-index: 10;
  animation: part2 infinite ease-in-out 5s alternate;
}

.risk-v-model-part-3 {
  /* top: -20px; */
  top: 20px;
  z-index: 9;
  animation: part3 infinite ease-in-out 5s alternate;
}

.risk-v-model-part-4 {
  /* top: 50px; */
  top: 30px;
  z-index: 8;
  animation: part4 infinite ease-in-out 5s alternate;
}

.risk-v-model-part-5 {
  /* top: -20px; */
  top: 30px;
  z-index: 7;
  animation: part3 infinite ease-in-out 5s alternate;
}

.risk-v-model-part-6 {
  /* top: -60px; */
  top: 40px;
  z-index: 6;
  animation: part6 infinite ease-in-out 5s alternate;;
}

.risk-v-model-part-7 {
  /* top: -80px; */
  top: 50px;
  z-index: 5;
  animation: part7 infinite ease-in-out 5s alternate;
}

.risk-v-model-part-8 {
  /* top: -110px; */
  top: 60px;
  z-index: 4;
  animation: part8 infinite ease-in-out 5s alternate;
}

.assembled {
    margin: 0; /* Remove margin to gather parts */
    transform: translateY(0); /* Reset transform */
}


/* @keyframes part1 {
  0% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
}


@keyframes part2 {
  0% {
    transform: translateY(40px);
  }

  100% {
    transform: translateY(0);
  }
}


@keyframes part3 {
  0% {
    transform: translateY(60px);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes part4 {
  0% {
    transform: translateY(80px);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes part5 {
  0% {
    transform: translateY(100px);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes part6 {
  0% {
    transform: translateY(120px);
  }

  100% {
    transform: translateY(0);
  }
}


@keyframes part7 {
  0% {
    transform: translateY(140px);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes part8 {
  0% {
    transform: translateY(160px);
  }

  100% {
    transform: translateY(0);
  }
} */



</style>