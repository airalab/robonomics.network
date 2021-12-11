<template>
    <layout>
        <MetaInfo
            :pageTitle = "$ts('Robonomics token') + ', XRT'"
            :pageDescription = "$ts('XRT is the utility token that will make it possible to control IoT devices on top of the Ethereum network and the Robonomics parachain.')"
            pageImage = "/website_cover_token.jpg"
            pageImageHeight = "650" 
        />

        <section id="banner" class="section__solid section__blue">
            <div class="layout layout__text">
                <h1>{{$ts('Robonomics token')}}, XRT</h1>

                <section class="text-abstract">
                    {{$ts('XRT is the utility token that will make it possible to control IoT devices on top of the Ethereum network and the Robonomics parachain.')}}
                </section>

                <section class="parallax-wrap">
                    <div id="parallax" aria-hidden="true">
                        <div class="parallax-layer" data-depth="0.9"><g-image id="parallax-1" alt="" src="~/assets/images/parallax-parts/xrt-robots-1.png" /></div>
                        <div class="parallax-layer" data-depth="0.8"><g-image id="parallax-2" alt="" src="~/assets/images/parallax-parts/xrt-robots-2.png" /></div>
                        <div class="parallax-layer" data-depth="0.7"><g-image id="parallax-3" alt="" src="~/assets/images/parallax-parts/xrt-robots-3.png" /></div>
                        <div class="parallax-layer" data-depth="0.5"><g-image id="parallax-4" alt="" src="~/assets/images/parallax-parts/xrt-robots-4.png" /></div>
                        <div class="parallax-layer" data-depth="0.4"><g-image id="parallax-5" alt="" src="~/assets/images/parallax-parts/xrt-robots-5.png" /></div>
                        <div class="parallax-layer" data-depth="0.3"><g-image id="parallax-6" alt="" src="~/assets/images/parallax-parts/xrt-robots-6.png" /></div>
                        <div class="parallax-layer" data-depth="0.1"><g-image id="parallax-7" alt="" src="~/assets/images/parallax-parts/xrt-robots-7.png" /></div>
                    </div>
                </section>

                <g-image id="banner-token" alt="" src="~/assets/images/parallax-parts/xrt-robots-7.png" />
            </div>
        </section>

        <section class="section__solid section__darkgray">
            <div class="layout layout__text">
                <section class="animate-inside" v-in-viewport.once>
                    <div class="oldy dark">
                        <div class="text-title">{{$ts('Ethereum ecosystem')}}</div>
                        <p class="text-small">
                            <b>{{$ts('XRT is available as ERC-20 token')}}:</b><br/>
                            <code>0x7de91b204c1c737bcee6f000aaa6569cf7061cb7</code>
                        </p>
                        <g-link to="https://etherscan.io/address/0x7de91b204c1c737bcee6f000aaa6569cf7061cb7" class="out">Etherscan</g-link>
                    </div>
                    
                    <div class="oldy dark">
                        <div class="text-title">{{$ts('Polkadot Ecosystem')}}</div>
                        <p class="text-small">
                            <b>{{$ts('XRT is available as Robonomics parachain native token')}}:</b>
                        </p>
                        <g-link to="https://robonomics.subscan.io" class="out">Subscan</g-link>
                    </div>
                </section>
         
                <div class="subtitle">
                    <p><b>{{$ts('Be careful!')}}</b> {{$ts('Check the address of token while buying. Do not copy the address from chats or any private messages, view it on Etherscan for ERC-20.')}}</p>
                </div>
            </div>
        </section>

        <section class="layout">
            <h2>{{$ts('What you can do with XRT right now?')}}</h2>

            <section class="grid-3 animate-inside" v-in-viewport.once>
                 <div class="oldy grid dark">
                    <p class="text-title">{{$ts('Buy IoT subscriptions')}}</p>
                    <p>{{$ts('We are launching Robonomics Web Services. This sustainable subscription model for IoT devices makes possible to execute zero-weight transactions in blockchain.')}} <g-link to="https://blog.aira.life/rws-overview-part-2-heterogeneous-tokenomics-afc209cc855">{{$ts('Learn more')}}</g-link></p>
                    <div class="gridalign-bottom"><g-link class="button primary" to="https://v2.info.uniswap.org/pair/0x42018a2ff89b6d662b5f746277bd02f0d85f485a">{{$ts('Buy RWS')}}</g-link></div>
                </div>
                
                <div class="oldy grid dark">
                    <p class="text-title">{{$ts('Trade')}}</p>
                    <p>{{$ts('You may buy and sell XRT as an ERC-20 token. The below buttons will take you to the relevant DEXs (Decentralized Exchanges). Please, always double-check the token contract address when buying from a DEX.')}}</p>
                    <div class="line-text gridalign-bottom">
                        <g-link class="button primary" to="https://www.coingecko.com/en/coins/robonomics-network">{{$ts('Watch markets on Coingecko')}}</g-link>
                    </div>
                </div>

                <div class="oldy grid dark">
                    <p class="text-title">{{$ts('Stake')}}</p>
                    <p>{{$ts('Take part in our unique staking program: rewarding stakeholders and enabling more zero-weight transactions for IoT devices.')}} <a href="/blog/xrt-staking-tech-committee-treasury-updates-1-2/" target="_blank">{{$ts('Learn more')}}</a>. {{$ts('Please note that staking is only available for the parachain native XRT token.')}}</p>
                    <div class="gridalign-bottom"><g-link class="button primary" to="https://dapp.robonomics.network/#/staking/" target="_blank">{{$ts('Stake XRT in dapp')}}</g-link></div>
                </div>

               
            </section>

            <div class="text-small align-center">{{$ts('All products listed on this page are not official endorsements, and are provided for informational purposes only.')}}</div>
        </section>

        <hr class="no-margins"/>

        <section >
            <div class="layout layout__text">
                <h2>{{$ts('Token distribution')}}</h2>
                <p class="text-big-light hyphens">{{$ts('Robonomics is a dynamically developing project that does not stand still. Token distribution varies depending on the stage of the project development. We are planning the next changes in 2022. Check out the current state and plans.')}}</p>
                
                <g-link class="oldy oldy__link oldy__card animate" to="https://ipfs.io/ipfs/QmYjv65UNTM3F7LFR1ESm5CVMLWYLagwtT7qGAsaBi47nY/releases_March'21_4v.pdf" v-in-viewport.once>
                    <g-image aria-hidden="true" src="~/assets/images/Token_distribution_slide_2021.jpg" />
                    <div class="align-center text-title">{{$ts('XRT distribution release, March 2021')}}</div>
                </g-link>
            </div>
        </section>

        <hr class="no-margins"/>

        <section >
            <div class="layout layout__text">
                <h2>{{$ts('XRT Fundamentals')}}</h2>
                <p class="text-big-light hyphens">{{$ts('The economy of the token is directly related to the implementation of the network. Read Robonomics White paper from May 12, 2018 and prepare for updates.')}}</p>
                
                <g-link class="oldy oldy__link oldy__card" to="https://static.robonomics.network/docs/whitepaper/Robonomics-whitepaper-en.pdf">
                    <div class="img-back animate-inside" v-in-viewport.once>
                        <g-image aria-hidden="true" src="~/assets/images/robonomics-wp-cover.jpg" />
                    </div>
                    <div class="align-center text-title">{{$ts('Robonomics White paper, May 12, 2018')}}</div>
                </g-link>
            </div>
        </section>

        <hr class="no-margins"/>

        <section >
            <div class="layout layout__text">
                <h2>{{$ts('Other links')}}</h2>

                <g-link class="oldy oldy__link oldy__card" to="https://blog.aira.life/robonomics-x-pancakeswap-buy-and-add-liquidity-on-pancakeswap-a1b87ef9cb99">
                    <p class="text-title">Robonomics x PancakeSwap: Buy and Add Liquidity on PancakeSwap</p>
                    <p class="text-small"><a href="https://anyswap.exchange" target="_blank">ANYSWAP.EXCHANGE TEAM</a> added availability of XRT on the Binance Smart Chain. PancakeSwap is the next step for BSC token. This token contract is maintained by the ANYSWAP.EXCHANGE TEAM. The Robonomics team is not responsible for the issuance of the token in the Binance Smart Chain.</p>
                </g-link>
            </div>
        </section>

        <section class="section__solid  section__gradient-purpleblue">
            <div class="layout layout__text">
                <g-link class="oldy oldy__link oldy__card oldy__card_s" :to="$static.metadata.discord">
                    <div class="img-back animate-inside" v-in-viewport.once>
                        <g-image aria-hidden="true" src="~/assets/images/logos/discord.png" />
                    </div>
                    <div class="align-center text-title">{{$ts('View F.A.Q. and chat with us in Discord')}}</div>
                </g-link>
            </div>
        </section>
    </layout>
