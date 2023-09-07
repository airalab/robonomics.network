<template>
  <CaseLayout
    :path="$route.path"
    introImg="blockchain-coffee/1.jpg"
    introText="The 'Robonomics Coffee' is a smart coffee machine integrated into the Robonomics Network. This project aims to illustrate Robonomics' potential in the IoT sphere through a real-world example."
    footerTitle="DIY or how to build your own smart blockchain coffee machine"
    footerText="<p>You can find a detailed tutorial and technical specifications in the open-source GitHub repository. Keep in mind that you can use any coffee machine you prefer and almost any token of your choice to bring this project to life in your own space.</p>"
    link="https://github.com/Multi-Agent-io/robonomics-coffee-maker"
    linkText="robonomics-coffee-maker"
  >

    <section class="case-page__content hyphens">

      <CaseText
        title="Establishing democracy with smart contracts"
        text="Let's imagine a small office with a team of 10-15 people. While everybody is focused on their own deadlines for their main professional tasks, no one seems to care about the upkeep of the office space. The most common solution to avoid sinking into chaos is to hire third-party individuals for support. Another approach is to take the initiative and impose penalties on those who create a mess or deplete supplies without replenishing them. However, is it ethical to live under tyranny in our future crypto-anarchist world, where everyone is expected to be responsible and enjoy freedom? Let's strive to create a more democratic society using smart contracts and the new generation of Internet technologies (often referred to as Web3). We need tools that can help us make decisions together, and then ensure they work properly without humans having to get directly involved."
      />

      <CaseText
        title="'Who drank all the coffee?!' or the tragedy of the commons"
        text="There's a concept widely discussed in economics, ecology, and other sciences known as the 'tragedy of the commons.' This pertains to a scenario in which individuals who have access to a shared resource prioritize their own interests, ultimately exhausting the resource. Coffee closely resembles such a resource, as it deteriorates due to uncontrolled consumption in the office. However, at the same time, usually none of the team members are inclined to invest their time and money in obtaining an additional package of coffee beans. So, they keep drinking coffee without getting new supplies."
      />

      <CaseText
        title="Strategy for transforming the coffee machine into an autonomous robotic device"
        multiply
      >
        <p><b>How to formulate the task in numbers.</b> Assuming a monthly coffee budget of $100, which is approximately equivalent to 150 cups for our team of 10 people, this leaves each person with 1 cup every 2 days. Now, let's delve into the technical details. The question is: how can we bring an autonomous coffee machine to life in the office?</p>

        <p><b>Step 1: automated coffee bean ordering</b>. We've made an arrangement with the barista, Nikita, who's located near the office. He'll supply us with coffee beans upon receiving an alert from the bot. The bot sends a message when the coffee is running low, specifying the quantity of coffee (in kilograms) needed for the order and the corresponding payment amount determined by the team. With these details, Nikita can select the coffee according to his preference.</p>

        <p><b>Step 2: automatic access to smart office.</b> Simultaneously with the order, the coffee machine generates a QR code. Nikita then presents this QR code to the camera for office entry.</p>

        <p><b>Step 3: distribution of coffee tokens to the team.</b> Once the local camera scans the QR code, the smart home management system initiates a payment to Nikita and distributes new coffee tokens among the team members.</p>

        <p><b>Step 4: drink coffee!</b>  In order to receive a fresh cup of coffee, a team member needs to send a coffee token to the address of the coffee machine.</p>
        
        <h3 class="youtube-icon">Coffee beans delivery process:</h3>
        <div class="youtube-wrapper">
          <Youtube
            title="delivery"
            src="https://www.youtube.com/embed/Q7C4Mb9wn64"
            withBorder
            width="90%"
          />
        </div>

      </CaseText>

      <CaseText
        title="Unlock new possibilities with this concept"
        multiply
      >

      <p>Furthermore, such an automated coffee machine introduces various economic and social dimensions. Let’s take a look at them:</p>

      <ul class="list-simple cases__list cases__list--with-tick">
            <li class="cases__item cases__item--with-tick">Developers can deposit extra coffee tokens when consumption falls below the limit. This creates a transparent system for varied coffee usage within the limit.</li>
            <li class="cases__item cases__item--with-tick">The coffee machine could maintain a shared account, enabling office members to contribute funds from their personal accounts for a higher quality coffee experience next time.</li>
            <li class="cases__item cases__item--with-tick">The team collectively decides the coffee quantity the machine will order each time through a DAO vote. This provides freedom to tackle the challenge with limited resources.</li>
            <li class="cases__item cases__item--with-tick">Programmable processes reduce the influence of human factors and also offer greater flexibility in tailoring settings for specific teams.</li>
          </ul>
      </CaseText>

      <div class="oldy layout layout__mid mb-big">
        <div class="layout__text">
          <h2>How we smarten up our coffee machine in real life</h2>
          <p>To achieve hands-on control of the coffee machine, we integrated a single-board computer, specifically the Raspberry Pi 4, along with a commonly available mass-market coffee machine that supported GPIO connection. Our preference was the <g-link to="https://www.delonghi.com/en/ecam22-110-sb-magnifica-s-automatic-coffee-maker/p/ECAM22.110.SB">De’Longhi Magnifica ECAM 22.110</g-link>, selected for its affordability and the convenience of its easily removable front panel.</p>
        </div>
        <div class="youtube-wrapper mb-big">
          <Youtube
            title="COFFEE"
            src="https://www.youtube.com/embed/Z8pXcLjlJnQ"
            withBorder
            width="80%"
          />
        </div>
        
        <div class="layout__text">
          <p>Next, we worked out the operational details, specifically concerning which tokens users could send and the underlying algorithm. Here's the result:</p>
          <img src="/cases/blockchain-coffee/scheme-1.svg" alt="scheme" />
          <p>To enjoy a cup of delicious coffee, users need to send a certain amount of funds (in our case, 1 Statemine's token ACT, id=3077) to the coffee machine's address from a parachain (Statemine). Afterward, the coffee pouring process begins, and an action log is subsequently published on <g-link to="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/explorer">the Robonomics Parachain portal </g-link> via the Datalog function.</p>
        </div>

        <img class="no-mb" src="/cases/blockchain-coffee/scheme-2.svg" alt="scheme" />
      </div>

      <div class="cases-concept">
        <CaseText
          title="When the concept extends beyond the office"
          text="This concept offers numerous avenues for expanding the idea. It was successfully implemented at the Polkadot Web3 Hub during the 2022 World Economic Forum in Davos. Participants were able to place coffee orders and specify their desired coffee type (e.g., espresso, americano, cappuccino) by sending a certain amount of tokens.Let us share photos and videos from this event:"
        />

        <div class="cases-concept__images">

          <div class="cases-concept__images-top">
            <img class="concept-img-1 white-border" aria-hidden="true" src="@/assets/images/cases/blockchain-coffee/coffee-concept-1.png"/>

            <img class="concept-img-2" aria-hidden="true" src="@/assets/images/cases/blockchain-coffee/coffee-concept-2.jpg"/>
          </div>

          <div class="cases-concept__images-bottom">
            <div class="concept-img-4">
              <img aria-hidden="true" src="/cases/blockchain-coffee/coffee-decor-4.svg"/>
              <span>Our blockchain coffee maker making coffee at the Polkadot Web3 Hub </span>
            </div>
            <div class="cases-concept__images-group">
              <img class="concept-img-3 white-border" aria-hidden="true" src="@/assets/images/cases/blockchain-coffee/coffee-concept-3.jpg"/>
              <video class="concept-video white-border" controls muted autoplay playsinline loop preload='none' >
                <source src="@/assets/images/cases/blockchain-coffee/coffee-concept-video.mp4" type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
      </div>

      <!-- decor image -->
      <img class="decor-img-1" aria-hidden="true" src="@/assets/images/cases/blockchain-coffee/coffee-decor-1.png"/>
      <img class="decor-img-2" aria-hidden="true" src="@/assets/images/cases/blockchain-coffee/coffee-decor-2.png"/>
      <img class="decor-img-3" aria-hidden="true" src="@/assets/images/cases/blockchain-coffee/coffee-decor-3.png"/>
    </section>
  </CaseLayout>
</template>

<script>

export default {

  components: {
    CaseLayout: () => import('~/layouts/CaseLayout.vue'),
    CaseText: () => import('~/components/case/CaseText.vue'),
  }

}
</script>

<style scoped>

  img {
    margin: 0 auto;
    margin-top: calc(var(--space) * 0.7);
    margin-bottom: calc(var(--space) * 2);
    display: block;
  }

  .mb {
    margin-bottom: var(--space);
  }

  .mb-big {
    margin-bottom: calc(var(--space) * 3);
  }

  .mt {
    margin-top: calc(var(--space) * 0.7);
  }

  .no-mt {
    margin-top: 0;
  }

  .no-mb {
    margin-bottom: 0;
  }

  .white-border {
    border: 7px solid #fff;
  }

  .case-page__content .youtube-icon {
    margin-top: calc(var(--space) * 2);
    padding-left: 40px;
    background-image: url("data:image/svg+xml,%3Csvg width='31' height='22' viewBox='0 0 31 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_700_10062)'%3E%3Cpath d='M30.3613 3.44197C30.004 2.09595 28.9564 1.03516 27.6294 0.673012C25.2032 0 15.4995 0 15.4995 0C15.4995 0 5.7957 0 3.37055 0.647373C2.06786 1.00952 0.995988 2.09702 0.638697 3.44304C0 5.90114 0 11 0 11C0 11 0 16.1245 0.638697 18.557C0.995988 19.903 2.04362 20.9638 3.37055 21.3259C5.82205 21.9989 15.4995 21.9989 15.4995 21.9989C15.4995 21.9989 25.2032 21.9989 27.6284 21.3516C28.9564 20.9894 30.003 19.9276 30.3602 18.5826C30.9989 16.1234 30.9989 11.0256 30.9989 11.0256C30.9989 11.0256 31.0242 5.90114 30.3602 3.44197H30.3613ZM12.4103 15.71V6.28892L20.4794 10.9989L12.4103 15.7089V15.71Z' fill='black'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_700_10062'%3E%3Crect width='31' height='22' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
    background-position: left;
    background-size: 31px 22px;
    background-repeat: no-repeat;
  }


  .case-page__content .layout__text {
    margin-bottom: var(--space);
  }

  .cases__list-title {
    display: inline-block;
    margin-bottom: calc(var(--space) * 0.7);
  }

  ul.cases__list {
    margin-left: var(--space-text);
  }

  .cases__list li {
    margin-bottom: calc(var(--space) * 0.5);
  }

  .cases__list--style-bold li::marker {
    font-size: calc(var(--base-font-size) * 1.3);
    font-weight: 800;
  }

  ul.cases__list--with-tick {
    margin-left: 0;
  }

  .cases__item--with-tick {
    padding-left: 80px;
    background-image: url("data:image/svg+xml,%3Csvg width='34' height='24' viewBox='0 0 34 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_715_1981)'%3E%3Cpath d='M33.2891 0.703992C34.2376 1.64135 34.2376 3.16361 33.2891 4.10096L13.8627 23.298C12.9141 24.2353 11.3737 24.2353 10.4251 23.298L0.711904 13.6995C-0.23665 12.7621 -0.23665 11.2398 0.711904 10.3025C1.66046 9.36514 3.20091 9.36514 4.14947 10.3025L12.1477 18.1988L29.8583 0.703992C30.8069 -0.233362 32.3473 -0.233362 33.2959 0.703992H33.2883H33.2891Z' fill='%23A7D100'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_715_1981'%3E%3Crect width='34' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 34px 24px;
    background-position: left;
  }

  .case-page__content .oldy {
    text-align: left;
    border: none;
  }

  .cases-concept__images-top {
    position: relative;
    min-height: 585px;
  }

  .cases-concept__images-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cases-concept__images-group {
    position: relative;
    min-height: 445px;
    width: 100%;
  }

  .youtube-wrapper {
    background-color: #d9d9d9;
    padding-bottom: calc(var(--space) * 1.4);
  }

  .decor-img-1 {
    position: absolute;
    left: -5px;
    top: 646px;
    width: 152px;
    z-index: 2;
  }

  .decor-img-2 {
    position: absolute;
    right: -5px;
    top: 986px;
    width: 182px;
  }

  .decor-img-3 {
    position: absolute;
    left: -26px;
    top: 2343px;
    width: 110px;
  }

  .concept-img-1 {
    position: absolute;
    max-width: 294px;
    min-height: 415px;
    left: calc(100% - 1350px);
    top: 88px;
    z-index: 2;
  }

  .concept-img-2 {
    position: absolute;
    right: 180px;
    top: -72px;
  }

  .concept-img-3 {
    position: absolute;
    right: 280px;
    top: -107px;
    max-width: 253px;
    height: 100%;
    margin: 0;
  }

  .concept-video {
    position: absolute;
    right: 20px;
    top: -107px;
    max-width: 250px;
  }

  .concept-img-4 {
    position: absolute;
    max-width: 586px;
    width: 100%;
    left: 0;
    z-index: 2;
  }

  .concept-img-4 span {
    position: absolute;
    top: 10%;
    max-width: 420px;
    padding: var(--space);
    font-weight: 600;
    font-size: calc(var(--base-font-size) * 1.2);
    text-align: left;
  }

  @media screen and (max-width: 1460px) {
    .concept-img-2 {
      max-width: 782px;
      right: 20px;
    }

    .concept-img-1 {
      left: calc(100% - 1010px);
      top: 27px;
    }
  }

  @media screen and (max-width: 1300px) {
    .decor-img-1 {
      top: 1090px;
      width: 80px;
    }

    .decor-img-2 {
      top: 1386px;
      width: 80px;
    }

    .decor-img-3 {
      position: absolute;
      top: 2743px;
      width: 80px;
    }
  }

  @media screen and (max-width: 1140px) {
    .decor-img-1, .decor-img-2, .decor-img-3   {
      display: none;
    }

    .concept-img-3, .concept-video {
      position: static;
    }

    .concept-img-4 {
      position: relative;
      margin-bottom: calc(var(--space) * 6);
      transform: rotate(90deg);
    }

    .concept-img-4 span {
      top: 70px;
      max-width: 492px;
      transform: rotate(180deg);
    }

    .cases-concept__images-bottom {
      padding-top: 140px;
      justify-content: center;
      flex-direction: column;
    }
    
    .cases-concept__images-group  {
      position: static;
      display: flex;
      justify-content: center;
    }

    .concept-img-3 {
      max-width: 228px;
      margin-right: calc(var(--space) * 0.5);
    }

    .concept-video {
      max-width: 267px;
    }

    .concept-img-1 {
      left: 100px;
    }
  }

  @media screen and (max-width: 630px) {

    .concept-img-1, .concept-img-2 {
      max-width: 100%;
      position: static;
    }


    .concept-img-4 {
      width: 340px;
      margin-bottom: calc(var(--space) * 7);
    }

    .concept-img-4  img{
      margin: 0;
    }


    .concept-img-4 span {
      top: -4px;
      max-width: 297px;
      font-size: calc(var(--base-font-size) * 1);
    }

    .cases-concept__images-group {
      flex-direction: column;
      align-items: center;
    }

    .concept-img-3 {
      max-width: 500px;
      width: 100%;
      margin-right: 0;
      margin-bottom: calc(var(--space) * 0.5);;
    }

    .concept-video {
      max-width: unset;
      width: 100%;
    }
  }

  @media screen and (max-width: 440px) {

    .cases-concept__images-bottom {
      padding-top: 100px
    }
    .concept-img-4 span {
      top: 5px;
    }
  }

</style>