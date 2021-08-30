<template>
  <layout>

    <MetaInfo
      :pageTitle = "$ts('Crowdloan for Robonomics on Kusama 2nd wave')"
      :pageDescription = "$ts('Crowdloan Description')"
      :pageImage = "'/website_cover_crowdloan.jpg'"
    />

    <div class="auction page">


      <section class=" page-banner section section__solid section__red">
        <div class="layout layout__content">
          <h1 class="auction-parachain-title clean">{{$ts('Crowdloan for Robonomics on Kusama 2nd wave')}}</h1>
          <p class="layout__text text-big"><i>{{$ts('Crowdloan Description')}}</i></p>

          <div class="grid-3 grid-valign-top align-left">

            <div>
              <g-image class="banner-astronauts" :alt="$ts('Crowdloan for Robonomics on Kusama 2nd wave')" src="~/assets/images/robonomics-kusama-astronauts.png" />
            </div>

            <div>
              <div class="input-signed-right">
                <input v-model="contribution" id="contribution" class="block" type="number" placeholder="0" required/>
                <label for="contribution" class="sign">KSM</label>
              </div>
              <div>{{$ts('Get annual staking return')}} {{ staking_xrt }} %</div>
              <p>{{ reward_xrt }} XRT [${{reward_xrt_usd}} {{$ts('at current price')}}]</p>
              <a href="#crowdloan" class="button primary large green" v-smooth-scroll="{offset: -100}">{{$ts('Contribute')}}</a>
            </div>

            <div>
                <div class="text-huge"><b>
                  <template v-if="info_contributed > 0">{{info_contributed}}</template> 
                  <template v-else><span class="loader-text"></span></template> 
                KSM</b></div>
                <p>{{$ts('Crowdloan2 banner from')}} 
                  <template v-if="info_count > 0">{{info_count}}</template> 
                  <template v-else><span class="loader-text-s"></span></template> 
                  {{$ts('Crowdloan2 banner contributors so far')}}</p>
                <div class="text-little">{{$ts('Robonomics Parathread ID')}} = 2077</div>
                <div class="text-little"><g-link to="https://kusama.network/auctions/">{{$ts('About Kusama auctions')}}</g-link></div>
              </div>
          </div>

        </div>
      </section>

      <hr class="no-margins" />

      <section class="section section__solid section__darkgray">
         <div class="layout layout__content grid-3 hyphens animate-inside" v-in-viewport.once>

            <div>
              <p class="text-huge"><strong>3.5 XRT</strong></p>
              {{$ts('For each KSM. This is ~ 1.5 times more profitable than staking KSM in the Kusama Relay Chain')}}
            </div>

            <div>
              <p class="text-huge"><strong>5 XRT</strong></p>
              {{$ts('Increased reward for participants in the collection of the first 35,000 KSM')}}
            </div>

            <div>
              <p class="text-huge"><strong>135,000 KSM</strong></p>
              {{$ts('Total collection limit. This strategy will help to launch Robonomics parachain at the lowest price for end users')}}
            </div>

            <div>
              <p class="text-huge"><strong>{{$ts('Quick rewards')}}</strong></p>
              {{$ts('You can get 50% of reward in the first month after the launch of the network')}}
            </div>

            <div>
              <p class="text-huge"><strong>{{$ts('Exclusive APR up to 100%')}}</strong></p>
              {{$ts('Full reward will be received after one year of staking with increased income up to 100%')}}
            </div>

            <div>
              <p class="text-huge"><strong>{{$ts('Parachain native token')}}</strong></p>
              {{$ts('All XRT tokens will be distributed in the Robonomics parachain')}}
            </div>

          </div>

      </section>

      <hr class="animate no-margins" v-in-viewport.once/>

      <section id="crowdloan" class="auction-support layout">

          <h2 class="animate" v-in-viewport.once>{{$ts('Participate in the Robonomics crowdloan')}}</h2>

          <p class="layout__text animate" v-in-viewport.once><i>{{$ts('By participating in the Robonomics crowdloan you lock your KSM for a period of time 48 weeks to help Robonomics lease a parachain slot and gain Kusama’s distributed computing power to service up to 10,000 digital twins of IoT devices at once.')}}</i></p>

          <div class="auction-support-action animate" v-in-viewport.once>

            <div class="form-line">
              <small>{{$ts('Choose the way to contribute')}}</small>
              <select class="block robot" v-model="selectedWay">
                <option selected value="1">1 - {{$ts('On website')}}</option>
                <option value="2">2 - {{$ts('On Polkadot Substrate portal')}}</option>
                <option value="3">3 - {{$ts('Kraken Exchange')}}</option>
                <option value="4">4 - {{$ts('Fearless DeFi Wallet')}}</option>
              </select>
            </div>

            <section id="participate-1" class="loading" v-if="selectedWay==1">

              <form>
                <!-- STEP 1 -->
                <template v-if="!isApi">
                <section>
                  <label class="block label">
                    <input type="checkbox" class="big" required v-model="checkedFlags" value="crowdloan-flag-1"/>
                    <span>{{$ts('I have installed the')}} <g-link to="https://polkadot.js.org/extension/">{{$ts('Polkadot.js browser extension')}}</g-link></span>
                  </label>

                  <label class="block label">
                    <input type="checkbox" class="big" required v-model="checkedFlags" value="crowdloan-flag-2" />
                    <span>{{$ts('I have KSM in my Polkadot.js account')}}</span>
                  </label>

                  <label class="block label">
                    <input type="checkbox" class="big" required  v-model="checkedFlags" value="crowdloan-flag-3" />
                    <span>{{$ts('My KSM has been unbonded')}}</span>
                    <tip summary="☝️" position="right-bottom" class="inline-block-clear">
                      {{$ts('Supporters who are currently staking (bonding) their KSM will need to unstake prior to bonding their KSM to the crowdloan module. Kusama has a delayed exit period ~ 7 days.')}} 
                      <g-link to="https://wiki.polkadot.network/docs/en/maintain-guides-how-to-unbond">{{$ts('How to unbond KSM')}}</g-link>
                    </tip>
                  </label>
                </section>

                <p v-if="status_noextension" class="error">{{$ts('Please check if you have installed polkadot{.js} extension')}}</p>

                <Button type="button" @click="connect" button="primary block green large" :disabled="isСonnection || checkedFlags.length!=3" :class="crowdloan_loading?'loading':''">
                  <span class="text">{{$ts('Connect Polkadot.js extension')}}</span>
                </Button>
                </template>
                <!-- end STEP 1 -->


                <!-- STEP 2 -->
                <template v-else-if="isApi && !success">
                <section>

                  <template v-if="accounts.length > 0">
                    <label class="block label">
                      <small>{{$ts('Select an account')}}:</small>
                      <select v-model="account" class="block">
                        <option
                          v-for="(item, index) in accounts"
                          :key="index"
                          :value="item.address"
                        >
                          {{ item.meta.name }} - {{ item.address.slice(0, 6) + "..." + item.address.slice(-6) }}
                        </option>
                      </select>
                    </label>

                    <label class="block label">
                      <small>{{$ts('The balance of selected account')}}:</small>
                      <p>{{balanceView}}</p>
                    </label>

                    <label class="block label">
                      <small>{{$ts('Your contribution')}}:</small>
                      <div class="input-signed-right" :class="validateBalance?'':'error'">
                        <input v-model="contribution" id="contribution" class="block" type="number" placeholder="0" required/>
                        <label for="contribution" class="sign">KSM</label>
                      </div>
                      <div class="msg-error" v-if="!validateBalance">{{$ts('Insufficient or incorrectly entered balance')}}</div>
                    </label>

                    <label class="block label">
                      <small>{{$ts('Your email (not necessary)')}}:</small>
                      <input type="email" class="big block" value="" placeholder="Type your email" v-model="submit_email" :class="!validateEmail?'error':''"/>
                      <div class="msg-error" v-if="!validateEmail&!agree_email">{{$ts('Please agree to receive emails from Robonomics or do not fill this field')}}</div>
                    </label>

                    <label class="block label" v-show="submit_email">
                      <input v-model="agree_email" type="checkbox" class="big" required />
                      <small>{{$ts('I agree to receive email communications from Robonomics')}}</small>
                    </label>

                    <details class="contribution-disclamer">
                      <summary><b>{{$ts('Most important to know')}}</b></summary>
                      <article class="hyphens">
                        <p>{{$ts('The Robonomics development team are early adopters of Polkadot technologies, and we understand that the current technical implementation of the Kusama Relay chain and Substrate framework may contain errors or be revised this year and next. This is important for the crowdloan campaigners to understand as well.')}}</p>
                        <p>{{$ts("The entire Polkadot ecosystem is undergoing a process of formation that can take an indefinite time. It's also important for you to keep in mind every time when you study any plans of the developers.")}}</p>
                        <p>{{$ts('Ladies and gentlemen, you are participating in this great experiment at your own peril and risk.')}}</p>
                        <p>{{$ts('Welcome to our journey!')}}</p>
                      </article>
                    </details>
                  </template>

                  <template v-else>
                    <label class="block label error">
                      <small>{{$ts('No account found, please add account in your wallet extension or unlock it')}}</small>
                    </label>
                  </template>

                </section>

                <p v-if="status_transaction_broken" class="error">{{$ts("Something wrong with the transaction. Please don't worry and ask for help in")}} <g-link to="https://t.me/robonomics">{{$ts('Robonomics Telegram Community')}}</g-link></p>
                <p v-if="status_transaction_notdone" class="error">{{$ts("The transaction was not executed. Please don't worry and ask for help in")}} <g-link to="https://t.me/robonomics">{{$ts('Robonomics Telegram Community')}}</g-link></p>

                <Button type="button" @click="send" button="primary block green large" :disabled="!validateSend" :class="crowdloan_loading?'loading':''">
                  <span class="text">{{$ts('Submit contribution')}}</span>
                </Button>
                </template>
                <!-- end STEP 2 -->


                <!-- STEP 3 -->
                <section v-if="success" class="crowdloan-step-3 active">
                  <h3>{{$ts('Your contribution')}} {{contribution}} KSM {{$ts('accepted')}}!</h3>
                  <div class="load-bird" aria-hidden="true" v-in-viewport.once>
                    <g-image src="/assets/kusama-karate-body.png" class="bird-body"/>
                    <g-image src="/assets/kusama-karate-tale.png" class="bird-tale"/>
                    <g-image src="/assets/kusama-karate-wing-1.png" class="bird-wing-1"/>
                    <g-image src="/assets/kusama-karate-wing-2.png" class="bird-wing-2"/>
                    <g-image src="/assets/kusama-karate-ribbons.png" class="bird-ribbons"/>
                    <g-image src="/assets/kusama-karate-hair.png" class="bird-hair"/>
                    <g-image src="/assets/kusama-karate-leg.png" class="bird-leg"/>
                  </div>
                  <div class="contribution-share">
                    <div><small>{{$ts('Share great news')}}:</small></div>
                    <div class="nowrap">
                      <a href="https://twitter.com/intent/tweet?text=🤖%20My%20$KSM%20work%20for%20%23IoT%20future%20in%20%40AIRA_Robonomics%20Crowdloan&url=https%3A%2F%2Frobonomics.network%2Fkusama-slot%2F" target="_blank" class="inline-block"><g-image alt="On Twitter" src="~/assets/images/twitter.png"/></a></div>
                  </div>
                  <Button type="button" @click="more" button="primary block green large">
                    <span class="text">{{$ts('Contribute more')}}</span>
                  </Button>
                </section>
                <!-- end STEP 3 -->


              </form>
            </section>

            <section id="participate-3" v-if="selectedWay==3">
              <p><g-link to="https://www.kraken.com/"><g-image style="max-width:300px" alt="Kraken exchange logo" src="~/assets/images/kraken-logo.webp"/></g-link></p>
              <p>{{$ts("We are on Kraken's Parachain Auction Platform")}}</p>
              <p><g-link to="https://support.kraken.com/hc/en-us/articles/360060824412">{{$ts("Overview of parachain auctions on Kraken")}}</g-link></p>
              <!-- <p><g-link to="https://blog.kraken.com/post/9438/kraken-breaks-new-ground-with-first-of-its-kind-parachain-auction-platform/">Blog post from Kraken</g-link></p> -->
            </section>

             <section id="participate-2" v-if="selectedWay==2" style="width:80%">
               <p><g-link style="display:block;word-break: break-all;" to="https://polkadot.js.org/apps/#/parachains/crowdloan">https://polkadot.js.org/apps/#/parachains/crowdloan</g-link></p>
               <p>{{$ts('In early April, Robonomics held a rehearsal of participation in auctions using the Crowdloan module in the Rococo network. You can watch the Twitter thread for a closer look at the possibility of using the standard interface for community participation in Polkadot auctions')}}: <g-link style="display:block;word-break: break-all;" to="https://twitter.com/AIRA_Robonomics/status/1377653645827833860">https://twitter.com/AIRA_Robonomics/status/1377653645827833860</g-link></p>
            </section>

            <section id="participate-4" v-if="selectedWay==4">
              <p>{{$ts('You can also contribute to Robonomics crowdloan via')}} <g-link to="https://fearlesswallet.io">{{$ts('Fearless DeFi Wallet')}}</g-link>. {{$ts('We checked it and here are screenshots of the process')}}:</p>

              <div class="grid-3">
                <g-link to="/assets/crowdloan/fearless-1.jpg" target="_blank"><g-image src="~/assets/images/crowdloan/fearless-1.jpg" alt="Robonomics Crowdloan in Fearless wallet screenshot 1"/></g-link>
                <g-link to="/assets/crowdloan/fearless-2.jpg" target="_blank"><g-image src="~/assets/images/crowdloan/fearless-2.jpg" alt="Robonomics Crowdloan in Fearless wallet screenshot 2"/></g-link>
                <g-link to="/assets/crowdloan/fearless-3.jpg" target="_blank"><g-image src="~/assets/images/crowdloan/fearless-3.jpg" alt="Robonomics Crowdloan in Fearless wallet screenshot 3"/></g-link>
                <g-link to="/assets/crowdloan/fearless-4.jpg" target="_blank"><g-image src="~/assets/images/crowdloan/fearless-4.jpg" alt="Robonomics Crowdloan in Fearless wallet screenshot 4"/></g-link>
                <g-link to="/assets/crowdloan/fearless-5.jpg" target="_blank"><g-image src="~/assets/images/crowdloan/fearless-5.jpg" alt="Robonomics Crowdloan in Fearless wallet screenshot 5"/></g-link>
                <g-link to="/assets/crowdloan/fearless-6.jpg" target="_blank"><g-image src="~/assets/images/crowdloan/fearless-6.jpg" alt="Robonomics Crowdloan in Fearless wallet screenshot 6"/></g-link>
              </div>
            </section>


          </div>

      </section>


      <hr class="animate no-margins" v-in-viewport.once/>

      <section>
        <Abstract :text="$ts('By winning a Parachain slot in the Kusama we will open the doors for hundreds of IoT developers to the Polkadot ecosystem and help them take their first steps under the guidance of experienced teachers and roboticists.')" />
        <i>{{$ts('Sergei Lonshakov, Robonomics network architect')}}</i>
      </section>

      <hr class="animate no-margins" v-in-viewport.once/>

      <section class="animate section__dotted section__solid" v-in-viewport.once>
        <h2 class="layout">{{$ts('Choose your strategy')}}</h2>

        <div class="auction-steps grid-3 animate-inside layout layout__content" v-in-viewport.once>

        <Card orientation="vertical" back="transparent">

          <div class="image">
            <g-image alt="" src="~/assets/images/plo-holder-1.png"/>
          </div>

          <h3>{{$ts('For KSM holders')}}</h3>
          <p class="hyphens">{{$ts('Robonomics PLO may be interesting for stakeholders who are looking for ways to diversify their KSM stake next 48 weeks inside the ecosystem.')}} <g-link to="/community#token">XRT</g-link> {{$ts('for now is available on Uniswap, Huobi, and in addition on PancakeSwap.')}}</p>

        </Card>

        <Card orientation="vertical" back="transparent">

          <div class="image">
            <g-image src="~/assets/images/plo-holder-2.png" />
          </div>

          <h3>{{$ts('For XRT holders')}}</h3>
          <p class="hyphens">{{$ts('Gain value for your XRT by winning Kusama Slot with Robonomics network great potential for scaling.')}} <g-link to="/blog">{{$ts('Read development plans in our blog')}}</g-link></p>
        </Card>

        <Card orientation="vertical" back="transparent">

          <div class="image">
            <g-image src="~/assets/images/plo-holder-3.png" />
          </div>

          <h3>{{$ts('For tech-inspired')}}</h3>
          <p class="hyphens">{{$ts('Robonomics already has complex ecosystem for connecting real world to')}} <g-link to="https://web3-technology-stack.readthedocs.io">{{$ts('Web3 Technology Stack Crowdloan 2')}}</g-link>. {{$ts("It's free, it's opensource, everybody can try it for IoT and Smart services. With Polkadot it can be even more cost-effective.")}}</p>
        </Card>

      </div>

      </section>

      <hr class="animate no-margins" v-in-viewport.once/>

      <section class="animate section__dotted section__solid" v-in-viewport.once>
        <h2 class="layout">{{$ts('Roadmap of the Robonomics parachain')}}</h2>

        <div class="roadmap layout layout__text animate-inside" v-in-viewport.once>
          <h3>{{$ts('Part 1: Establishing core functionality')}}</h3>
          <div class="hyphens">
            <p><b>{{$ts('In 3 months after the Robonomics parachain launch, Robonomics developers are going to activate the core functionally that’s been developing during 2019-2021, and also supplement the network with modules that have proven themselves in the Polkadot and Kusama ecosystems.')}}</b></p>
            <p><b>{{$ts('Genesis state: (0 week)')}}</b> {{$ts('Launch of the starter pack of Robonomics parachain functions with IoT management services and collators reward systems.')}}</p>
            <p><b>{{$ts('Update')}} 1.1</b> {{$ts('Staking and allowing transfers (0 - 1 week). Will allow you to transfer XRT and stake your XRT with a 10% APR for all token holders and 50% for Crowdloan participants.')}}</p>
            <p><b>{{$ts('Update')}} 1.2</b> {{$ts('Treasury and Technical committee (2 - 3 week). Will allow transferring a share of the DAO funds from Ethereum to the parachain. The Technical Committee can produce emergency referenda. These are used for emergency bug fixes or rapid implementation of new but battle-tested features into the runtime.')}}</p>
            <p><b>{{$ts('Update')}} 1.3</b> {{$ts('RWS (4 - 5 week). Will allow using IoT management functions with not only commission payments in XRT but a monthly subscription as well.')}}</p>
            <p><b>{{$ts('Update')}} 1.4</b> {{$ts('Robot-as-a-service (6 - 7 week). Will allow to implement a control process for the provision of automated services and use payments within transactions to launch devices.')}}</p>
            <p><b>{{$ts('Update')}} 1.5</b> {{$ts('XCMP functionality and Robobank (8 - 9 week). The solution is based on the Polkadot XCMP architecture that will allow any parachain to get access to IoT device management with payment in a native token.')}}</p>
            <p><b>{{$ts('Update')}} 1.6</b> {{$ts('Democracy and Remove Sudo (10 - 11 week). Developers won’t have the ability to interfere with the operations of the network without the involvement of the technical committee or voting of parachain native token holders.')}}</p>
          </div>
          <h3>{{$ts('Part 2: Launch services based on Robonomics R&D')}}</h3>
          <div class="hyphens">
            <p><b>{{$ts('2nd part of Robonomics parachain growth in Kusama designated to the launch of services based on previous Robonomics team’s R&D projects.')}}</b></p>
            <p><b>{{$ts('Globally available digital passports of products')}}</b> {{$ts('By supplementing the status of digital twins with information about the produced products, customers will be able to issue digital passports protected against changes and loss of information in the future. This use case is already implemented as a pilot at the enterprise that’s producing drones. The solution used for quality control during packaging with video recording.')}}</p>
            <p><b>{{$ts('Smart leasing of IoT & Robotics')}}</b> {{$ts('We’ll demonstrate the ability to use the Robonomics parachain for leasing an IoT/Robotics device. Using the example of 2 robots controlled by Robonomics parachain in 2 different industries. The first use case - an educational program based on Boston Dynamics SDK, during which developers will learn how to control the famous robot dog - Spot. The second one - an industrial manipulator sold under a leasing agreement in the United States. Both robots will provide customers with automatically generated reports at the end of the user session.')}}</p>
            <p><b>{{$ts('Environmental mitigation services for smart buildings with real carbon credits')}}</b> {{$ts('It will allow customers to automatically collect information about the electricity consumption of the household or apartment building, burn carbon credits, and store a report in the parachain.')}}</p>
            <p><b>{{$ts('Fault-tolerant civil sensors network')}}</b> {{$ts('A complete set of software modules for creating a sensor network in a city or enterprise to track the desired indicators and provide access to them without a central point of failure. Today it is being tested in one of Russian’s industrial cities - Togliatti.')}}</p>
            <p><b>{{$ts('Self-driving cars and drones traffic management solution to avoid route collisions in public areas')}}</b> {{$ts('It’ll allow managing a fleet of drones with publicly monitored access to route changes to public agencies responsible for local security and efficiency of air space and roads')}}.</p>
            <p><b>{{$ts('Ecosystem integration updates')}}</b> {{$ts('We will focus on integrations with other parachains to expand the capabilities of IoT projects that are interested in the Polkadot ecosystem’s features.')}}</p>
          </div>
            <h3>{{$ts('Part 3: Transform into Robonomics Relay Chain')}}</h3>
          <div class="hyphens">
            <p><b>{{$ts('The final task for the 48 weeks of existence in the Kusama network is the transformation of the Robonomics parachain into the Robonomics Relay Chain. This is our vision of the future of Robonomics, as a complete segment of the Polkadot infrastructure specifically prepared for working with IoT devices.')}}</b></p>
          </div>
        </div>

      </section>

      <hr class="animate no-margins" v-in-viewport.once/>

      <section class="kusama-polkadot-ecosystem section__solid section__lightblue">
        <h2>{{$ts('Robonomics in Polkadot ecosystem')}}</h2>

        <div class="grid-3 animate-inside layout layout__content" v-in-viewport.once>

        <Card orientation="vertical" back="transparent" link="https://youtu.be/rbjOmJmilAg">

          <p>
            <g-image alt="Video from Polkadot Decoded 2021" src="~/assets/images/Sergei-Polkadot-may-2021.png"/>
          </p>

          <h3>{{$ts('Polkadot Decoded 2021')}}</h3>
          <p class="hyphens">{{$ts('On May 19, on the main stage of Polkadot Decoded, Sergey Lonshakov spoke about the concept of Smart cities and Polkadot services that are possible within this.')}}</p>

        </Card>

        <Card orientation="vertical" back="transparent" link="https://youtu.be/31zXeUq3htE">

          <p>
            <g-image alt="Kusama on Mars video" src="~/assets/images/Kusama-On-Mars.png"/>
          </p>

          <h3>{{$ts('Kusama on Mars')}}</h3>
          <p class="hyphens">{{$ts('On Hackusama (a 7-week online hackathon) we inspired with an idea of architecture impossible without KUSAMA. Watch the video and read in the description what was done during the hackathon.')}}</p>

        </Card>

        <Card orientation="vertical" back="transparent" link="https://opensea.io/assets/0x8cb813bf27dc744fc5fb6ba7515504de45d39e08/24">

          <p>
            <g-image alt="Robonomics PolkaPet" src="~/assets/images/robonomics-nft-3.png"/>
          </p>

          <h3>{{$ts('Robonomics PolkaPet')}}</h3>
          <p class="hyphens">{{$ts('PolkaPet is collectible NFT card embodied as an artistic creature, represents a specific project within the Polkadot ecosystem. Robonomics PolkaPets owners can get some additional bonuses.')}}</p>

        </Card>

        </div>
      </section>

      <hr class="animate no-margins" v-in-viewport.once/>

      <section class="kusama-parachain">
        <section class="kusama-parachain-intro section__solid section__gradient-purpleblue">
          <div class="layout layout__text animate-inside" v-in-viewport.once>
            <h2>{{$ts('Robonomics Relay Chain on Polkadot')}}</h2>
            <p class="hyphens">{{$ts('Kusama parachain is great opportunity for Robonomics to scale network up to 1 million IoT systems connected in real-time without any centrilized regulators.')}}</p>
            <p class="hyphens">{{$ts('The Robonomics developers team formed plan for 2 years within Kusama slot. We will try to build on our existing work and new software development 5 specific parachains, including')}}:</p>

            <div class="parachains-overview">

              <div class="parachains-overview-description">

                <div class="item" :class="(parachainTab == 1) ?'active':''">
                  <h4>{{$ts('Smart leasing parachain')}}</h4>
                  <p class="hyphens">{{$ts('Recoup your investment in the high-value robots by renting out it with a mechanism for tokenizing robots’ labor.')}}</p>
                </div>
                <div class="item" :class="(parachainTab == 2) ?'active':''">
                  <h4>{{$ts('Robot as a Service (RaaS) parachain')}}</h4>
                  <p class="hyphens">{{$ts('Get and provide direct robot services without cashiers, clerks or centrilized cloud providers.')}}</p>
                </div>
                <div class="item" :class="(parachainTab == 3) ?'active':''">
                  <h4>{{$ts('RWS parachain')}}</h4>
                  <p class="hyphens">{{$ts('Robonomics Web Services (RWS) will provide decentralized infrastructure for IoT solutions.')}}</p>
                </div>
                <div class="item" :class="(parachainTab == 4) ?'active':''">
                  <h4>{{$ts('DAO IPCI parachain')}}</h4>
                  <p class="hyphens">{{$ts('The Robonomics network provides technology for environmental mitigation service DAO IPCI.')}}</p>
                </div>
                <div class="item" :class="(parachainTab == 5) ?'active':''">
                  <h4>{{$ts('Distributed Sky parachain')}}</h4>
                  <p class="hyphens">{{$ts('Blockchain techonologies to control the traffic of drones (automated planning of drone flight paths, decentralized payment regulations, smart contract for transactions)')}}</p>
                </div>

              </div>

               <div class="parachains-overview-line">

                  <div class="item" :class="(parachainTab == 1) ?'active':''" @click="parachainTab=1">
                    <g-image src="~/assets/images/parachain-i-leasing.png" />
                    <p class="item-title">{{$ts('Smart rental and leasing')}}</p>
                  </div>

                  <div class="item" :class="(parachainTab == 2) ?'active':''" @click="parachainTab=2">
                    <g-image src="~/assets/images/parachain-i-robot-as-a-service.png" />
                    <p class="item-title">{{$ts('Robot as a Service')}}</p>
                  </div>

                  <div class="item" :class="(parachainTab == 3) ?'active':''" @click="parachainTab=3">
                    <g-image src="~/assets/images/parachain-i-rws.png" />
                    <p class="item-title">{{$ts('"Cloud" for IoT applications')}}</p>
                  </div>

                  <div class="item" :class="(parachainTab == 4) ?'active':''" @click="parachainTab=4">
                    <g-image src="~/assets/images/parachain-i-enviromental.png" />
                    <p class="item-title">{{$ts('Environmental mitigation')}}</p>
                  </div>

                  <div class="item" :class="(parachainTab == 5) ?'active':''" @click="parachainTab=5">
                    <g-image src="~/assets/images/parachain-i-drones-traffic.png" />
                    <p class="item-title">{{$ts('Drone vehicle traffic')}}</p>
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

      <section class="animate section__darkgray section__solid" v-in-viewport.once>
        <h2 class="layout">{{$ts('Follow latest updates Crowdloan 2')}}</h2>

        <div class="grid-3 animate-inside layout layout__content" v-in-viewport.once>

        <Card orientation="vertical" back="white" link="https://twitter.com/AIRA_Robonomics" imageLocal="avatars/twitter.png" imageSize="mid">
          <h3>{{$ts('Robonomics official Twitter Crowdloan 2')}}</h3>
        </Card>

        <Card orientation="vertical" back="white" link="https://twitter.com/EnsRationis" imageLocal="avatars/Sergey-Lonshakov.jpg" imageSize="mid">
          <h3>{{$ts('Software architect Twitter Crowdloan 2')}}</h3>
        </Card>

        <Card orientation="vertical" back="white" link="https://t.me/robonomics" imageLocal="avatars/telegram.jpg" imageSize="mid">
          <h3>{{$ts('Robonomics Telegram Community Crowdloan 2')}}</h3>
        </Card>

      </div>

      </section>

    </div>

  </layout>
