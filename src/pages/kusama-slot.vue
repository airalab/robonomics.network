<template>
  <layout>

    <MetaInfo
      :pageTitle = "'Robonomics slot in Kusama'"
      :pageDescription = "'Robonomics in the past and nowadays, some important checkpoints of evolution.'"
    />

    <div class="layout__title">
      <h1>Robonomics slot in Kusama</h1>
    </div>

    <section class="auction-banner section section__solid section__blue">

      <h2 class="auction-parachain-title">Robonomics parachain</h2>

      <div class="auction-banner-cols layout__content">
        <div class="auction-banner-kusama">
          <div class="kusama-wrap" v-in-viewport.once>
            <div class="kusama"><g-image src="~/assets/images/kusama.png" alt="Kusama Relay Chain"/></div>
            <div class="slot busy slot-1"><span>1</span></div>
            <div class="slot busy slot-2"><span>2</span></div>
            <div class="slot empty slot-3"><span>3</span></div>
            <div class="slot empty slot-4"><span>4</span></div>
            <div class="slot empty slot-5"><span>5</span></div>
            <div class="slot empty slot-6"><span>6</span></div>
            <div class="bubble robonomics">
              <g-image src="~/assets/images/robonomics.png" alt="Robonomics Parachain"/>
            </div>
            <div class="bubble empty bubble-1"></div>
            <div class="bubble empty bubble-2"></div>
            <div class="bubble empty bubble-3"></div>
            <div class="bubble empty bubble-4"></div>
            <div class="bubble empty bubble-5"></div>
          </div>
        </div>

        <div class="auction-banner-form align-center">
          <h3>3rd-6th slot auctions to win</h3>
          <g-image class="mainpic" alt="Astronaut on Mars with Robonomics and Kusama" src="~/assets/images/robonomics-kusama-mars.png" />
          <Button label="Stay tuned on Twitter" link="https://twitter.com/AIRA_Robonomics" button="primary green large"/>
          <p>
            or<br/>

            <tip summary="Add your email to whitelist" position="center-top" :summaryScale="false" :summaryButton="false" :summaryLink="true" class="inline-block">
              <!-- <form @submit="handleSubmit" :class="'status-'+statusSubmit"> -->
              <form @submit.prevent="onSubmit" class="submition" :class="'status-'+statusSubmit">
                <div><input type="email" placeholder="Your email" v-model="email" name="email" required class="block"/></div>
                <div><label><input type="checkbox" name="agreement" required/> <small>Please, confirm you agree with <a href="/privacy" target="_blank">privacy rules</a></small></label></div>
                <div>
                  <vue-recaptcha
                    ref="invisibleRecaptcha"
                    @verify="onVerify"
                    size="invisible"
                    :sitekey="recaptchaSitekey">
                  </vue-recaptcha>

                  <Button label="Submit" button="border block"/>
                  <!-- <vue-recaptcha :sitekey="recaptchaSitekey" @verify="handleSubmit">
                    <Button label="Submit" button="border block"/>
                  </vue-recaptcha> -->
                </div>

                <div class="load">
                  <div class="load-bird">
                    <g-image src="/assets/kusama-karate-body.png" class="bird-body"/>
                    <g-image src="/assets/kusama-karate-tale.png" class="bird-tale"/>
                    <g-image src="/assets/kusama-karate-wing-1.png" class="bird-wing-1"/>
                    <g-image src="/assets/kusama-karate-wing-2.png" class="bird-wing-2"/>
                    <g-image src="/assets/kusama-karate-ribbons.png" class="bird-ribbons"/>
                    <g-image src="/assets/kusama-karate-hair.png" class="bird-hair"/>
                    <g-image src="/assets/kusama-karate-leg.png" class="bird-leg"/>
                  </div>
                  <p><b>You are in the list now. We'll send you email when auction will start!</b></p>
                </div>

                <div class="wait"><g-image src="~/assets/images/robonomics.png" alt="Robonomics Parachain"/></div>
                <div class="error">Something went wrong. Please, check your connection or try later.</div>

              </form>
            </tip>
          </p>
        </div>

        <div class="auction-banner-details">
          
            <p><strong>Support Robonomics in the Kusama slots auction</strong></p>

            <ul>
              <li>
                <strong>Get 1KSM = 1XRT:</strong>
                XRT is ERC-20 token, traded on Uniswap, and also available on Huobi
              </li>

              <li>
                <strong>Quick rewards available:</strong>
                25% right after the win, 75% after the successful launch of the Robonomics parachain (est. 2-4 weeks)
              </li>

              <li>Receive increased staking of <strong>50% annual return</strong> for the next 2 years</li>

              <li>
                <strong>Contribute to the future:</strong>
                Robonomics integrates new technologies into the real economy
              </li>
            </ul>

        </div>
        
      </div>
    </section>

    <Abstract text="Robonomics starts crowdloan campaign for a parachain slot! Contribute and get rewards." />

    <div class="page layout">
      <!-- <hr class="animate" v-in-viewport.once/> -->

      <!-- <section class="animate" v-in-viewport.once>
        <h2>Robonomics in Kusama</h2>
      </section>

      <section class="animate" v-in-viewport.once>
        <h2>Why is important to win a slot</h2>
      </section>

      <section class="animate" v-in-viewport.once>
        <h2>What benefits you'll get</h2>
      </section>

      <section class="animate" v-in-viewport.once>
        <h2>Where your DOTs/KSMs will place</h2>
      </section>

      <section class="animate" v-in-viewport.once>
        <h2>How to contribute</h2>
      </section> -->
      
    </div>

    <section>
    </section>

  </layout>
