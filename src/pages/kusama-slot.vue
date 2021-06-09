<template>
  <layout>

    <MetaInfo
      :pageTitle = "'Robonomics slot in Kusama'"
      :pageDescription = "'Robonomics developers aim to allocate $720,000 for 48 weeks lease of a slot in the Kusama network. This underlying amount of XRT will be distributed among the KSM holders who will support the project with their tokens at the upcoming auction of Polkadot’s wild cousin.'"
    />

    <div class="auction page">


      <section class="page-banner auction-banner section section__solid section__blue">
        <h1 class="auction-parachain-title clean">Crowdloan for Robonomics in Kusama</h1>
        
        <div class="auction-banner-cols layout__content">
          <div class="auction-banner-kusama">
            <div class="kusama-wrap" v-in-viewport.once>
              <div class="kusama"><g-image src="~/assets/images/kusama.png" alt="Kusama Relay Chain"/></div>
              <div class="slot busy slot-1"><span>1</span></div>
              <div class="slot busy slot-2"><span>2</span></div>
              <div class="slot empty slot-3"><span>3</span></div>
              <div class="slot empty slot-4"><span>4</span></div>
              <div class="slot empty slot-5"><span>5</span></div>
              <!-- <div class="slot empty slot-6"><span>6</span></div> -->
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
            <h3>Waiting for the 3rd-5th slot auctions to win</h3>
            <g-image class="astronaut" alt="Astronaut on Mars with Robonomics and Kusama" src="~/assets/images/robonomics-kusama-mars.png" />
            <Button label="Stay tuned on Twitter" link="https://twitter.com/AIRA_Robonomics" button="primary green large"/>
            <p>
              or<br/>

              <tip summary="Add your email to whitelist" position="center-top" :summaryScale="false" :summaryButton="false" :summaryLink="true" class="inline-block">
                <!-- <form @submit="handleSubmit" :class="'status-'+statusSubmit"> -->
                <form @submit.prevent="onSubmit" class="auction-submition" :class="'status-'+statusSubmit">
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

              <ul class="hyphens">
                <li>
                  <strong>Get 1KSM = 1XRT:</strong>
                  XRT is ERC-20 token, available on Uniswap, Huobi, and in addition on PancakeSwap
                </li>

                <li>
                  <strong>Quick rewards available:</strong>
                  25% right after the win, 75% after the successful launch of the Robonomics parachain (est. 2-4 weeks)
                </li>

                <li>Receive increased staking of <strong>125% return</strong> for the next 48 weeks</li>

                <li>
                  <strong>Contribute to the future:</strong>
                  Robonomics integrates new technologies into the real economy
                </li>
              </ul>

          </div>
          
        </div>
      </section>
      

      <Abstract text="Robonomics crowdloan campaign for a parachain slot is coming very soon! Contribute and get rewards." />

      <hr class="animate" v-in-viewport.once/>

      <h2 class="layout">How to participate in Robonomics crowdloan</h2>
      <section class="auction-steps grid-3 animate-inside layout layout__content" v-in-viewport.once>

        <Card orientation="vertical" back="transparent">

          <div class="image">
            <g-image alt="" src="~/assets/images/plo-girl-1.png"/>
          </div>

          <h3>1.Ready</h3>
          <p class="hyphens">To participate in Robonomics Kusama parachain crowdloan campaign you'll need KSM tokens. If your KSM are bonded, you will need to unbond your KSM at least 7 days before the Crowdloan start.</p>

        </Card>

        <Card orientation="vertical" back="transparent">
          
          <div class="image">
            <g-image src="~/assets/images/plo-girl-2.png" />
          </div>

          <h3>2.Steady</h3>
          <p class="hyphens">Crowdloan camphain for a parachain slot will begin after Kusama Parachains Launch Phase 3, when official Polkadot Crowdloan module will be available in Mainnet. Estimated summer 2021. Do not miss announcements on <g-link to="https://twitter.com/AIRA_Robonomics">Twitter</g-link></p>

        </Card>

        <Card orientation="vertical" back="transparent">

          <div class="image">
            <g-image src="~/assets/images/plo-girl-3.png" />
          </div>

          <h3>3.Go</h3>
          <p class="hyphens">Find Robonomics Parachain in 'Ongoing' during 3rd-5th slot Kusama Parachains Auction and contribute. You can follow <g-link to="https://blog.aira.life/how-to-participate-in-parachain-auctions-crowdloan-module-guide-by-robonomics-53bad74d2e77">this guide</g-link> to contribute.</p>

        </Card>

      </section>

      <hr class="animate" v-in-viewport.once/>

      <section class="animate" v-in-viewport.once>
        <h2 class="layout">Choose your strategy</h2>
        
        <section class="auction-steps grid-3 animate-inside layout layout__content" v-in-viewport.once>

        <Card orientation="vertical" back="transparent">

          <div class="image">
            <g-image alt="" src="~/assets/images/plo-holder-1.png"/>
          </div>

          <h3>For KSM holders</h3>
          <p class="hyphens">Robonomics PLO may be interesting for stakeholders who are looking for ways to diversify their KSM stake next 48 weeks inside the ecosystem. <g-link to="/community#token">XRT</g-link> is ERC-20 token, available on Uniswap, Huobi, and in addition on PancakeSwap.</p>

        </Card>

        <Card orientation="vertical" back="transparent">
          
          <div class="image">
            <g-image src="~/assets/images/plo-holder-2.png" />
          </div>

          <h3>For XRT holders</h3>
          <p class="hyphens">Gain value for your XRT by winning Kusama Slot with Robonomics network great potential for scaling. <g-link to="/blog">Read development plans in our blog</g-link></p>
        </Card>

        <Card orientation="vertical" back="transparent">

          <div class="image">
            <g-image src="~/assets/images/plo-holder-3.png" />
          </div>

          <h3>For tech-inspired</h3>
          <p class="hyphens">Robonomics already has complex ecosystem for connecting real world to <g-link to="https://web3-technology-stack.readthedocs.io">Web3 Technology Stack</g-link>. It's free, it's opensource, everybody can try it for IoT and Smart services. With Polkadot it can be even more cost-effective.</p>
        </Card>

      </section>

      </section>

      <section class="kusama-parachain">
        <section class="kusama-parachain-intro section__solid section__gradient-purpleblue">
          <div class="layout layout__text animate-inside" v-in-viewport.once>
            <h2>Robonomics Relay Chain on Polkadot</h2>
            <p class="hyphens">Kusama parachain is great opportunity for Robonomics to scale network up to 1 million IoT systems connected in real-time without any centrilized regulators.</p>
            <p class="hyphens">The Robonomics developers team formed plan for 2 years within Kusama slot. We will try to build on our existing work and new software development 5 specific parachains, including:</p>

            <div class="parachains-overview">
   
              <div class="parachains-overview-description">
                
                <div class="item" :class="(parachainTab == 1) ?'active':''">
                  <h4>Smart leasing parachain </h4>
                  <p class="hyphens">Recoup your investment in the high-value robots by renting out it with a mechanism for tokenizing robots’ labor.</p>
                </div>
                <div class="item" :class="(parachainTab == 2) ?'active':''">
                  <h4>Robot as a Service (RaaS) parachain</h4>
                  <p class="hyphens">Get and provide direct robot services without cashiers, clerks or centrilized cloud providers.</p>
                </div>
                <div class="item" :class="(parachainTab == 3) ?'active':''">
                  <h4>RWS parachain</h4>
                  <p class="hyphens">Robonomics Web Services (RWS) will provide decentralized infrastructure for IoT solutions.</p>
                </div>
                <div class="item" :class="(parachainTab == 4) ?'active':''">
                  <h4>DAO IPCI parachain</h4>
                  <p class="hyphens">The Robonomics network provides technology for environmental mitigation service DAO IPCI.</p>
                </div>
                <div class="item" :class="(parachainTab == 5) ?'active':''">
                  <h4>Distributed Sky parachain</h4>
                  <p class="hyphens">Blockchain techonologies to control the traffic of drones (automated planning of drone flight paths, decentralized payment regulations, smart contract for transactions)</p>
                </div>
                
              </div>

               <div class="parachains-overview-line">
              
                  <div class="item" :class="(parachainTab == 1) ?'active':''" @click="parachainTab=1">
                    <g-image src="~/assets/images/parachain-i-leasing.png" />
                    <p class="item-title">Smart rental and leasing</p>
                  </div>
                  
                  <div class="item" :class="(parachainTab == 2) ?'active':''" @click="parachainTab=2">
                    <g-image src="~/assets/images/parachain-i-robot-as-a-service.png" />
                    <p class="item-title">Robot as a Service</p>
                  </div>

                  <div class="item" :class="(parachainTab == 3) ?'active':''" @click="parachainTab=3">
                    <g-image src="~/assets/images/parachain-i-rws.png" />
                    <p class="item-title">"Cloud" for IoT applications</p>
                  </div>
                  
                  <div class="item" :class="(parachainTab == 4) ?'active':''" @click="parachainTab=4">
                    <g-image src="~/assets/images/parachain-i-enviromental.png" />
                    <p class="item-title">Environmental mitigation</p>
                  </div>

                  <div class="item" :class="(parachainTab == 5) ?'active':''" @click="parachainTab=5">
                    <g-image src="~/assets/images/parachain-i-drones-traffic.png" />
                    <p class="item-title">Drone vehicle traffic</p>
                  </div>

              </div>


            </div>
          </div>
        </section>
        <section class="draw-polkadotParachain" aria-hidden="true">

          <g-image class="i-polkadot" src="~/assets/images/logo-polkadot.png" alt="Polkadot Parachains" />

          <div class="polkadot overflowHide"></div>
          <div class="slot slot-center"></div>

          <div class="overflowHide">
            <div class="slot slot-left"></div>
            <div class="slot slot-right"></div>
          </div>
  
        </section>
      </section>

    </div>

  </layout>
