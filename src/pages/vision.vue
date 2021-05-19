<template>
  <layout>

    <MetaInfo
      :pageTitle = "'Robonomics Network Vision'"
      :pageDescription = "''"
    />

    <div class="page">

      <section class="vision-banner page-banner section section__solid section__blue">
        <div class="vision-logo" >
          <g-image class="logo" alt="Robonomics logo" src="~/assets/images/robonomics-logo.svg" />
          <g-image class="earth" alt="Earth" src="~/assets/images/earth.png" />
        </div>

        <h1 class="clean">
          <p>
            <b>Secure</b>
            <b>Serverless</b>
            <b>Futuristic</b>
          </p>
          IoT applications
        </h1>

        <div class="vision-subtitle"><span class="text">Robonomics network vision</span></div>
        <g-image class="vision-city" alt="You'll love the future" src="~/assets/images/city.png" />
        <div class="vision-decortext left">
          $ robonomics io<br/>
          robonomics-io 0.18.0<br/>
          Run I/O actions using Robonomics Framework.<br/><br/>
          USAGE:<br/>
          robonomics io [FLAGS] [OPTIONS] SUBCOMMAND<br/><br/>
          SUBCOMMANDS:<br/>
          help     Prints this message or the help of the given subcommand(s)<br/>
          read     Read information from device<br/>
          write    Write information into device
        </div>

        <div class="vision-decortext right">At the frontier of cybernetics and economics</div>
      </section>

      <section class="vision-iot layout layout__content grid-2">
        <div class="text-col-2">
          <h2>Build your IoT services on Robonomics <sup>*</sup></h2>
          <p><i>* taking full advantage of decentralized architecture</i></p>
          <p class="hyphens">In the light of a complex and unstable international situation, such as trade wars, economic, diplomatic and political sanctions, 
            attempts to block internet services in various regions of the world 
            IoT device/application manufacturers are facing an increasing challenge  
            to guarantee the quality service of its users throughout the lifetime of the sold Iot devices.</p>
          <p>As a solution to such problems, the Robonomics project proposes to use a globally accessible network built with blockchain-supported technologies such as IPFS, Ethereum, Polkadot.</p>
        </div>
        <div class="vision-iot-pic">
          <div id="parallax-iotapp" aria-hidden="true">
            <div class="parallax-layer" data-depth="0.2"><g-image id="parallax-iotapp-1" alt="" src="~/assets/images/iot-applications-1.png" /></div>
            <div class="parallax-layer" data-depth="0.6"><g-image id="parallax-iotapp-2" alt="" src="~/assets/images/iot-applications-2.png" /></div>
            <div class="parallax-layer" data-depth="0.3"><g-image id="parallax-iotapp-3" alt="" src="~/assets/images/iot-applications-3.png" /></div>
            <div class="parallax-layer" data-depth="0.5"><g-image id="parallax-iotapp-4" alt="" src="~/assets/images/iot-applications-4.png" /></div>
            <div class="parallax-layer" data-depth="0.9"><g-image id="parallax-iotapp-5" alt="" src="~/assets/images/iot-applications-5.png" /></div>
            <div class="parallax-layer" data-depth="0.9"><g-image id="parallax-iotapp-6" alt="" src="~/assets/images/iot-applications-6.png" /></div>
            <div class="parallax-layer" data-depth="0.9"><g-image id="parallax-iotapp-7" alt="" src="~/assets/images/iot-applications-7.png" /></div>
          </div>
        </div>
      </section>

      <section class="vision-beginning section__solid">
        <div class="layout layout__content">
          <div class="hyphens vision-beginning-text">
            <h2>From smart contracts to cross chain IoT platform</h2>
            <p>Robonomics project is over six years old, 
              and it is difficult even for core developers to say the exact day or month when the first steps were taken.</p>
              <p>In fact, we started preparing for the first experiment on economically meaningful communication 
                of people and machines with smart contracts in 2014, but roughly we coincide the start of  
                the project with the first days of the Ethereum network.</p>
                <p>By the beginning of 2021, the development team was able to preserve the strongest elements of 
                  the architecture in Robonomics and complement the techno-economic protocol developed in 2015-2019 over 
                  Ethereum and IPFS with elements of the cloud IoT platform based on parachaine Polkadot.</p>
          </div>
        </div>

        <g-link class="vision-beginning-link" to="https://youtu.be/V_3rcP2Duv0"><g-image alt="Youtube video" src="~/assets/images/youtube.png" /></g-link>
        <g-image aria-hidden="true" class="bg" alt="" src="~/assets/images/wintercoding.png" />
      </section>

    </div>

  </layout>
</template>


<script>

  import Parallax from 'parallax-js'

  export default {
    components: {
      MetaInfo: () => import("~/components/MetaInfo.vue"),
      Abstract: () => import("~/components/TextAbstract.vue"),
      Button: () => import("~/components/Button.vue"),
      tip: () => import("~/components/tip.vue")
    },

    mounted() {
      var scene = document.getElementById('parallax-iotapp');
      var parallaxInstance = new Parallax(scene);
    }
  }
