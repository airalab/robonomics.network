<template>
  <layout>

      <MetaInfo
        :pageTitle = "'Home'"
        :pageDescription = "$static.metadata.siteDescription"
      />
      
    <div class="homepage">

      <div class="layout__title">
        <h1 v-html="$static.metadata.siteName" itemprop="name"/>
        <p itemprop="description" v-html="$static.metadata.siteDescription" />
      </div>

      <section class="homepage__description">

        <div class="layout__content">
          <Navigation />
        </div>


        <div class="roboHands" v-in-viewport.once>
          <div class="roboHands__move left">
            <div class="roboHands__left">
              <g-image src="~/assets/images/robotHand1-1.svg" class="roboHands__left__1" />
              <g-image src="~/assets/images/robotHand1-2.svg" class="roboHands__left__2" />
              <g-image src="~/assets/images/robotHand1-3.svg" class="roboHands__left__3" />
              <g-image src="~/assets/images/robotHand1-4.svg" class="roboHands__left__4" />
              <g-image src="~/assets/images/robotHand1-5.svg" class="roboHands__left__5" />
              <g-image src="~/assets/images/robotHand1-6.svg" class="roboHands__left__6" />
              <g-image src="~/assets/images/robotHand1-7.svg" class="roboHands__left__7" />
              <g-image src="~/assets/images/robotHand1-8.svg" class="roboHands__left__8" />
              <g-image src="~/assets/images/robotHand1-9.svg" class="roboHands__left__9" />
              <g-image src="~/assets/images/robotHand1-10.svg" class="roboHands__left__10" />
              <g-image src="~/assets/images/robotHand1-11.svg" class="roboHands__left__11" />
            </div>
          </div>

          <div class="roboHands__move right">
            <div class="roboHands__right">
              <g-image src="~/assets/images/robotHand2-1.svg" class="roboHands__right__1" />
              <g-image src="~/assets/images/robotHand2-2.svg" class="roboHands__right__2" />
              <g-image src="~/assets/images/robotHand2-3.svg" class="roboHands__right__3" />
              <g-image src="~/assets/images/robotHand2-4.svg" class="roboHands__right__4" />
              <g-image src="~/assets/images/robotHand2-5.svg" class="roboHands__right__5" />
              <g-image src="~/assets/images/robotHand2-6.svg" class="roboHands__right__6" />
              <g-image src="~/assets/images/robotHand2-7.svg" class="roboHands__right__7" />
              <g-image src="~/assets/images/robotHand2-8.svg" class="roboHands__right__8" />
              <g-image src="~/assets/images/robotHand2-9.svg" class="roboHands__right__9" />
              <g-image src="~/assets/images/robotHand2-10.svg" class="roboHands__right__10" />
              <g-image src="~/assets/images/robotHand2-11.svg" class="roboHands__right__11" />
              <g-image src="~/assets/images/robotHand2-12.svg" class="roboHands__right__12" />
              <g-image src="~/assets/images/robotHand2-13.svg" class="roboHands__right__13" />
              <g-image src="~/assets/images/robotHand2-14.svg" class="roboHands__right__14" />
              <g-image src="~/assets/images/robotHand2-15.svg" class="roboHands__right__15" />

            </div>
          </div>
          
        </div>

      </section>
  </div>

   <g-link v-if="calendar" class="calendar" to="/community/wallpapers#2021-monthly-calendar-with-gorgeous-cyber-girls" title="Download Free Calendar 2021 from Robonomics">
      <g-image class="calendar-i-1" alt="Download Free Calendar 2021 Robonomics" src="~/assets/images/banners/calendar-2.png" />
      <g-image class="calendar-i-2" alt="Download Free Calendar 2021 Robonomics" src="~/assets/images/banners/calendar-3.png" />
      <g-image class="calendar-i-3" alt="Download Free Calendar 2021 Robonomics" src="~/assets/images/banners/calendar-4.png" />
      <g-image class="calendar-i-4" alt="Download Free Calendar 2021 Robonomics" src="~/assets/images/banners/calendar-5.png" />
      <g-image class="calendar-i-5" alt="Download Free Calendar 2021 Robonomics" src="~/assets/images/banners/calendar-6.png" />
    </g-link>


  </layout>
</template>

<static-query>
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>

