<template>
  <layout>
    <MetaInfo
      pageTitle = "Research papers"
      pageDescription = "Without academic research, the advancement of complex systems that can be integrated into our daily lives may lose its purpose or even pose risks. We must carefully contemplate our direction, objectives, and potential consequences. The spheres where Robonomics operates, specifically Robotics, Economic relations, and Web3 technologies, are worth studying individually, exploring how they can be integrated with each other, and assessing their potential impact on our lives."
      pageImage = "/website_cover_papers.png"
    />

    <!-- papers banner section -->
    <section class="papers__section-blue section__blue">
      <div class="papers__main-title title-with-bg">
        <h1><span>{{ $t('Research papers') }}</span></h1>
      </div>

      <div class="layout layout__mid papers__banner">
        <div class="papers__banner-wrapper">
          <p>{{ $t("Without academic research, the advancement of complex systems that can be integrated into our daily lives may lose its purpose or even pose risks. We must carefully contemplate our direction, objectives, and potential consequences. The spheres where Robonomics operates, specifically Robotics, Economic relations, and Web3 technologies, are worth studying individually, exploring how they can be integrated with each other, and assessing their potential impact on our lives.") }}</p>
          <g-image quality="75" aria-hidden="true" alt=""  src="~/assets/images/papers/papers-text.svg"/>
        </div>
        <div class="papers__banner-img">
          <g-image quality="75" aria-hidden="true" alt=""  src="~/assets/images/papers/papers-banner-img.png"/>
          <g-image quality="75" class="mobile" aria-hidden="true" alt=""  src="~/assets/images/papers/papers-banner-img-mobile.png"/>
        </div>
      </div>
      </section>


    <section class="layout layout__mid">
      <!-- pinned item -->
        <div class="papers-pinned oldy" v-if="pinned.length">
          <div class="papers-pinned__header">

            <div class="papers-pinned__info">
              <div class="papers-pinned__icon papers-pinned__icon--green-pin"></div>
              <div class="papers-pinned__icon">
                {{ pinned[0].year  }}
              </div>
              <h3>{{ $t(pinned[0].title) }}</h3> 
            </div>

            <div class="papers-pinned__actions"> 
              <select v-model="selected" v-if="pinned[0].options.length > 1 && pinned[0].withSelect">
                <option v-for="(option, key) in pinned[0].options" :key="option.id" v-bind:value="key" v-bind:name="option.link">
                {{ option.text }}
                </option>
              </select>
              <rbnet-button :link="pinned[0].options[selected].link">Download pdf</rbnet-button>
            </div>

          </div>
          <p class="papers-pinned__text">{{ $t(pinned[0].description) }}</p>
        </div>

        <!-- papers items -->
        <papersList :assets="papers"/>
    </section>

  </layout>
</template>

<script>

  import papers from '@/data/papers.yaml'

  export default {
    components: {
      MetaInfo: () => import('~/components/MetaInfo.vue'),
      papersList: () => import('~/components/PapersList.vue')
    },

    data() {
      return {
        selected: 0
      }
    },

    computed: {
      papers () {
        return papers
      },
      pinned() {
        return papers.filter(paper => paper.pinned)
      }
    },

    methods: {
      selectInButton(event){
        if ( event.target.tagName === 'SELECT' || event.target.tagName === 'OPTION' )
          event.preventDefault();
      }
    }
  }
</script>