</template>

<static-query>
query {
  metadata {
    discord
  }
}
</static-query>

<script>
    import Parallax from 'parallax-js'

    export default {
        components: {
            Card: () => import('~/components/TextCard.vue'),
            MetaInfo: () => import("~/components/MetaInfo.vue"),
        },

        mounted() {
            var scene = document.getElementById('parallax');
            var parallaxInstance = new Parallax(scene);
        },
    }
</script>


<style scoped>

    #banner {
        overflow: hidden
    }

    #banner-token {
        display: none;
        max-width: 200px;
        margin: 0 auto;
    }

    @media screen and (min-width: 700px) {
        .parallax-wrap {
            transform: scale(1.5);
        }
    }

    @media screen and (max-width: 580px) {
        .parallax-wrap {
            display: none;
        }

         #banner-token {
            display: block;
        }
    }

    #parallax {
        position: relative;
        width: 606px;
        height: 230px;
        margin: 0 auto;
    }

    .parallax-layer {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    #parallax img {
        position: absolute;
    }

    #parallax-1 {
        width: 80px;
        left: 0;
        top: 26px;
    }

    #parallax-2 {
        width: 50px;
        left: 606px;
        top: 46px;
    }

    #parallax-3 {
        width: 72px;
        left: 178px;
        top: 10px;
    }

    #parallax-4 {
        width: 83px;
        left: 500px;
        top: 0;
    }

    #parallax-5 {
        width: 181px;
        left: 22px;
        top: 40px;
    }

    #parallax-6 {
        width: 164px;
        left: 380px;
        top: 60px;
    }

    #parallax-7 {
        width: 176px;
        left: calc(50% - 88px);
        top: 64px;
    }
</style>