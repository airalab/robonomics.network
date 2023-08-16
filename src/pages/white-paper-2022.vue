<template>
  <layout>

    <MetaInfo
      pageTitle = "Whitepaper 2022 page title"
      pageDescription = "Whitepaper 2022 page description"
      :pageImage = "'/website_cover_white_paper_2022.jpg'"
    />

    <div class="page wp-page">

      <!-- main banner -->
      <section class="wp__banner page-banner section section__solid">
          <h1>{{$t(`Robonomics whitepaper 2022 welcome guide`)}}</h1>

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
            <div data-depth="0.2" class="parallax-astronaut__wrapper-logo">
              <!-- <g-image  src="~/assets/images/white-paper-2022/astronaut-logo.svg"  alt="astronaut-logo"/> -->
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110.45 100.44" width="100" height="100"><g id="Layer_2" data-name="Layer 2"><g><polygon class="cls-1 triangle-1" points="55.1 35.84 55.1 67.2 80.03 80.93 55.1 35.84"/><polygon class="cls-2 triangle-2" points="55.1 67.2 30.16 80.93 80.03 80.93 55.1 67.2"/><polygon class="cls-3 triangle-3" points="55.1 35.84 30.16 80.93 55.14 67.2 55.1 35.84"/><polygon class="cls-4" points="55.1 3.86 3.44 96.58 106.76 96.58 55.1 3.86"/><ellipse class="cls-5" cx="3.69" cy="96.58" rx="3.69" ry="3.86"/><ellipse class="cls-5" cx="106.76" cy="96.58" rx="3.69" ry="3.86"/><ellipse class="cls-5" cx="55.1" cy="3.86" rx="3.69" ry="3.86"/></g></g>
              </svg>
            </div>
            <div data-depth="0.2" class="parallax-astronaut__wrapper">
              <g-image src="~/assets/images/white-paper-2022/astronaut.svg"  alt="astronaut"/>
            </div>
          </div>
        </div>
        <div class="yellow-robot">
          <div class="yellow-robot-antenna">
            <div class="circle first"></div>
            <div class="circle second"></div>
            <div class="circle third"></div>	
            <div class="circle fourth"></div>
          </div>
          <Spot/>
        </div>
        <div class="small-robot__wrapper">
          <div class="small-robot-antenna">
            <svg xmlns="http://www.w3.org/2000/svg" width="11.477" height="7.663" viewBox="0 0 11.477 7.663">
              <g id="Group_754" data-name="Group 754" transform="translate(-688.611 -600.381)">
                <circle class="circle" id="Ellipse_95" data-name="Ellipse 95" cx="0.988" cy="0.988" r="0.988" transform="translate(693.361 605.817)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
                <path class="line-1" id="Path_835" data-name="Path 835" d="M688.951,603.8a6.179,6.179,0,0,1,10.8,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
                <path class="line-2" id="Path_836" data-name="Path 836" d="M690,604.854a4.766,4.766,0,0,1,8.7,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
                <path class="line-3" id="Path_837" data-name="Path 837" d="M691.1,605.957a3.354,3.354,0,0,1,6.489,0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
              </g>
            </svg>
          </div>
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
        <div class="layout layout__text animate-inside in-viewport" data-in-viewport="i20" v-in-viewport.once>
          <p class="hyphens wp-introduction__text">
           {{$t(`We have developed a techno-economic machine communication protocol running on top of Ethereum and IPFS, and complement it with elements of a cloud-based IoT platform based on the Polkadot parachain. Today, we already have a hybrid platform for creating futuristic IoT applications. It provides interaction with devices under the control of a global decentralized computer. Before we start creating secure, serverless and futuristic IoT applications using the Robonomics platform, let’s dive a little into theory...`)}}
          </p>
          <strong>{{$t(`The first two chapters of the Robonomics white paper are already available to users.`)}}</strong>
        </div>
      </section>

      <!-- first chapter section -->
      <section class="chapter__section section__solid section section__blue animate-inside in-viewport below-viewport" v-in-viewport.once>
        <div class="container--left chapter__container">
          <div class="first-chapter__text chapter__text">
            <h2 class="first-chapter__title chapter__title"> 
              <span class="chapter-accent">{{$t(`Chapter 1.`)}}</span>
              {{$t(`At the intersection of cybernetics and economics`)}}
            </h2>
            <p class="first-chapter__descr chapter__descr hyphens">
              {{$t(`We presented an economic system in which robotic devices act as independent agents capable of performing key economic activities, previously reserved for humans. In this chapter, we will talk about the relevance of the robot economy, which can become an important part of people's lives and change the current level of the economy into fully automated services in the future.`)}} 
            </p>
            <h3 class="first-chapter__subtitle chapter__subtitle">{{$t(`In this chapter you will learn`)}}:</h3>
            <ul class="first-chapter__list chapter__list">
              <li class="first-chapter__item chapter__item">
                {{$t(`Ronald Coase and The Nature of the Firm`)}}
              </li>
              <li class="first-chapter__item chapter__item">
                {{$t(`CPS - cyber-physical system`)}}
              </li>
              <li class="first-chapter__item chapter__item">
                {{$t(`Norbert Wiener and the search for patterns in living and machine`)}}
              </li>
              <li class="first-chapter__item chapter__item">
                {{$t(`The Fourth Industrial Revolution, Money for Robots and Bitcoin`)}}
              </li>
              <li class="first-chapter__item chapter__item">
                {{$t(`Ethereum Smart Contracts`)}}
              </li>
              <li class="first-chapter__item chapter__item">
                {{$t(`Polkadot Parachains`)}}
              </li>
              <li class="first-chapter__item chapter__item">
                {{$t(`Polkadot VS Ethereum 2.0`)}}
              </li>
              <li class="first-chapter__item chapter__item">
                {{$t(`Open questions of teleology and Mises' work`)}}
              </li>
            </ul>
            <rbnet-button class="large white" link="/vision">{{$t(`Read chapter 1`)}}</rbnet-button>
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
          <div class="second-chapter__text chapter__text">
            <h2 class="second-chapter__title chapter__title"> 
              <span class="chapter-accent">{{$t(`Chapter 2.`)}}</span>
              {{$t(`Robonomics architecture`)}}
            </h2>
            <p class="second-chapter__descr chapter__descr hyphens">
              {{$t(`In the second chapter, you will read about human-machine interaction using modern Internet technology - from IoT devices to a decentralized and globally accessible network of providers. We will look at the basics of the Internet of Things in order to highlight the problems and main challenges faced by the creators of IoT systems and to the solution of which Robonomics is aimed.`)}} 
            </p>
            <h3 class="second-chapter__subtitle chapter__subtitle">{{$t(`In this chapter you will learn`)}}:</h3>
            <ol class="second-chapter__list chapter__list">
              <li class="second-chapter__item chapter__item">
                {{$t(`Overview of the state of the Internet of Things (IoT)`)}}
                <ul class="chapter__sub-list chapter__list">
                  <li class="second-chapter__item chapter__item">
                    {{$t(`Classification of IoT devices`)}}
                  </li>
                  <li class="second-chapter__item chapter__item">
                    {{$t(`Embedded IoT systems`)}}
                  </li>
                  <li class="second-chapter__item chapter__item">
                    {{$t(`Edge-systems: IoT gateways and controllers`)}}
                  </li>
                  <li class="second-chapter__item chapter__item">
                    {{$t(`Autonomous Systems`)}}
                  </li>
                  <li class="second-chapter__item chapter__item">
                    {{$t(`Internet of Things providers`)}}
                  </li>
                  <li class="second-chapter__item chapter__item">
                    {{$t(`Digital twins are the heart of the Internet of Things`)}}
                  </li>
                  <li class="second-chapter__item chapter__item">
                    {{$t(`IoT data flows in cloud service`)}}
                  </li>
                  <li class="second-chapter__item chapter__item">
                    {{$t(`Popular examples of IoT solutions`)}}
                  </li>
                  <li class="second-chapter__item chapter__item">
                    {{$t(`Current problems of building IoT solutions`)}}
                  </li>
                </ul>
              </li>
              <li class="second-chapter__item chapter__item">
                {{$t(`Main tasks of Robonomics architecture`)}}
              </li>
              <li class="second-chapter__item chapter__item">
                {{$t(`Basic components of Robonomics architecture`)}}
              </li>
              <li class="second-chapter__item chapter__item">
                {{$t(`A simple representation of Robonomics architecture`)}}
              </li>
            </ol>
            <rbnet-button class="large white" link="/vision">{{$t(`Read chapter 2`)}}</rbnet-button>
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
            {{$t(`We continue to update the white paper of Robonomics`)}}, <br/> {{$t(`stay tuned for new parts on our website and in Discord`)}}. 
          </p>
          <rbnet-button class="wp__button" color="violet" :link="$static.metadata.discord">
            <g-image class="button-icon" aria-hidden="true" src="~/assets/images/white-paper-2022/discord.svg" />
            {{$t(`Join our discord`)}}
          </rbnet-button>
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
    MetaInfo: () => import("~/components/MetaInfo.vue"),
    Spot: () => import("~/components/decor/Spot.vue"),
},

  mounted() {
    const scene = document.getElementById('parallax-astronaut');
    const parallaxInstance = new Parallax(scene);
  },

    
}
</script>

