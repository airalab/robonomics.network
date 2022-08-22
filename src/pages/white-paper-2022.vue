<template>
  <layout>

    <MetaInfo
      :pageTitle = "$ts('Whitepaper 2022 page title')"
    />

    <div class="page wp-page">

      <!-- main banner -->
      <section class="wp__banner page-banner section section__solid">
          <h1 class="wp__title">
              <b>{{$ts(`Robonomics Whitepaper 2022 Title_1_line`)}}</b>
              <br/>
              <b>{{$ts(`Robonomics Whitepaper 2022 Title_2_line`)}}</b>
              <br/>
              <b>{{$ts(`Robonomics Whitepaper 2022 Title_3_line`)}}</b>
              <br/>
          </h1>

        <div class="small-colony">
          <g-image src="~/assets/images/white-paper-2022/small-colony.svg"  alt="small-colone"/>
        </div>
        <div class="big-colony">
          <g-image src="~/assets/images/white-paper-2022/big-colony.svg"  alt="big-colone"/>
        </div>
        <div class="bushes">
          <g-image src="~/assets/images/white-paper-2022/bushes.svg"  alt="bushes"/>
        </div>

        <div class="astronaut">
          <div id="parallax-astronaut">
             <g-image  data-depth="0.2" src="~/assets/images/white-paper-2022/astronaut.svg"  alt="astronaut"/>
          </div>
        </div>
        <div class="yellow-robot">
          <g-image src="~/assets/images/white-paper-2022/yellow-robot.svg"  alt="yellow-robot"/>
        </div>
        <div class="small-robot__wrapper">
          <div class="small-robot">
            <g-image src="~/assets/images/white-paper-2022/small-robot.svg"  alt="small-robot"/>
          </div>
          <div class="small-robot-wheels">
            <g-image class="small-robot-wheel" aria-hidden="true" src="~/assets/images/white-paper-2022/wheel-for-small-robot.svg" />
            <g-image class="small-robot-wheel"  aria-hidden="true" src="~/assets/images/white-paper-2022/wheel-for-small-robot.svg" />
            <g-image class="small-robot-wheel" aria-hidden="true" src="~/assets/images/white-paper-2022/wheel-for-small-robot.svg" />
          </div>
        </div>

        <div class="logos">
          <div class="polkadot"> 
            <g-image src="~/assets/images/white-paper-2022/polkadot.svg"  alt="polkadot"/>
          </div>
          <div class="kusama">
            <g-image src="~/assets/images/white-paper-2022/crow.svg"  alt="kusama"/>
          </div>
          <div class="ethereum">
            <g-image src="~/assets/images/white-paper-2022/ethereum.svg"  alt="ethereum"/>
          </div>
        </div>
      </section>

      <!-- text section -->
      <section class="section wp-introduction">
        <div class="layout">
          <p class="hyphens wp-introduction__text">
           {{$ts(`We have developed a techno-economic machine communication protocol running on top of Ethereum and IPFS, and complement it with elements of a cloud-based IoT platform based on the Polkadot parachain. Today, we already have a hybrid platform for creating futuristic IoT applications. It provides interaction with devices under the control of a global decentralized computer. Before we start creating secure, serverless and futuristic IoT applications using the Robonomics platform, let’s dive a little into theory...`)}}
          </p>
          <strong>{{$ts(`The first two chapters of the Robonomics white paper are already available to users.`)}}</strong>
        </div>
      </section>

      <!-- first chapter section -->
      <section class="chapter__section section__solid section section__blue animate-inside in-viewport below-viewport" v-in-viewport.once>
        <div class="container--left chapter__container">
          <div class="first-chapter__text chapter__text hyphens">
            <h2 class="first-chapter__title chapter__title">{{$ts(`Chapter 1. AT THE INTERSECTION OF CYBERNETICS AND ECONOMICS`)}}</h2>
            <p class="first-chapter__descr chapter__descr">
              {{$ts(`We presented an economic system in which robotic devices act as independent agents capable of performing key economic activities, previously reserved for humans. In this chapter, we will talk about the relevance of the robot economy, which can become an important part of people's lives and change the current level of the economy into fully automated services in the future.`)}} 
            </p>
            <h3 class="first-chapter__subtitle chapter__subtitle hyphens">{{$ts(`In this chapter you will learn`)}}:</h3>
            <ul class="first-chapter__list chapter__list">
              <li class="first-chapter__item chapter__item">
                {{$ts(`Ronald Coase and The Nature of the Firm`)}}
              </li>
              <li class="first-chapter__item chapter__item">
                {{$ts(`CPS - cyber-physical system`)}}
              </li>
              <li class="first-chapter__item chapter__item">
                {{$ts(`Norbert Wiener and the search for patterns in living and machine`)}}
              </li>
              <li class="first-chapter__item chapter__item">
                {{$ts(`The Fourth Industrial Revolution, Money for Robots and Bitcoin`)}}
              </li>
              <li class="first-chapter__item chapter__item">
                {{$ts(`Ethereum Smart Contracts`)}}
              </li>
              <li class="first-chapter__item chapter__item">
                {{$ts(`Polkadot Parachains`)}}
              </li>
              <li class="first-chapter__item chapter__item">
                {{$ts(`Polkadot VS Ethereum 2.0`)}}
              </li>
              <li class="first-chapter__item chapter__item">
                {{$ts(`Open questions of teleology and Mises' work`)}}
              </li>
            </ul>
            <g-link to="/vision" target="_blank" class="button large white">{{$ts(`Read chapter 1 on the Robonomics website`)}}</g-link>
          </div>
          <div class="first-chapter__images chapter__images">
            <div class="first-chapter__images--top">
              <div class="first-chapter__images-wrapper">
                <g-image class="industry" src="~/assets/images/white-paper-2022/indusrty.svg" alt="industry" />
                <div class="bitcoin__wrapper">
                  <div class="coin-animation bitcoin"></div>
                </div>
                <g-image src="~/assets/images/white-paper-2022/ethereum-color.svg" alt="ethereum" />
                <g-image src="~/assets/images/white-paper-2022/polkadot-color.svg" alt="polkadot" />
              </div>
            </div>
            <div class="first-chapter__images--bottom">
              <g-image src="~/assets/images/white-paper-2022/scientists.svg" alt="industry" />
            </div>
          </div>
        </div>
        <hr/>
      </section>

      <!-- second chapter -->
      <section class="second-chapter__section chapter__section section__solid animate-inside in-viewport below-viewport" v-in-viewport.once>
        <div class="container--left chapter__container">
          <div class="second-chapter__text chapter__text hyphens">
            <h2 class="second-chapter__title chapter__title">{{$ts(`Chapter 2. ROBONOMICS ARCHITECTURE`)}}</h2>
            <p class="second-chapter__descr chapter__descr">
              {{$ts(`In the second chapter, you will read about human-machine interaction using modern Internet technology - from IoT devices to a decentralized and globally accessible network of providers. We will look at the basics of the Internet of Things in order to highlight the problems and main challenges faced by the creators of IoT systems and to the solution of which Robonomics is aimed.`)}} 
            </p>
            <h3 class="second-chapter__subtitle chapter__subtitle hyphens">{{$ts(`In this chapter you will learn`)}}:</h3>
            <ol class="second-chapter__list chapter__list">
              <li class="second-chapter__item chapter__item">
                {{$ts(`Overview of the state of the Internet of Things (IoT)`)}}
                <ul class="chapter__sub-list">
                  <li class="second-chapter__item chapter__item">
                    {{$ts(`Classification of IoT devices`)}}
                  </li>
                  <li class="second-chapter__item chapter__item">
                    {{$ts(`Embedded IoT systems`)}}
                  </li>
                  <li class="second-chapter__item chapter__item">
                    {{$ts(`Edge-systems: IoT gateways and controllers`)}}
                  </li>
                  <li class="second-chapter__item chapter__item">
                    {{$ts(`Autonomous Systems`)}}
                  </li>
                  <li class="second-chapter__item chapter__item">
                    {{$ts(`Internet of Things providers`)}}
                  </li>
                  <li class="second-chapter__item chapter__item">
                    {{$ts(`Digital twins are the heart of the Internet of Things`)}}
                  </li>
                  <li class="second-chapter__item chapter__item">
                    {{$ts(`IoT data flows in cloud service`)}}
                  </li>
                  <li class="second-chapter__item chapter__item">
                    {{$ts(`Popular examples of IoT solutions`)}}
                  </li>
                  <li class="second-chapter__item chapter__item">
                    {{$ts(`Current problems of building IoT solutions`)}}
                  </li>
                </ul>
              </li>
              <li class="second-chapter__item chapter__item">
                {{$ts(`Main tasks of Robonomics architecture`)}}
              </li>
              <li class="second-chapter__item chapter__item">
                {{$ts(`Basic components of Robonomics architecture`)}}
              </li>
              <li class="second-chapter__item chapter__item">
                {{$ts(`A simple representation of Robonomics architecture`)}}
              </li>
            </ol>
            <g-link to="/architecture" target="_blank" class="button large white">{{$ts(`Read chapter 2 on the Robonomics website`)}}</g-link>
          </div>
          <div class="second-chapter__images chapter__images">
            <div class="scheme-image">
              <g-image src="~/assets/images/white-paper-2022/scheme.svg" aria-hidden="true" alt="schema" />
            </div>
            <div class="glushkov">
              <g-image src="~/assets/images/white-paper-2022/glushkov.svg"/>
            </div>
            <div class="people-with-coin">
              <g-image src="~/assets/images/white-paper-2022/people-with-coins.svg"/>
            </div>
            <div class="console first">
              <g-image src="~/assets/images/white-paper-2022/console.svg"/>
            </div>
            <div class="console second">
              <g-image src="~/assets/images/white-paper-2022/console.svg"/>
            </div>
            <div class="robot-with-coin">
              <g-image src="~/assets/images/white-paper-2022/robot-with-coin.svg"/>
            </div>
            <div class="person-with-coin">
              <g-image src="~/assets/images/white-paper-2022/person-with-coin.svg"/>
            </div>
            <div class="smart-contract first">
              <g-image src="~/assets/images/white-paper-2022/smart-contract.svg"/>
            </div>
            <div class="smart-contract second">
              <g-image src="~/assets/images/white-paper-2022/smart-contract.svg"/>
            </div>
            <div class="white-column-for-robot">
              <g-image src="~/assets/images/white-paper-2022/white-column-for-robot.svg"/>
            </div>
            <div class="coin-animation coin"></div>
            <div class="white-column-for-coin">
              <g-image src="~/assets/images/white-paper-2022/white-column-for-coin.svg"/>
            </div>
            <div class="white-drone">
              <g-image src="~/assets/images/white-paper-2022/white-drone.svg"/>
            </div>
            <div class="white-round-robot">
              <g-image src="~/assets/images/white-paper-2022/white-round-robot.svg"/>
            </div>
            <div class="white-small-column">
              <g-image src="~/assets/images/white-paper-2022/white-small-column.svg"/>
            </div>
            <div class="white-tower">
              <g-image src="~/assets/images/white-paper-2022/white-tower.svg"/>
            </div>
            <div class="wp__decortext">
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
          </div>
        </div>
        <hr/>
      </section>

      <!-- discord section -->
      <section class="discord__section section__solid section section__blue animate-inside in-viewport below-viewport">
        <div class="layout discord__layout">
          <p class="discord__text hyphens">
            {{$ts(`We continue to update the white paper of Robonomics`)}}, <br/> {{$ts(`stay tuned for new parts on our website and in Discord`)}}. 
          </p>
          <Button class="wp__button" color="violet" :link="$static.metadata.discord">
            <g-image class="button-icon" aria-hidden="true" src="~/assets/images/white-paper-2022/discord.svg" />
            {{$ts(`JOIN OUR DISCORD`)}}
          </Button>
          <div class="elegant-robot">
            <g-image aria-hidden="true" src="~/assets/images/white-paper-2022/elegant-robot.svg" />
          </div>
        </div>
      </section>

    </div>

  </layout>
