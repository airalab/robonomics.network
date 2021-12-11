<template>
  <layout>

    <MetaInfo
      :pageTitle = "$ts('Crowdloan for Robonomics on Kusama')"
      :pageDescription = "$ts('Crowdloan Description')"
      pageImage = "/website_cover_crowdloan.jpg"
      pageImageHeight = "652"
    />

    <div class="page">
       <section id="info" class="section__solid section__blue">
         <div class="content layout laouyt__content">
           <h1>Robonomics Kusama crowdloan</h1>
           <p id="info-subtitle">New era of autonomous oracle based crowdloan opened now</p>

           <div class="grid-5">
             <div class="oldy dark bg-blue align-left">
               <div class="text-title m-b-0">Campaign Cap</div>
               <div>47,425.5262 KSM</div>
               <details>
                 <summary @click="infoDetails">i</summary>
                 Based on fees assessment of the 15th auction, Geshiro
               </details>
             </div>

             <div class="oldy dark bg-blue align-left">
               <div class="text-title m-b-0">Duration</div>
               <div>5 weeks</div>
               <details>
                 <summary @click="infoDetails">i</summary>
                 We assume that one crowdloan campaign should aim to collect for 5 weeks. In case of failure, the oracle will have to shift the sample estimate of the median fees and camphain starts again.
               </details>
             </div>

             <div class="oldy dark bg-blue align-left">
               <div class="text-title m-b-0">Remuneration</div>
               <div>4.20 XRT</div>
               <details>
                 <summary @click="infoDetails">i</summary>
                  1 KSM ~ 370$ APR = 19%,<br/>
                  1XRT ~ 17$
               </details>
             </div>

             <div class="oldy dark bg-blue align-left">
               <div class="text-title m-b-0">Extra 1XRT EACH KSM</div>
               <div>For pioneer NFT cardholders</div>
               <details>
                 <summary @click="infoDetails">i</summary>
                 Pioneer NFT cardholders will receive an extra 1 XRT for each KSM Bonded. Any contributor in the past auctions can <g-link to="https://dapp.robonomics.network/#/pioneer">claim</g-link> Pioneer nft <g-link to="https://opensea.io/assets/0xdc9fe731ce957c14a7b055a34270b2400b0905ec/1">card</g-link>
               </details>
             </div>

             <div class="oldy dark bg-blue align-left">
               <div class="text-title m-b-0">Distribution rewards</div>
               <div>Monthly</div>
               <details>
                 <summary @click="infoDetails">i</summary>
                 Proportionally equal shares for 12 months. The treasury performs by generating new tokens in the parachain
               </details>
             </div>
           </div>

           <p class="info-tip">These terms & conditions <a href="/blog/automating-kusama-crowdloan-campaigns/" target="_blank">counted by algorithm</a></p>

           <g-image id="info-girl" aria-hidden="true" alt="" src="~/assets/images/kusama-cosmogirl-sitting.png" />

         </div>
         
         <div id="info-numbers">
           <MovingNumbers/>
         </div>
       </section>

       <section id="a-contribution" class="section__solid section__darkgray">
         <form class="contribution layout">
           <template v-if="!isApi">
             <div class="input-signed-right">
                <input v-model="contribution" id="contribution" class="block" type="number" placeholder="0" required/>
                <label for="contribution" class="sign">KSM</label>
              </div>
              <section class="checks">
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
              <p v-if="checkedFlags.length!=3 && connect_clicked" class="error">{{$ts('Please check carefully all info above')}}</p>
              <!-- <Button type="button" @click="connect" button="primary block green large" :disabled="isСonnection || checkedFlags.length!=3" :class="crowdloan_loading?'loading':''"> -->
              <Button type="button" @click="connect" button="primary block green large" :class="crowdloan_loading?'loading':''">
                <span class="text">{{$ts('Contribute')}}</span>
              </Button>
            </template>

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
                      <details class="contribution-disclamer dashed">
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
         </form>

         <details class="dashed layout layout__text">
           <summary>Other ways to contribute</summary>
            <div class="oldy">
              <p class="text-title">1. {{$ts('On Polkadot Substrate portal')}}</p>
              <p><g-link style="display:block;word-break: break-all;" to="https://polkadot.js.org/apps/#/parachains/crowdloan">https://polkadot.js.org/apps/#/parachains/crowdloan</g-link></p>
              <p>{{$ts('In early April, Robonomics held a rehearsal of participation in auctions using the Crowdloan module in the Rococo network. You can watch the Twitter thread for a closer look at the possibility of using the standard interface for community participation in Polkadot auctions')}}: <g-link style="display:block;word-break: break-all;" to="https://twitter.com/AIRA_Robonomics/status/1377653645827833860">https://twitter.com/AIRA_Robonomics/status/1377653645827833860</g-link></p>
            </div>
            <div class="oldy">
              <p class="text-title">2. {{$ts('Fearless DeFi Wallet')}}</p>
              <p><g-link to="https://fearlesswallet.io">https://fearlesswallet.io</g-link></p>
            </div>
            <div class="oldy">
              <p class="text-title">3. Nova Wallet</p>
              <p><g-link to="https://novawallet.io">https://novawallet.io</g-link></p>
            </div>
         </details>
       </section>

       <hr class="animate no-margins" v-in-viewport.once/>

       <section id="statistics" class="section__solid section__darkgray">
         <div class="grid-3">
           <div>
             <div class="text-title m-b-0">{{$ts('Robonomics Parathread ID')}}</div>
             <div>2048</div>
           </div>
           <div>
             <div class="text-title m-b-0">Raised so far</div>
             <div>
                <template v-if="info_contributed > 0">{{info_contributed}} KSM</template> 
                <template v-else><span class="loader-text-s"></span></template>
             </div>
           </div>
           <div>
             <div class="text-title m-b-0">Our contributors</div>
             <div>
              <template v-if="info_count > 0">{{info_count}}</template>
              <template v-else><span class="loader-text-s"></span></template>
             </div>
           </div>
         </div>
       </section>

       <section class="layout layout__text">
         <h2>Quick intro to Robonomics</h2>

         <div class="oldy-wrap-count">
           <section class="oldy dark">
            <div class="oldy-count-content">
              {{$ts('Robonomics is an open-source platform for IoT applications. We support a new generation of internet technologies (web3) that implements the exchange of technical and economic information in the form of atomic transactions between user applications, IoT services, and complex robotics.')}}
            </div>
          </section>

           <section class="oldy dark">
            <div class="oldy-count-content">
              Robonomics project is over six years old. We started preparing for the first experiment on economically meaningful communication of people and machines with smart contracts in 2014. By the beginning of 2021, the development team was able to preserve the strongest elements of the architecture in Robonomics and complement the techno-economic protocol developed in 2015-2019 over Ethereum and IPFS with elements of the cloud IoT platform based on parachain Polkadot.
            </div>
          </section>

          <section class="oldy dark">
            <div class="oldy-count-content">
              {{$ts('Robonomics contains a complete set of tools for developing IoT applications, both on the robotics and the user interface sides. Communication between the user and device happens using the most successful technologies from the Web3 world – IPFS, Ethereum, and Polkadot. Thus, developers can create modern and secure applications for Smart Cities and Industry 4.0.')}}
            </div>
          </section>

          <section class="oldy dark">
            <div class="oldy-count-content">
              {{$ts('We are launching Robonomics Web Services. This sustainable subscription model for IoT devices makes possible to execute zero-weight transactions in blockchain.')}}
            </div>
          </section>
         </div>

         <a href="#a-contribution" class="dashed text-big" v-smooth-scroll="{ updateHistory: false, offset: -250 }">Go to contribution</a>
       </section>

      <section class="section__solid section__lightblue animate" v-in-viewport.once>
        <h2>{{$ts('Robonomics in Polkadot ecosystem')}}</h2>

        <div class="grid-3 layout layout__content">

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

      <section class="parachain animate" v-in-viewport.once>
        <section class="parachain-intro section__solid section__gradient-purpleblue">
          <div class="layout layout__text animate-inside" v-in-viewport.once>
            <h2>Why parachain</h2>
            <p class="hyphens">{{$ts('Kusama parachain is great opportunity for Robonomics to scale network up to 1 million IoT systems connected in real-time without any centrilized regulators.')}}</p>
            <p class="hyphens">{{$ts('The Robonomics developers team formed plan for 2 years within Kusama slot. We will try to build on our existing work and new software development 5 specific features, including')}}:</p>

            <div class="parachains-overview">

              <div class="parachains-overview-description">

                <div class="item" :class="(parachainTab == 1) ?'active':''">
                  <h4>{{$ts('Smart leasing')}}</h4>
                  <p class="hyphens">{{$ts('Recoup your investment in the high-value robots by renting out it with a mechanism for tokenizing robots’ labor.')}}</p>
                </div>
                <div class="item" :class="(parachainTab == 2) ?'active':''">
                  <h4>{{$ts('Robot as a Service (RaaS)')}}</h4>
                  <p class="hyphens">{{$ts('Get and provide direct robot services without cashiers, clerks or centrilized cloud providers.')}}</p>
                </div>
                <div class="item" :class="(parachainTab == 3) ?'active':''">
                  <h4>RWS</h4>
                  <p class="hyphens">{{$ts('Robonomics Web Services (RWS) will provide decentralized infrastructure for IoT solutions.')}}</p>
                </div>
                <div class="item" :class="(parachainTab == 4) ?'active':''">
                  <h4>DAO IPCI</h4>
                  <p class="hyphens">{{$ts('The Robonomics network provides technology for environmental mitigation service DAO IPCI.')}}</p>
                </div>
                <div class="item" :class="(parachainTab == 5) ?'active':''">
                  <h4>Distributed Sky</h4>
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


      <section id="strategy" class="animate section__solid section__darkpurple" v-in-viewport.once>

        <div class="layout layout__content">
          <h2>{{$ts('Choose your strategy')}}</h2>

          <section class="grid-3 animate-inside" v-in-viewport.once>
            
            <div>
              <div class="img"><g-image alt="" src="~/assets/images/plo-holder-1.png"/></div>
              <h3>{{$ts('For KSM holders')}}</h3>
              <p class="hyphens">{{$ts('Robonomics PLO may be interesting for stakeholders who are looking for ways to diversify their KSM stake next 48 weeks inside the ecosystem.')}} <g-link to="/xrt/">XRT</g-link> {{$ts('for now is available on Uniswap, Huobi, and in addition on PancakeSwap.')}}</p>
            </div>

            <div>
              <div class="img"><g-image alt="" src="~/assets/images/plo-holder-2.png"/></div>
              <h3>{{$ts('For XRT holders')}}</h3>
              <p class="hyphens">{{$ts('Gain value for your XRT by winning Kusama Slot with Robonomics network great potential for scaling.')}}&nbsp;{{$ts('Take part in our unique staking program: rewarding stakeholders and enabling more zero-weight transactions for IoT devices.')}}</p>
            </div>

            <div>
              <div class="img"><g-image alt="" src="~/assets/images/plo-holder-3.png"/></div>
              <h3>{{$ts('For tech-inspired')}}</h3>
              <p class="hyphens">{{$ts('Robonomics already has complex ecosystem for connecting real world to')}} <g-link to="https://web3-technology-stack.readthedocs.io">{{$ts('Web3 Technology Stack Crowdloan 2')}}</g-link>. {{$ts("It's free, it's opensource, everybody can try it for IoT and Smart services. With Polkadot it can be even more cost-effective.")}}</p>
            </div>

          </section>

          <a href="#a-contribution" class="text-color-red dashed text-big" v-smooth-scroll="{ updateHistory: false, offset: -250 }">Go to contribution</a>

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

      <section class="animate section__darkgray section__solid" v-in-viewport.once>
        <h2 class="layout">{{$ts('Follow latest updates Crowdloan 2')}}</h2>

        <div class="grid-3 animate-inside layout layout__content" v-in-viewport.once>

        <Card orientation="vertical" back="white" :link="$static.metadata.twitter" imageLocal="avatars/twitter.png" imageSize="mid">
          <h3>{{$ts('Robonomics official Twitter Crowdloan 2')}}</h3>
        </Card>

        <Card orientation="vertical" back="white" link="https://twitter.com/EnsRationis" imageLocal="avatars/Sergey-Lonshakov.jpg" imageSize="mid">
          <h3>{{$ts('Software architect Twitter Crowdloan 2')}}</h3>
        </Card>

        <Card orientation="vertical" back="white" :link="$static.metadata.discord" imageLocal="logos/discord.png" imageSize="mid">
          <h3>Robonomics Discord Community</h3>
        </Card>

      </div>

      </section>

    </div>

  </layout>
