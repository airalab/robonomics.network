<template>
  <layout>

    <MetaInfo
      :pageTitle = "'Robonomics slot in Kusama'"
      :pageDescription = "'Help Robonomics lease a parachain slot and gain Kusama’s distributed computing power to service up to 10,000 digital twins of IoT devices at once.'"
      :pageImage = "'/website_cover_crowdloan.jpg'"
    />

    <div class="auction page">


      <section class="page-banner auction-banner section section__solid section__blue">
        <h1 class="auction-parachain-title clean">Crowdloan for Robonomics on Kusama</h1>

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
            <h3>Waiting for the 3rd-5th slot auctions</h3>
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
                  <strong>Get rewards:</strong>
                  per 1 KSM contributed, 1 XRT is rewarded
                </li>

                <li><strong>Receive increased staking:</strong> 125% return for the next 48 weeks</li>

                <li>
                  <strong>Quick rewards available:</strong>
                  25% right after the win, 75% after the successful launch of the Robonomics parachain (est. 2-4 weeks)
                </li>

                <li>
                  <strong>Contribute to the future:</strong>
                  Robonomics integrates new technologies into the real economy
                </li>
              </ul>

          </div>

        </div>
      </section>


      <Abstract text="Robonomics crowdloan campaign for a parachain slot starts on the eve of Third Kusama Parachain Slot auction, 2021/06/28! Contribute and get rewards." />

      <hr class="animate" v-in-viewport.once/>

      <section class="auction-support layout">

          <h2 class="animate" v-in-viewport.once>Participate in the Robonomics crowdloan</h2>

          <p class="layout__text animate" v-in-viewport.once><i>By participating in the Robonomics crowdloan you lock your KSM for a period of time 48 weeks to help Robonomics lease a parachain slot and gain Kusama’s distributed computing power to service up to 10,000 digital twins of IoT devices at once.</i></p>

          <div class="auction-support-action animate" v-in-viewport.once>
            <div class="auction-support-wait">
              <div>
                  <g-image alt="" src="~/assets/images/plo-girl-1.png" aria-hidden="true"/>
                  <b>Crowdloan campaign will start <br/>on 28 June 2021</b>
              </div>
            </div>


            <!-- CALC -->
            <!-- <div class="form-line">
              <small>Choose contribution amount:</small>
              <div class="input-signed-right">
                <input v-model="contribution" id="contribution" class="block" type="number" placeholder="0" required/>
                <label for="contribution" class="sign">KSM</label>
              </div>
            </div>


            <div class="form-line">
              <small>Estimate stake KSM to contribute Robonomics auction rewards:</small>

              <div class="calc-line">
                <div class="calc-line-1">
                  <b>Robonomics Kusama Parachain</b>
                </div>
                <div class="calc-line-2">
                  <b>Kusama Relay Chain</b>
                </div>
              </div>

              <div class="calc-line">
                <div class="calc-line-1">
                  <small>Annual XRT staking return</small>
                  <div class="calc-input-signed-right">
                    <input id="staking_xrt" v-model="staking_xrt" type="text" required class="small" disabled/>
                    <label for="staking_xrt" class="sign">%</label>
                  </div>
                </div>
                <div class="calc-line-2">
                  <small>Annual KSM staking return</small>
                  <div class="calc-input-signed-right">
                    <input id="staking_ksm" v-model="staking_ksm" type="text" required class="small"/>
                    <label for="staking_ksm" class="sign">%</label>
                  </div>
                </div>
              </div>

              <div class="calc-line">
                <div class="calc-line-1">
                  <small>XRT price, DAI</small>
                  <div class="calc-input-signed-left">
                    <label for="price_xrt" class="sign">$</label>
                    <input id="price_xrt" v-model="price_xrt" type="text" required class="small"/>
                  </div>
                </div>
                <div class="calc-line-2">
                  <small>KSM price, DAI</small>
                  <div class="calc-input-signed-left">
                    <label for="price_ksm" class="sign">$</label>
                    <input id="price_ksm" v-model="price_ksm" type="text" required class="small"/>
                  </div>
                </div>
              </div>

              <div class="calc-line highlight">
                <div class="calc-line-1">
                   <small>Annual Reward, XRT</small>
                    <span>{{ reward_xrt }} (${{reward_xrt_usd}})</span>
                </div>
                <div class="calc-line-2">
                  <small>Annual Reward, KSM</small>
                  <span>{{ reward_ksm }} (${{reward_ksm_usd}})</span>
                </div>
              </div>

            </div> -->

            <!-- end of CALC -->

            <div class="form-line">
              <small>Choose the way to contribute:</small>
              <select class="block" v-model="selectedWay">
                <option selected value="1">1 - On website</option>
                <option value="2">2 - On Polkadot Substrate portal</option>
                <option value="3">3 - Via exchanges</option>
              </select>
            </div>

            <section id="participate-1" v-if="selectedWay==1">

              <form>
                <!-- STEP 1 -->

                <section>
                  <label class="block label">
                    <input type="checkbox" class="big" required v-model="checkedFlags" value="crowdloan-flag-1"/>
                    <span>I have installed the <g-link to="https://polkadot.js.org/extension/">Polkadot.js browser extension</g-link></span>
                  </label>

                  <label class="block label">
                    <input type="checkbox" class="big" required v-model="checkedFlags" value="crowdloan-flag-2" />
                    <span>I have KSM in my Polkadot.js account</span>
                  </label>

                  <label class="block label">
                    <input type="checkbox" class="big" required  v-model="checkedFlags" value="crowdloan-flag-3" />
                    <span>My KSM has been unbonded</span>
                    <tip summary="☝️" position="right-bottom" class="inline-block-clear">
                      Supporters who are currently staking (bonding) their KSM will need to unstake prior to bonding their KSM to the crowdloan module.
                      Kusama has a delayed exit period ~ 7 days. <g-link to="https://wiki.polkadot.network/docs/en/maintain-guides-how-to-unbond">How to unbond KSM</g-link>
                    </tip>
                  </label>
                </section>

                <!-- <Button label="Connect Polkadot.js extension" button="primary block green large" :disabled="checkedFlags.length!=3" /> -->

                <!-- end STEP 1 -->


                <!-- STEP 2 -->


                <!-- <section>
                  <label class="block label">
                    <small>Your contribution:</small>
                    <div class="input-signed-right">
                      <input v-model="contribution" id="contribution" class="block" type="number" placeholder="0" required/>
                      <label for="contribution" class="sign">KSM</label>
                    </div>
                  </label>

                  <label class="block label">
                    <small>Your email (not necessary):</small>
                    <input type="email" class="big block" value="" placeholder="Type your email"/>
                  </label>

                  <label class="block label">
                    <input type="checkbox" class="big" required value="" checked="true"/>
                    <small>I agree to receive email communications from Robonomics</small>
                  </label>
                </section>

                <Button label="Submit contribution" button="primary block green large" />  -->

                <!-- end STEP 2 -->

                <Button label="Connect Polkadot.js extension" button="primary block green large" disabled="true" />
              </form>
            </section>

            <section id="participate-3" v-if="selectedWay==3">
              <p>Here are examples of exchanges that have announced supporting Kusama Parachain Slot Auction. More details expected closer to the Third Kusama Parachain Slot auction beginning.</p>
              <dl class="participate-2-exchanges">

                <dt><g-link to="https://www.kraken.com/learn/parachain-auctions"><g-image src="~/assets/images/kraken-logo.webp"/></g-link></dt>
                <dd><g-link to="https://www.kraken.com/learn/parachain-auctions">https://www.kraken.com/</g-link></dd>

                <dt><g-link to="https://www.okex.com/"><g-image src="~/assets/images/okex-logo.png"/></g-link></dt>
                <dd><g-link to="https://www.okex.com/">https://www.okex.com/</g-link></dd>

                <dt><g-link to="https://www.kucoin.com/news/en-kucoin-will-support-the-kusama-slot-auction"><g-image src="~/assets/images/kucoin-logo.png"/></g-link></dt>
                <dd><g-link to="https://www.kucoin.com/news/en-kucoin-will-support-the-kusama-slot-auction">https://www.kucoin.com/</g-link></dd>
              </dl>
            </section>

             <section id="participate-2" v-if="selectedWay==2" style="width:80%">
               <p><g-link to="https://polkadot.js.org/apps/#/parachains/crowdloan">https://polkadot.js.org/apps/#/parachains/crowdloan</g-link></p>
               <p>In early April, Robonomics held a rehearsal of participation in auctions using the Crowdloan module in the Rococo network. You can watch the Twitter thread for a closer look at the possibility of using the standard interface for community participation in Polkadot auctions: <g-link style="display:block;word-break: break-all;" to="https://twitter.com/AIRA_Robonomics/status/1377653645827833860">https://twitter.com/AIRA_Robonomics/status/1377653645827833860</g-link></p>
            </section>


          </div>

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
          <p class="hyphens">Robonomics PLO may be interesting for stakeholders who are looking for ways to diversify their KSM stake next 48 weeks inside the ecosystem. <g-link to="/community#token">XRT</g-link> for now is available on Uniswap, Huobi, and in addition on PancakeSwap.</p>

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
               the crowdloan, double-check that the campaign is live <g-link to="https://twitter.com/AIRA_Robonomics">on Twitter</g-link>. Please, remember that all crowdloan contributions
               are handled by the Crowdloan module’s logic where a campaign is identified by index, not by address. Never transfer tokens to an address
               in support of a campaign.
              </article>
            </section>

            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">Why does Robonomics participation start only from the third round?</h3>
              <article class="faq-a">
               Developers could publish the Crowdloan module today, but then we would have to implement limits. As can be noticed, the first 4 projects that published their Crowdloan modules established a 1 million KSM token limit. We’re placing our bets on 100,000 KSM being enough to win one of the Kusama network auctions, but are also reserving space for ourselves to quickly adjust the limit if we come to understand that more KSM tokens will need to be collected by the conclusion of the first and second rounds. In general, we’re trying to manoeuvre in search of an optimal rental cost for a slot.
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
              <h3 class="faq-q">Do I have to unbond my KSM to participate in auction?</h3>
              <article class="faq-a">
               You need to unbond your KSM, if you are currently staking (bonding) it. If you are going to
               participate in crowdloan campaign through the exchange, please, contact it directly for more details. Read <g-link to="https://guide.kusama.network/docs/en/mirror-maintain-guides-how-to-stop-validating#unbond-your-tokens">how to unbond your KSM</g-link> on Kusama WIKI.
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
                You will have the option of getting 100% parachain native token after the successful launch of the Robonomics parachain or 25% ERC-20 token right after the win (quick reward option)
                plus 75% after the successful launch of the Robonomics parachain (est. 2-4 weeks).
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

    </div>

  </layout>
