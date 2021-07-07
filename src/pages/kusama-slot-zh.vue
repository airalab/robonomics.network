<template>
  <layout>

    <MetaInfo
      :pageTitle = "'Robonomics 正式启动 Kusama 众贷！'"
      :pageDescription = "'将波卡与物联网市场融合——支持Robonomics的Kusama插槽竞拍，让我们一起迈入未来！'"
      :pageImage = "'/website_cover_crowdloan.jpg'"
    />

    <div class="auction page">


      <section class="page-banner auction-banner section section__solid section__red">
        <h1 class="auction-parachain-title clean">Robonomics 正式启动 Kusama 众贷！</h1>
        <div class="auction-parachain-subtitle">将波卡与物联网市场融合——支持Robonomics的Kusama插槽竞拍，让我们一起迈入未来！</div>

        <div class="auction-banner-cols layout__content">

            <div class="auction-statistics">
              <div class="auction-statistics-sum">{{info_contributed}} KSM</div>
              <div class="auction-statistics-accounts">来自当前 {{info_count}} 位贡献者</div>
              <div class="auction-statistics-id">Robonomics 平行链ID = 2077</div>
            </div>

            <div class="auction-banner-form align-center">
              <g-image class="astronaut" alt="Astronaut on Mars with Robonomics and Kusama" src="~/assets/images/robonomics-kusama-mars.png" />
              <a href="#crowdloan" class="button primary large green" v-smooth-scroll="{offset: -100}">现在支持</a>
            </div>


          <div class="auction-banner-details">

              <ul class="hyphens">

                <li>
                  <strong>3.5 XRT</strong>
                  每个KSM的回报。相当于Kusama中继链上KSM质押收益的1.5倍。
                </li>

                <li>
                  <strong>5 XRT</strong>
                  此加码奖励专属于本次筹款中前35,000个KSM的贡献者
                </li>

                <li>
                  <strong>135,000 KSM</strong>
                  筹集总金额。此方法将帮助Robonomics平行链以对终端用户来说的最低成本完成上线。
                </li>

                <li>
                  <strong>极速奖励</strong>
                  网络上线后的第一个月内便可收到全部奖励的50%
                </li>

                <li>
                  <strong>APR最高可达100%</strong>
                  质押一年后可拿到全部奖励，收益最高可达100%
                </li>

                <li>
                  <strong>平行链原生代币</strong>
                  所有XRT代币都将在Robonomics平行链上发放
                </li>
              </ul>

          </div>

        </div>
      </section>

      <hr class="animate no-margins" v-in-viewport.once/>


      <section id="crowdloan" class="auction-support layout">

          <h2 class="animate" v-in-viewport.once>参与Robonomics众贷</h2>

          <p class="layout__text animate" v-in-viewport.once><i>参与Robonomics众贷，助力Robonomics获得平行链插槽租用资格。你的KSM将被锁定48周，在此期间Robonomics可获得Kusama的分布式算力，实现同时为多达10,000部物联网设备的数字孪生提供服务。</i></p>

          <div class="auction-support-action animate" v-in-viewport.once>

            <!-- CALC -->
            <div class="form-line">
              <small>选择支持金额:</small>
              <div class="input-signed-right">
                <input v-model="contribution" id="contribution" class="block" type="number" placeholder="0" required/>
                <label for="contribution" class="sign">KSM</label>
              </div>
            </div>


            <div class="form-line">
              <small>支持Robonomics竞拍质押KSM的奖励估算：</small>

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
                  <small>XRT质押年回报率</small>
                  <div class="calc-input-signed-right">
                    <input id="staking_xrt" v-model="staking_xrt" type="text" required class="small" disabled/>
                    <label for="staking_xrt" class="sign">%</label>
                  </div>
                </div>
                <div class="calc-line-2">
                  <small>KSM质押年回报率</small>
                  <div class="calc-input-signed-right">
                    <input id="staking_ksm" v-model="staking_ksm" type="text" required class="small"/>
                    <label for="staking_ksm" class="sign">%</label>
                  </div>
                </div>
              </div>

              <div class="calc-line">
                <div class="calc-line-1">
                  <small>XRT价格（单位：DAI）</small>
                  <div class="calc-input-signed-left">
                    <label for="price_xrt" class="sign">$</label>
                    <input id="price_xrt" v-model="price_xrt" type="text" required class="small"/>
                  </div>
                </div>
                <div class="calc-line-2">
                  <small>KSM价格（单位：DAI）</small>
                  <div class="calc-input-signed-left">
                    <label for="price_ksm" class="sign">$</label>
                    <input id="price_ksm" v-model="price_ksm" type="text" required class="small"/>
                  </div>
                </div>
              </div>

              <div class="calc-line highlight">
                <div class="calc-line-1">
                   <small>年收益（单位：XRT）</small>
                    <span>{{ reward_xrt }} XRT</span>
                    <small>${{reward_xrt_usd}}</small>
                </div>
                <div class="calc-line-2">
                  <small>年收益（单位：KSM）</small>
                  <span>{{ reward_ksm }} KSM</span>
                  <small>${{reward_ksm_usd}}</small>
                </div>
              </div>

            </div>

            <!-- end of CALC -->

            <div class="form-line">
              <small>选择你的支持方式:</small>
              <select class="block robot" v-model="selectedWay">
                <option selected value="1">1 - 官网</option>
                <option value="2">2 - 波卡Substrate Portal应用程序</option>
                <option value="3">3 - 加密货币交易所Kraken</option>
                <option value="4">4 - Fearless DeFi 钱包</option>
              </select>
            </div>

            <section id="participate-1" class="loading" v-if="selectedWay==1">

              <form>
                <!-- STEP 1 -->
                <template v-if="!isApi">
                <section>
                  <label class="block label">
                    <input type="checkbox" class="big" required v-model="checkedFlags" value="crowdloan-flag-1"/>
                    <span>我已安装 <g-link to="https://polkadot.js.org/extension/">Polkadot.js浏览器扩展</g-link></span>
                  </label>

                  <label class="block label">
                    <input type="checkbox" class="big" required v-model="checkedFlags" value="crowdloan-flag-2" />
                    <span>我的Polkadot.js账户里有KSM</span>
                  </label>

                  <label class="block label">
                    <input type="checkbox" class="big" required  v-model="checkedFlags" value="crowdloan-flag-3" />
                    <span>我的KSM已经解除绑定</span>
                    <tip summary="☝️" position="right-bottom" class="inline-block-clear">
                      若您的KSM目前处于质押中（绑定中），需要先行解除质押，然后才能绑定到众贷模块。请留意Kusama设有大约7天的延迟退出到帐期。 <g-link to="https://wiki.polkadot.network/docs/en/maintain-guides-how-to-unbond">H如何解绑KSM</g-link>
                    </tip>
                  </label>
                </section>

                <p v-if="status_noextension" class="error">请确认您是否有安装Polkadot{.js}扩展</p>

                <Button type="button" @click="connect" button="primary block green large" :disabled="isСonnection || checkedFlags.length!=3" :class="crowdloan_loading?'loading':''">
                  <span class="text">连接Polkadot.js扩展</span>
                </Button>
                </template>
                <!-- end STEP 1 -->


                <!-- STEP 2 -->
                <template v-else-if="isApi && !success">
                <section>

                  <template v-if="accounts.length > 0">
                    <label class="block label">
                      <small>选择账户：</small>
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
                      <small>所选账户余额：</small>
                      <p>{{balanceView}}</p>
                    </label>

                    <label class="block label">
                      <small>Y支持金额：</small>
                      <div class="input-signed-right" :class="validateBalance?'':'error'">
                        <input v-model="contribution" id="contribution" class="block" type="number" placeholder="0" required/>
                        <label for="contribution" class="sign">KSM</label>
                      </div>
                      <div class="msg-error" v-if="!validateBalance">账户余额不足或输入金额有误</div>
                    </label>

                    <label class="block label">
                      <small>您的邮箱（非必填）：</small>
                      <input type="email" class="big block" value="" placeholder="Type your email" v-model="submit_email" :class="!validateEmail?'error':''"/>
                      <div class="msg-error" v-if="!validateEmail&!agree_email">勾选此项即同意让Robonomics发邮件给您；不同意请勿勾选。</div>
                    </label>

                    <label class="block label" v-show="submit_email">
                      <input v-model="agree_email" type="checkbox" class="big" required />
                      <small>我同意Robonomics给我发送邮件</small>
                    </label>

                    <details class="contribution-disclamer">
                      <summary><b>重要披露</b></summary>
                      <article class="hyphens">
                        <p>Robonomics是最早一批采用波卡技术的开发团队之一，我们知道Kusama中继链和Substrate框架当前的实现技术可能有程序错误，也可能将于今年或明年迎来改版。以上这些很重要，众贷活动参与者也需要明确知晓。</p>
                        <p>整个波卡生态系统正处于一个可能没有任何明确期限的成型过程之中。在研究任何开发者的计划时，也请务必牢记这一点。</p>
                        <p>女士们先生们，若加入这项伟大的实验，您将自行承担风险和后果。</p>
                        <p>欢迎与我们并肩同行！</p>
                      </article>
                    </details>
                  </template>

                  <template v-else>
                    <label class="block label error">
                      <small>未发现账户。请在您的钱包扩展中添加账户或将账户解锁。</small>
                    </label>
                  </template>

                </section>

                <p v-if="status_transaction_broken" class="error">交易发生错误。无需担心，请在 <g-link to="https://t.me/robonomics">Robonomics电报社群</g-link> 中询问帮助</p>
                <p v-if="status_transaction_notdone" class="error">交易未执行。无需担心，请在 <g-link to="https://t.me/robonomics">Robonomics电报社群</g-link> 中询问帮助</p>

                <Button type="button" @click="send" button="primary block green large" :disabled="!validateSend" :class="crowdloan_loading?'loading':''">
                  <span class="text">提交支持款</span>
                </Button>
                </template>
                <!-- end STEP 2 -->


                <!-- STEP 3 -->
                <section v-if="success" class="crowdloan-step-3 active">
                  <h3>已收到您支持的 {{contribution}} KSM!</h3>
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
                    <div><small>分享好消息：</small></div>
                    <div class="nowrap">
                      <a href="https://twitter.com/intent/tweet?text=🤖%20My%20$KSM%20work%20for%20%23IoT%20future%20in%20%40AIRA_Robonomics%20Crowdloan&url=https%3A%2F%2Frobonomics.network%2Fkusama-slot%2F" target="_blank" class="inline-block"><g-image alt="On Twitter" src="~/assets/images/twitter.png"/></a>                    </div>
                  </div>
                  <Button type="button" @click="more" button="primary block green large">
                    <span class="text">追加支持</span>
                  </Button>
                </section>
                <!-- end STEP 3 -->


              </form>
            </section>

            <section id="participate-3" v-if="selectedWay==3">
              <p><g-link to="https://www.kraken.com/"><g-image style="max-width:300px" alt="Kraken exchange logo" src="~/assets/images/kraken-logo.webp"/></g-link></p>
              <p>我们已登上Kraken的平行链竞拍平台</p>
              <p><g-link to="https://support.kraken.com/hc/en-us/articles/360060824412">点此了解Kraken的平行链竞拍概况</g-link></p>
              <p><g-link to="https://blog.kraken.com/post/9438/kraken-breaks-new-ground-with-first-of-its-kind-parachain-auction-platform/">点此阅读Kraken发布的博客文章</g-link></p>
            </section>

             <section id="participate-2" v-if="selectedWay==2" style="width:80%">
               <p><g-link style="display:block;word-break: break-all;" to="https://polkadot.js.org/apps/#/parachains/crowdloan">https://polkadot.js.org/apps/#/parachains/crowdloan</g-link></p>
               <p>4月初，Robonomics使用波卡Rococo测试网上的众贷模块进行了一次竞拍彩排。您可以前往推特找到相关推文串，查看社区参与波卡竞拍的标准界面。<g-link style="display:block;word-break: break-all;" to="https://twitter.com/AIRA_Robonomics/status/1377653645827833860">https://twitter.com/AIRA_Robonomics/status/1377653645827833860</g-link></p>
            </section>

            <section id="participate-4" v-if="selectedWay==4">
              <p>您也可以使用 <g-link to="https://fearlesswallet.io">Fearless DeFi 钱包</g-link> 来支持Robonomics众贷。我们去操作了一下，这里是步骤截图：</p>

              <div class="grid-3">
                <g-link to="/assets/crowdloan/fearless-1.jpg" target="_blank"><g-image src="~/assets/images/crowdloan/fearless-1.jpg" alt="在Fearless钱包中参与Robonomics众贷截图 1"/></g-link>
                <g-link to="/assets/crowdloan/fearless-2.jpg" target="_blank"><g-image src="~/assets/images/crowdloan/fearless-2.jpg" alt="在Fearless钱包中参与Robonomics众贷截图 2"/></g-link>
                <g-link to="/assets/crowdloan/fearless-3.jpg" target="_blank"><g-image src="~/assets/images/crowdloan/fearless-3.jpg" alt="在Fearless钱包中参与Robonomics众贷截图 3"/></g-link>
                <g-link to="/assets/crowdloan/fearless-4.jpg" target="_blank"><g-image src="~/assets/images/crowdloan/fearless-4.jpg" alt="在Fearless钱包中参与Robonomics众贷截图 4"/></g-link>
                <g-link to="/assets/crowdloan/fearless-5.jpg" target="_blank"><g-image src="~/assets/images/crowdloan/fearless-5.jpg" alt="在Fearless钱包中参与Robonomics众贷截图 5"/></g-link>
                <g-link to="/assets/crowdloan/fearless-6.jpg" target="_blank"><g-image src="~/assets/images/crowdloan/fearless-6.jpg" alt="在Fearless钱包中参与Robonomics众贷截图 6"/></g-link>
              </div>
            </section>


          </div>

      </section>


      <hr class="animate no-margins" v-in-viewport.once/>

      <section>
        <Abstract text="'“通过拿下Kusama上的一个平行链插槽，我们可为数百位物联网开发者开启通往波卡生态系统的大门，并帮助他们在一众经验丰富的老师和机器人学家指导下踏出第一步。”'" />
        <g-link to="/blog/crowdloan-letter-from-robonomics-co-founder/">Robonomics 联合创始人的一封信</g-link>
      </section>

      <hr class="animate no-margins" v-in-viewport.once/>

      <section class="animate section__dotted section__solid" v-in-viewport.once>
        <h2 class="layout">选择适合你的策略</h2>

        <div class="auction-steps grid-3 animate-inside layout layout__content" v-in-viewport.once>

        <Card orientation="vertical" back="transparent">

          <div class="image">
            <g-image alt="" src="~/assets/images/plo-holder-1.png"/>
          </div>

          <h3>KSM持有者</h3>
          <p class="hyphens">对于那些正打算在未来48周内寻找一些生态系统内KSM多样化质押渠道的人来说，Robonomics PLO可能是个不错的选择。目前可在Uniswap、火币和PancakeSwap上获得XRT。</p>

        </Card>

        <Card orientation="vertical" back="transparent">

          <div class="image">
            <g-image src="~/assets/images/plo-holder-2.png" />
          </div>

          <h3>XRT持有者</h3>
          <p class="hyphens">拿下Kusama插槽的Robomonics网络拥有巨大的可扩展潜力，将为你的XRT增值。 <g-link to="/blog">前往我们的博客了解开发计划</g-link></p>
        </Card>

        <Card orientation="vertical" back="transparent">

          <div class="image">
            <g-image src="~/assets/images/plo-holder-3.png" />
          </div>

          <h3>F技术爱好者</h3>
          <p class="hyphens">Robonomics已经搭建起复杂的生态系统，将 
            <g-link to="https://web3-technology-stack.readthedocs.io">“Web3技术堆栈”（Web3 Technology Stack）</g-link> 与现实世界相连接。这个系统免费且开源，人人都能够用它来体验物联网和智慧服务。加入波卡，它的成本可以变得比现在更加低廉。</p>
        </Card>

      </div>

      </section>

      <hr class="animate no-margins" v-in-viewport.once/>

      <section class="kusama-polkadot-ecosystem section__solid section__lightblue">
        <h2>R波卡生态系统中的Robonomics</h2>

        <div class="grid-3 animate-inside layout layout__content" v-in-viewport.once>

        <Card orientation="vertical" back="transparent" link="https://youtu.be/rbjOmJmilAg">

          <p>
            <g-image alt="波卡社区大会2021视频" src="~/assets/images/Sergei-Polkadot-may-2021.png"/>
          </p>

          <h3>P波卡社区大会2021（POLKADOT DECODED 2021）</h3>
          <p class="hyphens">5月19日，Robonomics创始人谢尔盖·朗沙科夫在波卡社区大会的主会场上发言，谈论智慧城市概念以及其中可能涉及的波卡服务。</p>

        </Card>

        <Card orientation="vertical" back="transparent" link="https://youtu.be/31zXeUq3htE">

          <p>
            <g-image alt="Kusama登上火星视频" src="~/assets/images/Kusama-On-Mars.png"/>
          </p>

          <h3>Kusama登上火星</h3>
          <p class="hyphens">在Hackusama（一场为期7周的在线黑客马拉松活动）上，我们获得了一个没有Kusama就不可能实现的架构灵感。可观看视频并阅读有关这场黑客马拉松成果的总结。</p>

        </Card>

        <Card orientation="vertical" back="transparent" link="https://opensea.io/assets/0x8cb813bf27dc744fc5fb6ba7515504de45d39e08/24">

          <p>
            <g-image alt="Robonomics PolkaPet" src="~/assets/images/robonomics-nft-3.png"/>
          </p>

          <h3>Robonomics PolkaPet</h3>
          <p class="hyphens">PolkaPet是卡片造型的数字收藏品NFT，每张卡片为一只艺术创作生物，代表一个波卡生态系统项目。Robonomics PolkaPet的持有者可以获得额外奖金。</p>

        </Card>

        </div>
      </section>

      <section class="kusama-parachain">
        <section class="kusama-parachain-intro section__solid section__gradient-purpleblue">
          <div class="layout layout__text animate-inside" v-in-viewport.once>
            <h2>波卡上的Robonomics中继链</h2>
            <p class="hyphens">Kusama平行链是Robonomics扩展网络的一个大好机会，可实现在没有任何中心化监管下实时连接最高一百万个物联网系统。</p>
            <p class="hyphens">Robonomics的开发团队已经为Kusama插槽制定了为期2年的计划。我们将尝试基于以下5条平行链开展现有业务及新的软件开发工作：</p>

            <div class="parachains-overview">

              <div class="parachains-overview-description">

                <div class="item" :class="(parachainTab == 1) ?'active':''">
                  <h4>智慧租赁平行链</h4>
                  <p class="align-center">基于将机器人劳动代币化变现的机制，你可以通过出租高价值机器人收回你在其上的投资。</p>
                </div>
                <div class="item" :class="(parachainTab == 2) ?'active':''">
                  <h4>“机器人作为服务”（Robot as a Service, RaaS）平行链</h4>
                  <p class="align-center">获得或提供直接机器人服务，无需收银员、办事员或中心化云服务提供商。</p>
                </div>
                <div class="item" :class="(parachainTab == 3) ?'active':''">
                  <h4>RWS平行链</h4>
                  <p class="align-center">Robonomics Web Services（RWS）将为物联网解决方案提供去中心化基础设施。</p>
                </div>
                <div class="item" :class="(parachainTab == 4) ?'active':''">
                  <h4>DAO IPCI 平行链</h4>
                  <p class="align-center">Robonomics网络为DAO IPCI项目提供环境迁移服务。</p>
                </div>
                <div class="item" :class="(parachainTab == 5) ?'active':''">
                  <h4>Distributed Sky平行链</h4>
                  <p class="align-center">使用区块链技术控制无人机运输（自动化规划无人机飞行线路，去中心化的支付监管，通过智能合约进行交易）</p>
                </div>

              </div>

               <div class="parachains-overview-line">

                  <div class="item" :class="(parachainTab == 1) ?'active':''" @click="parachainTab=1">
                    <g-image src="~/assets/images/parachain-i-leasing.png" />
                    <p class="item-title">智慧出租和租赁</p>
                  </div>

                  <div class="item" :class="(parachainTab == 2) ?'active':''" @click="parachainTab=2">
                    <g-image src="~/assets/images/parachain-i-robot-as-a-service.png" />
                    <p class="item-title">机器人作为服务</p>
                  </div>

                  <div class="item" :class="(parachainTab == 3) ?'active':''" @click="parachainTab=3">
                    <g-image src="~/assets/images/parachain-i-rws.png" />
                    <p class="item-title">物联网应用“云”服务</p>
                  </div>

                  <div class="item" :class="(parachainTab == 4) ?'active':''" @click="parachainTab=4">
                    <g-image src="~/assets/images/parachain-i-enviromental.png" />
                    <p class="item-title">环境迁移</p>
                  </div>

                  <div class="item" :class="(parachainTab == 5) ?'active':''" @click="parachainTab=5">
                    <g-image src="~/assets/images/parachain-i-drones-traffic.png" />
                    <p class="item-title">无人机运输</p>
                  </div>

              </div>


            </div>
          </div>
        </section>
        <section class="draw-polkadotParachain" aria-hidden="true">

          <g-image class="i-polkadot" src="~/assets/images/logo-polkadot.png" alt="波卡平行链" />

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

          <h2 class="animate" v-in-viewport.once>疑问解答</h2>

          <div class="layout__text hyphens faq">
            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">Robonomics平行链插槽竞拍会持续多长时间？</h3>
              <article class="faq-a">
               Robonomics 会在第三轮竞拍时开启众贷模块 (<g-link to="https://polkadot.network/kusama-parachain-auctions/">2021/06/29, 12:00 GMT</g-link>)
               。开启后会持续接受筹款，直到他人赢得竞拍或是第五轮竞拍结束
                (<g-link to="https://polkadot.network/kusama-parachain-auctions/">2021/07/13, 12:00 GMT + 第五轮竞拍的持续时间</g-link>)为止。在参与本次众贷之前，请在 <g-link to="https://twitter.com/AIRA_Robonomics">推特</g-link>
                上再三确认竞拍活动已开启。务必请记得，所有众贷筹集的资金均由众贷模块的逻辑处理，在该逻辑中竞拍活动是通过索引而不是地址来标识的，因此一定不要为支持竞拍活动而将代币转到某个地址。
              </article>
            </section>

            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">为什么Robonomics从第三轮开始参与？</h3>
              <article class="faq-a">
               虽然我们的开发者今天就能发布众贷模块，但我们需要增加一些限制。可以注意到，第一批发布众贷模块的4个项目都设了一个一百万KSM代币的限制。我们将出价定为100,000 KSM（现更新为135,000 KSM），虽然这个金额足够拿下一场Kusama竞拍，但我们也留下了调整的空间，以防在第一轮和第二轮结束后发现需要筹集更多的KSM。简而言之，我们正在努力摸索，争取以最优租金租到一个插槽。
              </article>
            </section>

            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">可以通过交易所参加Robonomics的众贷吗？</h3>
              <article class="faq-a">
               有几家知名交易所已经为其用户提供了众贷支持，比如Kraken和Okex。你在本页面上可以找到参与部分，其中列有在竞拍中支持Robonomics的几种方式。第三轮竞拍开始后，我们将更新支持与众贷模块交互的交易所列表。
              </article>
            </section>

            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">放在Ledger中的KSM可以参加Robonomics的众贷吗？</h3>
              <article class="faq-a">
               因为Ledger应用不支持crowdloan.contribute extrinsic，因此基于Ledger的账户无法直接参与众贷。 <g-link to="https://twitter.com/Ledger_Support/">点此前往Ledger支持</g-link>
              </article>
            </section>

            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">是不是必须先得把我的KSM解绑才能参与竞拍？</h3>
              <article class="faq-a">
               如果您的KSM当前正在抵押（绑定）中，那么需要先解绑。如果您打算通过交易所参加众贷活动，请务必直接与交易所联络获取具体详情。点此前往Kusama WIKI了 <g-link to="https://guide.kusama.network/docs/en/mirror-maintain-guides-how-to-stop-validating#unbond-your-tokens">解如何解绑你的KSM</g-link>。
              </article>
            </section>

            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">参与众贷有最低支持金额限制吗？</h3>
              <article class="faq-a">
               Kusama内置有一个默认最低限额（0.1 KSM），这个限制很大程度上出于可扩展性考虑，而不是意图禁止小额筹款。Robonomics团队没有最低限额限制，只要符合Kusama的众贷要求，我们欢迎您支持任意金额。
              </article>
            </section>

            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">如果竞拍成功了，KSM代币会被锁定多长时间？</h3>
              <article class="faq-a">
               在Robonomics平行链租赁全程期间，您的KSM都将保持锁定状态。在赢得竞拍后，总计将锁定48周的时间。
              </article>
            </section>

            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">平行链租赁结束后，我会拿回我的KSM吗？</h3>
              <article class="faq-a">
               是的。平行链租赁到期后，您的KSM将被自动返还。
              </article>
            </section>

            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">如何/何时发放奖励？</h3>
              <article class="faq-a">
                在上线后的第一个月内，您就会收到全部奖励的50%。完整奖励将在质押一年后发放，收益最高可达100%。比如，如果您获得的是3.5 XRT的标准奖励，那么在网络上线后的第一个月后，您将收到全部奖励的一半，即每质押一个XRT，您都会收到1.725个XRT。
              </article>
            </section>

            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">要是Robonomics从第三轮到第五轮竞拍都没赢，那我的KSM会发生什么？</h3>
              <article class="faq-a">
               若Robonomics没有赢下第三轮竞拍，会接着参与下面的两轮竞拍。如果Robonomics没有赢下任何一场竞拍，则众贷停止，筹到的资金将返还给各贡献者。
              </article>
            </section>

            <section class="animate" v-in-viewport.once>
              <h3 class="faq-q">要是Robonomics第三轮到第五轮竞拍都没赢，Robonomics平行链会怎么样？</h3>
              <article class="faq-a">
               如果本次竞拍时段中Robonomics没能赢下任何一场竞拍，我们会准备参加48周后的下一个竞拍时段。如果下一竞拍时段我们也一无所获，平行链则转为 
               <g-link to="https://wiki.polkadot.network/docs/en/learn-parathreads#docsNav">平行线程</g-link>
               。不过，关于以后的插槽竞拍，我们的开发者已经公布了准备计划：点击查看于2020年10月26日发布的
               <g-link to="https://robonomics.network/blog/robonomics-parachain-lease-offering/">《Robonomics平行链租赁公开发行，链上治理策略》</g-link>
               。我们还准备了一个秘密计划——开发一种算法，并将它内置于Robonomics协议中，该算法将为KSM/DOT持有者自动生成有利的绑定规则。这不仅有利于KSM/DOT持有者，也利于Robonomics。简而言之，我们已经提前考虑到了一些中期事项，现在将继续思考其他重要问题，比如维护平行链状态下的Robonomics。
              </article>
            </section>

          </div>
      </section>

      <hr class="animate no-margins" v-in-viewport.once/>

      <section class="animate section__darkpurple section__solid" v-in-viewport.once>
        <h2 class="layout">关注我们，更新随时知</h2>

        <div class="grid-3 animate-inside layout layout__content" v-in-viewport.once>

        <Card orientation="vertical" back="white" link="https://twitter.com/AIRA_Robonomics" imageLocal="avatars/twitter.jpg" imageSize="mid">
          <h3>Robonomics官方推特</h3>
        </Card>

        <Card orientation="vertical" back="white" link="https://twitter.com/EnsRationis" imageLocal="avatars/Sergey-Lonshakov.jpg" imageSize="mid">
          <h3>软件架构师推特</h3>
        </Card>

        <Card orientation="vertical" back="white" link="https://t.me/robonomics" imageLocal="avatars/telegram.jpg" imageSize="mid">
          <h3>RRobonomics电报社群</h3>
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

        contribution: 1,
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
    animation: blink var(--duration-mainpic) ease-out var(--delay-mainpic) forwards;
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