</template>


<static-query>
query {
  metadata {
    discord,
    twitter
  }
}
</static-query>


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
  import { bnToBn, formatBalance as fb } from "@polkadot/util";

  const M_LENGTH = 6 + 1;
  const K_LENGTH = 3 + 1;
  function applyFormat(
    value,
    [decimals, token],
    withCurrency = true,
    withSi = false,
    _isShort = false
  ) {
    const [prefix, postfix] = fb(value, {
      decimals,
      forceUnit: "-",
      withSi: false
    }).split(".");

    const isShort = _isShort || (withSi && prefix.length >= K_LENGTH);
    const unitPost = withCurrency ? token : "";

    if (prefix.length > M_LENGTH) {
      const [major, rest] = fb(value, {
        decimals,
        withUnit: false
      }).split(".");
      const minor = rest.substr(0, 4);
      const unit = rest.substr(4);

      return `${major}.${minor} ${unit.trim()}${unit ? unitPost : unitPost}`;
    }

    return `${prefix}${isShort ? "" : "."}${
      !isShort && `0000${postfix || ""}`.slice(-4)
    } ${unitPost}`;
  }

  function formatBalance(v, decimals = 12, unit = "KSM") {
    return applyFormat(v.toString(), [decimals, unit]).replace(",", "");
  }

  export default {
    components: {
      MetaInfo: () => import("~/components/MetaInfo.vue"),
      Button: () => import("~/components/Button.vue"),
      Card: () => import("~/components/TextCard.vue"),
      MovingNumbers: () => import("~/components/decor/MovingNumbers.vue"),
      tip: () => import("~/components/tip.vue"),
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
        connect_clicked: false //this is for error message to check input[checkbox] on step 1
      }
    },

    methods: {

        infoDetails(e){

          

          /* This operates with details in crowdloan info - synch open/close */
          if ( window.innerWidth > 880 ) {
            let details = document.querySelectorAll('#info .grid-5 details');

            if(!e.target.parentElement.open) {
              for (let el of details) {
                if(el !== e.target.parentElement){
                  el.open = true;
                }
              }
            } else {
              for (let el of details) {
                if(el !== e.target.parentElement){
                  el.open = false;
                }
              }
            }
          }
        },

        async connect() {
          //loading
          this.crowdloan_loading = true;
          this.connect_clicked = true;

          this.isСonnection = true;
          this.status_noextension = false;
          this.status_noaccount = false;
          try {
            this.accounts = await getAccounts(this.api);
            if (this.accounts.length === 0) {
              console.log('no accounts'); //
              this.status_noaccount = true;
            }
            this.account = this.accounts[0]?.address;
            if (this.account) {
              let data = await this.api.query.system.account(this.account);
              this.balance = data.data.free.add(data.data.reserved).sub(data.data.miscFrozen)
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
                      fetch('https://script.google.com/macros/s/AKfycbw3YuJ8ECkcuEXsRouBSgCrReo4zqpONNNg9Pkcf2nVW05pqrj8TwssSWmF4k_PGDwb6A/exec', {
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
            // info = await getStatServer();
            info = { count:0, amountUnit:0 };
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
          this.listenerBalance = await this.api.query.system.account(this.account, (data) => {
            this.balance = data.data.free.add(data.data.reserved).sub(data.data.miscFrozen)
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
        koef() { return Number(this.info_contributed) < 6300 ? 6 : 3.5 },
        reward_xrt() { return (this.contribution * this.koef).toFixed(2) },
        reward_xrt_usd() { return (this.price_xrt * this.reward_xrt).toFixed(2) },
        reward_ksm() { return (this.contribution * (this.staking_ksm / 100)).toFixed(2) } ,
        reward_ksm_usd() { return (this.price_ksm * this.reward_ksm).toFixed(2) },
        balanceView() { return Number(this.balance) > 0 ? formatBalance(this.balance) : "-" }
      }
  }
</script>


<style scoped>

  .page {
    --color-polka: #E6007A;
    --color-polka-dark: #9c0053;
  }

  /* Section Top */
  #info {
    --girl-w: 300px;
    font-family: var(--font-family-code);
    padding-bottom: calc(var(--girl-w) - 10px);
  }

  #info .content, #info {
    position: relative;
    z-index: 1;
  }

  #info-numbers{
    overflow: hidden;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  #info .numbers {
    opacity: .4;
  }

  #info-subtitle {
    font-style: italic;
    background-color: var(--color-red);
    display: inline-block;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  #info h1 { margin-top: 0; margin-bottom: 0; }

  #info .grid-5{
    font-size: 80%;
  }

  .info-tip {
    font-size: 80%;
    margin-top: calc(var(--space) * 0.5)
  }

  .info-tip a {
    color: var(--color-light)
  }

  #info-girl {
    max-width: var(--girl-w);
    position: absolute;
    bottom: calc((80px + var(--girl-w)) * (-1));
    left: calc(50% - var(--girl-w)/2)
  }

  @media screen and (max-width: 480px) {
    #info {
      --girl-w: 200px;
    }
  }

  @media screen and (max-width: 450px) {
    #info {
      padding-bottom: calc(var(--girl-w) + 20px);
    }
  }
  /* end of Section Top */

  /* Section Contribute */
  .contribution {
    max-width: 760px;
    margin: var(--space) auto;
    text-align: left;
    font-family: var(--font-family-code);
  }

  .contribution span a {
    color: var(--color-light)
  }

  .contribution details[class*='tip'] {
    margin-left: calc(var(--space)*0.5)
  }

  .contribution input[type="checkbox"] {
    float: left
  }

  .contribution > div {
    margin-bottom: var(--space);
  }

  .contribution .checks {
    font-size: 80%;
  }

  .input-signed-right input {
    padding: calc(var(--space) * 0.5)
  }

  .input-signed-right .sign {
    top: 0.8rem
  }

  .button.loading .text {
    display: none;
  }

  .button.loading:before {
      content: "";
      display: inline-block;
      height: 1.2rem;
      width: 1.2rem;
      border-radius: calc(1.2rem/2);
      border-width: 2px 2px 0 0;
      border-style: solid;

      animation: 0.8s Rotate ease-in-out infinite;
    }

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
  /* end of Section Contribute */

  /* Section Contribute Step 3 */
  .load-bird {
      position: relative;
      width: 148px;
      height: 180px;
      margin: 0 auto
  }

  .load-bird img { position: absolute; }

  .load-bird img:not(.bird-body) {
      animation-delay: 0.6s;
      animation-duration: 0.8s;
      animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
      animation-fill-mode: forwards;
  }

  .load-bird .bird-body {
    width: 148px;
    top: 0;
    left: 0;
    z-index: 1;
  }

  .load-bird .bird-tale {
    width: 58px;
    top: 100px;
    left: -35px;
    z-index: 0;

    transform-origin: 0 100%;
  }

  .load-bird .bird-wing-1 {
      width: 47px;
      top: 42px;
      left: 23px;
      z-index: 2;

      transform-origin: 0 0;
    }

   .load-bird .bird-wing-2 {
      width: 67px;
      top: 42px;
      left: 120px;
      z-index: 0;

      transform-origin: 0 0;
    }

    .load-bird .bird-ribbons {
      width: 63px;
      top: 37px;
      left: -8px;
      z-index: 0;

      transform-origin: 100% 50%;
    }

    .load-bird .bird-hair {
        width: 14px;
        top: -10px;
        left: 72px;
        z-index: 0;

        transform-origin: 100% 50%;
      }

    .load-bird .bird-leg {
        width: 37px;
        top: 127px;
        left: 63px;
        z-index: 3;

        transform-origin: 100% 0;
      }


    .crowdloan-step-3.active .in-viewport .bird-tale { animation-name: birdTale; }
    .crowdloan-step-3.active .in-viewport .bird-wing-1 { animation-name: birdWing1; }
    .crowdloan-step-3.active .in-viewport .bird-wing-2 { animation-name: birdWing2; }
    .crowdloan-step-3.active .in-viewport .bird-ribbons { animation-name: birdRibbons; }
    .crowdloan-step-3.active .in-viewport .bird-hair { animation-name: birdHair; }
    .crowdloan-step-3.active .in-viewport .bird-leg { animation-name: birdLeg; }

    .crowdloan-step-3.active .in-viewport .load-bird {
      margin: 0 auto
    }

    .contribution-share {
      margin-top: calc(var(--space)*0.5);
      margin-bottom: var(--space);
      text-align: center;
    }

    .contribution-share a {
        width: 3rem;
    }

     .contribution-share a img {
          display: block;
        }

      .contribution-share a:not(:last-child) {
          margin-right: 0.8rem;
        }
      

      .contribution-share div:not(:last-child) {
        margin-bottom: 0.4rem;
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
  /* end of Section Contribute Step 3 */

  /* Section 'Choose your strategy' */
  #strategy .grid-3 { gap: calc(var(--space) * 3) }
  #strategy.section__darkpurple a { color: var(--color-blue-mid) }
  #strategy img { width: 60% }
  @media screen and (max-width: 400px) {
    #strategy img {
      width: 100%
    }
  }
  /* end of Section 'Choose your strategy' */


  /* Section 'Why parachain' */
  .parachain { margin: 0; }
  .parachain section { margin: 0; }

  .parachain .parachains-overview {
      margin-top: calc(var(--space) * 2);
      padding-bottom: 10px;
      border-bottom: 2px dashed #fff;
      position: relative;
      font-size: 90%;
  }

  .parachain h4 { font-size: var(--base-font-size); font-weight: bold; }

  .parachain-intro {
    font-family: var(--font-family-code);
  }

  .parachain-intro h2 {
    margin-bottom: calc(var(--space)*2);
  }

  .parachains-overview-line {
    display: grid;
    grid-template-columns: repeat(5, minmax(110px,1fr));
    align-items: start;

    /* scroll */
    width: 100%;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .parachains-overview-line::-webkit-scrollbar { display: none; }

  .parachains-overview-line .item {
      opacity: 0.5;
      transform: scale(0.7);
      cursor: pointer;
  }

  .parachains-overview-line .item.active {
    opacity: 1;
    transform: scale(1);
  }

  .parachains-overview-line .item:hover {
      transform: scale(1);
    }

  .parachains-overview-line .item img {
        height: 100px;
        width: auto;
  }

  @media screen and (max-width: 700px) {
    .parachains-overview-line .item img { height: 50px; }
  }

  .parachains-overview-line .item-title {
    font-weight: bold;
    font-family: var(--font-family);
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.8rem;
    color: #88bcff;
  }

  .parachains-overview-description {
    margin-top: var(--space);
    margin-bottom: var(--space);
  }

  .parachains-overview-description .item {
    opacity: 0;
    display: none;
  }

   .parachains-overview-description .item.active {
        display: block;
        animation: opacity 0.5s linear 0.2s forwards;
      }

    .parachains-overview-description .item h4 {
        margin-bottom: 10px;
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
  }

  .draw-polkadotParachain .overflowHide {
      overflow: hidden;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

  .draw-polkadotParachain .polkadot:after {
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

    .draw-polkadotParachain .i-polkadot {
      position: absolute;
      left: calc(50% - var(--size-polkadot-logo)/2);
      bottom: 28px;
      z-index: 1;

      width: var(--size-polkadot-logo);
    }

    .draw-polkadotParachain .slot {
      position: absolute;
      width: var(--size-slot);
      height: 135px;
      z-index: 0;
    }

    .draw-polkadotParachain .slot:before, .draw-polkadotParachain .slot:after {
      content: "";
      display: block;
    }

    .draw-polkadotParachain .slot:before {
      width: var(--size-slot);
      height: var(--size-slot);
      border-radius: calc(var(--size-slot)/2);
      background-color: var(--color-polka);
    }

    .draw-polkadotParachain .slot:after {
      width: 1px;
      height: 100%;
      border-left: 2px dashed var(--color-polka);

      position: absolute;
      bottom: 0;
      left: calc(50% - 1px);
    }

    .draw-polkadotParachain .slot.slot-center {
      top: calc((-1) * var(--size-slot)/2);
      left: calc(50% - var(--size-slot)/2);
    }

    .draw-polkadotParachain .slot.slot-left, .draw-polkadotParachain .slot.slot-right {
      opacity: 0.5;
    }

    .draw-polkadotParachain .slot.slot-left {
      bottom: 0;
      left: calc(50% - 460px - var(--size-slot)/2);
    }

    .draw-polkadotParachain .slot.slot-right {
      bottom: 0;
      left: calc(50% + 460px - var(--size-slot)/2);
    }

  /* end of Section 'Why parachain' */


  /* Section 'Statistics' */
  #statistics {
    text-align: left;
    font-family: var(--font-family-code);
    padding: 0;
    font-size: 90%;
  }

  #statistics .grid-3 { gap: 0; }
  #statistics .grid-3 > div { padding: var(--space); }
  #statistics .grid-3 > div:nth-child(2) { background-color: #141414; }
  #statistics .grid-3 > div:nth-child(3) { background-color: #000; }
  /* end of Section 'Statistics' */

</style>
