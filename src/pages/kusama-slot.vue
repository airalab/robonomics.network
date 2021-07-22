<template>
  <layout>

    <MetaInfo
      :pageTitle = "'Robonomics slot in Kusama'"
      :pageDescription = "'Help Robonomics lease a parachain slot and gain Kusama’s distributed computing power to service up to 10,000 digital twins of IoT devices at once.'"
      :pageImage = "'/website_cover_crowdloan.jpg'"
    />

    <div class="auction page">


      <section class="layout page-banner auction-banner section section__solid section__red">
        <h1 class="auction-parachain-title clean">Robonomics Parathread on Kusama [ID: 2077]</h1>
        <div class="auction-parachain-subtitle">Summer crowdloan campaign for Robonomics on Kusama has ended. Robonomics team greatly values the support from the community, thanks to contributors all over the word! We did not get a slot during these 5 auctions, so we are moving forward with <g-link to="/blog/kusama-crowdloan-guaranteed-rewards/">Plan B</g-link></div>

        <div class="auction-banner-cols layout__content">

            <div class="auction-statistics">
              <div class="auction-statistics-sum">27013.30 KSM received</div>
              <div class="auction-statistics-accounts">from 993 contributors</div>
              <div class="auction-statistics-id">Robonomics Parathread ID = 2077</div>
            </div>

            <div class="auction-banner-form align-center">
              <g-image class="astronaut" aria-hidden="true" src="~/assets/images/rewardsHand.png" />
              <g-link to="https://twitter.com/AIRA_Robonomics/" class="button primary large green">Updates on Twitter</g-link>
            </div>


          <div class="auction-banner-details">

              <ul class="hyphens">

                <li>
                  <strong>3.5 XRT</strong>
                  For each KSM. This is ~ 1.5 times more profitable than staking KSM in the Kusama Relay Chain.
                </li>

                <li>
                  <strong>5 XRT</strong>
                  Increased reward for participants in the collection of the first 35,000 KSM
                </li>

                <li>
                  <strong>135,000 KSM</strong>
                  Total collection limit. This strategy will help to launch Robonomics parachain at the lowest price for end users.
                </li>

                <li>
                  <strong>Quick rewards</strong>
                  You can get 50% of reward in the first month after the launch of the network
                </li>

                <li>
                  <strong>Exclusive APR up to 100%</strong>
                  Full reward will be received after one year of staking with increased income up to 100%
                </li>

                <li>
                  <strong>Parachain native token</strong>
                  All XRT tokens will be distributed in the Robonomics parachain
                </li>
              </ul>

          </div>

        </div>
      </section>


      <hr class="animate no-margins" v-in-viewport.once/>

      <section class="kusama-polkadot-ecosystem section__solid section__lightblue">
        <h2>Robonomics in Polkadot ecosystem</h2>

        <Abstract text="Robonomics integrates Polkadot technologies into the IoT market. With Robonomics Parachain we will open the doors for hundreds of IoT developers to the Polkadot ecosystem and help them take their first steps under the guidance of experienced teachers and roboticists."/>

        <div class="grid-3 animate-inside layout layout__content" v-in-viewport.once>

        <Card orientation="vertical" back="transparent" link="https://youtu.be/rbjOmJmilAg">

          <p>
            <g-image alt="Video from Polkadot Decoded 2021" src="~/assets/images/Sergei-Polkadot-may-2021.png"/>
          </p>

          <h3>Polkadot Decoded 2021</h3>
          <p class="hyphens">On May 19, on the main stage of Polkadot Decoded, Sergey Lonshakov spoke about the concept of Smart cities and Polkadot services that are possible within this.</p>

        </Card>

        <Card orientation="vertical" back="transparent" link="https://youtu.be/31zXeUq3htE">

          <p>
            <g-image alt="Kusama on Mars video" src="~/assets/images/Kusama-On-Mars.png"/>
          </p>

          <h3>Kusama on Mars</h3>
          <p class="hyphens">On Hackusama (a 7-week online hackathon) we inspired with an idea of architecture impossible without KUSAMA. Watch the video and read in the description what was done during the hackathon.</p>

        </Card>

        <Card orientation="vertical" back="transparent" link="https://opensea.io/assets/0x8cb813bf27dc744fc5fb6ba7515504de45d39e08/24">

          <p>
            <g-image alt="Robonomics PolkaPet" src="~/assets/images/robonomics-nft-3.png"/>
          </p>

          <h3>Robonomics PolkaPet</h3>
          <p class="hyphens">PolkaPet is collectible NFT card embodied as an artistic creature, represents a specific project within the Polkadot ecosystem. Robonomics PolkaPets owners can get some additional bonuses.</p>

        </Card>

        </div>
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
                  <h4>Smart leasing parachain</h4>
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

      <hr class="animate no-margins" v-in-viewport.once/>

      <section class="section__solid section__darkpurple layout">

          <h2 class="animate" v-in-viewport.once>Your questions</h2>

          <div class="layout__text hyphens faq">
            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">How long will the auction for Robonomics parachain slot last?</h3>
              <article class="faq-a">
               Robonomics starts the Crowdloan module from the 3rd auction (<g-link to="https://polkadot.network/kusama-parachain-auctions/">2021/06/29, 12:00 GMT</g-link>). Contributions
               will be accepted at any point from the start and before their success or end of 5th
               auction (<g-link to="https://polkadot.network/kusama-parachain-auctions/">2021/07/13, 12:00 GMT + duration of 5th auction</g-link>). Before participating in
               the crowdloan, double-check that the campaign is live <g-link to="https://twitter.com/AIRA_Robonomics">on Twitter</g-link>. Please remember that all crowdloan contributions
               are handled by the Crowdloan module’s logic where a campaign is identified by index, not by address. Never transfer tokens to an address
               in support of a campaign.
              </article>
            </section>

            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">Why does Robonomics participation start only from the third round?</h3>
              <article class="faq-a">
               Developers could publish the Crowdloan module today, but then we would have to implement limits. As can be noticed, the first 4 projects that published their Crowdloan modules established a 1 million KSM token limit. We’re placing our bets on 100,000 KSM (updated 135,000 KSM) being enough to win one of the Kusama network auctions, but are also reserving space for ourselves to quickly adjust the limit if we come to understand that more KSM tokens will need to be collected by the conclusion of the first and second rounds. In general, we’re trying to manoeuvre in search of an optimal rental cost for a slot.
              </article>
            </section>

            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">Will it be possible to participate in the Robonomics crowdloan through exchanges?</h3>
              <article class="faq-a">
               Some well-known exchanges like Kraken and Okex are already providing crowdloan support for their users. On this
               page you can find participation module with different ways to support Robonomics in auction. We will update the list of relevant exchanges that support interaction with the Crowdloan module at the start of the 3rd auction.
              </article>
            </section>

            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">Will it be possible to participate in the Robonomics crowdloan with KSM that are hold on the Ledger?</h3>
              <article class="faq-a">
               Ledger-based accounts cannot participate directly in crowdloans, as the Ledger app does not support the crowdloan.contribute extrinsic. <g-link to="https://twitter.com/Ledger_Support/">Ledger Support</g-link>
              </article>
            </section>

            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">Do I have to unbond my KSM to participate in auction?</h3>
              <article class="faq-a">
               You need to unbond your KSM, if you are currently staking (bonding) it. If you are going to
               participate in crowdloan campaign through the exchange, please, contact it directly for more details. Read <g-link to="https://guide.kusama.network/docs/en/mirror-maintain-guides-how-to-stop-validating#unbond-your-tokens">how to unbond your KSM</g-link> on Kusama WIKI.
              </article>
            </section>

            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">Is there a minimum contribution amount to participate in the crowdloan?</h3>
              <article class="faq-a">
               There is a small minimum built into Kusama by default (0.1 KSM) largely for scalability purposes and is not intended to prohibit small contributions. Robonomics team did not set any required minimum for contribution, you are welcome at any amount that is valid for Kusama conducted crowdloans.
              </article>
            </section>

            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">How long will the KSM tokens be locked in case of successful campaign?</h3>
              <article class="faq-a">
               Your KSM will be locked for the full duration of the Robonomics parachain lease. This will in in total 48 weeks after winning the auction.
              </article>
            </section>

            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">Will my KSM be returned after the parachain lease ends?</h3>
              <article class="faq-a">
               Yes, your KSM will be automatically returned to you when the parachain lease ends.
              </article>
            </section>

            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">How/when will rewards be distributed?</h3>
              <article class="faq-a">
                You can get 50% of reward in the first month after the launch of the network. Full reward will be distributed after one year of staking with increased income up to 100%.
                For example, if you are entitled to a standard reward of 3.5 XRT for 1 KSM, then in the first month after the launch of the network you can receive 1.725 XRT for each 1 KSM.
              </article>
            </section>

            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">What will happen to my KSM if Robonomics doesn’t win the 3rd-5th auctions?</h3>
              <article class="faq-a">
               If Robonomics does not win the 3th auction, it will continue to bid in the subsequent auctions. If Robonomics doesn’t win any auctions, the crowdloan will end, the funds will be returned to holders.
              </article>
            </section>

            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">What will happen to Robonomics parachain if it doesn’t win the 3rd-5th auctions?</h3>
              <article class="faq-a">
               If Robonomics fails to win any auction in this auction period, it will prepare for the next auction period 48 weeks later. If next period will be also unsuccessful, the parachain will turn into a <g-link to="https://wiki.polkadot.network/docs/en/learn-parathreads#docsNav">parathread</g-link>. However, developers have already published preparation plans for future slot auctions: here’s a publication from October 26th, 2020, <g-link to="https://robonomics.network/blog/robonomics-parachain-lease-offering/">Robonomics Parachain Lease Offering, On-chain Governance Strategy</g-link>. We also have a secret plan concerning the development of an algorithm to be built into the Robonomics protocol, which will autonomously generate beneficial bonding terms for KSM/DOT holders that will also benefit Robonomics. In general, we contemplate over medium-term issues in advance and continue to think about important matters such as maintaining Robobomics in the state of a parachain today.
              </article>
            </section>

          </div>
      </section>

      <hr class="animate no-margins" v-in-viewport.once/>

      <section class="animate section__darkpurple section__solid" v-in-viewport.once>
        <h2 class="layout">Follow latest updates</h2>

        <div class="grid-3 animate-inside layout layout__content" v-in-viewport.once>

        <Card orientation="vertical" back="white" link="https://twitter.com/AIRA_Robonomics" imageLocal="avatars/twitter.jpg" imageSize="mid">
          <h3>Robonomics official Twitter</h3>
        </Card>

        <Card orientation="vertical" back="white" link="https://twitter.com/EnsRationis" imageLocal="avatars/Sergey-Lonshakov.jpg" imageSize="mid">
          <h3>Software architect Twitter</h3>
        </Card>

        <Card orientation="vertical" back="white" link="https://t.me/robonomics" imageLocal="avatars/telegram.jpg" imageSize="mid">
          <h3>Robonomics Telegram Community</h3>
        </Card>

      </div>

      </section>

    </div>

  </layout>