</script>

<style scoped lang="scss">
  .vision-banner {
    position: relative;
    background: var(--color-gradient-mars);
    min-height: 450px;

    h1 {
      margin-top: calc(var(--space) * 0.5);


      b {
        display: inline-block;
        margin-right: var(--space);
        font-weight: 700;
        font-size: 80%;

        &:last-child {
          margin-right: 0;
        }
      }

      @media screen and (max-width:800px) {
        font-size: calc(var(--base-font-size) * 2);

        p { font-size: 70%; }
      }

      @media screen and (max-width: 400px) {
        p {
          margin-bottom: calc(var(--space)*1.5);
        }
      }
    }

    .vision-city {
      position: absolute;
      bottom: 0;
      width: 580px;
      left: calc(50% - 290px);
      z-index: 0;
    }

    & > *:not(.vision-city .vision-banner .vision-decortext) {
      position: relative;
      z-index: 1;
    }
  }

  .vision-logo {
    position: relative;
    z-index: 1;
    margin-top: calc(var(--space) * 1.7);

    .logo {
      width: 130px;
      position: relative;
      z-index: 1;
    }

    .earth {
      position: absolute;
      width: 250px;
      left: calc(50% - 45px);
      top: - 70px;
      opacity: 0.5;
      z-index: 0;
    }
  }

  .vision-subtitle {
    position: absolute;
    z-index: 1;
    bottom: 20px;
    left: 0;
    right: 0;
    text-align: center;
    white-space: nowrap;

    .text {
      display: inline-block;
      padding: 0 0.4rem;
      margin: 0;
      background: #000;
      color: #fff;
      font-weight: 300;
    }
  }

  .vision-decortext {
    position: absolute;
    z-index: 0;
    text-align: left;
    opacity: 0.4;
    
    &.left {
      font-size: 60%;
      bottom: 30px;
      left: 50px;
    }

    &.right {
      top: 30px;
      right: 30px;
      max-width: 250px;

      @media screen and (max-width: 500px) {
        right: 10px;        
      }
    }
  }


  /* 2 ---- */

  .vision-iot {
    // margin-bottom: 0;

    .vision-iot-pic {
      justify-self: center;
      align-self: end;
      width: 100%;
    }

    h2 { font-weight: bold; }
    h4 { margin-top: 0; font-style: italic;}

    @media screen and (max-width: 1280px) {
      .text-col-2 {
        column-count: 1;
      }
    }

    @media screen and (max-width: 950px) {
      #parallax-iotapp {
        transform: scale(0.8) !important;
      }

      .vision-iot-pic {
        // transform: scale(0.8);
        grid-row-start: 1;
        align-self: center;
        overflow: hidden;
      }

      grid-template-columns: 1fr;
      grid-template-rows: 400px 1fr;
    }
  }

  #parallax-iotapp {
    position: relative;
    width: 516px;
    height: 545px;
    margin: 0 auto;

    img {
      position: absolute;
    }
  }

  .parallax-layer {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  #parallax-iotapp-1 {
    width: 237px;
    bottom: 0;
    left: 100px;
  }

  #parallax-iotapp-2 {
    width: 180px;
    bottom: 0;
    left: 300px;
  }

  #parallax-iotapp-3 {
    width: 516px;
    bottom: 78px;
    left: 0;
  }

  #parallax-iotapp-4 {
    width: 318px;
    bottom: 200px;
    left: 90px;
  }

  #parallax-iotapp-5 {
    width: 80px;
    bottom: 400px;
    left: 10px;
  }

  #parallax-iotapp-6 {
    width: 84px;
    bottom: 370px;
    left: 400px;
  }

  #parallax-iotapp-7 {
    width: 55px;
    bottom: 170px;
    left: -40px;
  }

  /* 3 ----- */

  .vision-beginning {
    background: linear-gradient(#96daff, #fffbf3 60%);
    position: relative;
    min-height: 500px;
    padding-top: calc(var(--space) * 2);
    padding-bottom: calc(var(--space) * 2);
    overflow: hidden;
    margin-bottom: 0;

    .bg {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 0;
    }

    @media screen and (max-width: 660px) {
      padding-bottom: 200px;
    }
  }

  .vision-beginning-text {
    &, h2 { text-align: left; }
    width: 50%;
    float: right;
    position: relative;
    z-index: 1;
    max-width: 700px;

    @media screen and (max-width: 660px) {
      float: none;
      width: 100%;
    }
  }

  .vision-beginning-link {
    position: absolute;
    top: calc(var(--space)*2);
    left: calc(var(--space)*2);
    z-index: 2;

    width: 100px;

    @media screen and (max-width: 660px) {
      bottom: calc(var(--space)*2);
      right: calc(var(--space)*2);
      top: auto;
      left: auto;
    }
  }
</style>