</template>

<static-query>
query {
  metadata {
    discord,
  }
}
</static-query>

<script>
  import Parallax from 'parallax-js'
export default {

  components: {
    Button: () => import("~/components/Button.vue"),
    MetaInfo: () => import("~/components/MetaInfo.vue"),
  },

  mounted() {
    const scene = document.getElementById('parallax-astronaut');
    const parallaxInstance = new Parallax(scene);
  } ,

    
}
</script>

<style scoped>

  .section {
    padding-top: calc(var(--space) * 2);
    padding-bottom: calc(var(--space) * 4);
  }

  .container--left {
    padding-left: var(--space) ;
  }

  .section__blue {
    padding-top: calc(var(--space) * 4);
    padding-bottom: 0;
  }

  .wp__decortext {
    position: absolute;
    z-index: 0;
    font-size: 60%;
    bottom: 30px;
    left: 50px;
    text-align: left;
    color: #fff;
    opacity: 0.2;
  }

  .wp__button {
    margin-bottom: 50px;
    display: inline-flex;
    align-items: center;
  }

  .wp__button img {
    margin-right: 7px;
  }

  .chapter__title {
    font-size: 1.5rem;
    white-space: nowrap;
    text-align: left;
  }


  .chapter__subtitle {
    margin-bottom: 0;
    font-size: 1.2rem;
    white-space: nowrap;
  }

  .chapter__list {
    margin-left: 0;
    list-style-type: '- ' ;
  }

  .chapter__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
   }

   .chapter__text {
    width: calc(50% - 2rem);
   }

   .chapter__images {
    position: relative;
    width: 50%;
    min-height: 778px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
   }

   .chapter__sub-list {
    list-style: disc;
    margin-left: 0;
   }

  .chapter__item {
    margin-bottom: 0;
    font-size: 1rem;
  }

  .button {
    padding:  1.5rem 1.8rem;
  }

  hr {
    margin-top: calc(var(--space) * 4);
    margin-bottom: 0;
  }

  .wp__banner {
    position: relative;
    background: var(--color-gradient-mars);
    min-height: 778px;
    width: 100%;
    overflow: hidden;
  }

  .wp__banner::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 15vh;
    left: 0;
    bottom: -10px;
    background-image: url('../assets/images/white-paper-2022/orange-bg.png');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 5;
  }

  .wp__title {
    position: relative;
    color: #fff;
    z-index: 25;
  }

  .big-colony {
    position: absolute;
    left: 0;
    bottom: 10vh;
    opacity: 0;
    animation: FadeIn 3s forwards linear;
  }

  .small-colony {
    position: absolute;
    right: 3%;
    bottom: 10vh;
    opacity: 0;
    animation: FadeIn 3s forwards 0.2s linear;
  }

  .bushes {
    position: absolute;
    right: 2%;
    bottom: 11vh;
    z-index: 10;
    opacity: 0;
    animation: FadeIn 3s forwards 0.4s linear;
  }

  .astronaut {
    position: absolute;
    bottom: -10px;
    left: 50%;
    z-index: 20;
    animation: ScaleCenteredAbsolute 3s forwards cubic-bezier(0.075, 0.82, 0.165, 1), FadeIn 1s forwards linear;
    -webkit-animation: ScaleCenteredAbsolute 3s forwards cubic-bezier(0.075, 0.82, 0.165, 1), FadeIn 1s forwards linear;
  }

  .yellow-robot {
    position: absolute;
    left: 5%;
    bottom: 10%;
    z-index: 15;
  }

  .small-robot {
    position: absolute;
    left: 20%;
    bottom: calc(10% - 6px);
    z-index: 15;
    animation: robotMove 5s infinite linear;
    -webkit-animation: robotMove 5s infinite linear;
    
  }

  .small-robot-wheels {
    position: absolute;
    left: 20.2%;
    bottom: calc(10% - 10px);
    z-index: 15;
    animation: robotMove 5s infinite linear;
    -webkit-animation: robotMove 5s infinite linear;
  }

  .small-robot-wheel {
    animation: spin 1s infinite linear;
    -webkit-animation:  spin 1s infinite linear;
  }

  .logos {
    position: absolute;
    left: 58%;
    top: 45%;
    max-width: 200px;
    max-height: 200px;
    width: 100%;
    height: 100%;
  }

  .dark-theme .logos {
    filter: grayscale(1) invert(100%);
  }

  .polkadot {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    animation: ScaleX 2s forwards linear 0.5s, FadeIn 1.5s forwards linear 0.8s;
    -webkit-animation: ScaleX 2s forwards linear 0.5s, FadeIn 1.5s forwards linear 0.8s;
  }

  .kusama {
    position: absolute;
    top: 15px;
    left: 15px;
    opacity: 0;
    animation: ScaleX 2s forwards linear 0.8s, FadeIn 1.5s forwards linear 1s;
    -webkit-animation: ScaleX 2s forwards linear 0.8s, FadeIn 1.5s forwards linear 1s;
  }

  .ethereum {
    position: absolute;
    bottom: 0;
    right: 58px;
    opacity: 0;
    animation: ScaleX 2s forwards linear 1.2s, FadeIn 1.5s forwards linear 1.5s;
    -webkit-animation: ScaleX 2s forwards linear 1.2s, FadeIn 1.5s forwards linear 1.5s;
  }

  .wp-introduction {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wp-introduction__text {
    font-family:  var(--font-family-code);
   }

   .first-chapter__images img {
    width: 100%;
    height: 100%;
   }

   .first-chapter__images--top {
    position: absolute;
    top: 20%;
    left: 0%;
    right: 0;
    width: 100%;
    overflow: hidden;
   }

   .first-chapter__images-wrapper {
    display: flex;
    align-items: center;
   }

   .first-chapter__images--top img:not(:last-of-type) {
    margin-right: 2rem;
   }

   .first-chapter__images--bottom {
    position: absolute;
    left: 0%;
    right: 0;
    top: 50%;
    width: 100%;
    animation: fromColorToBW 5s linear infinite;
    -webkit-animation: fromColorToBW 5s linear infinite alternate;
   }
 
  .first-chapter__images--top img:not(:first-of-type) {
    max-width: 125px;
    max-height: 130px;
    margin: 0.5rem;
  }

  .second-chapter__section {
    padding-top: calc(var(--space) * 4);
    padding-bottom: 0;
    color: #fff;
    background: var(--color-gradient-architecture-banner);
    overflow: hidden;
  }

  .second-chapter__list {
    list-style: decimal;
    padding-left: 18px;
  }

  .coin-animation {
    height: 7rem;
    width: 7rem; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
 
  .coin-animation::before {
    content: '';
    display: block;
    position: relative;
    height: 7rem;
    width: 7rem;
    margin-right: 2rem;
    border-radius: 50%;
    background-color:  #be9d66;
    animation: spinCoin 1s linear infinite;
    -webkit-animation: spinCoin 1s linear infinite;
    background-size: 100% 100%;
    background-position: center;
    background-blend-mode: overlay;
  }

    .bitcoin::before {
      background-image: url('../assets/images/white-paper-2022/bitcoin.png');
    }

    .coin {
      position: absolute;
      left: calc(100% - 399px);
      top: 52%; 
      height: 3rem;
      width: 3rem;
      z-index: 10;
    }

    .coin::before {
      height: 3rem;
      width: 3rem;
      background-image: url('../assets/images/white-paper-2022/big-coin.png');
      animation: spinSmallCoin 1s linear infinite;
      -webkit-animation: spinSmallCoin 1s linear infinite;
    }

    .scheme-image {
      position: absolute;
      top: 0;
      left: 10%;
    }

    .scheme-image img {
      max-width: 650px;
      width: auto;
    }

    .glushkov {
      position: absolute;
      top: 33%;
      right: calc(100% - 244px);
      z-index: 30;
      animation: fromColorToBW 5s linear infinite;
      -webkit-animation: fromColorToBW 5s linear infinite alternate;
    }

    .console {
      position: absolute;
      max-width: 60px;
      width: auto;
      z-index: 10;
    }


    .console.first {
      bottom: 10%;
      left: calc(100% - 479px);
      animation: FloatY 3s infinite linear;
      -webkit-animation: FloatY 3s infinite linear;
    }

    .console.second {
      bottom: 30%;
      left: calc(100% - 655px);
      animation: SlowRotate 5s linear infinite;
      -webkit-animation: SlowRotate 5s linear infinite;
    }

    .white-tower {
      position: absolute;
      right: 0;
      bottom: -10px;
    }

    .people-with-coin {
      position: absolute;
      right: calc(100% - 200px);
      bottom: 0;
      z-index: 10;
    }
    
    .person-with-coin {
      position: absolute;
      bottom: 39%;
      left: calc(100% - 300px);
      z-index: 10;
    }

    .smart-contract.first {
      position: absolute;
      bottom: 12%;
      left: calc(100% - 246px);
      z-index: 10;
      animation: SlowRotate 5s linear infinite;
      -webkit-animation: SlowRotate 5s linear infinite;
    }

    .smart-contract.second {
      position: absolute;
      top: 36%;
      left: 56%;
      z-index: 10;
      animation: FloatY 3s infinite linear;
      -webkit-animation: FloatY 3s infinite linear;
    }

    .white-small-column {
      position: absolute;
      left: calc(100% - 618px);
      bottom: 0;
    }

    .white-column-for-coin {
      position: absolute;
      left: calc(100% - 420px);
      bottom: 0;
      z-index: 5;
    }

    .white-column-for-robot {
      position: absolute;
      left: calc(100% - 560px);
      bottom: 0;
      z-index: 5;
    }

    .robot-with-coin {
      position: absolute;
      left: calc(100% - 566px);
      top: 45%;
    }

    .white-round-robot {
      position: absolute;
      left: calc(100% - 522px);
      top: 76%;
      z-index: 10;
      animation: FloatY 3s infinite linear;
      -webkit-animation: FloatY 3s infinite linear;
    }

    .white-drone {
      position: absolute;
      bottom: 18%;
      left: calc(100% - 290px);
      animation: FloatY 3s infinite linear;
      -webkit-animation: FloatY 3s infinite linear;
    }

    .discord__section {
      padding-bottom: calc(var(--space)*2);
    }

    .discord__layout {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .elegant-robot {
      position: relative;
      animation: SlowRotate 5s linear infinite;
      -webkit-animation: SlowRotate 5s linear infinite;
    }

    .elegant-robot::after {
      content: '';
      position: absolute;
      top: calc(2% + 49px);
      right: calc(20% + 68.5px);
      width: 6px;
      height: 4px;
      background: #B5BEE2;
      animation: winking 0.8s linear infinite;
      -webkit-animation: winking 0.8s linear infinite;
    }

    /* media quires */

    @media screen and (max-width: 1060px) {
      .chapter__container {
        padding-right: var(--space);
        flex-direction: column;
      }

      .chapter__title,
      .chapter__subtitle {
        white-space: unset;
      }

      .chapter__text {
        width: 100%;
        margin-bottom: 2rem;
      }

      .chapter__images {
        min-height: 900px;
        width: 100%;
      }

      .first-chapter__images {
        min-height: unset;
      }

      .first-chapter__images--top,
      .first-chapter__images--bottom {
        position: static;
      }

      .scheme-image {
        top: 6%;
        left: 0;
      }

      .robot-with-coin {
        top: 52%;
      }

      .coin {
        top: 60%;
      }

      .person-with-coin {
        bottom: 34%;
      }


    }

    @media screen and (max-width: 750px) {

      .wp__banner {
        min-height: 690px;
      }

      .logos {
        max-width: 159px;
        max-height: 103px;
      }

      .logos img {
        width: 50%;
      }

      .small-robot,
      .small-robot-wheels
       {
        left: unset;
        right: 10%;
      }

      .glushkov {
        top: 35%;
        left: calc(100% - 626px);
        right: unset;
      }

      .robot-with-coin,
      .coin,
      .white-column-for-coin,
      .white-column-for-robot,
      .white-small-column,
      .glushkov  {
        display: none;
      }
    }

    @media screen and (max-width: 520px) {

      .wp__banner {
        min-height: 688px;
      }

      .logos {
        display: none;
        left: 53%;
        top: 55%;
      }

      .yellow-robot {
        display: none;
      }

      .astronaut {
        width: 100%;
      }

      .chapter__images {
        min-height: 773px;
      }

      .first-chapter__images {
        min-height: unset;
      }

      .first-chapter__images--top {
        margin-bottom: 2rem;
      }

      .first-chapter__images--top img:not(:first-of-type),
      .bitcoin__wrapper {
        display: none;
      }

      .white-tower {
        width: 100%;
      }

      .white-tower img{
        max-width: 492px;
        /* width: auto; */
      }

      .white-drone {
        z-index: 30;
      }

      .person-with-coin {
        display: none;
      }
    }

    @media screen and (max-width: 375px) {
      .chapter__images {
        min-height: 689px;
      }

      .first-chapter__images {
        min-height: unset;
      }
    }
</style>