<style scoped>

  .papers__section-blue {
    position: relative;
    margin: 0;
  }

  .papers__banner {
    padding: var(--space);
    min-height: 575px;
    height: 100%;
    display: flex;
  }

  .papers__banner-wrapper {
    position: relative;
    padding-top: var(--space);
    z-index: 5;
  }

  .papers__banner-wrapper p {
    max-width: 808px;
    width: 100%;
    font-size: calc(var(--base-font-size) * 1.2);
    font-style: italic;
    font-weight: 400;
    margin-bottom: calc(var(--space) * 2);
  }

  .papers__banner-img {
    position: absolute;
    bottom: -15px;
    right: 20px;
    max-width: 384px;
    width: 100%;
    z-index: 0;
  }

  .papers__banner-img img {
    width: 100%;
  }

  .papers__banner-img .mobile {
    display: none;
  }

  .papers-pinned {
    padding-top: 0;
    padding-left: 0;
    margin-bottom: calc(var(--space) * 2);
    border: none;
    background-color: #fff;
    color: #000;
    box-shadow: 0.4rem 0.4rem 0 #a7d100;
    text-align: left;
  }

  .papers-pinned__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .papers-pinned__info {
    display: flex;
    align-items: center;
    margin-right: 10px;
  }

  .papers-pinned__icon {
    margin-top: -8px;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    color: #fff;
  }

  .papers-pinned__icon--green-pin {
    background-color: #a7d100;
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='40' viewBox='0 0 30 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_870_3947)'%3E%3Cpath d='M2.50553 2.5C2.50553 1.11719 3.62231 0 5.00462 0H24.9973C26.3796 0 27.4964 1.11719 27.4964 2.5C27.4964 3.88281 26.3796 5 24.9973 5H22.6935L23.5838 16.5781C26.4499 18.1328 28.7147 20.7344 29.7925 23.9766L29.8706 24.2109C30.1283 24.9766 29.9955 25.8125 29.5269 26.4609C29.0583 27.1094 28.3008 27.5 27.4964 27.5H2.50553C1.70113 27.5 0.951406 27.1172 0.475017 26.4609C-0.00137186 25.8047 -0.126326 24.9688 0.131392 24.2109L0.209489 23.9766C1.28722 20.7344 3.55202 18.1328 6.41816 16.5781L7.30846 5H5.00462C3.62231 5 2.50553 3.88281 2.50553 2.5ZM12.5019 30H17.5001V37.5C17.5001 38.8828 16.3833 40 15.001 40C13.6187 40 12.5019 38.8828 12.5019 37.5V30Z' fill='black'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_870_3947'%3E%3Crect width='30' height='40' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    background-position: center;
    background-repeat: no-repeat;
  }

  .papers-pinned h3 {
    margin-top: 0;
    margin-left: calc(var(--space) * 0.7);
    font-weight: 500;
    font-family: var(--font-family);
    font-size: calc(var(--base-font-size) * 1.4);
    text-align: left;
    letter-spacing: 0;
    text-transform: none;
  }

  .papers-pinned__actions {
    display: flex;
    padding-top: calc(var(--space) * 0.5);
  }

  .papers-pinned__actions select {
    margin-right: calc(var(--space) * 0.5);
    min-width: 184px;
    padding: calc(var(--space) * 0.5);
    font-family: var(--font-family);
    font-size: calc(var(--base-font-size) * 0.8);
    border-color: #000;
    color: #000;
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3Csvg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.33224 8.75071C6.93646 9.34483 6.06354 9.34483 5.66776 8.75072L1.04032 1.80442C0.597597 1.13984 1.07402 0.25 1.87256 0.25L11.1274 0.25C11.926 0.25 12.4024 1.13984 11.9597 1.80442L7.33224 8.75071Z' fill='black'/%3E%3C/svg%3E%0A");
  }

  /* dark-theme select */
  /* .dark-theme .papers-pinned__actions select {
    background-image: url("data:image/svg+xml,%3Csvg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.33224 8.75071C6.93646 9.34483 6.06354 9.34483 5.66776 8.75072L1.04032 1.80442C0.597597 1.13984 1.07402 0.25 1.87256 0.25L11.1274 0.25C11.926 0.25 12.4024 1.13984 11.9597 1.80442L7.33224 8.75071Z' fill='white'/%3E%3C/svg%3E%0A");
  } */

  .papers-pinned__actions a {
    box-shadow: none;
    text-align: center;
    font-weight: 500;
    display: flex;
    align-items: center;
  }

  .papers-pinned__text {
    padding-left: var(--space);
    padding-top: var(--space);
    font-size: calc(var(--base-font-size) * 0.9)
  }

  @media screen and (max-width: 1050px) {
    .papers__banner {
      flex-direction: column;
      align-items: center;
      padding-bottom: 0;
    }

    .papers__banner-wrapper {
      margin-bottom: calc(var(--space) * 2);
    }

    .papers__banner-img {
      position: static;
      margin-bottom: -7px;
    }

    .papers__banner-img img {
      display: none;
    }

    .papers__banner-img .mobile {
      display: block;
    }
  }

  @media screen and (max-width: 860px) {
    .papers-pinned__header {
      flex-direction: column;
    }

    .papers-pinned__info {
      margin-right: 0;
      align-self: flex-start;
    }

    .papers-pinned__actions {
      padding-top: var(--space);
      padding-left: var(--space);
      justify-content: center;
    }
    .papers-pinned__actions select {
      min-width: 100px;
    }
  }



  @media screen and (max-width: 440px) {

    .papers-pinned__info {
      flex-wrap: wrap;
    }

    .papers-pinned__info h3 {
      margin-left: 0;
      padding-left: var(--space);
      padding-top: calc(var(--space) * 0.5);
      text-align: center;
    }

    .papers-pinned__icon {
      width: 60px;
      height: 60px;
    }
    .papers-pinned__actions {
      flex-direction: column;
    }
    .papers-pinned__actions select {
      margin-right: 0;
      margin-bottom: calc(var(--space) * 0.5);
    }
  }

</style>