</template>


<script>
// import Land from '../templates/Land.vue'

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
        parachainTab: 1,
        checkedFlags: [],
        selectedWay: 1,

        contribution: 1,
        staking_xrt: 278.25,
        staking_ksm: 17,
        price_xrt: 0,
        price_ksm: 0,
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
        },

        async getPrice(tickerName) {
          const result = await fetch(
            `https://min-api.cryptocompare.com/data/price?fsym=${tickerName}&tsyms=USD&api_key=9c9ca216c454cd2390092e573894a6e10ddff03ef3a4e153996ef358fe9d33d8`
          );
          const data = await result.json();
          return data.USD
        },
        async updatePrices() {
          this.price_xrt = await this.getPrice('XRT');
          this.price_ksm = await this.getPrice('KSM');
        }
      },

      // created() {
      //   this.updatePrices()
      // },

      computed: {

        reward_xrt() { return ((this.contribution * (this.staking_xrt / 100)) + 1).toFixed(2) },
        reward_xrt_usd() { return (this.price_xrt * this.reward_xrt).toFixed(2) },
        reward_ksm() { return this.price_ksm > 0 ? (this.reward_ksm_usd / this.price_ksm).toFixed(2) : 0 } ,
        reward_ksm_usd() { return (this.contribution * (this.staking_ksm / 100) * this.price_ksm).toFixed(2) },

        // checkedFlagsCrowdloan: function() {
        //   return this.checkedFlags.size
        // }
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
  .auction-support {
    .input-signed-right {

      input:not(:placeholder-shown) {
        border-color: var(--color-blue);
        color: var(--color-blue);

        & + .sign {
          color: var(--color-blue)
        }
      }

    }

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

    select {
      background-image: url('~@/assets/images/3.gif');
			background-size: 2.8rem;
      background-repeat: no-repeat;
      background-position: calc(100% - 0.4rem) calc(50% + 0.4rem);
    }

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
