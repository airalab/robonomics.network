<template>
  <layout>

    <MetaInfo
      pageTitle = "Building Dapps && Web Services for IoT on Robonomics Parachain"
      pageDescription = "The future of humanity itself depends on how we teach robots to handle their capabilities."
      :pageImage = "'/website_cover.jpg'"
    />

    <div class="page">
      <section class="section section__solid section__dotted_darkblue wide">
        <h1 class="layout layout__content clean">{{$t('Building Dapps && Web Services for IoT on Robonomics Parachain')}}</h1>
        <div class="layout layout__text animate subtitle" v-in-viewport.once>{{$t('Sergei Lonshakov, software architect')}}</div>
      </section>

      <section class="section">
        <div class="layout layout__text animate-inside grid-2" v-in-viewport.once>
          <g-image aria-hidden="true" alt="" quality="75" src="~/assets/images/person-norbert-wiener.png" />
          <div class="hyphens">
            <p>&laquo;{{$t('Let us remember that the automatic machine is the precise economic equivalent of slave labor. Any labor which competes with slave labor must accept the economic consequences of slave labor.')}}&raquo;</p>
            <p>― {{$t('Norbert Wiener')}}, {{$t('cybernetics')}}</p>
          </div>
        </div>
      </section>

      <section class="section__solid section section__lightblue">
        <div class="layout layout__text grid-2 middle animate-inside" v-in-viewport.once>
          <g-image aria-hidden="true" alt="" quality="75" src="~/assets/images/robots-handshaking.png" />
          <div class="hyphens text-big">
            <p>{{$t('Robots are like grown-up children today – they already can manage money, and enter into legal relations, be independent.')}}</p>
            <p>{{$t('The future of humanity itself depends on how we teach robots to handle their capabilities.')}}</p>
          </div>
        </div>
      </section>

      <section class="section section__solid section__blue">
        <div class="layout layout__text animate-inside" v-in-viewport.once>
          <h2>{{$t('What is Robonomics network?')}}</h2>
          <p class="hyphens">{{$t('Robonomics is an open-source platform for IoT applications which enables the exchange of technical and economic information in the form of atomic transactions between user applications, IoT services, and complex robotics.')}}</p>
        </div>

        <div class="layout layout__content">
          <Scheme/>
        </div> 
      </section>


      <section class="section">

        <section class="layout section layout__content">
          <h2 class="animate" v-in-viewport.once>{{$t('Robonomics tools')}}</h2>
          <div class="introTools grid-4 animate-inside" v-in-viewport.once>
            <div>
              <g-image aria-hidden="true" alt="" quality="75" src="~/assets/images/robots-digitalTwins.png" />
              <h5 v-html="$t('Operate with digital twins of IoT devices')" />
            </div>
            <div>
              <g-image aria-hidden="true" alt="" quality="75" src="~/assets/images/robots-smartContract.png" />
              <h5 v-html="$t('The first tools of the robot economy: money for robots, contracts for robots')" />
            </div>
            <div>
              <g-image aria-hidden="true" alt="" quality="75" src="~/assets/images/robots-cloud.png" />
              <h5 v-html="$t('Software for connecting devices to a decentralized cloud')" />
            </div>
            <div>
              <g-image aria-hidden="true" alt="" quality="75" src="~/assets/images/robots-console.png" />
              <h5 v-html="$t('API library for custom IoT applications')" />
            </div>
          </div>
        </section>

        <div class="layout section layout__text hyphens">
          <p class="animate" v-in-viewport.once>{{$t('Robonomics contains a complete set of tools for developing IoT applications, both on the robotics and the user interface sides. Communication between the user and device happens using the most successful technologies from the Web3 world – IPFS, Ethereum, and Polkadot. Thus, developers can create modern and secure applications for Smart Cities and Industry 4.0.')}}</p>
          <div class="introLogos animate-inside-fast" v-in-viewport.once>
            <g-image quality="75" alt="Rust" src="~/assets/images/logos/rust.png" />
            <g-image quality="75" alt="Python" src="~/assets/images/logos/python.svg" />
            <g-image quality="75" alt="Haskell" src="~/assets/images/logos/haskell.png" />
            <g-image quality="75" alt="JavaScript" src="~/assets/images/logos/JavaScript.svg" />
            <g-image quality="75" alt="ROS" src="~/assets/images/logos/ros.svg" />
            <g-image quality="75" alt="NixOS" src="~/assets/images/logos/nixos.png" />
            <g-image quality="75" alt="IPFS" src="~/assets/images/logos/IPFS.png" />
            <g-image quality="75" alt="Ethereum" src="~/assets/images/logos/ethereum.svg" />
            <g-image quality="75" alt="Polkadot" src="~/assets/images/logos/polkadot.svg" />
            <g-image quality="75" alt="AIRA" src="~/assets/images/logos/aira.svg" />
          </div>
        </div>
      </section>

      <hr/>

       <section class="section">

          <section class="layout section layout__content">
            <section class="animate-inside section" v-in-viewport.once>
              <h2>{{$t('Robonomics Connectivity')}}</h2>
              <p class="layout__text" v-html="$t('For the developers’ convenience, Robonomics contains a set of software for connecting: IoT devices using the HTTP/MQTT protocol, complex robotic systems using the Robot Operating System (ROS).')" />
            </section>

            <div class="introTools grid-3 animate-inside" v-in-viewport.once>
              <div>
                <g-image quality="75" aria-hidden="true" alt="" src="~/assets/images/robots-sensor.png" />
                <h5>
                  <g-link to="https://wiki.robonomics.network/docs/connect-sensor-to-robonomics/">{{$t('Connect a sensor')}}</g-link> {{$t('to the Robonomics network')}}
                </h5>
              </div>
              <div>
                <g-image quality="75" aria-hidden="true" alt="" src="~/assets/images/robonomics-io.png" />
                <h5>
                  {{$t('Try')}} <g-link to="https://wiki.robonomics.network/docs/rio-overview/">{{$t('Robonomics IO')}}</g-link> – {{$t('a simple prototyping tool')}}
                </h5>
              </div>
              <div>
                <g-image quality="75" aria-hidden="true" alt="" src="~/assets/images/robots-aira.png" />
                <h5>
                  {{$t('Start building your own cyber physical system with')}} <g-link to="https://wiki.robonomics.network/docs/aira-installation-on-vb/">{{$t('Aira OS')}}</g-link>
                </h5>
              </div>
            </div>
          </section>

      </section>


      <section class="introRobots section section__solid section__lightblue">
        <div class="layout layout__content animate" v-in-viewport.once>
          <h2>{{$t('Robonomics Supports Hundreds of Robots Out of the Box')}}</h2>
        </div>

        <div class="layout layout__text animate-inside" v-in-viewport.once>
          <div class="grid-2 middle">
            <p class="hyphens text-big">{{$t('Platform users can connect ROS-compatible robots to digital economy in a matter of minutes. For a complete list of supported robots, please follow the link')}}: <g-link to="https://robots.ros.org/">https://robots.ros.org/</g-link></p>
            <g-link to="https://robots.ros.org/"><g-image quality="75" aria-hidden="true" src="/ros-website.gif" /></g-link>
          </div>
        </div>
      </section>

      <hr class="no-margins"/>

      <section class="section section__solid section__gradient-purpleblue">
        <div class="layout layout__content animate" v-in-viewport.once>
          <h2>{{$t('Decentralized Cloud infrastructure for IoT')}}</h2>
        </div>

        <div class="layout layout__content">

          <p class="text-big layout__text_small">{{$t('Robonomics Web Services (RWS) is the basic infrastructural service for Robotics and IoT on top of Robonomics Parachain and IPFS')}}.</p>
         
          <div class="scheme-rwsPlace animate-inside" v-in-viewport.once>
              <div class="item">
                {{$t('IoT Device')}}
                <div class="img" aria-hidden="true">
                  <g-image quality="75" aria-hidden="true" alt="" src="~/assets/images/schemeRwsPlace-1.png"/>
                </div>
              </div>
              <div class="item">
                {{$t('Robonomics Connectivity')}}
                <div class="img" aria-hidden="true">
                  <g-image quality="75" aria-hidden="true" alt="" src="~/assets/images/schemeRwsPlace-2.png"/>
                </div>
              </div>
              <div class="item highlight">
                {{$t('Robonomics web services (RWS)')}}
                <div class="img" aria-hidden="true">
                  <g-image quality="75" aria-hidden="true" alt="" src="~/assets/images/schemeRwsPlace-3.png"/>
                </div>
              </div>
              <div class="item">
                {{$t('Robonomics dapp')}}
                <div class="img" aria-hidden="true">
                  <g-image quality="75" aria-hidden="true" alt="" src="~/assets/images/schemeRwsPlace-4.png"/>
                </div>
              </div>
              <div class="item core">{{$t('economy of robots')}}</div>
            </div>
        </div>
      </section>

      <hr class="no-margins"/>

      <section class="section section__solid section__darkpurple">
        <div class="layout layout__content">
          <h2 class="animate" v-in-viewport.once>{{$t('Core RWS features available for IoT today')}}</h2>
           
          <div class="introRwsFeature grid-3 animate-inside" v-in-viewport.once>
            <div>
              <div class="img" aria-hidden="true">
                  <g-image quality="75" aria-hidden="true" alt="" src="~/assets/images/intro-rwsFeature-1.png"/>
              </div>
              <h5>{{$t('RWS PubSub Message Broker')}}</h5>
              {{$t('Use unlimited messaging over a p2p network based on IPFS protocol')}}
            </div>

            <div>
              <div class="img" aria-hidden="true">
                  <g-image quality="75" aria-hidden="true" alt="" src="~/assets/images/intro-rwsFeature-2.png"/>
              </div>
              <h5>{{$t('RWS Data Blockchainization Service')}}</h5>
              {{$t('Put data into IPFS and store hashes in a public Blockchain')}}
            </div>

            <div>
              <div class="img" aria-hidden="true">
                  <g-image quality="75" aria-hidden="true" alt="" src="~/assets/images/intro-rwsFeature-3.png"/>
              </div>
              <h5>{{$t('RWS Robot Actions')}}</h5>
              {{$t('Switch on / off; launch or stop your IoT devices under the control of a decentralized computer')}}
            </div>
          </div>
        </div>
      </section>

      <hr class="no-margins"/>
      <section class="introDigitalTwins section section__solid section__dotted_darkblue animate-inside" v-in-viewport.once>
        <h2 class="layout layout__content">{{$t('Heart of Your IoT Application - Digital Twin on Blockchain')}}</h2>
        <div class="layout layout__text hyphens text-big">
          <p>{{$t('In the technical architecture, IoT digital twins provide the visibility and monitoring of things and related events (e.g., using IoT devices to automatically capture the origin of a product), and blockchain enables the shared single version of the truth as to the state of these things across their life cycles and associated business events')}} <i>[{{$t('from Gartner research')}}]</i></p>
          <p>{{$t('Robonomics Parachain provides an opportunity to create a model of a digital twin and update its state every 6 seconds.')}}</p>
        </div>
        <section class="section layout layout__content img" aria-hidden="true">
            <g-image quality="75" aria-hidden="true" alt="" src="~/assets/images/digitalTwins.png"/>
        </section>
      </section>

    </div>

  </layout>
  
