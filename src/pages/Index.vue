<template>
  <layout>

      <MetaInfo
        pageTitle = "Robonomics Network"
        pageDescription = "Robonomics is a decentralized cloud for storing digital twins of robotics and IoT devices. Robonomics enables economic and technical communication between machines and humans. Its decentralized architecture secures the end user's privacy."
      />

      <section id="homebanner" class="slide section section__solid">
        <div id="homebanner-content" :style="bannertransform">

          <div id="homebanner-scheme">
            <a id="homebanner-pic" href="https://youtu.be/onMv_An8h2Q?si=cysEy9NF1wjepo5C" target="_blank">
              <g-image alt="Robonomics as a decentralized word computer scheme, how it works" src="~/assets/images/robonomics-scheme-x2.png" srcset="~/assets/images/robonomics-scheme.png 420px" quality="100" />
            </a>
            <div id="homebanner-scheme-subtitle">
              <h4>Robonomics<br/> {{ $t('is a part of the World Computer') }}</h4>
              <IconBannerArrowLeft aria-hidden="true" />
            </div>
            <div id="homebanner-scheme-video">
              <h4>{{ $t('Watch the video') }}<br/> {{ $t('“What is Robonomics”') }}</h4>
              <a href="https://youtu.be/onMv_An8h2Q?si=cysEy9NF1wjepo5C" target="_blank"><g-image alt="Video - What is Robonomics" src="~/assets/images/robonomics-scheme-video.webp" quality="100" /></a>
              <IconBannerArrowRight aria-hidden="true" />
            </div>
            <a id="homebanner-link" href="https://youtu.be/onMv_An8h2Q?si=cysEy9NF1wjepo5C" target="_blank">{{ $t('What is Robonomics') }}</a>
          </div>

          <div class="layout layout__content">
            <h1>{{$t('Web3 cloud')}}<br/> {{ $t('for Robotics and IoT Devices') }}</h1>
          </div>
          
        </div>
      </section>


      <section class="section__whitespace">
        <div class="layout layout__text animate-inside" v-in-viewport.once>
          <h2>{{ $t('What is Robonomics') }}</h2>
          <p class="text-center">{{ $t('Robonomics is already functioning Web3 Cloud, which allows managing IoT devices, performing techno-economic transactions between people and machines, and building serverless IoT apps. Create use cases from the world of IoT/Robotics with a focus on global accessibility, cybersecurity, and data privacy.') }}</p>
        </div>

        <div class="layout layout__content ">
          <Scheme/>
        </div>

      </section>

      <hr/>

      <section class="section__whitespace">
        <div class="layout layout__text align-center">
          <h2>{{$t('Get started')}}</h2>
        </div>

        <section class="index-getstarted layout layout__content grid-4 animate-inside" v-in-viewport.once>
          <g-link class="oldy oldy__link" to="/intro/">
            <div class="img-back">
              <g-image aria-hidden="true" alt="" src="~/assets/images/explore-1.png" />
            </div>
            <h3>{{$t('Explore Robonomics')}}</h3>
            <p>{{$t('Robonomics is an open-source technology for IoT market available for everyone. Read an executive summary to know more')}}</p>
          </g-link>

          <g-link class="oldy oldy__link" to="/xrt">
            <div class="img-back">
              <g-image alt="" aria-hidden="true" src="~/assets/images/explore-2.png" />
            </div>
            <h3>{{$t('Get XRT')}}</h3>
            <p>{{$t('XRT is the utility token that make it possible to control IoT devices on top of the Ethereum network and the Robonomics parachain')}}</p>
          </g-link>

          <g-link class="oldy oldy__link" to="https://dapp.robonomics.network/#/">
          <div class="img-back">
              <g-image aria-hidden="true" alt="" src="~/assets/images/explore-3.png" />
            </div>
            <h3>{{$t('Use a Dapp')}}</h3>
            <p>{{$t('Take a look at the Beta version of decentralized application for managing IoT devices')}}</p>
          </g-link>

          <g-link class="oldy oldy__link" to="https://wiki.robonomics.network/">
            <div class="img-back">
              <g-image aria-hidden="true" alt="" src="~/assets/images/explore-4.png" />
            </div>
            <h3>{{$t('Start building')}}</h3>
            <p>{{$t('Learn Robonomics through tutorials and practically useful experimenting in Robonomics WIKI')}}</p>
          </g-link>
        </section>
      </section>

      <hr/>

      <section class="section__whitespace">
        <section class="layout layout__text align-center">
          <h2>{{$t('Robonomics objectives')}}</h2>
          <p class="text-center">{{$t('Based on the achievements of cloud platforms, Robonomics aims to offer the IoT market safer and more advanced Internet solutions at every stage of human-machine communication. There are the main tasks for which Robonomics is being developed')}}:</p>
        </section>

        <div class="goals animate-inside" v-in-viewport.once>

          <section class="section layout layout__content animate-inside" v-in-viewport.once>

            <g-image aria-hidden="true" alt="" quality="75" src="~/assets/images/robots-digitalTwins.png" />

            <div class="text-col-1">
              <h3>1. {{$t('IoT device management with a decentralized cloud')}}</h3>
              <p class="hyphens">{{$t('Blockchain networks have all the capabilities to provide the highest degree of security for running a device and getting its telemetry. The interaction with the device can actually be described by changing the state of the digital twin stored in the blockchain network and sending information about these changes. In the case of a permissionless blockchain, we can talk about the guarantees of global availability of providers for IoT, as well as a high level of protection of digital twin data from unwanted changes.')}}</p>
            </div>

          </section>

          <section class="section layout layout__content animate-inside" v-in-viewport.once>

            <g-image aria-hidden="true" alt="" quality="75"  src="~/assets/images/intro-rwsFeature-3.png" />
            
            <div class="text-col-1">
              <h3>2. {{$t('Techno-economic transactions between humans and machines')}}</h3>
              <p class="hyphens">{{$t('Thanks to the mechanism of cryptocurrencies and smart contracts, we can provide access to automated systems directly to digital markets. For example, Ethereum already implements most of the basic tools of economic activity that can be used in the operation of autonomous devices. The applications created for the interaction between the end user and the IoT device will be much more effective if the terms of service and payment for it are inseparable from the launch parameters of the device.')}}</p>
            </div>

            
          </section>

          <section class="section layout layout__content animate-inside" v-in-viewport.once>

            <g-image src="~/assets/images/robots-cloud.png" />
            
            <div class="text-col-1">
              <h3>3. {{$t('Serverless IoT applications for users')}}</h3>
              <p class="hyphens">{{$t('Modern advances in web3-technology can solve the issue of user privacy. With web3 there is no need to authenticate or require connection to specific servers to access telemetry and control the device.')}}</p>
            </div>
            
          </section>
        </div>

      </section>

      <hr/>

      <section class="section__whitespace">
        <div class="layout layout__text align-center">
          <h2>{{$t('Learn with Robonomics')}}</h2>
        </div>
        <section class="index-academy layout layout__content grid-3 animate-inside" v-in-viewport.once>
          <g-link class="oldy oldy__link" to="https://robonomics.academy/en/learn/school-2024-privacy-insights/overview/">
            <div class="img-back">
              <g-image quality="75" alt="" aria-hidden="true" src="~/assets/images/frontpage-privacy-course.png" />
            </div>
            <h3>{{ $t("IoT Privacy study '2024") }}</h3>
            <p>{{$t('Based on a dozen recent scientific publications and reports, this study looks on actual state of privacy question in smart home industry, nowadays risks and pitfalls. You will get some answers on how to protect yourself as well.')}}</p>
          </g-link>

          <g-link class="oldy oldy__link" to="https://robonomics.academy/en/learn/world-computer/overview/">
            <div class="img-back spot">
              <g-image quality="75" alt="" aria-hidden="true" src="~/assets/images/frontpage-world-computer.png" />
            </div>
            <h3>{{ $t('How the World Computer can save us') }}</h3>
            <p>{{ $t("What is a world computer? How it works, can it replace corporate cloud infrastructure, who owns data? Please, don't skip these 4 lectures written on our Academy and widen your mind.") }}</p>
          </g-link>

          <g-link class="oldy oldy__link" to="https://wiki.robonomics.network/docs/robonomics-smart-home-overview/#secure-iot-with-blockchain">
            <div class="img-back">
              <g-image quality="75" alt="" aria-hidden="true" src="~/assets/images/frontpage-smarthome.png" />
            </div>
            <h3>{{ $t('Build safe smart home') }}</h3>
            <p>{{ $t('Practical guide on how to build vendor- and corporate- independent smart home with Robonomics and Home Assistant. All steps and requirements in one place.') }}</p>
          </g-link>
        </section>
      </section>

    
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

