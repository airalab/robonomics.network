<template>

  <div  @click.prevent="toggleTheme" class="theme-wrapper" :class="{'dark-theme': darkTheme}" tabindex="0" >

  <!-- sun -->
  <button aria-label="Toggle dark/light theme" class="theme-sun" :class="{'oldy dark': !darkTheme}">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16.396" height="16.187" viewBox="0 0 16.396 16.187">
      <defs>
        <clipPath id="clip-path">
          <rect id="Rectangle_6" data-name="Rectangle 6" width="16.396" height="16.187" fill="none"/>
        </clipPath>
      </defs>
      <g id="Group_15" data-name="Group 15" transform="translate(-1467 114)">
        <g id="Group_14" data-name="Group 14" transform="translate(1467 -114)">
          <g id="Group_13" data-name="Group 13" clip-path="url(#clip-path)">
            <path id="Path_19" data-name="Path 19" d="M130.463,129.434a4.65,4.65,0,1,1-4.65-4.65,4.65,4.65,0,0,1,4.65,4.65" transform="translate(-117.615 -121.13)"/>
            <path id="Path_20" data-name="Path 20" d="M236.713.008a1.309,1.309,0,1,1-1.447,1.154A1.309,1.309,0,0,1,236.713.008" transform="translate(-228.368 0)"/>
            <path id="Path_21" data-name="Path 21" d="M82.294,56.1a1.309,1.309,0,1,1-.367,1.814,1.309,1.309,0,0,1,.367-1.814" transform="translate(-79.316 -54.249)"/>
            <path id="Path_22" data-name="Path 22" d="M.054,198.329a1.309,1.309,0,1,1,.885,1.626,1.309,1.309,0,0,1-.885-1.626" transform="translate(0 -191.61)"/>
            <path id="Path_23" data-name="Path 23" d="M28.485,360.143a1.309,1.309,0,1,1,1.723.676,1.309,1.309,0,0,1-1.723-.676" transform="translate(-27.544 -347.818)"/>
            <path id="Path_24" data-name="Path 24" d="M154.277,465.827a1.309,1.309,0,1,1,1.755-.589,1.309,1.309,0,0,1-1.755.589" transform="translate(-149.054 -449.777)"/>
            <path id="Path_25" data-name="Path 25" d="M318.569,465.927a1.309,1.309,0,1,1,.965-1.579,1.309,1.309,0,0,1-.965,1.579" transform="translate(-307.672 -449.777)"/>
            <path id="Path_26" data-name="Path 26" d="M444.5,360.405a1.309,1.309,0,1,1-.276-1.83,1.309,1.309,0,0,1,.276,1.83" transform="translate(-429.187 -347.826)"/>
            <path id="Path_27" data-name="Path 27" d="M473.126,198.627a1.309,1.309,0,1,1-1.388-1.225,1.309,1.309,0,0,1,1.388,1.225" transform="translate(-456.732 -191.619)"/>
            <path id="Path_28" data-name="Path 28" d="M391.068,56.3a1.309,1.309,0,1,1-1.85-.046,1.309,1.309,0,0,1,1.85.046" transform="translate(-377.425 -54.253)"/>
          </g>
        </g>
      </g>
    </svg>
  </button>


  <!-- moon -->
  <button class="theme-moon" aria-label="Toggle dark/light">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15.913" height="15.173" viewBox="0 0 15.913 15.173">
      <defs>
        <clipPath id="clip-path">
          <rect id="Rectangle_7" data-name="Rectangle 7" width="11.89" height="13.005" fill="#fff"/>
        </clipPath>
      </defs>
      <g id="Group_17" data-name="Group 17" transform="translate(15.913 3.802) rotate(107)">
        <g id="Group_16" data-name="Group 16" clip-path="url(#clip-path)">
          <path id="Path_29" data-name="Path 29" d="M7.309,0A6.641,6.641,0,0,1,8.758,4.15,6.673,6.673,0,0,1,0,10.485,6.67,6.67,0,1,0,7.309,0" fill="#fff"/>
        </g>
      </g>
    </svg>
  </button>


  </div>

</template>

<script>
export default {
  data() {
    return {
      darkTheme: false,
      userTheme: "light-theme",
    }
  },
  methods: {
    toggleTheme() {

      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }

    },

    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.body.className = theme;

      if (localStorage.getItem("user-theme") === 'dark-theme') {
        this.darkTheme = true;
      } else {
        this.darkTheme = false;
      }
    },
  },

  mounted() {
    const initUserTheme =  localStorage.getItem("user-theme");

    if(initUserTheme) {
      this.setTheme(initUserTheme);
    }
  },
}
</script>

<style>

  .theme-wrapper {
    min-height: 27px;
    height: 100%;
    display: flex;
    /* align-items: center; */
    
  }

  .theme-sun, .theme-moon {
    padding: 4px 16px;
    height: 100%;
    border: 1px solid #000;
    background-color: #000;
  }

  .theme-sun:hover,
  .theme-moon:hover {
    opacity: .8;
    border: 1px solid #000;
    background-color: #000;
  }

  .theme-sun.dark {
    margin-top: -3px;
    background-color: #fff;
    box-shadow: 0.2rem 0.2rem 0 #000;
    border: 1px solid #000;
  }

  .theme-sun svg {
    width: 16px;
    height: 16px;
  }

  .dark-theme .theme-sun svg {
    fill: #7A7B81;
  }

  .dark-theme .theme-moon {
    background-color: #7A7B81;
    box-shadow: -0.2rem 0.2rem 0rem #000;
    border: 1px solid #000;
  }

  @media screen and (max-width: 950px) {
    .theme-moon, .theme-sun { padding:  4px 8px; } 

    .theme-sun.dark {
      margin-top: -4px;
    }
  }

  @media screen and (max-width: 660px) {
    .theme-moon, .theme-sun { padding:  4px 16px; } 

    .theme-wrapper {
      margin-top: 7px;
    }

  }

</style>