</template>


<script>
  let getProvider
  let initApi
  let getAccounts
  let getAccount
  let getStat
  let config
  if (process.isClient) {
    const chain = require("../utils/chain");
    getProvider = chain.getProvider
    initApi = chain.initApi
    getAccounts = chain.getAccounts
    getAccount = chain.getAccount
    getStat = chain.getStat
    config = chain.config
  }
  import { getStat as getStatServer } from "../utils/api";
  import { bnToBn } from "@polkadot/util";

  export default {
    components: {
      MetaInfo: () => import("~/components/MetaInfo.vue"),
      Abstract: () => import("~/components/TextAbstract.vue"),
      Button: () => import("~/components/Button.vue"),
      tip: () => import("~/components/tip.vue"),
      Card: () => import("~/components/TextCard.vue")
    },


    data () {
      return {
        email: null,
        statusSubmit: 'none',
        parachainTab: 1,
        checkedFlags: [],
        selectedWay: 1,

        contribution: 10,
        staking_xrt: 100,
        staking_ksm: 15,
        price_xrt: 0,
        price_ksm: 0,

        submit_email: null,

        isСonnection: false,
        step: 1,
        isApi: false,
        api: null,
        provider: null,
        amount: 0,
        success: false,
        error: "",
        isWrite: false,
        account: null,
        accounts: [],
        agree_email: true,
        info_count: 0,
        info_contributed: 0,
        balance: '0',
        listenerBalance: null,

        status_noaccount: false,
        status_noextension: false,
        status_transaction_broken: false,
        status_transaction_notdone: false,

        crowdloan_loading: false,
      }
    },

    methods: {

        async getPrice(tickerName) {
          const result = await fetch(
            `https://min-api.cryptocompare.com/data/price?fsym=${tickerName}&tsyms=USD&api_key=9c9ca216c454cd2390092e573894a6e10ddff03ef3a4e153996ef358fe9d33d8`
          );
          const data = await result.json();
          return Number(data.USD)
        },
        async updatePrices() {
          this.price_xrt = await this.getPrice('XRT');
          this.price_ksm = await this.getPrice('KSM');
        },
        async connect() {
          //loading
          this.crowdloan_loading = true;

          this.isСonnection = true;
          this.status_noextension = false;
          this.status_noaccount = false;
          try {
            this.accounts = await getAccounts(this.api);
            if (this.accounts.length === 0) {
              console.log('not accounts'); //
              this.status_noaccount = true;
            }
            this.account = this.accounts[0]?.address;
            if (this.account) {
              let { data: { free: balance } } = await this.api.query.system.account(this.account);
              this.balance = balance
            }
            //2
            this.crowdloan_loading = false;
            this.isСonnection = false
            this.isApi = true;
          } catch (error) {
            //-
            this.crowdloan_loading = false;
            this.isСonnection = false
            console.log(error.message);
            this.status_noextension = true;
          }
        },
        async send() {
          try {
            //loading
            this.crowdloan_loading = true;

            this.error = "";
            this.isWrite = true;
            this.status_transaction_broken = false;
            this.status_transaction_notdone = false;
            const account = await getAccount(this.api, this.account);
            const amount = bnToBn(Number(this.contribution)*1000000000000)
            const tx = await this.api.tx.crowdloan.contribute(config.paraId, amount.toString(), null)
              .signAsync(account.meta.isInjected ? account.address : account);

            await tx.send(result => {
              if (result.status.isInBlock) {
                console.log(result.status.asInBlock.toString());
                result.events.forEach(events => {
                  const {
                    event: { data, method, section }
                  } = events;

                  if (section === "system" && method === "ExtrinsicFailed") {
                    console.log("error", data.toString()); // Транзакция с ошибками
                    this.status_transaction_broken = true;
                    //-
                    this.crowdloan_loading = false;
                    this.error = 'Error';
                    this.isWrite = false;
                  } else if (
                    section === "system" &&
                    method === "ExtrinsicSuccess"
                  ) {
                    if(this.submit_email){
                      fetch('https://script.google.com/macros/s/AKfycbxpQSwQ2S8npivmGNGUxgcLxWrte6kZXIMDm-SSQHjIo-Rh-efWD0jcez-eGEVUi4jabw/exec', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        body: 'email=' + encodeURIComponent(this.submit_email)
                      })
                    }
                    console.log("ok");
                    this.isWrite = false;
                    this.success = true;
                    //3
                  }
                });
              } else if (result.status.isFinalized) {
                console.log("isFinalized");
              }
            });
          } catch (error) {
            //-
            this.crowdloan_loading = false;
            console.log(error); // кнопка нажата, транз не отправляется
            this.status_transaction_notdone = true;
            this.error = error.message;
            this.isWrite = false;
          }
        },
        async more() {
          //2
          this.crowdloan_loading = false;
          this.success = false;
        },
        async updateInfo() {
          let info
          if (this.api && this.provider.isConnected) {
            info = await getStat(this.api)
          } else {
            info = await getStatServer();
          }
          this.info_count = info.count;
          this.info_contributed = Number(info.amountUnit).toFixed(2);
        },
      },

      async created() {
        this.updateInfo()
        setInterval(() => {
          this.updateInfo()
        }, 5000);
        this.updatePrices()
        try {
          this.provider = getProvider();
          this.api = await initApi();
        } catch (error) {
          console.log(error);
        }
      },

      watch: {
        account: async function (newValue) {
          if (this.listenerBalance !== null) {
            this.listenerBalance()
          }
          this.listenerBalance = await this.api.query.system.account(newValue, ({ data: { free: balance } }) => {
            this.balance = balance
          });
        }
      },

      computed: {
        validateBalance() {
          if (Number(this.contribution) > 0) {
            const amount = bnToBn(Number(this.contribution)*1000000000000)
            const balance = bnToBn(this.balance)
            if (balance.gt(amount)) {
              return true
            }
          }
          return false
        },
        validateEmail() {
          if ((!this.submit_email || (this.agree_email && /\S+@\S+\.\S+/.test(this.submit_email)))) {
            return true
          }
          return false
        },
        validateSend() {
          if (this.validateBalance && !this.isWrite && this.validateEmail) {
            return true
          }
          return false
        },
        koef() { return Number(this.info_contributed) < 35000 ? 5 : 3.5 },
        reward_xrt() { return (this.contribution * this.koef).toFixed(2) },
        reward_xrt_usd() { return (this.price_xrt * this.reward_xrt).toFixed(2) },
        reward_ksm() { return (this.contribution * (this.staking_ksm / 100)).toFixed(2) } ,
        reward_ksm_usd() { return (this.price_ksm * this.reward_ksm).toFixed(2) },
        balanceView() {return Number(this.balance) > 0 ? this.balance.toHuman() : "-"}
      }
  }