<style lang="scss" scoped>
  h1 {
    font-size: 3rem;
    margin-bottom: 0;

    @media screen and (min-width: 1000px) {
      font-size: 4rem;
    }

    @media screen and (min-width: 1600px) {
      margin-top: 2.5rem;
    }

    @media screen and (max-width: 400px) {
      font-size: rem;
    }
  }

  p[itemprop="description"]{
    max-width: 700px;
    margin: 0 auto;
    // font-family: var(--font-family-code);

    @media screen and (max-width: 1000px) {
      margin-top: var(--space);
      margin-bottom: calc(var(--space)*2);
    }
  }

  .calendar {
      --i-width: 100px;

      display: block;

      position: fixed;
      bottom: calc(var(--i-width) * 0.6 * (-1)); //-60% from .calendar
      left: 0;
      right: 0;
      z-index: 900;

      text-align: center;
      white-space: nowrap;

      transform: translateY(5%);
      visibility: hidden;
		  opacity: 0;
    
      img {
        width: var(--i-width);
      }

      @for $i from 1 through 3 {
        .calendar-i-#{$i} {
          transform: rotate(random(14) - 14 + deg);
        }
      }

      @for $i from 4 through 5 {
        .calendar-i-#{$i} {
          transform: rotate(random(14) + deg);
        }
      }

      &:after {
        content: "";

        background-color: var(--color-dark);
        height: 1px;
        position: absolute;
        bottom: 0;
        width: var(--content-width);
        left: calc(50% - var(--content-width)/2);

        transform: scaleX(0);
        visibility: hidden;
		    opacity: 0;
        transform-origin: 50% 50%;
      }

      @media screen and (min-height: 660px) {
   
          animation: FloatYUp 0.6s ease-out 5s forwards, FadeIn 0.6s ease-out 5s forwards;

          &:after {
            animation: ScaleX 0.4s ease-out 3.5s forwards, FadeIn 0.4s ease-out 3.5s forwards;
          }

          &:hover {
            @for $i from 1 through 5 {
              .calendar-i-#{$i} {
                animation: calendar#{$i} 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s forwards;
              }
            }
          }
        
      }

    }

    @keyframes calendar1{
      to{
        transform: rotate(random(30) - 30 + deg) translateY(random(30) - 60 + px);
      }
    }
    @keyframes calendar2{
      to{
        transform: rotate(random(30) - 30 + deg) translateY(random(30) - 60 + px);
      }
    }
    @keyframes calendar3{
      to{
        transform: rotate(random(30) - 30 + deg) translateY(random(30) - 60 + px);
      }
    }
    @keyframes calendar4{
      to{
        transform: rotate(random(30) + deg) translateY(random(30) - 60 + px);
      }
    }
    @keyframes calendar5{
      to{
        transform: rotate(random(30) + deg) translateY(random(30) - 60 + px);
      }
    }


  .homepage{
    visibility: hidden;
    opacity: 0;
    animation: FadeIn 0.4s ease-in 1s forwards;
   
    &__description{
      position: relative;
      overflow: hidden;
      padding-bottom: 10px;
    }

     .roboHands{
        top: 5rem;
        pointer-events: none;
    }
    
  }

  .buttonwrap {
    visibility: hidden;
    opacity: 0;

    animation: FadeIn 0.4s ease-in calc(var(--entertext) - 1s) forwards;

    & > div {
      position: absolute;
      top: 0;
      left: calc(50% - 152px);
    }
  }
</style>

<script>
  import Navigation from '~/components/Navigation.vue'
  import MetaInfo from '~/components/MetaInfo.vue'

  export default {

    components: {
      Navigation,
      MetaInfo
    },

    data () {
      return {
        calendar: true
      }
    },

    mounted() {
      this.cookieCalendar();
    },

    updated() {
      this.scale();
      window.addEventListener('load', this.scale);
      window.addEventListener('resize', this.scale);
    },

    beforeDestroy() {
      window.removeEventListener('load', this.scale);
      window.removeEventListener('resize', this.scale);
    },

    methods: {
      //for scaling animation 'Hands'
      scale(){
        this.scaleRatio('.roboHands__move.left', '.roboHands__left');
        this.scaleRatio('.roboHands__move.right', '.roboHands__right');
      },

      //for scaling animation 'Hands'
      scaleRatio(parent, element){
        var ratio = (document.querySelector(parent).offsetWidth / document.querySelector(element).offsetWidth).toFixed(2)*0.9;
        document.querySelector(element).style.transform = 'scale(' + ratio +')';
      },


      cookieCalendar(){
        if ( this.$cookies.get('CalendarShowed') ) {
          this.calendar = false;
        }
        else {
          // 3 days after, expire, '' current path , browser default
          this.$cookies.config(60 * 60 * 24 * 3,'');
          this.$cookies.set('CalendarShowed', '1');
        }
      }
    }
  }
</script>

