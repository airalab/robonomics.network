<template>
  <layout>

    <MetaInfo
        pageTitle = "Timeline of infrastructure & tech development"
        pageDescription = "The Robonomics project started on 2015. See what was start idea and our checkpoints over the years. This is good brief introduction for newcomers and summary for pioneers."
        pageImage = "/website_cover_timeline.jpg"
      />

    <div class="timeline__main-title title-with-bg">
      <h1><span>{{ $t('Infrastructure && tech development timeline') }}</span></h1>
    </div>

    <section class="layout layout__text">
      <TimelineItem 
        v-for="item in items"
        :key="item.id"
        :year="item.year"
        :text="item.text"
        :title="item.title"
        :events="item.events"
        :bottomLine="item.line"
      >
      </TimelineItem>
    </section>

  </layout>
</template>

<style scoped>

  @media screen and (max-width: 480px) {
    .timeline__main-title h1 {
      font-size: 1.6rem;
    }
  }

  
</style>

<script>

  import MetaInfo from '~/components/MetaInfo.vue';
  import TimelineItem from '~/components/timeline/TimelineItem.vue'

  export default {
    components: {
      MetaInfo,
      TimelineItem
    },

    data() {
      return {
        items: [
          {
            id: 0,
            year: 2022,
            title: this.$t('On the Way to Sovereign Home Automation'),
            text: `<p class='timeline__descr'>${this.$t('The year began with a major achievement — Robonomics won the 20th parachain slot auction and')} <a class='timeline__link' href='https://twitter.com/EnsRationis/status/1480139879057174530' target='_blank'>${this.$t('officially became')}</a> ${this.$t('a parachain with ID 2048 on the Kusama network. The launch, datalog, DigitalTwin, liability functions and IoT subscriptions have become available to all users of the ecosystem. To provide details for this phase of the project, the core team has published the first chapters of the')} <a class='timeline__link' href='/white-paper-2022' target='_blank'>${this.$t('Robonomics Whitepaper 2.0.')}</a> ${this.$t('Robonomics 2.0 on Substrate has been released with support for XCM messages, and we began to open HRMP channels with other parachains (like Crust Shadow and Darwinia), whose functionality is extremely useful for us.')}</p><p class='timeline__descr'>${this.$t('At the same time, we have unlocked a strategy for introducing the IoT market to our protocol. Our experiments with IoT equipment led us to the concept of a sovereign smart home, one which is independent of centralized cloud service providers. We have developed our')} <a class='timeline__link' href='https://wiki.robonomics.network/docs/robonomics-smart-home-overview/' target='_blank'>${this.$t('integration')}</a>, ${this.$t('with the Home Assistant automation system, and also designed our own')} <a class='timeline__link' href='https://oshwlab.com/ludovich88/robonomics_sls_gateway_v01' target='_blank'>${this.$t('IoT gateway')}</a> ${this.$t('for connecting smart devices.')}</p><p class='timeline__descr'> ${this.$t('We have launched two big initiatives in order to increase community engagement —')} <a class='timeline__link' href='https://robonomics.academy/en/' target='_blank'>${this.$t('Robonomics Academy')}</a> ${this.$t('and')} <a class='timeline__link' href='/ambassador-program/' target='_blank'>${this.$t('Robonomics Ambassador Program')}</a>. ${this.$t('Additionally,')} <a class='timeline__link' href='/blog/robonomics-town-hall-2022/' target='_blank'> ${this.$t('Robonomics Town Hall')}</a> ${this.$t('was held in autumn so that the Robonomics community could try out our governance mechanisms for the first time. Recently, the Robonomics team helped the DAO IPCI project obtain a parachain slot to present carbon offsetting service for smart buildings.')}</p>`,
            events: [
              {
                id: 0,
                link: 'https://www.youtube.com/playlist?list=PLOyWqupZ-WGuA9BWEP4_zRiLwHzXb1zE9',
                name: this.$t('World Economic Forum Annual Meeting 2022'),
              },
              {
                id: 1,
                link: 'https://decoded.polkadot.network/2022edition/',
                name: this.$t('Polkadot Decoded 2022')
              }
            ],
            line: true
          },
          {
            id: 1,
            year: 2021,
            title: this.$t('Becoming a Parachain for IoT Applications'),
            text: `<p class='timeline__descr'>${this.$t('In 2021, our')} <a class='timeline__link' href='/vision/' target='_blank'>${this.$t('main focus')}</a> ${this.$t('shifted to preparing the project so that IoT applications could be used via our parachain on the Kusama network. Robonomics 1.0 on Substrate has been released, and we have been testing connecting sensors to the parachain to send their telemetry data, as well as developing the digital twin functionality. In the middle of the year, we decided to test the full cycle of our network and created our own relay chain called')} <a class='timeline__link' href='/blog/robonomics-frontier/' target='_blank'>${this.$t('Robonomics Frontier')}</a>, ${this.$t('to which the Robonomics parachain was integrated (prior to being migrated to the Kusama relay chain). There has been a lot of focus on getting a parachain slot in Kusama, for which we organized several crowdloan campaigns.')}</p><p class='timeline__descr'> ${this.$t('There have been two big changes for the community. First, we launched the')} <a class='timeline__link' href='https://github.com/airalab/robonomics-grant-program' target='_blank'>${this.$t('Robonomics Grant Program')}</a>, ${this.$t('which allows web3 robotics and IoT projects to receive funding for R&D tasks. By the end of the year, four active projects participated in the program. Secondly, the team started the')} <a class='timeline__link' href='https://youtu.be/4Np5-95LdvY' target='_blank'>${this.$t('Exodus process')}</a>, ${this.$t('allowing Ethereum token holders to move their XRT tokens to the parachain.')}</p><p class='timeline__descr'>${this.$t('Among the collaborations, we can recall the remarkable appearance of Boston Dynamics Spot at MerkleBot, for which a')} <a class='timeline__link' href='https://spot.merklebot.com/' target='_blank'>${this.$t('rental remote control system')}</a> ${this.$t('was developed. We would also like to inform you about the Multi-Agent Systems company which is a personal project that has been formed by a team of Robonomics engineers. They have developed a robotic waffle baker called Eisenkoch which conducts cooking tasks for coffee shop owners.')}</p>`,
            events: [
              {
                id: 0,
                link: 'https://decoded.polkadot.network/2021edition/',
                name: this.$t('Polkadot Decoded 2021'),
              },
              {
                id: 1,
                link: 'https://decoded.polkadot.network/2022edition/',
                name: this.$t('IROS2021 (sponsored by Robonomics)')
              },
              {
                id: 2,
                link: '/blog/winter-robonomics-school/',
                name: this.$t('Robonomics Winter School 2021 (hosted by Robonomics)')
              }
            ],
            line: true
          },
          {
            id: 2,
            year: '2019 - 2020',
            title: this.$t('Transition to Multinetwork — Along Came Polkadot'),
            text: `<p class='timeline__descr'> ${this.$t('There came a time when the existing limitations of Ethereum')} <a class='timeline__link' href='https://blog.aira.life/on-top-of-two-world-computers-research-questions-a83570f4c8b1' target='_blank'>${this.$t('began to stand out clearly')}</a> ${this.$t('(in particular, poor scalability, low speed and very high cost of transactions). The upgrade to ETH2.0 was supposed to fix the situation, but this upgrade was repeatedly delayed. Whilst we did not want to leave the Ethereum network, we realized that in the current situation it was difficult to implement our use cases, and we began to look for an alternative network. The sharded blockchain ecosystem Polkadot became this alternative. We started by experimenting with the Substrate framework to migrate the main Robonomics features and to deploy our own testnet. By the end of this stage, we had deployed our parachain on the Rococo testnet and started preparing to get a slot on the Kusama network.')} </p><p class='timeline__descr'> ${this.$t('Continuing to study IoT systems, we have identified the main functionality of Robonomics, which can add value to users — the function of decentralized cloud for IoT. This idea formed the basis of')} <a class='timeline__link' href='https://blog.aira.life/robonomics-web-services-and-rws-token-intro-d730ab50ad42' target='_blank'>${this.$t('Robonomics Web Services')}</a>. ${this.$t('The RWS infrastructure took on all the functions of a typical centralized cloud, but without the standard problems of global availability, security and privacy. Additionally, we came up with the idea of parachain IoT subscriptions that allows subscription holders to use the blockchain network without having to pay a fee for each transaction. The first experiment with IoT subscriptions was the emission of the RWS token, which allows its owner to send 1 transaction per block. In addition, we began to take the first steps to develop our own hardware kit for control of smart devices (the DAOS concept).')} </p><p class='timeline__descr'> ${this.$t('Of course, support for Robonomics on Ethereum has not stopped. The Robonomics communication stack has been finalized to version')} <a class='timeline__link' href='https://github.com/airalab/robonomics_comm/releases/tag/v1.0.0' target='_blank'> ${this.$t('LTS 1.0.')}</a>. ${this.$t('The XRT token has started trading on several exchanges (in particular, the Uniswap DEX), and the liquidity incentivization program was launched.')}</p><p class='timeline__descr'> ${this.$t('The team actively developed ways to interact with the community. The first version of our')} <a class='timeline__link' href='https://blog.aira.life/the-robonomics-dapp-overview-acb003f51b9a' target='_blank'>${this.$t('dapp')}</a> ${this.$t('site and Robonomics Wiki have been launched. For more transparent and convenient project management, we started using')} <a class='timeline__link' href='https://client.aragon.org/#/aira/' target='_blank'>${this.$t('Aragon DAO')}</a>. ${this.$t('We hosted')} <a class='timeline__link' href='https://www.youtube.com/playlist?list=PLkys45xOYDp0qEsCerAXdw9cofJZW3Fie' target='_blank'>${this.$t('Robonomics Winter School')}</a> ${this.$t('in 2019 for newcomers to the project.')}</p><p class='timeline__descr'>${this.$t('Collaborations with congenial projects also continued. Robonomics and DAO IPCI introduced a service for collecting and analyzing sensory data —')} <a class='timeline__link' href='https://www.youtube.com/watch?v=shqey3tmNUk' target='_blank'> ${this.$t('RoSeMAN')}</a>. ${this.$t('Robonomics became the foundation for the')} <a class='timeline__link' href='https://merklebot.com/' target='_blank'>${this.$t('MerkleBot')}</a> ${this.$t('project, which is developing a system for smart leasing of robotic equipment.')}</p>`,
            line: true
          },
          {
            id: 3,
            year: '2017 - 2018',
            title: this.$t('The Rise of Robonomics Network'),
            text: `<p class='timeline__descr'> ${this.$t('We understood that autonomous agents needed an environment that would ensure their reliable technical and economic operations. For several years we had been developing a protocol for creating a decentralized network of providers that help robotic agents provide their services. Tools for network maintenance and for the communication stack between Ethereum and ROS have been developed. In 2018 we published the')} <a class='timeline__link' href='https://static.robonomics.network/docs/whitepaper/Robonomics-whitepaper-en.pdf' target='_blank'>${this.$t('Robonomics Whitepaper')}</a> ${this.$t('and the alpha version of Robonomics Network was launched on the Ethereum mainnet. Active preparations continued for the XRT token generation event (which eventually happened in the spring of 2019 due to the first crypto winter).')}</p><p class='timeline__descr'> ${this.$t('From this period, Robonomics began to dynamically develop use cases related to Industry 4.0 — smart factories, smart cities and smart homes — and this brought our close attention to the IoT world. In search of innovation, the team has presented several large and unique R&D demos: a civil')} <a class='timeline__link' href='https://sensors.robonomics.network/' target='_blank'>${this.$t('sensor network')}</a>, <a class='timeline__link' href='https://www.frontiersin.org/articles/10.3389/frobt.2020.00070' target='_blank'> ${this.$t('a water drone')} </a> ${this.$t('for environmental monitoring (supported by a sensor systems manufacturer')} <a class='timeline__link' href='https://www.libelium.com/libeliumworld/success-stories/drones-sensors-and-blockchain-for-water-quality-control-in-the-volga-river-to-promote-trustworthy-data-and-transparency/' target='_blank'>${this.$t('Libelium')}</a>), <a class='timeline__link' href='https://youtu.be/LjIB3-4kQ0A' target='_blank'>${this.$t('a smart factory model')}</a>, ${this.$t('a self-employed')} <a class='timeline__link' href='https://gaka-chu.online/' target='_blank'>${this.$t('robot artist Gaka-chu')}</a>, ${this.$t('and a')} <a class='timeline__link' href='https://github.com/DistributedSky' target='_blank'>${this.$t('drone traffic management system')}</a>. ${this.$t('Robonomics started cooperation with the DAO IPCI project on the environmental assets management using web3 technologies and IoT devices.')}</p>`,
            events: [
              {
                id: 0,
                link: 'https://www.youtube.com/watch?v=wAezcsUYzy8',
                name: this.$t('Crypto Valley Conference 2018'),
              },
              {
                id: 1,
                link:  'https://youtu.be/-G6JT8wCDlc?list=PLkys45xOYDp0HW0LpbvnCCrv-MUc-lI0x',
                name: this.$t('European Parliament workshop ‘The Economy of Robots’')
              },
              {
                id: 2,
                link: 'https://cryptovalley.swiss/consensus-2018/',
                name: this.$t('Consensus 2018 conference')
              },
              {
                id: 3,
                link: 'https://www.ledgerjournal.org/ojs/index.php/ledger/article/view/177',
                name: this.$t('Symposium on Blockchain for Robotic Systems at MIT Media Lab')
              },
              {
                id: 4,
                link: 'https://blog.aira.life/robonomics-2018-lets-sum-up-d6cc10110c0b',
                name: this.$t('Robonomics-2018 summer school hosted by Robonomics.')
              },
            ],
            line: true,
          },
          {
            id: 4,
            year: '2016 - 2017',
            title: this.$t('Bringing Together Web3 Techs and Robotic Frameworks'),
            text: `<p class='timeline__descr'>${this.$t('This was a period of active R&D during which we identified a range of tasks, in which p2p technologies have capabilities that were not previously available for robotics. Combining Ethereum computer, IPFS file storage and Robot Operating System, we realized that any device could potentially become an')} <b>${this.$t('autonomous intelligent robot agent')}</b>. ${this.$t('In turn, this opened the way for us to the concepts of Robot-as-a-Service and the robot economy.')} </p><p class='timeline__descr'> ${this.$t('Our publications in scientific journals of this period are available in the')} <a class='timeline__link' href='/papers/' target='_blank'>${this.$t('Papers section')}</a>.</p><p class='timeline__descr'>${this.$t('We have collected all R&D projects over the years in the')} <a class='timeline__link' href='https://ipfs.io/ipfs/QmRHvtsEViqHFN6Mt66p9o5MvvzB2H5uvfMTi8maAnLmfi' target='_blank'>${this.$t('a handy book')}</a>.</p>`,
            line: true
          },
          {
            id: 5,
            year: '2015 - 2016',
            title: this.$t('Playing with Human-Machine Interaction through Ethereum'),
            text:  `<p class='timeline__descr'>${this.$t('It all started with an idea that dawned on the founders when Ethereum had only just launched its mainnet. What if the robot performs a task for a client for cryptocurrency, and its logic is controlled by a smart contract?')}</p><p class='timeline__descr'>${this.$t('To test the idea, we made a demo in which a drone controlled by an Ethereum computer was launched to achieve the specified GPS coordinates after the user completed a payment transaction.')}</p><p class='timeline__descr'>${this.$t('The demo is available on')} <a class='timeline__link' href='https://youtu.be/V_3rcP2Duv0' target='_blank'>${this.$t('YouTube')}</a>.</p>`,
            line: false
          }
        ]
      }
    },

    // computed: {
    //   items () {
    //     return timeline
    //   }
    // }
  }
  
</script>
