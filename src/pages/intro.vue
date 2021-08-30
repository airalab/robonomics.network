<template>
  <layout>

    <MetaInfo
      :pageTitle = "$ts('Intro for devs')"
      :pageDescription = "$ts('The future of humanity itself depends on how we teach robots to handle their capabilities.')"
      :pageImage = "'/website_cover.jpg'"
    />

    <div class="page">
      <section class="section section__solid section__dotted_darkblue">
        <h1 class="layout layout__text">{{$ts('Intro for devs')}}</h1>
        <div class="layout layout__text introSubtitle animate" v-in-viewport.once>{{$ts('Sergei Lonshakov')}}, {{$ts('software architect')}}</div>
      </section>

      <section class="section">
        <div class="layout layout__text animate-inside grid-2" v-in-viewport.once>
          <g-image alt="" src="~/assets/images/person-norbert-wiener.png" />
          <div class="hyphens">
            <p>&laquo;{{$ts('Let us remember that the automatic machine is the precise economic equivalent of slave labor. Any labor which competes with slave labor must accept the economic consequences of slave labor.')}}&raquo;</p>
            <p>― {{$ts('Norbert Wiener')}}, {{$ts('cybernetics')}}</p>
          </div>
        </div>
      </section>

      <section class="section__solid section__lightblue">
        <div class="layout layout__text grid-2 middle animate-inside" v-in-viewport.once>
          <g-image alt="" src="~/assets/images/robots-handshaking.png" />
          <div class="hyphens text-big">
            <p>{{$ts('Robots are like grown-up children today – they already can manage money, and enter into legal relations, be independent.')}}</p>
            <p>{{$ts('The future of humanity itself depends on how we teach robots to handle their capabilities.')}}</p>
          </div>
        </div>
      </section>

      <section class="section section__solid section__blue">
        <div class="layout layout__text animate-inside" v-in-viewport.once>
          <h2>{{$ts('What is Robonomics?')}}</h2>
          <p class="hyphens">{{$ts('Robonomics is an open-source platform for IoT applications. We support a new generation of internet technologies (web3) that implements the exchange of technical and economic information in the form of atomic transactions between user applications, IoT services, and complex robotics.')}}</p>
        </div>

        <div class="layout layout__content">
          <div class="scheme">
            <div class="scheme-item animate" v-in-viewport.once><div>{{$ts('User (D)App')}}</div></div>

            <div class="scheme-a animate-inside" v-in-viewport.once>
              <div class="scheme-a-right">
                <span>{{$ts('Function request')}}</span>
                <span aria-hidden="true" class="arrow">---------------&gt;</span>
              </div>
              <div class="scheme-a-left">
                <span>{{$ts('Report')}}</span>
                <span aria-hidden="true" class="arrow">&lt;---------------</span>
              </div>
            </div>

            <div class="scheme-item animate" v-in-viewport.once><div>{{$ts('Digital twin')}}</div></div>

            <div class="scheme-a animate-inside" v-in-viewport.once>
              <div class="scheme-a-right">
                <span>{{$ts('Control')}}</span>
                <span aria-hidden="true" class="arrow">---------------></span>
              </div>
              <div class="scheme-a-left">
                <span>{{$ts('Log')}}</span>
                <span aria-hidden="true" class="arrow">&lt;---------------</span>
              </div>
            </div>

            <div class="scheme-item animate" v-in-viewport.once><div>{{$ts('IoT Device')}}</div></div>
          </div>
        </div> 
      </section>


      <section class="section">

        <section class="layout layout__content">
          <h2 class="animate" v-in-viewport.once>{{$ts('Robonomics tools')}}</h2>
          <div class="introTools grid-4 animate-inside" v-in-viewport.once>
            <div>
              <g-image alt="" src="~/assets/images/robots-digitalTwins.png" />
              <h5 v-html="$ts('Operate with digital twins of IoT devices')" />
            </div>
            <div>
              <g-image alt="" src="~/assets/images/robots-smartContract.png" />
              <h5 v-html="$ts('The first tools of the robot economy')" />
            </div>
            <div>
              <g-image alt="" src="~/assets/images/robots-cloud.png" />
              <h5 v-html="$ts('Software for connecting devices to a decentralized cloud')" />
            </div>
            <div>
              <g-image alt="" src="~/assets/images/robots-console.png" />
              <h5 v-html="$ts('API library for custom IoT applications')" />
            </div>
          </div>
        </section>

        <div class="layout layout__text hyphens">
          <p class="animate" v-in-viewport.once>{{$ts('Robonomics contains a complete set of tools for developing IoT applications, both on the robotics and the user interface sides. Communication between the user and device happens using the most successful technologies from the Web3 world – IPFS, Ethereum, and Polkadot. Thus, developers can create modern and secure applications for Smart Cities and Industry 4.0.')}}</p>
          <div class="introLogos animate-inside-fast" v-in-viewport.once>
            <g-image alt="Rust" src="~/assets/images/logos/rust.png" />
            <g-image alt="Python" src="~/assets/images/logos/python.svg" />
            <g-image alt="Haskell" src="~/assets/images/logos/haskell.png" />
            <g-image alt="JavaScript" src="~/assets/images/logos/JavaScript.svg" />
            <g-image alt="ROS" src="~/assets/images/logos/ros.svg" />
            <g-image alt="NixOS" src="~/assets/images/logos/nixos.png" />
            <g-image alt="IPFS" src="~/assets/images/logos/IPFS.png" />
            <g-image alt="Ethereum" src="~/assets/images/logos/ethereum.svg" />
            <g-image alt="Polkadot" src="~/assets/images/logos/polkadot.svg" />
            <g-image alt="AIRA" src="~/assets/images/logos/aira.svg" />
          </div>
        </div>
      </section>

      <hr/>

       <section class="section">

          <section class="layout layout__content">
            <section class="animate-inside" v-in-viewport.once>
              <h2>{{$ts('Robonomics Connectivity')}}</h2>
              <p class="layout__text" v-html="$ts('Robonomics contains a set of software for connecting')" />
            </section>

            <div class="introTools grid-3 animate-inside" v-in-viewport.once>
              <div>
                <g-image alt="" src="~/assets/images/robots-sensor.png" />
                <h5>
                  <g-link to="https://wiki.robonomics.network/docs/connect-sensor-to-robonomics/">{{$ts('Connect a sensor')}}</g-link> {{$ts('to the Robonomics network')}}
                </h5>
              </div>
              <div>
                <g-image alt="" src="~/assets/images/robonomics-io.png" />
                <h5>
                  {{$ts('Try')}} <g-link to="https://wiki.robonomics.network/docs/rio-overview/">{{$ts('Robonomics IO')}}</g-link> – {{$ts('a simple prototyping tool')}}
                </h5>
              </div>
              <div>
                <g-image alt="" src="~/assets/images/robots-aira.png" />
                <h5>
                  {{$ts('Start building your own cyber physical system with')}} <g-link to="https://wiki.robonomics.network/docs/aira-installation-on-vb/">{{$ts('Aira OS')}}</g-link>
                </h5>
              </div>
            </div>
          </section>

      </section>


      <section class="introRobots section section__solid section__lightblue">
        <div class="layout layout__content animate" v-in-viewport.once>
          <h2>{{$ts('Robonomics Supports Hundreds of Robots Out of the Box')}}</h2>
        </div>

        <div class="layout layout__text animate-inside" v-in-viewport.once>
          <div class="grid-2 middle">
            <p class="hyphens text-big">{{$ts('Platform users can connect ROS-compatible robots to digital economy in a matter of minutes. For a complete list of supported robots, please follow the link')}}: <g-link to="https://robots.ros.org/">https://robots.ros.org/</g-link></p>
            <g-link to="https://robots.ros.org/"><g-image alt="" src="~/assets/images/ros-website.gif" /></g-link>
          </div>
        </div>
      </section>

      <hr class="no-margins"/>

      <section class="section section__solid section__gradient-purpleblue">
        <div class="layout layout__content animate" v-in-viewport.once>
          <h2>{{$ts('Decentralized Cloud infrastructure for IoT')}}</h2>
        </div>

        <div class="layout layout__content">

          <p class="text-big layout__text_small">{{$ts('Robonomics Web Services (RWS) is the basic infrastructural service for Robotics and IoT on top of Robonomics Parachain and IPFS')}}.</p>
         
          <div class="scheme-rwsPlace animate-inside" v-in-viewport.once>
              <div class="item">
                {{$ts('IoT Device')}}
                <div class="img" aria-hidden="true">
                  <g-image src="~/assets/images/schemeRwsPlace-1.png"/>
                </div>
              </div>
              <div class="item">
                Robonomics Connectivity
                <div class="img" aria-hidden="true">
                  <g-image src="~/assets/images/schemeRwsPlace-2.png"/>
                </div>
              </div>
              <div class="item highlight">
                ROBONOMICS WEB SERVICES (RWS)
                <div class="img" aria-hidden="true">
                  <g-image src="~/assets/images/schemeRwsPlace-3.png"/>
                </div>
              </div>
              <div class="item">
                ROBONOMICS DApp
                <div class="img" aria-hidden="true">
                  <g-image src="~/assets/images/schemeRwsPlace-4.png"/>
                </div>
              </div>
              <div class="item core">{{$ts('economy of robots')}}</div>
            </div>
        </div>
      </section>

      <hr class="no-margins"/>

      <section class="section section__solid section__darkpurple">
        <div class="layout layout__content">
          <h2 class="animate" v-in-viewport.once>{{$ts('Core RWS features available for IoT today')}}</h2>
           
          <div class="introRwsFeature grid-3 animate-inside" v-in-viewport.once>
            <div>
              <div class="img" aria-hidden="true">
                  <g-image src="~/assets/images/intro-rwsFeature-1.png"/>
              </div>
              <h5>{{$ts('RWS PubSub Message Broker')}}</h5>
              {{$ts('Use unlimited messaging over a p2p network based on IPFS protocol')}}
            </div>

            <div>
              <div class="img" aria-hidden="true">
                  <g-image src="~/assets/images/intro-rwsFeature-2.png"/>
              </div>
              <h5>{{$ts('RWS Data Blockchainization Service')}}</h5>
              {{$ts('Put data into IPFS and store hashes in a public Blockchain')}}
            </div>

            <div>
              <div class="img" aria-hidden="true">
                  <g-image src="~/assets/images/intro-rwsFeature-3.png"/>
              </div>
              <h5>{{$ts('RWS Robot Actions')}}</h5>
              {{$ts('Switch on / off; launch or stop your IoT devices under the control of a decentralized computer')}}
            </div>
          </div>
        </div>
      </section>

      <hr class="no-margins"/>
      <section class="introDigitalTwins section section__solid section__dotted_darkblue animate-inside" v-in-viewport.once>
        <h2 class="layout layout__content">{{$ts('Heart of Your IoT Application - Digital Twin on Blockchain')}}</h2>
        <div class="layout layout__text hyphens text-big">
          <p>{{$ts('In the technical architecture, IoT digital twins provide the visibility and monitoring of things and related events (e.g., using IoT devices to automatically capture the origin of a product), and blockchain enables the shared single version of the truth as to the state of these things across their life cycles and associated business events')}} <i>[{{$ts('from Gartner research')}}]</i></p>
          <p>{{$ts('Robonomics Parachain provides an opportunity to create a model of a digital twin and update its state every 6 seconds.')}}</p>
        </div>
        <section class="layout layout__content img" aria-hidden="true">
            <g-image src="~/assets/images/digitalTwins.png"/>
        </section>
      </section>
      <hr class="no-margins"/>

      <section class="section section__solid section__dotted_darkblue">
        <div class="introMarketplace grid-2 layout layout__content">
          <div class="img animate-inside" v-in-viewport.once>

            <g-link class="marketplace animate-inside" v-in-viewport.once to="https://dapp.robonomics.network/#/services">
              <div class="item">
                <g-image src="~/assets/images/services-sensorsMap.png"/>
                Global IoT sensors network
              </div>

              <div class="item">
                <g-image src="~/assets/images/services-FujiWeather.png"/>
                Get the weather on Fuji demo
              </div>

              <div class="item">
                <g-image src="~/assets/images/services-dronePassport.png"/>
                Drone passport registration
              </div>
            </g-link>

            <g-link class="marketplace-add" to="https://dapp.robonomics.network/#/">+</g-link>

            <g-image src="~/assets/images/person-manSitting.png"/>
          </div>
          <div class="hyphens animate-inside" v-in-viewport.once>
            <h2>{{$ts('App Store for Robotics - Robonomics Marketplace')}}</h2>
            <p>{{$ts('Companies that design and manufacture IoT-connected products and equipment should adopt a flexible digital twin delivery model to lower barriers to adoption, such as offering digital twins via marketplaces, rather than only offering digital twins via their own, proprietary, delivery model')}} <i>[{{$ts('from Gartner research')}}]</i></p>
            <p>{{$ts('The developed digital twin model can be directly linked with additional services that your company provides for the IoT industry.')}}</p>
            <p>{{$ts('To make a delivery process convenient and simple for hundreds of customers, we have added a section of the services for robots marketplace. Take a look at the first examples of the implemented bundles of digital twin model + company automated service.')}}</p>
            <p>{{$ts("You've got an idea for your service for robots or users? Then proceed to the step-by-step instructions for building your IoT application on the Robonomics platform.")}}</p>
          </div>
        </div>
      </section>

    </div>

  </layout>
