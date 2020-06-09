<template>
  <layout-inside>

    <MetaInfo
      :pageTitle = "'Robonomics Network Community'"
      :pageDescription = "'On this page you may find logo assets, wallpapers, documents such as White Paper, links to our scientific papers, social account, read about Robonomics Utility Token (XRT), and dig out other useful information.'"
    />

    <div class="layout__content layout__text">
      <h1>Robonomics framework community</h1>
    </div>

    <section class="layout__content layout__text">

      <tabs>
          <!-- <tab name="Intro" :selected="true"> -->
          <tab name="Intro" :selected="true">
            <p class="hyphens"><strong>Get involved</strong> to Robonomics Network Community: read White paper, science papers, our brochures and other docs; find here information about XRT token; read news from our social accounts, chat with us, get intouch.</p>

            <p class="hyphens"><strong>If you are already involved</strong>, you can find here useful assets: logotype, token sign, slides template, wallpapers etc.</p>

            <p class="hyphens"><strong>If you have no idea</strong>, what is Robonomics, go to our <g-link to="https://wiki.robonomics.network/">Wiki</g-link>, read docs from tabs 'DOCS' and 'SCIENCE', chat with us (all links in tab 'INTOUCH').</p>
          </tab>

          <tab name="Assets">
            <share :assets="assets"/>
          </tab>
          <tab name="Docs">
              <share :assets="docs"/>
          </tab>
          <tab name="Science">
              <share :assets="science" :classes="'tab-science'"/>
          </tab>
          <tab name="Token">
            
              <p class="hyphens">Here we are collecting all important theoretical and practical information about <strong>Robonomics Token (XRT)</strong>.</p>

               <p class="hyphens"><strong>Core information</strong> about main tasks, emission, usage and additional tasks of Robonomics token (XRT) in the <a href="https://static.robonomics.network/docs/whitepaper/Robonomics-whitepaper-en.pdf" target="_blank">White Paper, chapter 6</a>.</p>
              <p class="hyphens"><strong>Ethereum and Polkadot</strong> are token platforms for now. We are ready for launching of native Kusama parachain and plan to do it as soon as this is possible, <a href="https://blog.aira.life/robonomics-parachain-on-kusama-40853780c709" target="_blank">read more</a>.</p>
              <p class="hyphens"><strong>Real world use cases</strong> in <a href="https://dapp.robonomics.network/" target="_blank">Robonomics dApp</a>. Note: XRT is utility token, not payment token for marketplace. Robonomics allows you to use any tokens as payment token for your robot-as-a-service. The robot will be charged commission by network in XRT. So if you are a robot holder, you can use any token for charging and your customers don't need to know additional information about other tokens, including XRT.</p>
              <p class="hyphens"><strong>Distribution Release 2020</strong> in the <a href="https://ipfs.io/ipfs/QmTPuS1DZtZSsjtBiPDLp4dqXaNs9P4JAR6kaiTG51sceG/Robonomics_token_distribution_release_May_2020.pdf" target="_blank">presentation</a>, accepted by Core dev DAO vote #51 on Aragon Aira Mainnet.</p>

              <div class="section section__solid">
                <h3>How to buy XRT</h3>
                <hr/>
                <p><strong>1. Please, check Robonomics token's address, it is</strong><br/> <a href="https://etherscan.io/address/0x7de91b204c1c737bcee6f000aaa6569cf7061cb7"><code>0x7de91b204c1c737bcee6f000aaa6569cf7061cb7</code></a></p>
                <hr/>
                <p><strong>2. To trade XRT visit one of the following exchages:</strong></p>
                <p>
                  <a href="https://uniswap.info/pair/0x3185626c14acb9531d19560decb9d3e5e80681b1" target="_blank">Uniswap v2</a><br/>
                  <small class="layout__text_small">Decentralized protocol for automated liquidity provision on Ethereum.</small>
                </p>
                <p>
                  <a href="https://idex.market/eth/xrt" target="_blank">Idex</a><br/>
                  <small class="layout__text_small">The Ethereum decentralized exchange with real-time trading and high transaction throughput.</small>
                </p>
                <p>
                  <a href="https://bamboorelay.com/trade/XRT2-WETH" target="_blank">BambooRelay</a><br/>
                  <small class="layout__text_small">0x and bZx relayer - trade, lend or borrow ERC20 tokens trustlessly from your own wallet.</small>
                </p>
                <hr/>
                <p><strong>3. Beware of scammers</strong></p>
                <p><small class="layout__text_small">For any additional bounty or reward, please, check our official channels (<a href="https://twitter.com/AIRA_Robonomics" target="_blank">Twitter</a>, more links in tab 'INTOUCH'). Robonomics (robonomics.network) and / or the AIRA (Airalab) team member WILL NOT send you personal messages containing any addresses for participation in TGE or offers of any bonuses, etc. Please, beware of scammers who send you fake ETH addresses in private messages.</small>
                </p>
              </div>
            
            
          </tab>
          <tab name="Intouch">
            <share :assets="intouch" :classes="'tab-intouch'"/>
          </tab>
      </tabs>
    </section>

  </layout-inside>
</template>


<script>

  import MetaInfo from '~/components/MetaInfo.vue'

  import share from '~/components/Share.vue'
  import tabs from '~/components/tabs.vue'
  import tab from '~/components/tab.vue'

  import assets from '@/data/assets.yaml'
  import docs from '@/data/docs.yaml'
  import science from '@/data/science.yaml'
  import intouch from '@/data/intouch.yaml'

  export default {

    components: {
      MetaInfo,
      share,
      tabs,
      tab
    },
    computed: {
      assets () {
        return assets
      },
      docs () {
        return docs
      },
      science () {
        return science
      },
      intouch () {
        return intouch
      }
    }
    
  }

</script>