</template>


<script>
  
  export default {
    components: {
      MetaInfo: () => import("~/components/MetaInfo.vue"),
      Abstract: () => import("~/components/TextAbstract.vue"),
      Card: () => import("~/components/TextCard.vue")
    },

    data () {
      return {
        parachainTab: 1
      }
    }
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

  /* AUCTION PARTICIPATION */
  .button.loading {
    .text {
      display: none;
    }

    &:before {
      content: "";
      display: inline-block;
      height: 1.2rem;
      width: 1.2rem;
      border-radius: calc(1.2rem/2);
      border-width: 2px 2px 0 0;
      border-style: solid;

      animation: 0.8s Rotate ease-in-out infinite;

      @keyframes Rotate
      {
        0%
          {
            transform:rotate(0deg);
          }
        100%
          {
            transform:rotate(360deg);
          }
      }

    }
  }


  .auction-support {
    // .input-signed-right {

    //   input:not(:placeholder-shown) {
    //     border-color: var(--color-blue);
    //     color: var(--color-blue);

    //     & + .sign {
    //       color: var(--color-blue)
    //     }
    //   }

    // }

    input[type="checkbox"]:checked {
      background-color: var(--color-blue);
      border-color: var(--color-blue) !important;
    }

    label.block {
      margin-bottom: var(--space)
    }
  }

  .auction-support-action {
    max-width: 600px;
    margin: 0 auto;
    text-align: left;
    font-size: 110%;
    font-weight: 500;

    position: relative; // for waiting tip
    min-height: 400px; // for waiting tip

    .tip-container {
      margin-left: 0.5rem
    }
  }

  .participate-2-exchanges {
    dt img {
      max-width: 200px;
    }
  }


  .auction-support-wait {
    --auction-support-wait-size: 250px;
    position: absolute;
    bottom: 0;
    right: calc(var(--auction-support-wait-size) * (-1) + 50px);
    z-index: 10;

    width: var(--auction-support-wait-size);
    height: var(--auction-support-wait-size);
    background-color: var(--color-light);
    padding: 20px;
    border-radius: calc(var(--auction-support-wait-size) /2);

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 15px;
    text-align: center;

    animation: FloatY 5s linear 0.4s infinite;

    img {
      display: block;
      width: 60%;
      margin: 0 auto 10px;
    }

    @media screen and(max-width: 960px) {
      position: static;
      margin: 30px auto;
    }
  }

  .calc-line {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: 75%;

    .calc-line-1, .calc-line-2 {
      color: #fff;
      align-items: stretch;
      padding: calc(var(--space) * 0.3) calc(var(--space) * 0.5);
    }

    .calc-line-1 {
      background: var(--color-blue);
      text-align: right;
    }

    .calc-line-2 {
      background: var(--color-gray-mid);
    }

    small {
      display: block;
      margin-bottom: 0.3rem;
    }

    input {
      background-color: rgba(0, 0, 0, 0.301);
      border-color: rgba(0, 0, 0, 0.6);
      color: #fff;
      width: 100px;
      max-width: 100%;

      &[disabled] {
        background-color: rgba(0, 0, 0, 0.1);
        border-color: rgba(0, 0, 0, 0.1);
      }
    }

    &.highlight {
      font-size: 110%;

      .calc-line-1 { background-color: #4365fd; }
      .calc-line-2 { background-color: rgb(173, 173, 173); }
    }
  }

  .calc-input-signed-right, .calc-input-signed-left {
    position: relative;
    display: inline-block;

    .sign {
      position: absolute;
      right: 0.4rem;
      top: 0.3rem
    }
  }

  .calc-input-signed-left {

    .sign {
      left: 0.4rem;
      right: auto;
    }

    input {
      padding-left: 1.2rem;
    }
  }



  /* STEP 3 */
  .load-bird {
      position: relative;
      width: 148px;
      height: 180px;

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

    .crowdloan-step-3{
      &.active .in-viewport{
        .bird-tale { animation-name: birdTale; }
        .bird-wing-1 { animation-name: birdWing1; }
        .bird-wing-2 { animation-name: birdWing2; }
        .bird-ribbons { animation-name: birdRibbons; }
        .bird-hair { animation-name: birdHair; }
        .bird-leg { animation-name: birdLeg; }
      }

      .load-bird {
        margin: 0 auto
      }
    }

    .contribution-share {
      margin-top: calc(var(--space)*0.5);
      margin-bottom: var(--space);
      text-align: center;

      a {
        width: 3rem;

        img {
          display: block;
        }

        &:not(:last-child) {
          margin-right: 0.8rem;
        }
      }

      div:not(:last-child) {
        margin-bottom: 0.4rem;
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
  /* end of STEP 3 */


  /* end AUCTION PARTICIPATION */

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



  .contribution-disclamer {
    summary {
      color: var(--color-blue);
      cursor: pointer;
    }

    &[open] summary {
      margin-bottom: calc(var(--space) * 0.5);
    }

    article {
      font-size: 80%;

      p {
        margin-bottom: calc(var(--space) * 0.5);
      }
    }
  }

  .auction-statistics {
    position: absolute;
    top: 0;
    left: calc(50% + 160px);
    // right: calc(var(--space)*2);

    &:before, &:after {
      content:"";
      display: block;
      height: 30px;
      width: 1px;
      background: var(--color-light);
    }

    @media screen and (max-width:960px) {
      position: static;
      margin: var(--space) auto;
      text-align: center;

      &:before, &:after { display: none; }
    }
  }

  .auction-statistics-sum {
    font-weight: bold;
    font-size: 150%;
  }

  .auction-parachain-subtitle {
    display:block;
    margin: 0 auto;
    max-width:800px;
    font-style: italic;
  }

  .astronaut {
    display: block;
    margin: 0 auto;
    width: 300px;
    max-width: 100%;

    opacity: 0;
    transform: translateY(0.6rem);
    animation: FadeIn 1s ease-out 0.5s forwards, ImgAppear 0.8s ease-out 0.5s forwards;
    // animation: blink var(--duration-mainpic) ease-out var(--delay-mainpic) forwards;
  }

  @keyframes ImgAppear {
    0% {
      transform: translateY(6rem);
    }
    100%{
      transform: translateY(0.6rem);
    }
  }


  .auction-banner {
    overflow: hidden;
    text-align: center;
    padding-top: calc(var(--space) * 2);
    padding-bottom: calc(var(--space) * 2);
    // position: relative;

    .button, h2, h3 {
      margin-bottom: calc(var(--space)/2);
    }

    .button {
      width: 100%;
      position: relative;
    }

    ul {
      font-size: 90%;
      list-style: none;
    }
  }

  .auction-banner-details {
    strong {
      font-size: 150%;
      display: block;
    }

    ul {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: calc(var(--space)*2);

      li {
        margin-bottom: 0;
      }

      @media screen and (max-width:650px) {
        grid-template-columns: 1fr;
      }
    }
  }

  .auction-banner-form {
    max-width: 800px;

    margin: calc(var(--space)*2) auto;
    text-align: center;

    .button {
      max-width: 500px;
    }
  }

  .auction-banner-cols {
    text-align: left;
    position: relative;
  }

  .auction-banner-kusama {
    position: relative;

    .kusama-wrap {
      top: calc(50% - var(--kusama-size)/2);
      right: calc(var(--slot-size) * 4);
    }
  }



  .auction-steps {

    img {
      width: 60%
    }

    h3 {
      margin-top: 0;
    }

    .card {
      padding-bottom: 0;
    }

    @media screen and (max-width: 400px) {
      img {
        width: 100%
      }
    }
  }

</style>
