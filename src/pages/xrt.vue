<template>
    <layout>
        <MetaInfo
            pageTitle = "XRT tokenomics"
            pageDescription = "XRT is the utility token that will make it possible to control IoT devices on top of the Ethereum network and the Robonomics parachain."
            pageImage = "/website_cover_token.jpg"
            pageImageHeight = "650" 
        />

        <section class="top-part">
            <section class="token section__blue section__solid">
                <div class="token__main-title title-with-bg">
                    <h1><span>{{ $t('Robonomics tokenomics') }}</span></h1>
                </div>
                <div class="layout token__top">
                    <div class="grid-2 token__intro ">
                        <p> <span class="token__big-text">XRT</span> {{ $t('is the utility token that will make it possible to control IoT devices on top of the Ethereum network and the Robonomics parachain in Polkadot ecosystem.') }} </p>
    
                        <g-link to="https://ipfs.io/ipfs/Qmb3efpK5jihHbZDVL9fBsvpTMn97uxw3cqUT4frzKua1s"  class="token__graph" dir="ltr">
                            <div class="token__graph-arrow">
                                <span>{{ $t('Token distribution') }}</span>
                                <ArrowIcon />
                            </div>
                            <div class="graph-img">
                                <XRTGraph v-in-viewport.once/>
                            </div>
                        </g-link>

                    </div>
                </div>
            </section>

            <hr class="no-margins" />

            <section class="xrt-bridge section__solid">
                <div class="layout grid-2">
                    <div class="xrt-bridge__imgs" aria-hidden="true">
                        <g-image src="~/assets/images/xrt-bridge-img.png" />
                    </div>
                    <div class="xrt-bridge__text token__intro">
                        <p><span class="token__big-text">{{ $t('The task') }}</span> {{ $t('of the Robonomics token is to ensure the operation of a decentralized network for the maintenance of Smart Cities and Industry 4.0 in blockchain infrastructure. In order to achieve this goal, the token economy needs to reflect the incentives for the implementation of the network.') }}</p>
                        <div class="section-align-right">
                            <rbnet-button link="https://dapp.robonomics.network/" color="blue">{{ $t('Try our Dapp') }}</rbnet-button>
                        </div>
                    </div>
                </div>
            </section>

            <hr class="no-margins color-lightgray" />

            <section class="token-additional-info section__solid"> 
                <div class="layout token__top">
                    <p class="token-additional-info__txt"> <span class="token__big-text">{{ $t('In addition') }}</span> {{ $t('you can operate XRT within blockchains using tools provided by different independent teams in Polkadot (Kusama) and Ethereum communities.') }}</p>

                    <div class="token-additional-info__wrapper grid-2">
                        <div class="token-additional-info__kusama"> 
                            <p>{{$t('Within the Kusama network, you have the capability use') }} <g-link class="link-light" to="https://wiki.polkadot.network/docs/learn-xcm-transport">XCMP</g-link> {{$t('communication between the Robonomics parachain and other parachains using various decentralized applications (dApps):')}}  
                            </p>
                            <ul class="list-simple">
                                <li class="bold-text">
                                    <g-link to="https://apps.moonbeam.network/moonriver/xcm">Moonriver</g-link>
                                </li>
                                <li class="bold-text">
                                    <g-link to="https://app.basilisk.cloud/">Basilisk</g-link>
                                </li>
                                <li class="bold-text">
                                    <g-link to="https://novawallet.io">Nova Wallet</g-link>
                                </li>
                            </ul>
                        </div>
                        <div class="token-additional-info__ethereum"> 
                            <p>{{$t('Within the Ethereum network you can use decentralized application powered by the') }}<g-link class="bold-text" to="https://app.uniswap.org/">Uniswap</g-link> Protocol.
                            </p>
                            <div class="token-additional-info__attention">
                                <p><b>! {{ $t('Attention please') }}</b></p>
                                <p>{{ $t('If you have been utilizing The Multichain service for bridge transactions, please refrain from using it at the moment, as it has been') }} <g-link class="link-light" to="https://twitter.com/MultichainOrg/status/1677180114227056641">{{ $t('announced')}}</g-link> {{ $t('on the official Twitter of The Multichain.') }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr class="no-margins color-lightgray" />


            <section class="pink-block">
                <div class="layout token__top">
                    <p class="text-abstract token__text-abstract"> <b>{{ $t('Be aware of scammers') }}</b>: {{ $t('please use only well known markets to exchange XRT. Do not send your tokens to accounts that are given to you in private messages whatever transaction you would like to carry out (buy or sell token). If you received any ‘loud statements’ about Robonomics token (scammers often use something like airdrop announcement), please check this website(https://robonomics.network/) or our') }} <g-link :to="twitter[0].options[0].link">Twitter</g-link> {{$t('for official updates. Be careful, be safe.')}}</p>              
                </div>
            </section>

        </section>

        <section class="layout layout__text xrt-ethereum">
            <h2>{{ $t('XRT in Ethereum') }}</h2>

            <section>
                <p>{{ $t('Implementing Robonomics project in 2015 - 2018, the project team needed to find a connection between the provision of a useful function by Robonomics Network, namely the launch of IoT devices according to the robot-as-a-service model, and the reimbursement of the costs to Robonomics providers for gas fees in Ethereum. We needed to think about the lifecycle of each individual smart device’s liability to perform a service. As a result of the early R&D in Robonomics, the team came up with a mechanism for mining new tokens to reward each created robot-as-a-service smart contract. This model remains viable for future of Robonomics on Ethereum, but only with a significant improvements in Ethereum.') }}</p>
            </section>

            <Youtube
            title="Life cycle in the Robonomics network with the application of observing networks"
            src="https://www.youtube.com/embed/a2EWaaFcFm8"
            />

            <div class="youtube-embed">
                <div class="oldy dark">
                    <div class="token__link timeline">
                        <g-link to="/timeline">
                            <h3 class="token__subtitle">{{$t('Timeline')}}</h3>
                        </g-link>
                        <p>{{ $t('Read this to know historical background and long-term plans of team for XRT in Ethereum ecosystem.') }}</p>
                    </div>
                    <div class="token__link enterscan">
                        <g-link to="https://etherscan.io/token/0x7de91b204c1c737bcee6f000aaa6569cf7061cb7">
                            <h3 class="token__subtitle">{{ $t('Etherscan profile') }}</h3>
                        </g-link>
                        <p>{{ $t('View token smart contract and transactions in Ethereum network here.') }}</p>
                    </div>
                    <div class="token__link coingecko">
                        <g-link to="https://www.coingecko.com/en/coins/robonomics-network" >
                            <h3 class="token__subtitle">{{ $t('Coingecko markets') }}</h3>
                        </g-link>
                        <p>{{ $t('Here you can find CEX and DEX markets for trading XRT.') }}</p>
                    </div>
                </div>
            </div>

    
        </section>

        <section class="layout layout__text xrt-polkadot">
            <h2>{{ $t('XRT In Polkadot') }}</h2>

            <section>
                
                <p class="xrt-polkadot__text">{{ $t('Moving from Ethereum to Polkadot, we need to do a “scaling up” in tokenomics. Parachains in the Polkadot ecosystem are not the equivalent of a smart contract, but are a fully programmable blockchain that leases a segment of the overall network.') }}</p>


                    <p class="xrt-polkadot__text"> {{$t('The actual payment on the part of Polkadot and Kusama parachains is long-term bonding of native Relay chain tokens (DOT / KSM) in sufficient quantity to win one of the auctions. The XRT in the Robonomics parachain supports slot renewal and rewards for stakeholders. The XRT burning mechanism underlying the activation of IoT subscriptions is designed to reduce inflation to a minimum, and in case of increased interest to zero.') }} <g-link to="https://twitter.com/EnsRationis/status/1607327921793892354">{{ $t('Learn more') }}</g-link> {{ $t('in Twitter thread from our network architect.')}} </p>

                    <div class="xrt-polkadot__info">
                        <h3 class="token__subtitle">{{ $t('Usage:') }}</h3>
                        <p>{{ $t('XRT can be used both to pay fees for performing transactions on the parachain or to purchase an IoT subscription that guarantees priority processing of device or user IoT transactions.') }}</p>
                    </div>

                    <div class="xrt-polkadot__info">
                        <h3 class="token__subtitle">{{ $t('Rewards:') }}</h3>
                        <p>{{ $t('Throughout the year, the parachain issues a small amount of XRT to incentivize parachain collators.') }}<g-link to="https://robonomics.polkassembly.io/proposal/5"> {{ $t('The parameter of the total reward') }}</g-link> {{$t('for collators for the year is determined by on-chain voting of token holders, and can be changed by holding a referendum.')}}</p>
                    </div>

                    <div class="youtube-embed">
                        <div class="oldy dark">
                            <div class="token__link use">
                                <g-link to="https://dapp.robonomics.network/#/">
                                    <h3 class="token__subtitle">{{ $t('Use XRT') }}</h3>
                                </g-link>
                                <p>{{ $t('Buy IoT subscription in our decentralized application. Control your smart devices over blockchain without any centralized corporation observing.') }}</p>
                            </div>
                            <div class="token__link subscan">
                                <g-link to="https://robonomics.subscan.io/">
                                    <h3 class="token__subtitle">{{ $t('Subscan profile') }}</h3>
                                </g-link>
                                <p>{{ $t('View token statistics on top of Polkadot ecosystem.') }}</p>
                            </div>
                            <div class="token__link coingecko">
                                <g-link to="https://www.coingecko.com/en/coins/robonomics-network" >
                                    <h3 class="token__subtitle">{{ $t('Coingecko markets') }}</h3>
                                </g-link>
                                <p>{{ $t('Here you can find CEX and DEX markets for trading XRT.') }}</p>
                            </div>
                        </div>
                    </div>
            </section>
        </section>

        <section class="layout layout__text xrt-questions">
                <h2>{{ $t('Other questions') }}</h2>

                <div class="xrt-polkadot__info">
                    <h3 class="token__subtitle">{{ $t('What is RWS?') }}</h3>
                    <p>{{ $t('[Under development of core functionality] For engineers, Core Dev team will try to make different Robonomics usage models and the first step in this way is launching lifetime subscription token - RWS token. Each RWS token will give you 1 transaction per second (tps) from/to your IoT device over Robonomics Parachain. Activate your RWS token and make "free gas" transactions with prior to execute and predictable latency. Deactivate RWS token and trade it on DEX.') }}</p>
                </div>

                <div class="xrt-polkadot__info">
                    <h3 class="token__subtitle">{{ $t('What is AIRA/AIR ID?') }}</h3>
                    <p>{{ $t('Pre-XRT token distributed in 2017 as a autonomous part of futher Robonomics infrastructure on Ethereum. After successful launch of Robonomics over Ethereum in 2019 AIRA tokens was connected to created infrastructure of the project through') }} <g-link to="https://github.com/airalab/robonomics_contracts/blob/master/contracts/misc/AbstractAmbix.sol">{{ $t('ambix smart contract') }}</g-link> {{ $t('which guaranteed autonomous and independent process of swapping pre-XRT to ERC-20 XRT.') }}</p>
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
    import ArrowIcon from '@/assets/images/xrt-arrow.svg';
    import contacts from '@/data/contact.yaml'

    export default {
        components: {
            Card: () => import('~/components/TextCard.vue'),
            XRTGraph: () => import("~/components/XRTGraph.vue"),
            MetaInfo: () => import("~/components/MetaInfo.vue"),
            ArrowIcon
        },

        computed: {
            twitter() {
                return contacts.filter(item => item.title.toLowerCase() === "twitter");
            }
        }
    }
</script>


<style scoped>

    .top-part {
        overflow: hidden;
        padding-bottom: calc(var(--space) * 2);
        margin: 0;
    }

    .token {
        padding-top: 0;
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
        max-width: 1300px;
        padding-top: calc(var(--space) * 2);
        overflow: hidden
    }

    #banner-token {
        display: none;
        max-width: 200px;
        margin: 0 auto;
    }

    .token__intro {
        align-content: end;
        justify-items: end;
        gap: calc(var(--space) * 3);
    }

    .token__intro p {
        /* margin-right: var(--space); */
        /* align-self: end;
        padding-bottom: 50px; */
        font-size: 132%;
        font-weight: 500;
        align-self: center;
    }

    .token__text-abstract {
        font-size: 100%;
        text-align: left;
        font-style: italic;
        padding-bottom: calc(var(--space) * 2);
    }

    .token__bottom-text {
        font-style: normal;
        font-size: 120%;
    }

    .token__big-text {
        font-size: 218%;
        line-height: 0;
    }

    .token-additional-info {
        padding-bottom: calc(var(--space) * 1.5);
        background-color: var(--color-light);
        color: var(--color-dark);
    }

    .token-additional-info__wrapper {
        gap: 2rem;
    }

    .token-additional-info p {
        font-weight: 300;
    }

    .token-additional-info__txt {
        font-size: 132%;
    }

    .token-additional-info .token__big-text {
        font-weight: 500;
    }

    .token-additional-info__kusama {
        position: relative;
        padding-left: calc(var(--space) * 3);
    }

    .token-additional-info__kusama::after {
        content: url("data:image/svg+xml,%3Csvg width='70' height='43' viewBox='0 0 70 43' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_408_10987)'%3E%3Cpath d='M65.8559 2.29637C64.587 1.09159 62.9888 0.299189 61.262 0.0323589C59.1097 -0.250642 56.9332 1.18862 55.4555 2.15082C53.9777 3.11303 51.207 5.92687 50.0184 6.73544C48.8297 7.54402 45.9064 8.35259 41.184 11.2554C36.4617 14.1582 17.757 26.1817 17.757 26.1817L22.6159 26.2302L0.947682 37.526H3.10808L0 39.9517C1.71868 40.356 3.5257 40.0891 5.05966 39.2078V39.8789C5.05966 39.8789 30.8318 29.6504 35.8352 32.3026L32.8155 33.1758C33.0805 33.1758 37.9876 33.4912 37.9876 33.4912C38.2285 35.5611 39.369 37.4047 41.1037 38.5367C44.0592 40.5015 44.1074 41.5688 44.1074 41.5688C44.1074 41.5688 42.5815 42.1995 42.5815 43C45.296 42.1429 48.2033 42.1429 50.9179 43C50.9179 43 50.7572 42.1914 48.7012 41.5688C46.6452 40.9462 44.6374 38.7469 43.6335 37.526C42.3967 35.9412 42.0916 33.8146 42.8304 31.9468C43.5372 30.1032 46.0429 29.0764 51.1106 26.4242C57.126 23.2951 58.4913 20.9502 59.3346 19.1471C60.1778 17.3439 61.4468 13.7296 62.1455 12.0316C62.7318 10.4468 63.7276 9.04797 65.0367 7.98873C66.6349 7.12356 68.2974 6.37967 70 5.75707C70 5.75707 66.8598 3.09686 65.8559 2.29637Z' fill='black'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_408_10987'%3E%3Crect width='70' height='43' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
        position: absolute;
        left: 0;
        top: 0;
    }

    .token-additional-info__kusama p {
        font-weight: 400;
    }

    .token-additional-info__ethereum > p {
        position: relative;
        padding-left: calc(var(--space) * 2);
        font-weight: 400;
        margin-left: auto;
    }

    .token-additional-info__ethereum > p::after {
        content: url("data:image/svg+xml,%3Csvg width='33' height='56' viewBox='0 0 33 56' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_408_10989)'%3E%3Cpath d='M0.0644531 28.4121L16.3187 38.5089L0.0644531 28.4121Z' fill='%23010101' stroke='%231717B0' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M32.5726 28.4121L16.3184 38.5089L32.5726 28.4121Z' fill='%23010101' stroke='%231717B0' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M4.51669 20.6471L0.0644531 28.4119L16.3187 20.6471V0.067749L4.51669 20.6471Z' fill='%23CFC5FB' stroke='%231717B0' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16.3187 20.6473L0.0644531 28.4121L16.3187 38.5089V20.6473Z' fill='%2381A8F8' stroke='%231717B0' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M28.1203 20.6471L16.3184 0.067749V20.6471L32.5726 28.4119L28.1203 20.6471Z' fill='%23A6FCF6' stroke='%231717B0' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16.3184 20.6473V38.5089L32.5726 28.4121L16.3184 20.6473Z' fill='%23CEB0FA' stroke='%231717B0' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M0.0644531 31.6514L16.3187 55.7226V41.7427L0.0644531 31.6514Z' fill='%2381A8F8' stroke='%231717B0' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16.3184 41.7427V55.7226L32.5829 31.6514L16.3184 41.7427Z' fill='%23CEB0FA' stroke='%231717B0' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_408_10989'%3E%3Crect width='32.648' height='55.7905' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
        position: absolute;
        left: 0;
        top: 0;
    }

    .token-additional-info__attention {
        padding: calc(var(--space) * 0.5);
        border: 1px solid var(--color-dark);
    }

    .token-additional-info__attention p {
        margin-bottom: calc(var(--space-text) * 0.5);
    }

    .pink-block a {
        color: #75FBFD;
        font-weight: 600;
        transition: opacity 0.33s ease-in-out;
        text-decoration: underline;
    }

    .pink-block  a:hover {
        opacity: 0.7;
    }

    .token__graph {
        position: relative;
        display: flex;
        width: 100%;
        align-items: center;
        /* justify-content: end; */
        direction: ltr;
    }

    .graph-img {
        width: 300px;
        height: 300px;
        position: relative;
        overflow: hidden;
        border-radius: 100%;
    }

    .token__graph span {
        position: absolute;
        bottom: 96px;
        left: 0;
        font-size: var(--base-font-size);
        font-style: italic;
        font-weight: 600;
        color: #75FBFD;
    }

    .token__graph-arrow {
        width: 100%;
        position: relative;
        height: 100%;
        max-width: 202px;
        /* left: 0;
        bottom: 50px; */
    }

    .token__graph-arrow svg {
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .pink-block {
        padding-top: var(--space);
        padding-bottom: var(--space);
        background-color: #F34C9A;
        margin: 0;
        color: #fff;
    }
    .pink-block .layout {
        padding-top: 0;
        padding-bottom: 0;
    }

    .pink-block p {
        padding-bottom: 0;
    }

    .xrt-bridge {
        position: relative;
        margin: 0;
        background-color: var(--color-blue-xrt);
    }

    .xrt-bridge .layout {
        max-width: 1450px;
        display: flex;
        align-items: center;
        padding: var(--space);
        padding-bottom: 0;
    }

    .xrt-bridge__title {
        max-width: 396px;
        width: 100%;
        letter-spacing: 0;
        font-weight: 500;
        font-size: calc(var(--base-font-size) * 2.5);
        line-height: 1;
        font-family: var(--font-family);
        color: var(--color-light);
        text-align: left;
    }

    .xrt-bridge__text {
        color: #fff;
        /* margin-right: calc(var(--space) * 3); */
    }

    .xrt-bridge__text .token__big-text {
        font-weight: 500;
    }

    .xrt-bridge__text p {
        font-weight: 300;
    }

    .xrt-bridge__imgs {
        position: relative;
        display: flex;
        /* width: 100%;
        justify-content: space-between;
        max-width: 783px; */
        margin-right: calc(var(--space) * 2);

    }

    .nova {
        position: absolute;
        right: -38px;
        bottom: -100px;
        width: 393px;
        height: 393px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: var(--space);
        padding-left: calc(var(--space) * 2);
        background-color: var(--color-blue);
        border-radius: 100%;
        direction: ltr;
    }

    .nova__img {
        max-width: 206px;
        width: 100%;
        margin-bottom: var(--space);
    }

    .nova p {
        color: #fff;
        font-size: calc(var(--base-font-size) * 0.9);
        font-style: italic;
        direction: ltr;
    }

    .xrt-ethereum .oldy,
    .xrt-polkadot .oldy {
        padding: calc(var(--space) * 2) calc(var(--space) * 1.5);
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

    .xrt-polkadot__info h3 {
        margin-bottom: calc(var(--space) * 0.2);
    }

    .xrt-polkadot__info:not(last-child) {
        margin-bottom: var(--space);
    }

    .xrt-questions {
        margin-top: calc( var(--space) * 4);
    }

    @media screen and (max-width: 1130px) {

        .token__intro {
            grid-template-columns: minmax(0, 1fr);
            gap: calc(var(--space) * 2);
        }

        .token__intro p {
            margin-right: 0;
            padding-bottom: 0;
        }

        .token__graph {
            align-items: center;
            justify-content: center;
        }


        .nova {
            position: static;
            width: 328px;
            height: 328px;
            padding: var(--space) calc(var(--space) * 2);
            margin-bottom: var(--space);
        }

        .xrt-bridge  {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            flex-direction: column-reverse;
            padding: calc(var(--space) * 2.5) var(--space);
            padding-bottom: 0;
        }

        .xrt-bridge .section-align-right {
            text-align: center;
        }

        .xrt-bridge .layout {
            flex-direction: column;
            width: 90%;
            padding: 0;
        }

        .xrt-bridge__title {
            text-align: center;
        }

        .xrt-bridge__text {
            padding-bottom: 0;
            margin-bottom: var(--space);
        }

        .xrt-bridge__imgs {
            max-width: 100%;
            margin-right: 0;
            /* margin-bottom: var(--space); */
        }

        .xrt-bridge .grid-2 {
            display: flex !important;
            flex-direction: column-reverse;
            /* grid-template-columns: 1fr; */
        }

        .token-additional-info__wrapper {
            grid-template-columns: 1fr;
        }

        .token-additional-info__ethereum > p {
            min-height: 62px;
        }

        .token-additional-info__ethereum > p {
            padding-left: calc(var(--space) * 3);
        }
    }

    @media screen and (max-width: 580px) {
        
        .token__intro {
            gap: var(--space);
        }

        .xrt-bridge__img-2 {
            display: none;
        }
    }

    @media screen and (max-width: 480px) {
        .graph-img {
            width: 210px;
            height: 210px;
        }

        .token__graph-arrow {
            max-width: 147px;
        }

        .token-additional-info__kusama{
            padding-left: 0;
            padding-top: 60px;
        }

        .token-additional-info__ethereum > p {
            padding-left: 0;
            padding-top: 70px;
        }
    }

    @media screen and (max-width: 395px) {


        #parallax-5 {
            right: 99px;
        }

        #parallax-7 {
            width: 177px;
            left: 0;
            top: -23px;
        }
    }

    /* dark mode */

    .dark-theme .token-additional-info__kusama::after {
        content: url("data:image/svg+xml,%3Csvg width='70' height='43' viewBox='0 0 70 43' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_408_10987)'%3E%3Cpath d='M65.8559 2.29637C64.587 1.09159 62.9888 0.299189 61.262 0.0323589C59.1097 -0.250642 56.9332 1.18862 55.4555 2.15082C53.9777 3.11303 51.207 5.92687 50.0184 6.73544C48.8297 7.54402 45.9064 8.35259 41.184 11.2554C36.4617 14.1582 17.757 26.1817 17.757 26.1817L22.6159 26.2302L0.947682 37.526H3.10808L0 39.9517C1.71868 40.356 3.5257 40.0891 5.05966 39.2078V39.8789C5.05966 39.8789 30.8318 29.6504 35.8352 32.3026L32.8155 33.1758C33.0805 33.1758 37.9876 33.4912 37.9876 33.4912C38.2285 35.5611 39.369 37.4047 41.1037 38.5367C44.0592 40.5015 44.1074 41.5688 44.1074 41.5688C44.1074 41.5688 42.5815 42.1995 42.5815 43C45.296 42.1429 48.2033 42.1429 50.9179 43C50.9179 43 50.7572 42.1914 48.7012 41.5688C46.6452 40.9462 44.6374 38.7469 43.6335 37.526C42.3967 35.9412 42.0916 33.8146 42.8304 31.9468C43.5372 30.1032 46.0429 29.0764 51.1106 26.4242C57.126 23.2951 58.4913 20.9502 59.3346 19.1471C60.1778 17.3439 61.4468 13.7296 62.1455 12.0316C62.7318 10.4468 63.7276 9.04797 65.0367 7.98873C66.6349 7.12356 68.2974 6.37967 70 5.75707C70 5.75707 66.8598 3.09686 65.8559 2.29637Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_408_10987'%3E%3Crect width='70' height='43' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
    }

    .dark-theme .token__link.timeline h3 {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20.163' height='18.007' viewBox='0 0 20.163 18.007'%3E%3Cg id='_-Product-Icons' data-name='Product-Icons' transform='translate(-1.995 -2.997)'%3E%3Cg id='ic_fluent_timeline_24_filled'%3E%3Cpath id='_Color' data-name='Color' d='M15.25,13A1.75,1.75,0,0,1,17,14.75v4.5A1.75,1.75,0,0,1,15.25,21H3.75A1.75,1.75,0,0,1,2,19.253v-4.5A1.75,1.75,0,0,1,3.75,13ZM21,14.9V20.25a.75.75,0,0,1-1.493.1l-.007-.1V14.906A3.023,3.023,0,0,0,21,14.9Zm-.75-4.8A1.908,1.908,0,1,1,18.342,12,1.908,1.908,0,0,1,20.25,10.092Zm-5-7.1A1.75,1.75,0,0,1,17,4.747v4.5A1.75,1.75,0,0,1,15.245,11H3.745A1.75,1.75,0,0,1,2,9.25v-4.5A1.75,1.75,0,0,1,3.6,3L3.745,3ZM20.25,3a.75.75,0,0,1,.743.648l.007.1V9.1a3.023,3.023,0,0,0-1.5-.011V3.75A.75.75,0,0,1,20.25,3Z' fill='%2397aafd'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    }

    .dark-theme .token__link.enterscan h3 {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17.597' height='17.591' viewBox='0 0 17.597 17.591'%3E%3Cg id='etherscan-logo-circle' transform='translate(-219.378 -213.33)'%3E%3Cpath id='Path_1' data-name='Path 1' d='M223.035,221.705a.746.746,0,0,1,.749-.746l1.242,0a.747.747,0,0,1,.747.747v4.7c.14-.041.319-.086.516-.132a.622.622,0,0,0,.48-.606v-5.826a.747.747,0,0,1,.747-.747h1.245a.747.747,0,0,1,.747.747v5.408s.312-.126.615-.254a.623.623,0,0,0,.381-.574v-6.447a.747.747,0,0,1,.747-.747h1.245a.747.747,0,0,1,.747.747v5.309a14.6,14.6,0,0,0,3.04-2.854,1.254,1.254,0,0,0,.191-1.17,8.791,8.791,0,1,0-15.926,7.265,1.112,1.112,0,0,0,1.061.549c.235-.021.529-.05.877-.091a.622.622,0,0,0,.552-.617v-4.662' transform='translate(0 0)' fill='%2397aafd'/%3E%3Cpath id='Path_2' data-name='Path 2' d='M244.416,277.566a8.794,8.794,0,0,0,13.967-7.113c0-.2-.009-.4-.023-.6-3.213,4.792-9.146,7.032-13.944,7.715' transform='translate(-21.408 -48.327)' fill='%2397aafd'/%3E%3C/g%3E%3C/svg%3E");
    }

    .dark-theme .token__link.coingecko h3 {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17.151' height='17.151' viewBox='0 0 17.151 17.151'%3E%3Cg id='XMLID_200_' transform='translate(1.005 1.005)'%3E%3Cg id='XMLID_202_' transform='translate(-1.005 -1.005)'%3E%3Cg id='Group_4819' data-name='Group 4819'%3E%3Cpath id='Path_8306' data-name='Path 8306' d='M7.532-1.005a8.576,8.576,0,1,0,8.614,8.537A8.576,8.576,0,0,0,7.532-1.005ZM6.446,7.15A1.532,1.532,0,1,1,7.979,5.617,1.534,1.534,0,0,1,6.446,7.15ZM7.669,8.807l.008-.01.008-.01a2.758,2.758,0,0,0,1.436.4,6.747,6.747,0,0,0,1.51-.125A8.125,8.125,0,0,0,12.1,8.606a7.22,7.22,0,0,0,.785-.372l0,0c.157-.1.311-.194.462-.3.033-.024.065-.048.1-.073l0,0,.013.016a5.6,5.6,0,0,1-1.312.842,8.408,8.408,0,0,1-1.472.537,4.623,4.623,0,0,1-1.571.181A2.177,2.177,0,0,1,7.669,8.807ZM11.6,7.15a.332.332,0,1,1,.333.33A.333.333,0,0,1,11.6,7.15ZM8.977,15.376c-.332-2.322,1.694-4.594,2.838-5.757.259-.264.661-.627,1.034-1.013,1.483-1.386,1.779-3.044-1.258-3.873-.575-.167-1.172-.4-1.775-.642a1.414,1.414,0,0,0-.065-.157,1.7,1.7,0,0,0-.375-.413A2.141,2.141,0,0,0,7.6,3.338a4.478,4.478,0,0,0-2.077-.065C2.587,4.081,2.115,5.514,2,7.24a13.768,13.768,0,0,1-.953,4.842,7.931,7.931,0,1,1,7.929,3.294Z' transform='translate(1.005 1.005)' fill='%2397aafd'/%3E%3C/g%3E%3C/g%3E%3Cpath id='XMLID_201_' d='M402.457,350.078A1.078,1.078,0,1,1,401.378,349,1.078,1.078,0,0,1,402.457,350.078Z' transform='translate(-394.932 -344.447)' fill='%232949d3'/%3E%3C/g%3E%3C/svg%3E");
    }
    
    .dark-theme .token__link.use h3 {
        background-image: url("data:image/svg+xml,%3Csvg id='Core' xmlns='http://www.w3.org/2000/svg' width='19.689' height='17.501' viewBox='0 0 19.689 17.501'%3E%3Cg id='drive-site'%3E%3Cpath id='Shape' d='M17.5,0H2.188A2.194,2.194,0,0,0,0,2.188V15.314A2.194,2.194,0,0,0,2.188,17.5H17.5a2.194,2.194,0,0,0,2.188-2.188V2.188A2.194,2.194,0,0,0,17.5,0ZM12.032,15.314H2.188V10.938h9.845v4.375Zm0-5.469H2.188V5.469h9.845V9.845ZM17.5,15.314H13.126V5.469H17.5v9.845Z' fill='%2397aafd' fill-rule='evenodd'/%3E%3C/g%3E%3C/svg%3E");
    }

    .dark-theme .token__link.subscan h3 {
        background-image: url("data:image/svg+xml,%3Csvg id='id-1' xmlns='http://www.w3.org/2000/svg' width='17.501' height='17.501' viewBox='0 0 17.501 17.501'%3E%3Cg id='SUBSCAN-1'%3E%3Cpath id='Fill-1' d='M9.68,2.244A1.315,1.315,0,0,0,7.821.385L.385,7.821a1.314,1.314,0,0,0,0,1.859L4.1,13.4h0a1.314,1.314,0,0,0,1.859,0l6.507-6.507,1.859,1.859L7.821,15.257A1.315,1.315,0,1,0,9.68,17.116L17.116,9.68a1.314,1.314,0,0,0,0-1.859L13.4,4.1a1.315,1.315,0,0,0-1.859,0L5.033,10.61,3.174,8.751Z' transform='translate(0 0)' fill='%2397aafd' opacity='0.2'/%3E%3Cpath id='Fill-3' d='M2.244,11.007a1.315,1.315,0,1,1-1.859,0,1.314,1.314,0,0,1,1.859,0' transform='translate(0 -3.186)' fill='%2397aafd'/%3E%3Cpath id='Fill-5' d='M7.555,5.7A1.315,1.315,0,1,1,5.7,5.7a1.315,1.315,0,0,1,1.859,0' transform='translate(-1.593 -1.593)' fill='%2397aafd'/%3E%3Cpath id='Fill-7' d='M12.866.385a1.315,1.315,0,1,1-1.859,0,1.315,1.315,0,0,1,1.859,0' transform='translate(-3.186 0)' fill='%2397aafd'/%3E%3Cpath id='Fill-9' d='M7.555,16.318a1.315,1.315,0,1,1-1.859,0,1.315,1.315,0,0,1,1.859,0' transform='translate(-1.593 -4.779)' fill='%2397aafd'/%3E%3Cpath id='Fill-11' d='M12.866,11.007a1.315,1.315,0,1,1-1.859,0,1.314,1.314,0,0,1,1.859,0' transform='translate(-3.186 -3.186)' fill='%2397aafd'/%3E%3Cpath id='Fill-13' d='M18.177,5.7a1.315,1.315,0,1,1-1.859,0,1.315,1.315,0,0,1,1.859,0' transform='translate(-4.779 -1.593)' fill='%2397aafd'/%3E%3Cpath id='Fill-15' d='M12.866,21.63a1.315,1.315,0,1,1-1.859,0,1.315,1.315,0,0,1,1.859,0' transform='translate(-3.186 -6.372)' fill='%2397aafd'/%3E%3Cpath id='Fill-17' d='M18.177,16.318a1.315,1.315,0,1,1-1.859,0,1.314,1.314,0,0,1,1.859,0' transform='translate(-4.779 -4.779)' fill='%2397aafd'/%3E%3Cpath id='Fill-19' d='M23.489,11.007a1.315,1.315,0,1,1-1.859,0,1.314,1.314,0,0,1,1.859,0' transform='translate(-6.372 -3.186)' fill='%2397aafd'/%3E%3C/g%3E%3C/svg%3E");
    }



</style>