<style scoped>

  .section {
    padding-top: calc(var(--space) * 2);
    padding-bottom: calc(var(--space) * 4);
  }

  .container--left {
    padding-left: calc(var(--space) * 7) ;
    padding-right: var(--space);
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
    /* white-space: nowrap; */
    text-align: left;
  }


  .chapter__subtitle {
    text-transform: none;
    text-align: left;
    /* white-space: nowrap; */
  }

  .chapter__list {
    margin-left: 0;
    list-style-type: '- ' ;
    text-align: left;
  }

  .chapter__descr {
    font-weight: 600;
  }

  .chapter__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
   }

   .chapter__text {
    width: calc(50% - 9rem);
    text-align: left;
   }

   .chapter__text .button {
    padding: 1.5rem 1.8rem;
    text-transform: unset;
   }


  .chapter__text .button:hover {
    --b-color-background: var(--white-button-hover);
    background-color: var(--b-color-background);
  }

   .chapter-accent {
    display: block;
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

   /* .chapter__sub-list {
    list-style: disc;
    margin-left: 0;
   } */

  .chapter__item {
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 500;
  }

  .wp-page .button {
    font-weight: 700;
    font-family: var(--font-family-code);
    box-shadow: 6px 6px 0 var(--color-dark);
    text-transform: uppercase;
  }

  .dark-theme .wp-page .button:hover {
    --b-color-background: var(--white-button-hover);
    background-color: var(--b-color-background);
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
    height: 114px;
    left: 0;
    bottom: -10px;
    background-image: url('../assets/images/white-paper-2022/orange-bg.png');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 5;
  }

  h1 {
    position: relative;
    padding-right: var(--space);
    padding-left: var(--space);
    color: #fff;
    z-index: 25;
  }

  .big-colony {
    position: absolute;
    left: 0;
    bottom: 60px;
    opacity: 0;
    animation: FadeIn 3s forwards linear;
  }

  .small-colony {
    position: absolute;
    right: 3%;
    bottom: 75px;
    opacity: 0;
    animation: FadeIn 3s forwards 0.2s linear;
  }

  .bushes {
    position: absolute;
    right: 2%;
    bottom: 78px;
    z-index: 10;
    opacity: 0;
    animation: FadeIn 3s forwards 0.4s linear;
  }

  .astronaut {
    position: absolute;
    bottom: -10px;
    left: 50%;
    min-height: 404px;
    max-width: 416px;
    width: 100%;
    animation: CenteredAbsoluteFloatY 3s forwards cubic-bezier(0.075, 0.82, 0.165, 1), FadeIn 1s forwards linear;
    -webkit-animation: CenteredAbsoluteFloatY 3s forwards cubic-bezier(0.075, 0.82, 0.165, 1), FadeIn 1s forwards linear;
  }

   .parallax-astronaut__wrapper {
    position: relative;
   }

  .parallax-astronaut__wrapper-logo {
    position: absolute;
    top: 100px !important;
    left: 5px  !important;
    z-index: 30;
  }

    .cls-1{fill:#b2c1f3; animation: 5s logo-triangle-1 0.5s linear infinite;}
    .cls-2{fill:#213159; 	animation: 5s logo-triangle-2 0.5s linear infinite;}
    .cls-3{fill:#00bdff; animation: 5s logo-triangle-3 0.5s linear infinite;}

    .cls-4 {
      fill: transparent;
      stroke: #03A5ED;
      stroke-miterlimit:10;

      stroke-dasharray: 700;
      stroke-dashoffset: 700;
      animation: 1s DrawSvgPath 1s ease-in-out forwards; 
    }
    .cls-5 {fill:#00bdff; opacity: 0; animation: 3s FadeIn 1s ease forwards;}

  .yellow-robot {
    position: absolute;
    left: calc(50% - 500px);
    bottom: 39px;
    z-index: 18;
  }

.yellow-robot-antenna{
    position:absolute;
    top: -50px;
    left: 51%;
    width: 30px;
    height: 30px;
    margin-top: 0.25rem;

    transform: rotate(-45deg) translate(-100px);
   }

  .yellow-robot-antenna .circle {
    display:block;
    width:100%;
    height:100%;
    font-size: 0.5rem;
    position:absolute;
    bottom:0;
    left:0;
    border-color: var(--color-dark);
    border-style:solid;
    border-width:0.8em 0.8em 0 0 ;
    -webkit-border-radius:0 100% 0 0;
    border-radius:0 100% 0 0;
    
    opacity: 0;
    animation: 2s FadeIn 5.6s var(--animation-bump) infinite;
}

  .yellow-robot-antenna .circle.first {
      height: 7em;
      width: 7em;
      animation-delay: 1200ms;
  }

  .yellow-robot-antenna .circle.second {
      width:5em;
      height:5em;
      animation-delay: 800ms;
  }

    .yellow-robot-antenna .circle.third {
      width: 3em;
      height: 3em;
      animation-delay:400ms;
    }

    .yellow-robot-antenna .circle.fourth {
      width: 1em;
      height: 1em;
      background-color: var(--color-dark);
    }


  .small-robot__wrapper {
    position: absolute;
    /* left: 20%; */
    left: calc(50% + 300px);
    /* bottom: calc(14% - 6px); */
    bottom: 94px;
    z-index: 15;
    /* transform: translateX(-25vw); */
    /* animation: robotMove 25s infinite linear 1.5s; */
  }

  @keyframes robotMove {
    0% {
      transform: translateX(-25vw);
    }

    10% {
      transform: translateX(-10vw);
    }


    20% {
      transform: translateX(5vw);
    }

    40% {
      transform: translateX(15vw);
      
    }

    50% {
      transform: translateX(25vw);
    }

    60% {
      transform: translateX(50vw);
    }

    80% {
      transform: translateX(80vw);
    }

    100% {
      transform: translateX(100vw);
    }
  }


  .small-robot-wheels {
    position: absolute;
    bottom: calc(10% - 12px);
    z-index: 15;
    /* transform: translateX(-25vw); */
    /* animation: robotMove 25s infinite linear 1.5s;
    -webkit-animation: robotMove 25s infinite linear 1.5s; */
  }

  .small-robot-antenna {
    position: absolute;
    left: calc(20% + 20px);
    bottom: calc(10% + 61px);
    z-index: 16;
    /* transform: translateX(-25vw);
    animation: robotMove 25s infinite linear 1.5s;
    -webkit-animation: robotMove 25s infinite linear 1.5s; */
  }

  .small-robot-antenna .circle {
    opacity: 0;
    animation: FadeIn 2s forwards linear;
    -webkit-animation: FadeIn 2s forwards linear;
  }

  .small-robot-antenna .line-1 {
    animation: FadeOut 2s infinite 0.7s linear;
    -webkit-animation: FadeOut 2s infinite 0.7s linear;
  }

  .small-robot-antenna .line-2 {
    opacity: 0;
    animation: FadeOut 2s infinite 0.9s linear;
    -webkit-animation: FadeOut 2s infinite 0.9s linear;
  }

  .small-robot-antenna .line-3 {
    opacity: 0;
    animation: FadeOut 2s infinite 1.2s linear;
    -webkit-animation: FadeOut 2s infinite 1.2s linear;
  }

  /* .small-robot-wheel {
    animation: spin 1s infinite linear;
  } */

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
    animation: MoveUp 2s forwards 0.5s cubic-bezier(0.075, 0.82, 0.165, 1), FadeIn 1.5s forwards linear 0.8s;
    -webkit-animation: MoveUp 2s forwards 0.5s cubic-bezier(0.075, 0.82, 0.165, 1), FadeIn 1.5s forwards linear 0.8s;
  }

  .kusama {
    position: absolute;
    top: 15px;
    left: 15px;
    opacity: 0;
    animation: MoveUp 2s forwards 0.5s cubic-bezier(0.075, 0.82, 0.165, 1),FadeIn 1.5s forwards linear 1s;
    -webkit-animation: MoveUp 2s forwards 0.5s cubic-bezier(0.075, 0.82, 0.165, 1), FadeIn 1.5s forwards linear 1s;
  }

  .ethereum {
    position: absolute;
    bottom: 0;
    right: 58px;
    opacity: 0;
    animation: MoveUp 2s forwards 0.3 cubic-bezier(0.075, 0.82, 0.165, 1),FadeIn 1.5s forwards linear 0.9s;
    -webkit-animation: MoveUp 2s forwards 0.3 cubic-bezier(0.075, 0.82, 0.165, 1), FadeIn 1.5s forwards linear 0.9s;
  }

  .wp-introduction {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family:  var(--font-family-code);
  }

  .wp-introduction__text {
    line-height: 1.7;
    font-family:  var(--font-family-code);
   }

   .first-chapter__list {
    padding-left: 12px;
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
    padding-left: 22px;
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


  @keyframes spinCoin {

    0% {
      width: 7rem;
      box-shadow:
        0 0 0 #120e08;
      animation-timing-function: ease-in;
    }

    49.999% {
      width: 0.1rem;
      box-shadow:
        0.05rem 0 0 #896c3b,
        0.1rem 0 0 #896c3b,
        0.15rem 0 0 #896c3b,
        0.2rem 0 0 #896c3b,
        0.25rem 0 0 #896c3b,
        0.3rem 0 0 #896c3b,
        0.35rem 0 0 #896c3b,
        0.4rem 0 0 #896c3b,
        0.45rem 0 0 #896c3b,
        0.5rem 0 0 #896c3b,
        0.55rem 0 0 #896c3b,
        0.6rem 0 0 #896c3b,
        0.65rem 0 0 #896c3b,
        0.7rem 0 0 #896c3b,
        0.75rem 0 0 #896c3b;
      transform: translateX(-0.375rem);
      background-color: #111;
      animation-timing-function: linear;
    }

    50.001% {
      width: 0.1rem;
      box-shadow:
        -0.05rem 0 0 #896c3b,
        -0.1rem 0 0 #896c3b,
        -0.15rem 0 0 #896c3b,
        -0.2rem 0 0 #896c3b,
        -0.25rem 0 0 #896c3b,
        -0.3rem 0 0 #896c3b,
        -0.35rem 0 0 #896c3b,
        -0.4rem 0 0 #896c3b,
        -0.45rem 0 0 #896c3b,
        -0.5rem 0 0 #896c3b,
        -0.55rem 0 0 #896c3b,
        -0.6rem 0 0 #896c3b,
        -0.65rem 0 0 #896c3b,
        -0.7rem 0 0 #896c3b,
        -0.75rem 0 0 #896c3b;
      transform: translateX(0.375rem);
      background-color: var(--lowlight);
      animation-timing-function: ease-out;
    }

    100% {
      width: 7rem;
      box-shadow:
        0 0 0 #000;
    }
  }

  @keyframes spinSmallCoin {

  0% {
    width: 3rem;
    box-shadow:
      0 0 0 #120e08;
    animation-timing-function: ease-in;
  }

  49.999% {
    width: 0.1rem;
    box-shadow:
      0.05rem 0 0 #896c3b,
      0.1rem 0 0 #896c3b,
      0.15rem 0 0 #896c3b,
      0.2rem 0 0 #896c3b,
      0.25rem 0 0 #896c3b,
      0.3rem 0 0 #896c3b,
      0.35rem 0 0 #896c3b,
      0.4rem 0 0 #896c3b,
      0.45rem 0 0 #896c3b,
      0.5rem 0 0 #896c3b,
      0.55rem 0 0 #896c3b,
      0.6rem 0 0 #896c3b,
      0.65rem 0 0 #896c3b,
      0.7rem 0 0 #896c3b,
      0.75rem 0 0 #896c3b;
    transform: translateX(-0.375rem);
    background-color: #111;
    animation-timing-function: linear;
  }

    50.001% {
      width: 0.1rem;
      box-shadow:
        -0.05rem 0 0 #896c3b,
        -0.1rem 0 0 #896c3b,
        -0.15rem 0 0 #896c3b,
        -0.2rem 0 0 #896c3b,
        -0.25rem 0 0 #896c3b,
        -0.3rem 0 0 #896c3b,
        -0.35rem 0 0 #896c3b,
        -0.4rem 0 0 #896c3b,
        -0.45rem 0 0 #896c3b,
        -0.5rem 0 0 #896c3b,
        -0.55rem 0 0 #896c3b,
        -0.6rem 0 0 #896c3b,
        -0.65rem 0 0 #896c3b,
        -0.7rem 0 0 #896c3b,
        -0.75rem 0 0 #896c3b;
      transform: translateX(0.375rem);
      background-color: var(--lowlight);
      animation-timing-function: ease-out;
    }

    100% {
      width: 3rem;
      box-shadow:
        0 0 0 #000;
    }
  }

  @keyframes winking {
    0% {
      height: 0;
    }
    100%{
      height: 4px;
      opacity: 1;
    }
  }

  @keyframes logo-triangle-1
  {
    0% { fill: var(--color-blue-mid ); }
    25% { fill: var(--color-blue-mid ); }
    50% { fill: var(--color-violet-mid ); }
    75% { fill: var(--color-violet); }
    100% { fill: var(--color-blue-mid ); }
  }

  @keyframes logo-triangle-2
    {
      0% { fill: var(--color-violet); }
      25% { fill: #E0BDED; }
      50% { fill: var(--color-blue-mid ); }
      75% { fill: var(--color-blue-mid );}
      100% { fill: var(--color-violet); }
    }

  @keyframes logo-triangle-3
    {
      0% { fill: var(--color-violet-mid); }
      25% { fill: var(--color-violet); }
      50% { fill: var(--color-violet); }
      75% { fill: var(--color-violet-dark); }
      100% { fill: var(--color-violet-mid); }
    }

  @keyframes CenteredAbsoluteFloatY {
    0% {
      transform: translateX(-50%) translateY(100%);
      z-index: 0;
    }
    100%{
      bottom: -10px;
      transform:translateX(-50%) translateY(0%);
      z-index: 20;
    }
  }

  @keyframes MoveUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  }


  @keyframes fromColorToBW {
    from {
      filter: grayscale(0);
    }
    to {
      filter: grayscale(1);
    }
  }

    /* media quires */

    @media screen and (max-width: 1360px) {
      .chapter__container {
        padding-right: var(--space);
        padding-left: var(--space);
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

    @media screen and (max-width: 820px) {
      
      .yellow-robot {
        display: none;
      }

      .small-robot__wrapper {
        display: none;
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

      h1 {
        padding-top: var(--space);
      }

      .astronaut {
        min-height: unset;
        height: 370px;
        width: 380px;
        overflow: hidden;
      }

      .logos {
        display: none;
        left: 53%;
        top: 55%;
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

