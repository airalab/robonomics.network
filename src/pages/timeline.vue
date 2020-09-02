<template>
  <layout-inside>

    <MetaInfo
      :pageTitle = "'Timeline'"
      :pageDescription = "'Robonomics in the past and nowadays, some important checkpoints of evolution.'"
    />

    <div class="layout__content layout__text">
      <h1>Infrastructure && tech development timeline</h1>
    </div>

    <section class="layout__content">
      <div class="timelineContainer">
        <article class="timeline timeline__current">
          <h3 class="timeline__time">Robonomics Today</h3>
          <h2 class="timeline__title">On top of two world computers and Aragon DAO for the Community</h2>
          <div class="hyphens">
            <p>We continue to work with developing the Robonomics platform over Ethereum and Polkadot networks as universal L2 solution for Robot-as-a-Service/IoT nodes. There are more releases on GitHub and new cool tech under armor. We invite developers to our community to spread web3+robotics. Besides the community is welcome to participate in our project life from spring 2020 due to Aragon DAO.</p>
            Find more in <g-link to="https://static.robonomics.network/docs/presentations/Robonomics.Keypoint.updated.August.2020.pdf">Robonomics Keypoint presentation</g-link>
          </div>
        </article>

        <article class="timeline">
          <h3 class="timeline__time">2019</h3>
          <h2 class="timeline__title">Robonomics as web3 framework</h2>
          <div class="hyphens">
            <p>By November 2018, Airalab had alfa version of the Robonomics network running in Ethereum mainnet. Also we published on GitHub a set of tools for creating projects in the Robot-as-a-Service format and decentralized applications or serverless applications to work with the network.</p>
          </div>
        </article>

        <article class="timeline">
          <h3 class="timeline__time">2018</h3>
          <h2 class="timeline__title">Alfa network over Ethereum and IPFS</h2>
          <div class="hyphens">
            <p>The IoT market is only growing up, which means that for connecting robots there is a huge opportunity to use web3 technologies straight away to organize human-to-machine and m2m communication. Cryptocurrencies, smart contracts, sovereign identification can be a strong driver for the development of Robot-as-a-Service around the world.</p>
            <g-link to="http://dapp.robonomics.network/">Go to Robonomics Dapp</g-link>
          </div>
        </article>

        <article class="timeline">
          <h3 class="timeline__time">2017</h3>
          <h2 class="timeline__title">Robonomics network concept</h2>
          <div class="hyphens">
            <p>We formed a common concept for creating a decentralized network of providers for servicing Smart cities — the Robonomics network.</p>
            <g-link to="https://static.robonomics.network/docs/whitepaper/Robonomics-whitepaper-en.pdf">Read Robonomics whitepaper</g-link>
          </div>
        </article>

        <article class="timeline">
          <h3 class="timeline__time">2015 - 2017</h3>
          <h2 class="timeline__title">Ethereum + Robot operating system R&D stage</h2>
          <div class="hyphens">
            <p>We identified a range of tasks, in which p2p technologies have capabilities that were not previously available for robotics, such as money for robots and smart contracts. These are examples of Robot-as-a-Service under decentralized computer control, i.e. economic agents on digital markets. That was our common vision of the next 4 years in work.</p>
            <g-link to="https://wiki.robonomics.network/">Find our R&D in Wiki</g-link>
          </div>
        </article>
      </div>
    </section>

  </layout-inside>
</template>

<style lang="scss">

  .timeline {
    text-align: left;
    padding: var(--space) 0;

    @media screen and (min-width: 720px) {
      border-left: 3px solid var(--color-green);
      padding-left: 0.8rem;
    }

    &:first-child { padding-top: 0; }
    &:last-child { padding-bottom: 0; }

    &__time{
      margin-bottom: 0;
    }

    &__title {
      margin-top: 0;
      margin-bottom: var(--space-text);
    }

    &__current {
      border-color: var(--text-color);
    }
  }
</style>

<script>

  import MetaInfo from '~/components/MetaInfo.vue'

  export default {
    components: {
      MetaInfo
    }
  }
</script>