</template>


<script>

  import VueRecaptcha from 'vue-recaptcha'

  export default {
    components: {
      MetaInfo: () => import("~/components/MetaInfo.vue"),
      Abstract: () => import("~/components/TextAbstract.vue"),
      Button: () => import("~/components/Button.vue"),
      tip: () => import("~/components/tip.vue"),
      VueRecaptcha
    },

    data () {
      return {
        email: null,
        statusSubmit: 'none',
        recaptchaSitekey: "6LeWbWQUAAAAAPkpf_6AokhGBcvnOexOpbARwk6Z"
        // recaptchaSitekey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" //test localhost
      }
    },

    methods: {

      onSubmit: function () {
        this.$refs.invisibleRecaptcha.execute()
      },

      onVerify: function (response) {
        if(response) {
          this.statusSubmit = 'wait'

            let request = ''

            if(this.email){
              request = 'email=' + encodeURIComponent(this.email)
            }

            fetch('https://script.google.com/macros/s/AKfycbzkKvOsGaZK6M-6oxd6aAzP75hTfcgoEuXX8Q0WrrXNQQ2o4qu0BeMtdnJm7llQJaDI/exec', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: request
            })
            .then(() => this.statusSubmit = 'load')
            .catch(error => this.statusSubmit = 'error')

          }
        }
      },
  }
</script>

<style lang="scss">
  body {
    --tip-width: 22rem;
  }

  .auction-banner {
    .tip, .tip a { color: var(--color-dark)}
  }
</style>