<script>
  import MetaInfo from '~/components/MetaInfo.vue'
  import Scheme from  '~/components/scheme/SchemeWithPopups.vue'
  import IconBannerArrowLeft from  '~/components/svg/icon-1.vue'
  import IconBannerArrowRight from  '~/components/svg/icon-2.vue'

  export default {

    components: {
      MetaInfo,
      Scheme,
      IconBannerArrowLeft,
      IconBannerArrowRight,
    },

    data() {
      return {
        bannerscale: 0,
        scrollstarted: false
      }
    },

    computed: {
      bannertransform() {
        if(this.scrollstarted) {
          return 'transform: scale(' + (1 - this.bannerscale) + ') !important; transform-origin: 50% 80% !important;';
        }
      }
    },

    methods: {
      onScroll() {
      
        if(window.scrollY > 20 && window.scrollY < window.innerHeight/2) {
          this.scrollstarted = true;
          this.bannerscale = window.scrollY/1000;
        }

        if(window.scrollY <= 20) {
          this.bannerscale = 0;
        }
      },
    },

    mounted() {
      window.addEventListener('scroll', this.onScroll);
    },

    beforeDestroy () {
      window.removeEventListener('scroll', this.onScroll);
    }
   
  }
</script>


<style scoped>

  /* + BANNER */
  
  #homebanner {
    background-color: var(--color-blue-notheme);
    background-image: url('../assets/images/robonomics-pattern.webp');
    background-size: 600px;
    padding: 0;
  }

  #homebanner-content {
    align-items: start;
    animation: bannershow 1s cubic-bezier(0.175, -0.885, 0.32, 1.575) 0.4s forwards;
    background-color: var(--color-blue-notheme);
    box-shadow: 0 4px 8px #0003, 0 6px 20px #00000030;
    color: var(--color-light-notheme);
    display: grid;
    gap: var(--space);
    grid-template-rows: 3fr auto;
    justify-content: center;
    min-height: calc(100vh - var(--screen-padding-top) - var(--screen-padding-bottom));
    transform-origin: 50% 0;
    transform: scaleY(0);
    padding: var(--space) 0;
  }

  #homebanner-content h1 {
    margin: 0;
    padding: 0;
  }

  #homebanner-pic {
    display: inline-block;
    width: 100%;
    margin: 0 auto;
  }

  #homebanner-scheme {
    align-self: center;
    animation: FadeIn 0.8s linear 1.3s forwards;
    margin: 0 auto;
    max-width: 85vw;
    opacity: 0;
    position: relative;
    text-align: center;
    visibility: hidden;
    width: 640px;
  }
  
  #homebanner-scheme-subtitle {
    left: -240px;
    position: absolute;
    text-align: left;
    top: 50%;
    width: 240px;
  }

  #homebanner-scheme-subtitle h4, #homebanner-scheme-video h4 {
    text-align: left;
  }

  #homebanner-scheme-subtitle svg {
    width: 55px;
    position: absolute;
    right: 0;
    top: 0;
  }

  #homebanner-scheme-video {
    position: absolute;
    width: 300px;
    right: -300px;
    top: 2rem;
  }

  #homebanner-scheme-video svg {
    width: 70px;
    position: absolute;
    right: -30px;
    top: 0;
  }

  #homebanner-scheme-video > a {
    display: block;
    width: 220px;
  }

  #homebanner-link {
    font-variation-settings: var(--font-flex-medium);
    color: #FF0000;
    margin: 4rem auto 0;
    display: none;
    text-align: center;
    border-bottom: 0.5px solid #FF0000;
  }

  @keyframes bannershow {
    to {
      transform: scaleY(1);
    }
  }

  @media screen and (max-width: 1320px) {

    #homebanner-content {
      grid-template-rows: auto auto;
    }

    #homebanner-scheme-subtitle { display: none; }
    #homebanner-scheme-video { display: none; }
    #homebanner-link { display: inline-block; }
    #homebanner-scheme {
      text-align: center;
    }
  }

  /* - BANNER */

  @media screen and (max-width: 400px) {
    .img-back {
      height: 232px;
    }
  }

  .index-academy .oldy  {
    position: relative;
  }
  
  .index-getstarted a,
  .index-academy a {
      text-decoration: none;
      color: var(--text-color);
  }

  .index-getstarted h3,
  .index-academy h3 {
    margin-top: 0; margin-bottom: calc(var(--space) * 0.4)
  }

  .index-academy .oldy  h3 {
    text-transform: none;
  }
      
  .index-getstarted .img-back,
  .index-academy .img-back {
      margin-bottom: calc(var(--space) * 0.7);
  }

  .goals > section {
      max-width: 1400px;
      display: grid;
      grid-template-columns: 0.5fr 1fr ;
      gap: var(--space);
      align-items: center;
  }

  .goals h3,
  .goals p {
    font-size: calc(var(--base-font-size) * 0.9)
  }
  
  @media screen and (max-width: 1100px) {
      .goals > section {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media screen and (max-width: 760px) {

      .goals > section {
        grid-template-columns: 1fr;
      }

      .goals img {
        grid-row-start: 2;
      }
    }

  .oldy h3 {
    margin-bottom: calc(var(--space) * 0.5);
    font-size: calc(var(--base-font-size) * 0.9);
    color: var(--color-blue);
    text-transform: capitalize;
    text-align: left;
    letter-spacing: 0;
  }

  .oldy {
    text-align: left;
    font-size: calc(var(--base-font-size) * 0.9)
  }

  .img-back.spot img {
    object-fit: contain;
    height: 192px;
  }

</style>