</template>


<script>

  export default {
    components: {
      MetaInfo: () => import("~/components/MetaInfo.vue"),
      Abstract: () => import("~/components/TextAbstract.vue"),
      Button: () => import("~/components/Button.vue"),
      tip: () => import("~/components/tip.vue"),
      VueRecaptcha: () => import("vue-recaptcha")
    },

    metaInfo: {
      script: [
        {
          src: 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit',
          body: true
        }
      ]
    },

    data () {
      return {
        email: null,
        statusSubmit: 'none',
        recaptchaSitekey: "6LeWbWQUAAAAAPkpf_6AokhGBcvnOexOpbARwk6Z",
        // recaptchaSitekey: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" //test localhost,
        parachainTab: 1
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

  /*BASICS*/
  .auction {
    --color-polka: #E6007A;
    --color-polka-dark: #9c0053;
    --color-slot: var(--link-color);
    --kusama-size: 20rem;
    --delay-mainpic: 1s;
    --duration-mainpic: 0.6s;
    --delay-bubble: calc(0.2s + var(--delay-mainpic) + var(--duration-mainpic));
    --duration-bubble: 3s;
    --bubble-size: 6rem;
    --slot-size: 3rem;
  }

  .section__solid {
    padding-top: calc(var(--space) * 3);
    padding-bottom: calc(var(--space) * 3);
  }
  /*end BASICS*/

  /* ROBONOMICS KUSAMA PARACHAIN INFO */
  .kusama-parachain {
    margin: 0; // temp
    
    section {
      margin: 0;
    }

    .parachains-overview {
      margin-top: calc(var(--space) * 2);
      padding-bottom: 10px;
      border-bottom: 2px dashed #fff;
      position: relative;
      font-size: 90%;

      h4 { font-size: var(--base-font-size); font-weight: bold; }

      &:after {
        content: "";
        height: 40px;
        width: 1px;
        border-left: 2px dashed #fff;
        position: absolute;
        bottom: -55px;
        left: calc(50% - 1px);
      }
    }
  }

  .kusama-parachain-intro {
    font-family: var(--font-family-code);

    h2 {
      margin-bottom: calc(var(--space)*2);
    }
  }

  .parachains-overview-line {
    display: grid;
    grid-template-columns: repeat(5, minmax(110px,1fr));
    align-items: start;

    /* scroll */
    width: 100%;
    overflow-x: auto;
    &::-webkit-scrollbar { display: none; }
    -ms-overflow-style: none;
    scrollbar-width: none;

    .item {
      opacity: 0.5;
      transform: scale(0.7);
      cursor: pointer;

      &.active {
        opacity: 1;
        transform: scale(1);
      }

      &:hover {
        transform: scale(1);
      }

      img {
        height: 100px;
        width: auto;

        @media screen and (max-width: 700px) {
          height: 50px;
        }
      }
    }

    .item-title {
      font-weight: bold;
      font-family: var(--font-family);
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 0.8rem;
      color: #88bcff;
    }
  }

  .parachains-overview-description {
    margin-top: var(--space);
    margin-bottom: var(--space);

    .item {
      opacity: 0;
      display: none;

      &.active {
        display: block;
        animation: opacity 0.5s linear 0.2s forwards;
      }

      h4 {
        margin-bottom: 10px;
      }
    }
  }

  @keyframes opacity {
    to {
      opacity: 1;
    }
  }

  .draw-polkadotParachain {
    --size-polkadot: 1120px;
    --size-polkadot-logo: 58px;
    --size-slot: 60px;

    background-color: var(--color-purple);
    height: 230px;

    position: relative;

    .overflowHide {
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .polkadot {
      &:after {
        content: "";
        display: block;
        width: var(--size-polkadot);
        height: var(--size-polkadot);
        border-radius: calc(var(--size-polkadot)/1.5);
        background-color: var(--color-polka);
        border: 20px solid var(--color-polka-dark);

        position: absolute;
        top: 65px;
        left: calc(50% - var(--size-polkadot)/2 - 20px);
        z-index: 0;
      }
    }

    .i-polkadot {
      position: absolute;
      left: calc(50% - var(--size-polkadot-logo)/2);
      bottom: 28px;
      z-index: 1;

      width: var(--size-polkadot-logo);
    }

    .slot {
      position: absolute;
      width: var(--size-slot);
      height: 135px;
      z-index: 0;

      &:before, &:after {
        content: "";
        display: block;
      }

      &:before {
        width: var(--size-slot);
        height: var(--size-slot);
        border-radius: calc(var(--size-slot)/2);
        background-color: var(--color-polka);
      }

      &:after {
        width: 1px;
        height: 100%;
        border-left: 2px dashed var(--color-polka);

        position: absolute;
        bottom: 0;
        left: calc(50% - 1px);
      }

      &.slot-center {
        top: calc((-1) * var(--size-slot)/2);
        left: calc(50% - var(--size-slot)/2);
      }

      &.slot-left, &.slot-right {
        opacity: 0.5;
      }

      &.slot-left {
        bottom: 0;
        left: calc(50% - 460px - var(--size-slot)/2);
      }

      &.slot-right {
        bottom: 0;
        left: calc(50% + 460px - var(--size-slot)/2);
      }
    }
  }
  /* end ROBONOMICS KUSAMA PARACHAIN INFO */


  /* SUBSRIBTION FORM */
  .auction-submition {
    
    position: relative;

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

    &.status-load {
      
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

    &.status-wait {
      
      .wait {
        animation: FadeIn 0.3s var(--animation-bump) forwards;
      }

      & > *:not(.wait), button { pointer-events: none; opacity: 0.5; }
    }

    &.status-error {
      
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


  // .auction-parachain-title:after {
  //   content: " ++";

  //   opacity: 0;
  //   animation: blink var(--duration-mainpic) ease-out 0.1s forwards;
  // }

  .astronaut {
    display: block;
    margin: 0 auto;
    width: 300px;
    max-width: 100%;

    opacity: 0;
    transform: translateY(0.6rem);
    animation: blink var(--duration-mainpic) ease-out var(--delay-mainpic) forwards;
  }


  .auction-banner {
    overflow: hidden;
    text-align: center;

    .button, h2, h3 {
      margin-bottom: calc(var(--space)/2);
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
      opacity: 0;
      transform: scale(1.2) translateY(calc(var(--kusama-size)*1.2));

      animation-name: buble;
      animation-delay: var(--delay-bubble);
      animation-duration: var(--duration-bubble);
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
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


  .auction-steps {

    img {
      width: 60%
    }

    h3 {
      margin-top: 0;
    }

    @media screen and (max-width: 400px) {
      img {
        width: 100%
      }
    }
  }

</style>