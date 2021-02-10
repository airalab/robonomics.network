<template>
  <layout>

      <MetaInfo
        :pageTitle = "'Home'"
        :pageDescription = "$static.metadata.siteDescription"
      />

      <div class="homepage-entrance" v-if="entrance">
        <h1 class="clean">
          <span>Hello Human</span>
          <span>Connect robotics</span>
          <span>on top of Polkadot or Ethereum</span>
          <span class="buttonwrap">
            <vue-recaptcha :sitekey="recaptchaSitekey" @verify="onVerifyCaptcha" />
          </span>
        </h1>

      </div>

      
    <div class="homepage">

      <div class="layout__title">
        <h1 v-html="$static.metadata.siteName" itemprop="name"/>
      </div>

      <section class="homepage__description">
        <div class="layout__content">

          <!--<p itemprop="description" v-html="$static.metadata.siteDescription" />-->
          <Navigation />

        </div>


        <!--<div class="roboHands" v-in-viewport.once>-->
        <div class="roboHands" :class="[!entrance ? 'in-viewport' : ' ']">
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

   <g-link v-if="calendar & !entrance" class="calendar" to="/community/wallpapers#2021-monthly-calendar-with-gorgeous-cyber-girls" title="Download Free Calendar 2021 from Robonomics">
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
    // padding-bottom: 60px;
   
    &__description{
      position: relative;
      overflow: hidden;
      padding-bottom: 10px;
    }

     .roboHands{
        top: 5rem;
        pointer-events: none;
    }

    h1 {
      font-size: 4rem;
      margin-bottom: 0;

      @media screen and (max-width: 1000px) {
        font-size: 3rem;
      }

      @media screen and (max-width: 700px) {
        font-size: 2rem;
      }

      @media screen and (min-width: 1600px) {
        font-size: 5rem;
      }
    }
    
  }


  .homepage-entrance {
    position: fixed;
    z-index: 1000;
    top: var(--screen-padding);
    left: var(--screen-padding);
    right: var(--screen-padding);
    bottom: var(--screen-padding);

    // background: linear-gradient(-40deg, #000066 0 70%, #6699FF 70% 100%);
    background: linear-gradient(#000066, #6699FF);

    visibility: hidden;
    opacity: 0;
    animation: FadeIn 0.4s ease-in 0.5s forwards;


    h1 {
      --entertext: 15s;
      --enteropacity: .7;
      // --enterfunc: cubic-bezier(0.4, 0.84, 0.44, 1);
      --enterfunc: linear;
      --entercolorstart: var(--color-red);
      --entercolor: #fff;
      --stateNA: scaleY(0);
      --stateA: scale(1);

      display: block;
      margin: 0;
      padding: var(--space);

      color: var(--entercolorstart);
      text-shadow: 0 0 0 var(--entercolor);

      animation: EnterTextShade var(--entertext) var(--enterfunc) forwards;

      font-family: var(--font-family-code);
      letter-spacing: 10px;
      
      position: absolute;
      top: calc(50% - calc(var(--space)*2));
      left: 0;
      right: 0;

      span:not(.buttonwrap) {
        animation-duration: var(--entertext);
        animation-timing-function: var(--enterfunc);
        animation-fill-mode: forwards;

        position: absolute;
        top: 0;
        left: 0;
        right: 0;

        /* Turn on GPU for some browsers */
        -webkit-transform: translateZ(0);
        -moz-transform: translateZ(0);
        -ms-transform: translateZ(0);
        -o-transform: translateZ(0);
        transform: translateZ(0);
      }

      span:nth-child(1) { animation-name: EnterText1; }
      span:nth-child(2) { animation-name: EnterText2; }
      span:nth-child(3) { animation-name: EnterText3; }

      button {
        visibility: hidden;
		    opacity: 0;
        display: block;
        margin: 0 auto;

        animation: FadeIn 0.4s ease-in var(--entertext) forwards;
      }

      @media screen and (max-width: 500px) {

        --entertext: 10s;
        --entercolorstart: #fff;

        visibility: hidden;
	      opacity: 0;
        animation: FadeIn 1s linear forwards;

        span:not(.buttonwrap) {
          transform: var(--stateNA);
          transform-origin: 50% 50%;
        }
        span:nth-child(1) { animation-name: EnterTextMobile1; }
        span:nth-child(2) { animation-name: EnterTextMobile2; }
        span:nth-child(3) { animation-name: EnterTextMobile3; }
      }
    
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


  @keyframes EnterTextShade {
    0% {
      text-shadow: 0 0 0 var(--entercolor);
    }
    23% {
      text-shadow: 0 0 0 var(--entercolor);
    }
    26% {
      text-shadow: 0 0 20px var(--entercolor);
    }
    28% {
      text-shadow: 0 0 20px var(--entercolor);
    }
    39% {
      text-shadow: 0 0 0 var(--entercolor);
    }
    48% {
      text-shadow: 0 0 0 var(--entercolor);
    }
    51% {
      text-shadow: 0 0 20px var(--entercolor);
    }
    53% {
      text-shadow: 0 0 20px var(--entercolor);
    }
    64% {
      text-shadow: 0 0 0 var(--entercolor);
    }
    73% {
      text-shadow: 0 0 0 var(--entercolor);
    }
    76% {
      text-shadow: 0 0 20px var(--entercolor);
    }
    78% {
      text-shadow: 0 0 20px var(--entercolor);
    }
    89% {
      text-shadow: 0 0 0 var(--entercolor);
    }
    100% {
      text-shadow: 0 0 0 var(--entercolor);
    }
    
  }



  @keyframes EnterText1 {
    0% {
      visibility: visible;
		  opacity: var(--enteropacity);
      color: var(--entercolorstart);
    }
    23% {
      visibility: visible;
		  opacity: var(--enteropacity);
      color: var(--entercolorstart);
    }
    26% {
      visibility: visible;
		  opacity: 1;
      color: var(--entercolor);
    }
    36% {
      visibility: visible;
		  opacity: 1;
      color: var(--entercolor);
    }
    39% {
      visibility: visible;
		  opacity: var(--enteropacity);
      color: var(--entercolorstart);
    }
    48% {
      visibility: visible;
		  opacity: var(--enteropacity);
      color: var(--entercolorstart);
    }
    51% {
      visibility: hidden;
      opacity: 0;
    }
    61% {
      visibility: hidden;
      opacity: 0;
    }
    64% {
      visibility: visible;
		  opacity: var(--enteropacity);
    }
    73% {
      visibility: visible;
		  opacity: var(--enteropacity);
    }
    76% {
      visibility: hidden;
      opacity: 0;
    }
    
  }

  @keyframes EnterText2 {
    0% {
      visibility: visible;
		  opacity: var(--enteropacity);
      color: var(--entercolorstart);
    }
    23% {
      visibility: visible;
		  opacity: var(--enteropacity);
    }
    26% {
      visibility: hidden;
      opacity: 0;
    }
    36% {
      visibility: hidden;
      opacity: 0;
    }
    39% {
      visibility: visible;
		  opacity: var(--enteropacity);
      color: var(--entercolorstart);
    }
    48% {
      visibility: visible;
		  opacity: var(--enteropacity);
      color: var(--entercolorstart);
    }
    51% {
      visibility: visible;
		  opacity: 1;
      color: var(--entercolor);
    }
    61% {
      visibility: visible;
		  opacity: 1;
      color: var(--entercolor);
    }
    64% {
      visibility: visible;
		  opacity: var(--enteropacity);
      color: var(--entercolorstart);
    }
    73% {
      visibility: visible;
		  opacity: var(--enteropacity);
      color: var(--entercolorstart);
    }
    76% {
      visibility: hidden;
      opacity: 0;
    }
    86% {
      visibility: hidden;
      opacity: 0;
    }
    
  }

  @keyframes EnterText3 {
    0% {
      visibility: visible;
		  opacity: var(--enteropacity);
    }
    23% {
      visibility: visible;
		  opacity: var(--enteropacity);
    }
    26% {
      visibility: hidden;
      opacity: 0;
    }
    36% {
      visibility: hidden;
      opacity: 0;
    }
    39% {
      visibility: visible;
		  opacity: var(--enteropacity);
    }
    48% {
      visibility: visible;
		  opacity: var(--enteropacity);
    }
    51% {
      visibility: hidden;
      opacity: 0;
    }
    61% {
      visibility: hidden;
      opacity: 0;
    }
    64% {
      visibility: visible;
		  opacity: var(--enteropacity);
      color: var(--entercolorstart);
    }
    73% {
      visibility: visible;
		  opacity: var(--enteropacity);
      color: var(--entercolorstart);
    }
    76% {
      visibility: visible;
		  opacity: 1;
      color: var(--entercolor);
    }
    86% {
      visibility: visible;
		  opacity: 1;
      color: var(--entercolor);
    }
    91% {
      visibility: hidden;
      opacity: 0;
    }
    93% {
      visibility: hidden;
      opacity: 0;
    }
    
  }


  @keyframes EnterTextMobile1 {
    0% {
      transform: var(--stateNA);
    }
    13% {
      transform: var(--stateNA);
    }
    16% {
      transform: var(--stateA);
    }
    26% {
      transform: var(--stateA);
    }
    29% {
      transform: var(--stateNA);
    }
    41% {
      transform: var(--stateNA);
    }
    100% {
      transform: var(--stateNA);
    }
    
  }

  @keyframes EnterTextMobile2 {
    0% {
      transform: var(--stateNA);
    }
    38% {
      transform: var(--stateNA);
    }
    41% {
      transform: var(--stateA);
    }
    51% {
      transform: var(--stateA);
    }
    54% {
      transform: var(--stateNA);
    }
    100% {
      transform: var(--stateNA);
    }
    
  }

  @keyframes EnterTextMobile3 {
    0% {
      transform: var(--stateNA);
    }
    63% {
      transform: var(--stateNA);
    }
    66% {
      transform: var(--stateA);
    }
    76% {
      transform: var(--stateA);
    }
    79% {
      transform: var(--stateNA);
    }
    100% {
      transform: var(--stateNA);
    }
    
  }


 
 
</style>

<script>
  import VueRecaptcha from 'vue-recaptcha'

  import Navigation from '~/components/Navigation.vue'
  import MetaInfo from '~/components/MetaInfo.vue'

  export default {

    components: {
      Navigation,
      MetaInfo,
      VueRecaptcha
    },

    data () {
      return {
        entrance: true,
        calendar: true,
        recaptchaSitekey: "6LeoN0UaAAAAAJCf2ki8hF1-hOqdwmTTgd6cKsXk"
        // recaptchaSitekey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" //test localhost
      }
    },

    mounted() {
      this.cookieEntrance();
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

      //for ReCaptcha
      onVerifyCaptcha(response) {
        this.entrance = false;

        this.hcaptcha_token = response;
        this.verified = true;
      },

      // Detects if we need to show entrance
      cookieEntrance(){
        if ( this.$cookies.get('EntranceShowed') ) {
          this.entrance = false;
        }
        else {
          // 30 days after, expire, '' current path , browser default
          this.$cookies.config(60 * 60 * 24 * 30,'');
          this.$cookies.set('EntranceShowed', '1');
        }
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

