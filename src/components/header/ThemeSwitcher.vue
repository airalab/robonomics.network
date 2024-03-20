<template>

  <div  @click.prevent="toggleTheme" class="theme-wrapper" :class="{'dark-theme': darkTheme}" tabindex="0" >


  <!-- moon -->
  <button class="theme-moon" aria-label="Toggle dark/light">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.49 12.23"><defs></defs><g id="Layer_2" data-name="Layer 2"><g><path class="cls-1" d="M6.1,0a6.12,6.12,0,1,0,4.26,10.5A.44.44,0,0,0,10,9.76a4.47,4.47,0,0,1-.82.07A4.81,4.81,0,0,1,6.8.84.44.44,0,0,0,7,.37.45.45,0,0,0,6.62,0L6.1,0Z"/></g></g></svg>
  </button>

  <!-- sun -->
  <button aria-label="Toggle dark/light theme" class="theme-sun">

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

  </button >


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

    const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

    if(initUserTheme) {
      this.setTheme(initUserTheme)
    } else if(userPrefersDark) {
      this.setTheme('dark-theme')
    } else {
      this.setTheme('light-theme')
    }
    
    this.$nextTick(() => {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
          this.setTheme('dark-theme')
        } else {
          this.setTheme('light-theme')
        }
      })
    })
  },
}
</script>

<style>

  .theme-wrapper {
    min-height: 27px;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    /* align-items: center; */
    
  }

  .theme-sun, .theme-moon {
    padding: 0.35rem 0.6rem;
    height: 100%;
    border: 1px solid var(--color-dark);
    background-color: #000;
    transition: background-color 0.33s ease-in-out;
  }

  .theme-moon {
    background-color: transparent
  }


  .theme-sun svg {
    width: 16px;
    height: 16px;
    fill: #fff
  }

  .dark-theme .theme-moon {
    background-color: #fff;
  }

  .theme-moon svg {
    width: 13px;
    width: 14px;
  }

  .cls-1 {
    fill: var(--color-dark);
  }

  .dark-theme .cls-1 {
    fill: #000;
  }

  .theme-sun:hover,
  .theme-moon:hover {
    opacity: .8;
    border: 1px solid transparent;
    background-color: rgb(141, 141, 141);
  }


</style>