<style scoped lang="scss">


  /* SUBSRIBTION FORM */
  .auction-banner-form {

    .submition {
      position: relative;
    }

    .load, .wait, .error {
      visibility: hidden;
      height: 0;
	    opacity: 0;
    }
    
    .load {
      
      text-align: center;

      p {
        position: relative;
        top: -40px;
        text-shadow: 1px 0 0 #fff;
      }
    }

    .load-bird {
  
      position: absolute;
      top: -24px;
      left: calc(50% - 74px);
      width: 148px;
      height: 180px;

      transform: scale(0.7);
      // @media screen and (max-width: 1660px) { transform: scale(0.8); }
      // @media screen and (max-width: 1000px) { transform: scale(0.6); top: -30px; }

      img { position: absolute; }

      img:not(.bird-body) {
        animation-delay: 0.6s;
        animation-duration: 0.8s;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
        animation-fill-mode: forwards;
      }

      .bird-body {
        width: 148px;
        top: 0;
        left: 0;
        z-index: 1;
      }

      .bird-tale {
        width: 58px;
        top: 100px;
        left: -35px;
        z-index: 0;

        transform-origin: 0 100%;
      }

      .bird-wing-1 {
        width: 47px;
        top: 42px;
        left: 23px;
        z-index: 2;

        transform-origin: 0 0;
      }

      .bird-wing-2 {
        width: 67px;
        top: 42px;
        left: 120px;
        z-index: 0;

        transform-origin: 0 0;
      }

      .bird-ribbons {
        width: 63px;
        top: 37px;
        left: -8px;
        z-index: 0;

        transform-origin: 100% 50%;
      }

      .bird-hair {
        width: 14px;
        top: -10px;
        left: 72px;
        z-index: 0;

        transform-origin: 100% 50%;
      }

      .bird-leg {
        width: 37px;
        top: 127px;
        left: 63px;
        z-index: 3;

        transform-origin: 100% 0;
      }
    }

    .submition.status-load {
      
      .load {
        animation: FadeIn 0.3s var(--animation-bump) forwards;

        .bird-tale { animation-name: birdTale; }
        .bird-wing-1 { animation-name: birdWing1; }
        .bird-wing-2 { animation-name: birdWing2; }
        .bird-ribbons { animation-name: birdRibbons; }
        .bird-hair { animation-name: birdHair; }
        .bird-leg { animation-name: birdLeg; }
      }

      & > *:not(.load), button { pointer-events: none; opacity: 0.1; }
    }

    .wait {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;

      img {
        width: 90px;
        animation: pulse 1.5s infinite;
      }
    }

    .submition.status-wait {
      
      .wait {
        animation: FadeIn 0.3s var(--animation-bump) forwards;
      }

      & > *:not(.wait), button { pointer-events: none; opacity: 0.5; }
    }

    .submition.status-error {
      
      .error {
        animation: FadeIn 0.3s var(--animation-bump) forwards;
        color: var(--color-red);
        height: auto;
      }
    }
  }

  @keyframes birdTale {
    to{
      transform: rotate(25deg) translateX(-20px) translateY(-20px);
    }
  }

  @keyframes birdWing1 {
    to{
      transform: rotate(-50deg) translateX(-25px) translateY(-10px);
    }
  }

  @keyframes birdWing2 {
    to{
      transform: rotate(-50deg) translateX(-25px) translateY(30px);
    }
  }

  @keyframes birdRibbons {
    to{
      transform: rotate(30deg) translateX(-20px);
    }
  }

  @keyframes birdHair {
    to{
      transform: rotate(-30deg);
    }
  }
  @keyframes birdLeg {
    to{
      transform: rotate(-110deg) translateX(10px) translateY(20px);
    }
  }
  /* end SUBSRIBTION FORM */


  .auction-parachain-title:after {
    content: " ++";
    opacity: 0;
    animation: blink var(--duration-mainpic) ease-out 0.1s forwards;
  }


  .auction-banner {

    --color-polka: #E6007A;
    --color-slot: var(--link-color);
    --kusama-size: 20rem;
    --delay-mainpic: 1s;
    --duration-mainpic: 0.6s;
    --delay-bubble: calc(0.2s + var(--delay-mainpic) + var(--duration-mainpic));
    --duration-bubble: 3s;
    --bubble-size: 6rem;
    --slot-size: 3rem;

    padding-top: calc(var(--space) * 2);
    padding-bottom: calc(var(--space) * 2);
    overflow: hidden;

    h2, h3 {
      font-family: var(--font-family-code);
      margin-top: 0;
      margin-bottom: calc(var(--space)/2);
      text-align: center;
    }

    ul {
      font-size: 90%;
      list-style: none;
      margin-left: 0;

      li{
        &::before {
          content: "✓";
          margin-right: 0.3rem;
        }
      }
    }

    .mainpic {
      display: block;
      width: 276px;
      max-width: 80%;
      margin: 0 auto;

      opacity: 0;
      transform: translateY(0.5rem);

      animation: blink var(--duration-mainpic) ease-out var(--delay-mainpic) forwards;
    }

    .button {
      margin-bottom: calc(var(--space)/2);
    }

    a.dashed {
      font-weight: 500;
    }
  }

  .auction-banner-cols {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: calc(var(--space) * 2);
    text-align: left;
  }

  .auction-banner-kusama {
    position: relative;

    .kusama-wrap {
      top: calc(50% - var(--kusama-size)/2);
      right: calc(var(--slot-size) * 4);
    }
  }

  /* KUSAMA SCENE */
  .kusama-wrap {
    position: absolute;
    width: var(--kusama-size);
    height: var(--kusama-size);

    .kusama, .slot, .slot span, .bubble
    {
      display: flex;
      align-items: center;
      align-content: center;
      justify-content: center;
    }

    .kusama {
      position: absolute;
      top: 0;
      left: 0;

      width: var(--kusama-size);
      height: var(--kusama-size);
      border-radius: calc(var(--kusama-size)/2);
      background-color: var(--color-polka);

      img {
        width: calc(var(--kusama-size) * 0.7);
      }
    }

     .slot {
      position: absolute;

      &, &:after, &:before {
        width: var(--slot-size);
        height: var(--slot-size);
        border-radius: 0.4rem;
      }

      &:before {
        content: "";
        background-color: var(--color-slot);
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
      }

      span {
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 0.6rem;

        font-weight: 500;

        background-color: #fff;
        color: var(--color-slot);

        position: relative;
        z-index: 2;
      }

      &.busy {

        &:before { background-color: var(--color-polka); }

        span {
          color: var(--color-polka);
        }

      }

      &.empty {
        &:after {
          content: "";
          background-color: rgba(255, 255, 255, 0.5);
          animation: var(--duration-bubble) pulse 2s infinite;

          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }

    .slot-1 { left: calc(var(--kusama-size) * 0.5); top: calc(var(--slot-size) * (-1.4)); }
    .slot-2 { left: calc(var(--kusama-size) * 0.5 + var(--kusama-size) * 0.3); top: calc(var(--slot-size) * (-0.7)); }
    .slot-3 { left: calc(var(--kusama-size) * 0.5 + var(--kusama-size) * 0.5); top: var(--slot-size); }
    .slot-4 { left: calc(var(--kusama-size) * 0.5 + var(--kusama-size) * 0.6); top: calc(var(--slot-size) * 3); }
    .slot-5 { left: calc(var(--kusama-size) * 0.5 + var(--kusama-size) * 0.5); top: calc(var(--slot-size) * 5); }
    .slot-6 { left: calc(var(--kusama-size) * 0.5 + var(--kusama-size) * 0.3); top: calc(var(--slot-size) * 6.4); }

    .bubble {
      background-color: #fff;
      
      &, &:after {
        width: var(--bubble-size);
        height: var(--bubble-size);
        border-radius: calc(var(--bubble-size)/2);
      }

      position: absolute;
      bottom: 50%;
      transform: scale(1.2) translateY(calc(var(--kusama-size)*1.2));

      animation-name: buble;
      animation-delay: var(--delay-bubble);
      animation-duration: var(--duration-bubble);
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;

      &.empty {
        opacity: 0;
      }
    }

    .bubble.robonomics 
      {
        left: calc(var(--kusama-size) + var(--bubble-size) * 1.3);
        animation-duration: calc(var(--duration-bubble)/2);
        animation-name: bubleRobonomics;

        img {
          position: absolute;
          z-index: 1;
          width: calc(var(--bubble-size) * 0.6);
          top: calc(50% - (var(--bubble-size) * 0.6)/2);
          left: calc(50% - (var(--bubble-size) * 0.6)/2);
        }

        &:after {
          content: "";
          background-color: rgba(255, 255, 255, 0.5);
          animation: pulse 2s infinite;
        
          top: 0;
          left: 0;
        }
      }

    .bubble-1 { left: calc(var(--kusama-size) - 5rem); animation-duration: calc(var(--duration-bubble)*1.2); }
    .bubble-2 { left: calc(var(--kusama-size) + 3rem); animation-duration: calc(var(--duration-bubble)*1.4); }
    .bubble-3 { left: calc(var(--kusama-size) - 10rem); }
    .bubble-4 { left: calc(var(--kusama-size) + 5rem); animation-duration: calc(var(--duration-bubble)/1.2); }
    .bubble-5 { left: calc(var(--kusama-size) + 1.5rem); animation-duration: calc(var(--duration-bubble)/1.4); }

    @keyframes buble {
      from {
        transform: scale(1.2) translateY(calc(var(--kusama-size)*1.2));
        opacity: 0;
      }
      50%{
        opacity: 1;
      }
      to {
        transform: scale(1) translateY(calc(var(--kusama-size) * (-1)));
        opacity: 0;
      }
    }

    @keyframes bubleRobonomics {
      from {
        transform: scale(1.2) translateY(calc(var(--kusama-size)*1.2));
        opacity: 0;
      }
      to{
        transform: scale(1) translateY(0);
        opacity: 1;
      }
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
      100% {
        transform: scale(1);
      }
    }

  }

  .kusama-wrap {
      .bubble, .bubble:after, .slot.empty, .slot.empty:after {
      animation-play-state: paused;
    }
  }

  .kusama-wrap.in-viewport {
    .bubble, .bubble:after, .slot.empty, .slot.empty:after {
      animation-play-state: running;
    }
  }
  /* end of KUSAMA SCENE */


  @media screen and (max-width: 1440px){
      .kusama {
        img {
          width: calc(var(--kusama-size) * 0.4);
        }
      }
        
    }

  @media screen and (max-width: 1140px) {
    .auction-banner-cols {
      grid-template-columns: repeat(2, 1fr);

      .auction-banner-form {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
      }

      .auction-banner-kusama {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
      }
      .auction-banner-details {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
      }
    }
  }

  @media screen and (max-width: 820px) {

    .auction-banner-cols { 
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: auto auto var(--kusama-size);
      column-gap: 0;
      row-gap: calc(var(--space)*4);
      padding-left: var(--space);
      padding-right: var(--space);

      .auction-banner-kusama, .auction-banner-details, .auction-banner-form {
        grid-column: auto;
      }

      .auction-banner-kusama {
        grid-row: 3 / 4;
      }

      .auction-banner-details {
        grid-row: 2 / 3;
      }

      .kusama-wrap {
        left: calc(50% - var(--kusama-size)*0.75);
        right: auto;
        transform: scale(0.8);
      }
    } 
  }


  @media screen and (max-width: 375px) {
    .auction-banner-cols {
      .kusama-wrap {
        transform: scale(0.7);
      }
    }
  }

</style>