</template>

<style scoped lang="scss">
  h1 {
    font-size: calc(var(--base-font-size) * 1.8);

    @media screen and (max-width: 500px) {
      font-size: calc(var(--base-font-size) * 1.4)
    }

    @media screen and (max-width: 350px) {
      font-size: calc(var(--base-font-size) * 1)
    }
  }

  .introSubtitle {
    font-size: 90%;
    font-style: italic;
    text-align: center;

    &:before {
      content: "";
      display: block;
      height: 1px;
      width: 2rem;
      background-color: #fff;
      margin: 0 auto 0.4rem;
    }
  }

  .section__solid {
    padding-top: calc(var(--space) * 4);
    padding-bottom: calc(var(--space) * 4);
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
    font-family: var(--font-family-code);

    & > * {
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

      span {
        display: block;
      }

      .arrow {
        white-space: nowrap;
      }
    }

    .scheme-a-left {
      color: var(--color-pink);
    }

    @media screen and (max-width: 1200px) {
      gap: 0;
      grid-template-columns: 1fr 120px 1fr 120px 1fr;
      font-size: 80%;
    }

    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr;
      gap: calc(var(--space)*2);

      .scheme-a {
        font-size: 80%;
        transform: rotate(90deg);
      }
    }
  }

  .introTools {
    h5 {
      margin-top: var(--space)
    }

    &.grid-4 {
      img { max-width: 80%; }
    }

    &.grid-3 {
      img { max-width: 60%; }
    }
  }

  .introLogos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    img {
      max-width: 8rem;
      filter: grayscale(1) opacity(0.4);
      margin: var(--space) var(--space) 0;
    }
  }

  .introRobots {
    position: relative;
    overflow: hidden;
    padding-bottom: 16rem;

    background-image: url('~@/assets/images/robots-multiUniversal.png');
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: 50% 100%;

    .layout * {
      position: relative;
      z-index: 1;
    }

    @media screen and (max-width: 900px) {
      background-size: 1000px;
    }

    @media screen and (max-width: 500px) {
      padding-bottom: 9rem;
      background-size: 600px;
    }

  }

  .scheme-rwsPlace {
    max-width: 600px;
    margin: 0 auto;

    .item {
      position: relative;
      padding: calc(var(--space) * 0.5);
      border: 1px dashed var(--color-blue-light);

      text-transform: uppercase;
      letter-spacing: 1px;
      font-family: var(--font-family-code);

      color: var(--color-blue-light);

      &:not(:last-child) {
        // margin-bottom: var(--space);
        margin-bottom: 60px;
        padding-bottom: 30px;
      }

      .img {
        position: absolute;
        height: 80px;
        bottom: -50px;
        left: 0;
        right: 0;
        text-align: center;

        img {
          height: 100%;
          width: auto;
        }
      }

      &.highlight {
        color: #fff;
        background-color: var(--color-blue-light);
      }

      &.core {
        color: var(--color-orangeYellow);
        border-color: var(--color-orangeYellow);

        margin-top: 120px;
        position: relative;

        &:before, &:after {
          content: "";
          display: block;
          width: 1px;
          height: 120px;
          border-left: 1px dashed var(--color-orangeYellow);

          position: absolute;
          top: -120px;
        }

        &:before {
          transform: rotate(135deg);
          left: calc(50% - 80px);
        }

        &:after {
          transform: rotate(45deg);
          right: calc(50% - 80px);
        }
      }
    }
  }

  .introRWS {
    gap: calc(var(--space)*2);

    @media screen and (max-width: 720px) {
      grid-template-columns: 1fr;
    }
  }

  .introRwsFeature {
    .img {
      img {
        max-width: 80%;
      }
    }
  }


  .introDigitalTwins {
    padding-bottom: 0;

    section.img {
      margin-bottom: 0;

      img {
        display: block;
        margin: 0 auto;
      }
    }
  }

  .introMarketplace {

    align-items: start;

    h2 {
      text-align: left;
    }

    .img {
      position: relative;

      & > img {
        width: 100%;
        max-width: 300px;
        position: absolute;
        bottom: 0;
        left: var(--space);
      }
    }

    .marketplace {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: calc(var(--space) * 0.5);
      padding: calc(var(--space)*2) calc(var(--space)*2) 280px;
      text-decoration: none;
      background: linear-gradient(#03a7eda6, #03a7ed11);
      // background: linear-gradient(#660099a8, #6600992a);
      border-radius: 4px;

      .item {
        background: #fff;
        padding: calc(var(--space) * 0.5);
        color: var(--link-color);
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 70%;
        font-weight: 500;
        border-radius: 4px;
      }
    }

    .marketplace-add {
      width: 60px;
      height: 60px;
      border-radius: 30px;
      background: var(--link-color);
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

      &:hover {
        color: #fff;
        background: var(--color-green);
      }
    }

    @media screen and (max-width: 1330px) {
      grid-template-columns: 1fr;

      .img {
        grid-row-start: 2;
      }
    }

    @media screen and (max-width: 700px) {
      .marketplace {
        grid-template-columns: 1fr 1fr;

        & > div:last-child {
          display: none;
        }
      }
    }

    @media screen and (max-width: 550px) {
      .marketplace {
        grid-template-columns: minmax(0, 200px);

        & > div:not(:first-child) {
          display: none;
        }
      }
    }
  }


</style>

<script>

  export default {
    components: {
      MetaInfo: () => import("~/components/MetaInfo.vue"),
      Abstract: () => import("~/components/TextAbstract.vue"),
      Card: () => import("~/components/TextCard.vue")
    }
  }
</script>