</script>

<style lang="scss">
  body {
    --tip-width: 22rem;
  }

  .page-banner {
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

  .loader-text, .loader-text-s {
    display: inline-block;
    height: 2rem;
    width: 2rem;
    border-radius: 2rem;
    border-width: 2px 2px 0 0;
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.541);

    animation: 0.8s spin ease-in-out infinite;
  }

  .loader-text-s {
    height: 1rem;
    width: 1rem;
    border-radius: 1rem;
  }

  @keyframes spin
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

  // .auction-parachain-subtitle {
  //   display:block;
  //   margin: 0 auto;
  //   max-width:800px;
  //   font-style: italic;
  // }

  // .astronaut {
  //   display: block;
  //   margin: 0 auto;
  //   width: 300px;
  //   max-width: 100%;

  //   // opacity: 0;
  //   // transform: translateY(0.6rem);
  //   // animation: blink var(--duration-mainpic) ease-out var(--delay-mainpic) forwards;
  // }
  
  .banner-astronauts {
      display: block;
      margin: 0 auto;
      width: 330px;
      max-width: 100%;
  }

  .page-banner {
    position: relative;
    overflow: hidden;
    text-align: center;
    padding-top: calc(var(--space) * 2);
    padding-bottom: 0.5rem;

    @media screen and (max-width: 800px) {
      padding-bottom: calc(var(--space) * 2)
    }

    .grid-3 {
      margin-top: calc(var(--space) * 2)
    }

    .grid-3 > div:not(:first-child) {
      margin-bottom: var(--space);
      padding-top: var(--space);
    }

    .layout {
      margin-bottom: 0
    }

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