</template>

<style scoped>
  h1 {
    font-size: calc(var(--base-font-size) * 1.8);
  }

  @media screen and (max-width: 500px) {
    h1 { font-size: calc(var(--base-font-size) * 1.4) }
  }

  @media screen and (max-width: 350px) {
    h1 { font-size: calc(var(--base-font-size) * 1) }
  }

  h2 {
    margin-bottom: var(--space);
  }


  .scheme {
    display: grid;
    grid-template-columns: 1fr 150px 1fr 150px 1fr;
    gap: var(--space);
    align-items: stretch;
    align-content: center;
    justify-items: stretch;
    justify-content: space-between;
    margin: calc(var(--space)*2) 0 0;

    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .scheme > * {
    display: grid;
    align-content: center;
  }

  .scheme-item {
    min-height: 150px;
    border: 1px dashed var(--color-blue-light);
    padding: var(--space);
  }

  .scheme-a {
    font-size: 60%;
    color: var(--color-blue-light);
  }

  .scheme-a span {
    display: block;
  }

  .scheme-a .arrow {
    white-space: nowrap;
  }

  .scheme-a-left {
    color: var(--color-pink);
  }

  @media screen and (max-width: 1200px) {
    .scheme {
      gap: 0;
      grid-template-columns: 1fr 120px 1fr 120px 1fr;
      font-size: 80%;
    }
  }

  @media screen and (max-width: 786px) {
    .scheme {
      grid-template-columns: 1fr;
      gap: calc(var(--space)*2);
    }

    .scheme .scheme-a {
      font-size: 80%;
      transform: rotate(90deg);
    }
  }

  .introTools h5 {
    margin-top: var(--space)
  }

  .introTools.grid-4 img { max-width: 80%; }
  .introTools.grid-3 img { max-width: 60%; }

  .introLogos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }

  .introLogos img {
      max-width: 8rem;
      filter: grayscale(1) opacity(0.4);
      margin: var(--space) var(--space) 0;
  }

  .introRobots {
    position: relative;
    overflow: hidden;
    padding-bottom: 16rem;

    background-image: url('~@/assets/images/robots-multiUniversal.png');
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: 50% 100%;
  }

  .introRobots .layout * {
    position: relative;
    z-index: 1;
  }

  @media screen and (max-width: 900px) {
    .introRobots { background-size: 1000px; }
  }

  @media screen and (max-width: 500px) {
    .introRobots {
      padding-bottom: 9rem;
      background-size: 600px;
    }
  }

  .scheme-rwsPlace {
    max-width: 600px;
    margin: 0 auto;
  }

  .scheme-rwsPlace .item {
      position: relative;
      padding: calc(var(--space) * 0.5);
      border: 1px dashed var(--color-blue-light);

      text-transform: uppercase;
      letter-spacing: 1px;

      color: var(--color-blue-light);
  }

  .scheme-rwsPlace .item:not(:last-child) {
    margin-bottom: 60px;
    padding-bottom: 30px;
  }

  .scheme-rwsPlace .img {
    position: absolute;
    height: 80px;
    bottom: -50px;
    left: 0;
    right: 0;
    text-align: center;
  }

  .scheme-rwsPlace img {
      height: 100%;
      width: auto;
  }

  .scheme-rwsPlace .item.highlight {
    color: #fff;
    background-color: var(--color-blue-light);
  }

  .scheme-rwsPlace .item.core {
    color: var(--color-orangeYellow);
    border-color: var(--color-orangeYellow);

    margin-top: 120px;
    position: relative;
  }

  .scheme-rwsPlace .item.core:before, .scheme-rwsPlace .item.core:after {
    content: "";
    display: block;
    width: 1px;
    height: 120px;
    border-left: 1px dashed var(--color-orangeYellow);

    position: absolute;
    top: -120px;
  }

  .scheme-rwsPlace .item.core:before {
    transform: rotate(135deg);
    left: calc(50% - 80px);
  }

  .scheme-rwsPlace .item.core:after {
    transform: rotate(45deg);
    right: calc(50% - 80px);
  }

  .introRWS {
    gap: calc(var(--space)*2);
  }

  @media screen and (max-width: 720px) {
    .introRWS { grid-template-columns: 1fr; }
  }
  

  .introRwsFeature .img img {
      max-width: 80%;
  }


  .introDigitalTwins {
    padding-bottom: 0;
  }

  .introDigitalTwins section.img {
      margin-bottom: 0;
  }

  .introDigitalTwins img {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 1000px;
  }

  .introMarketplace {

    align-items: start;
  }

  .introMarketplace h2 {
    text-align: left;
  }

  .introMarketplace .img {
      position: relative;
  }

 .introMarketplace .img > img {
        width: 100%;
        max-width: 300px;
        position: absolute;
        bottom: 0;
        left: var(--space);
  }

    .marketplace {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: calc(var(--space) * 0.5);
      padding: calc(var(--space)*2) calc(var(--space)*2) 280px;
      text-decoration: none;
      background: var(--color-gradient-marketplace);
      border-radius: 4px;
    }

    .marketplace .item {
        background: #fff;
        padding: calc(var(--space) * 0.5);
        color: var(--color-blue-mid);
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 60%;
        font-weight: 500;
        border-radius: 4px;
        text-align: left;
      }

    .marketplace-add {
      width: 60px;
      height: 60px;
      border-radius: 30px;
      background: var(--color-blue-mid);
      color: #fff;
      text-decoration: none;
      font-weight: bold;
      font-size: 24px;
      line-height: 1;
   
      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      top: 300px;
      right: calc(var(--space)*2);
    }

    .marketplace-add:hover {
        color: #fff;
        background: var(--color-green);
    }

    @media screen and (max-width: 1330px) {
      .introMarketplace { grid-template-columns: 1fr; }

      .marketplace-add .img {
        grid-row-start: 2;
      }
    }

    @media screen and (max-width: 700px) {
      .marketplace {
        grid-template-columns: 1fr 1fr;
      }

      .marketplace-add > div:last-child {
          display: none;
        }
    }

    @media screen and (max-width: 550px) {
      .marketplace {
        grid-template-columns: minmax(0, 200px);
      }

      .marketplace > div:not(:first-child) {
          display: none;
        }
    }
  

</style>

<script>

  export default {
    components: {
      MetaInfo: () => import("~/components/MetaInfo.vue"),
      Card: () => import("~/components/TextCard.vue"),
      Scheme: () => import("~/components/scheme/Scheme.vue")
    }
  }
</script>
