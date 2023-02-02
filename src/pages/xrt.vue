<template>
    <layout>
        <MetaInfo
            pageTitle = "Robonomics token"
            pageDescription = "XRT is the utility token that will make it possible to control IoT devices on top of the Ethereum network and the Robonomics parachain."
            pageImage = "/website_cover_token.jpg"
            pageImageHeight = "650" 
        />


        <section class="token">
            <div class="token__main-title title-with-bg">
                <h1><span>Robonomics tokenomics</span></h1>
            </div>
            <div class="layout token__top">
                <div class="grid-2 token__intro">
                    <p>
                        <span class="bold"><span class="token__big-text">XRT</span> is the utility token that will make it possible to control IoT devices on top of the Ethereum network and the Robonomics parachain in Polkadot ecosystem.</span>
                        The task of the Robonomics token is to ensure the operation of a decentralized network for the maintenance of Smart Cities and Industry 4.0 in blockchain infrastructure. In order to achieve this goal, the token economy needs to reflect the incentives for the implementation of the network. 
                    </p>
                    <div class="token__parallax parallax-wrap">
                        <div id="parallax" aria-hidden="true">
                            <div class="parallax-layer" data-depth="0.1"><g-image id="parallax-7" alt="" src="~/assets/images/parallax-parts/xrt-robots-7.png" /></div>
                            <div class="parallax-layer" data-depth="0.9"><g-image id="parallax-1" alt="" src="~/assets/images/parallax-parts/xrt-robots-1.png" /></div>
                            <div class="parallax-layer" data-depth="0.4"><g-image id="parallax-5" alt="" src="~/assets/images/parallax-parts/xrt-robots-5.png" /></div>
                            <div class="parallax-layer" data-depth="0.7"><g-image id="parallax-3" alt="" src="~/assets/images/parallax-parts/xrt-robots-3.png" /></div>
                        </div>
                    </div>
                    <div><g-image id="banner-token" alt="" src="~/assets/images/parallax-parts/xrt-robots-7.png" /></div>
                </div>
                <p class="text-abstract token__text-abstract">Be aware of scammers: please use only well known markets to exchange XRT. Do not send your tokens to accounts that are given to you in private messages whatever transaction you would like to carry out (buy or sell token). If you received any ‘loud statements’ about Robonomics token (scammers often use something like airdrop announcement), please check this website(https://robonomics.network/) or our <g-link :to="twitter[0].options[0].link">Twitter</g-link> for official updates. Be carefull, be safe.</p>
            </div>
        </section>

        <section class="layout layout__text xrt-ethereum">
            <h2>XRT in Ethereum</h2>

            <section class="animate-inside" v-in-viewport.once>
                    <div class="oldy dark">
                        <g-link to="/timeline" class="token__link timeline">
                            <h3 class="token__subtitle">Timeline</h3>
                            <p>Read this to know historical background and long-term plans of team for XRT in Ethereum ecosystem.</p>
                        </g-link>
                        <g-link to="https://etherscan.io/token/0x7de91b204c1c737bcee6f000aaa6569cf7061cb7" class="token__link enterscan">
                            <h3 class="token__subtitle">Etherscan profile</h3>
                            <p>View token smart contract and transactions in Ethereum network here.</p>
                        </g-link>
                        <g-link to="https://www.coingecko.com/en/coins/robonomics-network" class="token__link coingecko">
                            <h3 class="token__subtitle">Coingecko markets</h3>
                            <p>Here you can find CEX and DEX markets for trading XRT.</p>
                        </g-link>
                    </div>
                    <p>Implementing Robonomics project in 2015 - 2018, the project team needed to find a connection between the provision of a useful function by Robonomics Network, namely the launch of IoT devices according to the robot-as-a-service model, and the reimbursement of the costs to Robonomics providers for gas fees in Ethereum. We needed to think about the lifecycle of each individual smart device’s liability to perform a service. As a result of the early R&D in Robonomics, the team came up with a mechanism for mining new tokens to reward each created robot-as-a-service smart contract. This model remains viable for future of Robonomics on Ethereum, but only with a significant improvements in Ethereum.</p>
            </section>
        </section>

        <div class="youtube-embed animate-inside" v-in-viewport.once>
            <div class="youtube-embed__wrapper">
                <div class="youtube-embed__container">
                    <iframe width="860" height="480" src="https://www.youtube.com/embed/a2EWaaFcFm8?autoplay=1&mute=1" title="Life cycle in the Robonomics network with the application of observing networks" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>


        <section class="layout layout__text xrt-polkadot animate-inside" v-in-viewport.once>
            <h2>XRT In Polkadot</h2>

            <section class="animate-inside" v-in-viewport.once>
                    <div class="oldy dark">
                        <g-link to="https://dapp.robonomics.network/#/" class="token__link use">
                            <h3 class="token__subtitle">Use XRT</h3>
                            <p>Buy IoT subscription in our decentralized application. Control your smart devices over blockchain without any centralized corporation observing.</p>
                        </g-link>
                        <g-link to="https://robonomics.subscan.io/" class="token__link subscan">
                            <h3 class="token__subtitle">Subscan profile</h3>
                            <p>View token statistics on top of Polkadot ecosystem.</p>
                        </g-link>
                        <g-link to="https://www.coingecko.com/en/coins/robonomics-network" class="token__link coingecko">
                            <h3 class="token__subtitle">Coingecko markets</h3>
                            <p>Here you can find CEX and DEX markets for trading XRT.</p>
                        </g-link>
                    </div>

                    <div class="token__graph">
                        <g-image alt="graph" src="@/assets/images/xrt-graph.png"/>
                        <g-link to="https://ipfs.io/ipfs/QmYjv65UNTM3F7LFR1ESm5CVMLWYLagwtT7qGAsaBi47nY/releases_March'21_4v.pdf"  class="link-btn">XRT token distribution</g-link>
                    </div>

                    <p class="xrt-polkadot__text">Moving from Ethereum to Polkadot, we need to do a “scaling up” in tokenomics. Parachains in the Polkadot ecosystem are not the equivalent of a smart contract, but are a fully programmable blockchain that leases a segment of the overall network.</p>


                    <p class="xrt-polkadot__text">The actual payment on the part of Polkadot and Kusama parachains is long-term bonding of native Relay chain tokens (DOT / KSM) in sufficient quantity to win one of the auctions. The XRT in the Robonomics parachain supports slot renewal and rewards for stakeholders. The XRT burning mechanism underlying the activation of IoT subscriptions is designed to reduce inflation to a minimum, and in case of increased interest to zero. <g-link to="https://twitter.com/EnsRationis/status/1607327921793892354">Learn more</g-link> in Twitter thread from our network architect. </p>

                    <div class="xrt-polkadot__info">
                        <h3 class="token__subtitle">Usage:</h3>
                        <p>XRT can be used both to pay fees for performing transactions on the parachain or to purchase an IoT subscription that guarantees priority processing of device or user IoT transactions.</p>
                    </div>

                    <div class="xrt-polkadot__info">
                        <h3 class="token__subtitle">Rewards:</h3>
                        <p>Throughout the year, the parachain issues a small amount of XRT to incentivize parachain collators. <g-link to="https://robonomics.polkassembly.io/proposal/5"> The parameter of the total reward</g-link> for collators for the year is determined by on-chain voting of token holders, and can be changed by holding a referendum.</p>
                    </div>
            </section>
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
    import contacts from '@/data/contact.yaml'
    import Parallax from 'parallax-js'

    export default {
        components: {
            Card: () => import('~/components/TextCard.vue'),
            MetaInfo: () => import("~/components/MetaInfo.vue"),
        },

        computed: {
            twitter() {
                return contacts.filter(item => item.title.toLowerCase() === "twitter");
            }
        },

        mounted() {
            var scene = document.getElementById('parallax');
            var parallaxInstance = new Parallax(scene);
        },
    }
</script>


<style scoped>

    .token {
        margin: 0;
        padding-bottom: calc(var(--space) * 2);
        background-color: var(--color-grey-lights);
    }

    .token__subtitle {
        margin-bottom: calc(var(--space) * 0.5);
        font-family: var(--font-family);
        font-size: var(--base-font-size);
        font-weight: 500;
        text-transform: none;
        text-align: left;
    }

    .token__top {
        margin-top: 0;
        max-width: 1480px;
        padding-top: calc(var(--space) * 2);
        overflow: hidden
    }

    #banner-token {
        display: none;
        max-width: 200px;
        margin: 0 auto;
    }
    

    .token__intro {
        padding-top: var(--space);
        /* padding-bottom: var(--space);
        margin-bottom: 52px; */
    }

    .token__intro p {
        margin-right: var(--space);
    }

    .token__text-abstract {
        font-size: 100%;
        text-align: left;
        font-style: italic;
    }

    .token__big-text {
        font-size: 180%;
    }

    @media screen and (min-width: 700px) {
        .parallax-wrap {
            transform: scale(1.2);
        }
    }

    #parallax {
        position: relative;
        width: 606px;
        height: 430px;
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
        right: 60px;
        top: 76px;
    }

    #parallax-3 {
        width: 72px;
        right: 178px;
        top: 50px;
    }

    #parallax-5 {
        width: 232px;
        right: 164px;
        top: 105px;
    }

    #parallax-7 {
        width: 225px;
        left: 0px;
        top: -42px;
    }

    .xrt-ethereum .oldy,
    .xrt-polkadot .oldy {
        margin-bottom: calc(var(--space) * 3);
    }

    .token__link {
        display: inline-block;
        width: 100%;
        text-align: left;
    }

    .token__link:not(last-child) {
        margin-bottom: var(--space);
    }

    .token__link h3 {
        padding-left: 34px;
        background-size: 20px 20px;
        background-repeat: no-repeat;
        background-position: left
    }

    .token__link.timeline h3 {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20.163' height='18.007' viewBox='0 0 20.163 18.007'%3E%3Cg id='_-Product-Icons' data-name='Product-Icons' transform='translate(-1.995 -2.997)'%3E%3Cg id='ic_fluent_timeline_24_filled'%3E%3Cpath id='_Color' data-name='Color' d='M15.25,13A1.75,1.75,0,0,1,17,14.75v4.5A1.75,1.75,0,0,1,15.25,21H3.75A1.75,1.75,0,0,1,2,19.253v-4.5A1.75,1.75,0,0,1,3.75,13ZM21,14.9V20.25a.75.75,0,0,1-1.493.1l-.007-.1V14.906A3.023,3.023,0,0,0,21,14.9Zm-.75-4.8A1.908,1.908,0,1,1,18.342,12,1.908,1.908,0,0,1,20.25,10.092Zm-5-7.1A1.75,1.75,0,0,1,17,4.747v4.5A1.75,1.75,0,0,1,15.245,11H3.745A1.75,1.75,0,0,1,2,9.25v-4.5A1.75,1.75,0,0,1,3.6,3L3.745,3ZM20.25,3a.75.75,0,0,1,.743.648l.007.1V9.1a3.023,3.023,0,0,0-1.5-.011V3.75A.75.75,0,0,1,20.25,3Z' fill='%232949d3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    .token__link.enterscan h3 {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17.597' height='17.591' viewBox='0 0 17.597 17.591'%3E%3Cg id='etherscan-logo-circle' transform='translate(-219.378 -213.33)'%3E%3Cpath id='Path_1' data-name='Path 1' d='M223.035,221.705a.746.746,0,0,1,.749-.746l1.242,0a.747.747,0,0,1,.747.747v4.7c.14-.041.319-.086.516-.132a.622.622,0,0,0,.48-.606v-5.826a.747.747,0,0,1,.747-.747h1.245a.747.747,0,0,1,.747.747v5.408s.312-.126.615-.254a.623.623,0,0,0,.381-.574v-6.447a.747.747,0,0,1,.747-.747h1.245a.747.747,0,0,1,.747.747v5.309a14.6,14.6,0,0,0,3.04-2.854,1.254,1.254,0,0,0,.191-1.17,8.791,8.791,0,1,0-15.926,7.265,1.112,1.112,0,0,0,1.061.549c.235-.021.529-.05.877-.091a.622.622,0,0,0,.552-.617v-4.662' transform='translate(0 0)' fill='%232949d3'/%3E%3Cpath id='Path_2' data-name='Path 2' d='M244.416,277.566a8.794,8.794,0,0,0,13.967-7.113c0-.2-.009-.4-.023-.6-3.213,4.792-9.146,7.032-13.944,7.715' transform='translate(-21.408 -48.327)' fill='%232949d3'/%3E%3C/g%3E%3C/svg%3E");
    }

    .token__link.coingecko h3 {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17.151' height='17.151' viewBox='0 0 17.151 17.151'%3E%3Cg id='XMLID_200_' transform='translate(1.005 1.005)'%3E%3Cg id='XMLID_202_' transform='translate(-1.005 -1.005)'%3E%3Cg id='Group_4819' data-name='Group 4819'%3E%3Cpath id='Path_8306' data-name='Path 8306' d='M7.532-1.005a8.576,8.576,0,1,0,8.614,8.537A8.576,8.576,0,0,0,7.532-1.005ZM6.446,7.15A1.532,1.532,0,1,1,7.979,5.617,1.534,1.534,0,0,1,6.446,7.15ZM7.669,8.807l.008-.01.008-.01a2.758,2.758,0,0,0,1.436.4,6.747,6.747,0,0,0,1.51-.125A8.125,8.125,0,0,0,12.1,8.606a7.22,7.22,0,0,0,.785-.372l0,0c.157-.1.311-.194.462-.3.033-.024.065-.048.1-.073l0,0,.013.016a5.6,5.6,0,0,1-1.312.842,8.408,8.408,0,0,1-1.472.537,4.623,4.623,0,0,1-1.571.181A2.177,2.177,0,0,1,7.669,8.807ZM11.6,7.15a.332.332,0,1,1,.333.33A.333.333,0,0,1,11.6,7.15ZM8.977,15.376c-.332-2.322,1.694-4.594,2.838-5.757.259-.264.661-.627,1.034-1.013,1.483-1.386,1.779-3.044-1.258-3.873-.575-.167-1.172-.4-1.775-.642a1.414,1.414,0,0,0-.065-.157,1.7,1.7,0,0,0-.375-.413A2.141,2.141,0,0,0,7.6,3.338a4.478,4.478,0,0,0-2.077-.065C2.587,4.081,2.115,5.514,2,7.24a13.768,13.768,0,0,1-.953,4.842,7.931,7.931,0,1,1,7.929,3.294Z' transform='translate(1.005 1.005)' fill='%232949d3'/%3E%3C/g%3E%3C/g%3E%3Cpath id='XMLID_201_' d='M402.457,350.078A1.078,1.078,0,1,1,401.378,349,1.078,1.078,0,0,1,402.457,350.078Z' transform='translate(-394.932 -344.447)' fill='%232949d3'/%3E%3C/g%3E%3C/svg%3E");
    }

    .token__link.use h3 {
        background-image: url("data:image/svg+xml,%3Csvg id='Core' xmlns='http://www.w3.org/2000/svg' width='19.689' height='17.501' viewBox='0 0 19.689 17.501'%3E%3Cg id='drive-site'%3E%3Cpath id='Shape' d='M17.5,0H2.188A2.194,2.194,0,0,0,0,2.188V15.314A2.194,2.194,0,0,0,2.188,17.5H17.5a2.194,2.194,0,0,0,2.188-2.188V2.188A2.194,2.194,0,0,0,17.5,0ZM12.032,15.314H2.188V10.938h9.845v4.375Zm0-5.469H2.188V5.469h9.845V9.845ZM17.5,15.314H13.126V5.469H17.5v9.845Z' fill='%232949d3' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E");
    }

    .token__link.subscan h3 {
        background-image: url("data:image/svg+xml,%3Csvg id='id-1' xmlns='http://www.w3.org/2000/svg' width='17.501' height='17.501' viewBox='0 0 17.501 17.501'%3E%3Cg id='SUBSCAN-1'%3E%3Cpath id='Fill-1' d='M9.68,2.244A1.315,1.315,0,0,0,7.821.385L.385,7.821a1.314,1.314,0,0,0,0,1.859L4.1,13.4h0a1.314,1.314,0,0,0,1.859,0l6.507-6.507,1.859,1.859L7.821,15.257A1.315,1.315,0,1,0,9.68,17.116L17.116,9.68a1.314,1.314,0,0,0,0-1.859L13.4,4.1a1.315,1.315,0,0,0-1.859,0L5.033,10.61,3.174,8.751Z' transform='translate(0 0)' fill='%232949d3' opacity='0.2'/%3E%3Cpath id='Fill-3' d='M2.244,11.007a1.315,1.315,0,1,1-1.859,0,1.314,1.314,0,0,1,1.859,0' transform='translate(0 -3.186)' fill='%232949d3'/%3E%3Cpath id='Fill-5' d='M7.555,5.7A1.315,1.315,0,1,1,5.7,5.7a1.315,1.315,0,0,1,1.859,0' transform='translate(-1.593 -1.593)' fill='%232949d3'/%3E%3Cpath id='Fill-7' d='M12.866.385a1.315,1.315,0,1,1-1.859,0,1.315,1.315,0,0,1,1.859,0' transform='translate(-3.186 0)' fill='%232949d3'/%3E%3Cpath id='Fill-9' d='M7.555,16.318a1.315,1.315,0,1,1-1.859,0,1.315,1.315,0,0,1,1.859,0' transform='translate(-1.593 -4.779)' fill='%232949d3'/%3E%3Cpath id='Fill-11' d='M12.866,11.007a1.315,1.315,0,1,1-1.859,0,1.314,1.314,0,0,1,1.859,0' transform='translate(-3.186 -3.186)' fill='%232949d3'/%3E%3Cpath id='Fill-13' d='M18.177,5.7a1.315,1.315,0,1,1-1.859,0,1.315,1.315,0,0,1,1.859,0' transform='translate(-4.779 -1.593)' fill='%232949d3'/%3E%3Cpath id='Fill-15' d='M12.866,21.63a1.315,1.315,0,1,1-1.859,0,1.315,1.315,0,0,1,1.859,0' transform='translate(-3.186 -6.372)' fill='%232949d3'/%3E%3Cpath id='Fill-17' d='M18.177,16.318a1.315,1.315,0,1,1-1.859,0,1.314,1.314,0,0,1,1.859,0' transform='translate(-4.779 -4.779)' fill='%232949d3'/%3E%3Cpath id='Fill-19' d='M23.489,11.007a1.315,1.315,0,1,1-1.859,0,1.314,1.314,0,0,1,1.859,0' transform='translate(-6.372 -3.186)' fill='%232949d3'/%3E%3C/g%3E%3C/svg%3E");
    }

    .token__link p {
        color: var(--color-dark);
    }

    .youtube-embed {
        max-width: 1300px;
        margin-right: auto;
        margin-left: auto;
        padding-left: var(--space);
        padding-right: var(--space);
    }

    .token__graph {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: calc(var(--space) * 3);
    }

    .token__graph img {
        width: 257px;
        height: 257px;
        margin-bottom: var(--space);
    }

    .xrt-polkadot__info h3 {
        margin-bottom: calc(var(--space) * 0.2);
    }

    .xrt-polkadot__info:not(last-child) {
        margin-bottom: var(--space);
    }

    @media screen and (max-width: 1300px) {
        .token__intro {
            /* grid-template-columns: 1fr;
            gap: calc(var(--space) * 2); */
            display: flex !important;
            align-items: center;
            flex-direction: column;
        }

        .token__intro p {
            margin-right: 0;
        }

        .token__parallax {
            padding-top: 20px;
            transform: none;
        }

        #parallax-5 {
            width: 293px;
            right: 52px;
            top: 118px;
        }

        #parallax-7 {

            left: 40px;
            top: -42px;
        }
    }

    @media screen and (max-width: 580px) {
        .parallax-wrap {
            display: none;
        }

         #banner-token {
            display: block;
            margin-bottom: var(--space);
        }    
        
        .token__intro {
            gap: var(--space);
        }
    }
</style>