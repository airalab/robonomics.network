<template>

  <div  @click.prevent="toggleTheme" class="theme-wrapper" :class="{'dark-theme': darkTheme}" tabindex="0" >

  <!-- sun -->
  <button aria-label="Toggle dark/light theme" class="theme-sun" :class="{'oldy dark': !darkTheme}">

    <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16.4 16.2" style="enable-background:new 0 0 16.4 16.2;" xml:space="preserve">
      <path d="M12.8,8.3c0,2.6-2.1,4.6-4.7,4.6s-4.7-2.1-4.7-4.6c0-2.6,2.1-4.7,4.7-4.7S12.8,5.7,12.8,8.3L12.8,8.3"
      />
      <path d="M8.3,0c0.7,0.1,1.2,0.7,1.2,1.4S8.8,2.7,8.1,2.6S6.8,1.9,6.9,1.2c0,0,0,0,0,0C7,0.4,7.6-0.1,8.3,0"/>
      <path d="M3,1.9c0.6-0.4,1.4-0.2,1.8,0.4S5,3.6,4.4,4C3.8,4.4,3,4.3,2.6,3.7c0,0,0,0,0,0C2.2,3.1,2.4,2.3,3,1.9
      "/>
      <path d="M0.1,6.7C0.3,6,1,5.6,1.7,5.8C2.4,6,2.8,6.8,2.6,7.5C2.4,8.2,1.6,8.5,0.9,8.3C0.2,8.1-0.2,7.4,0.1,6.7
      C0.1,6.7,0.1,6.7,0.1,6.7"/>
      <path d="M0.9,12.3c-0.3-0.7,0-1.4,0.7-1.7c0.7-0.3,1.4,0,1.7,0.7c0.3,0.7,0,1.4-0.7,1.7c0,0,0,0,0,0
      C2,13.3,1.2,13,0.9,12.3"/>
      <path d="M5.2,16c-0.6-0.3-0.9-1.1-0.6-1.8c0.3-0.6,1.1-0.9,1.8-0.6s0.9,1.1,0.6,1.8l0,0
      C6.7,16.1,5.9,16.4,5.2,16"/>
      <path d="M10.9,16.1c-0.7,0.2-1.4-0.3-1.6-1s0.3-1.4,1-1.6s1.4,0.3,1.6,1c0,0,0,0,0,0
      C12,15.3,11.6,16,10.9,16.1"/>
      <path d="M15.3,12.6c-0.4,0.6-1.2,0.7-1.8,0.3c-0.6-0.4-0.7-1.2-0.3-1.8s1.2-0.7,1.8-0.3c0,0,0,0,0,0
      C15.6,11.2,15.7,12,15.3,12.6"/>
      <path d="M16.4,7c0,0.7-0.5,1.3-1.2,1.4c-0.7,0-1.3-0.5-1.4-1.2c0-0.7,0.5-1.3,1.2-1.4
      C15.7,5.7,16.3,6.3,16.4,7C16.4,7,16.4,7,16.4,7"/>
      <path d="M13.6,2c0.5,0.5,0.5,1.4,0,1.9c-0.5,0.5-1.4,0.5-1.9,0c-0.5-0.5-0.5-1.4,0-1.9c0,0,0,0,0,0
      C12.3,1.5,13.1,1.5,13.6,2"/>
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
    const initUserTheme =  localStorage.getItem("user-theme") ?? 'light-theme'

    if(initUserTheme) {
      this.setTheme(initUserTheme)
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
    margin-top: -0.19rem;
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
      margin-top: -0.26em;
    }
  }

  @media screen and (max-width: 660px) {
    .theme-moon, .theme-sun { padding:  4px 16px; } 

    .theme-sun.dark {
      margin-top: -0.19rem;
    }

    .theme-wrapper {
      margin-top: 7px;
    }

  }

</style>