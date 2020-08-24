<template>
  <layout-inside>

    <MetaInfo
      :pageTitle = "'Community'"
      :pageDescription = "'On this page you may find logo assets, wallpapers, documents such as White Paper, links to our scientific papers, social account, read about Robonomics Utility Token (XRT), and dig out other useful information.'"
      :pageImage = "'/website_cover_community.png'"
    />

    <div class="layout__content layout__text">
      <h1>Robonomics community</h1>
      <!--<small>Get involved to Robonomics Network Community: read White paper, science papers, our brochures and other docs; find here information about XRT token; read news from our social accounts, chat with us, get intouch.</small>-->
    </div>

    <section class="layout__content layout__text">

      <tabs>

          <tab name="Docs" :selected="true">
              <share :assets="docs"/>
          </tab>

          <tab name="Token">

              <p class="hyphens"><strong>There are 2 tokens in Robonomics for now: <code>XRT</code> and <code>RWS</code>. Please, research the information below carefully before buying or asking questions in Community. You are welcome!</strong></p>

          
              <div class="section oldy token">
                <div class="section token__title">
                  <img alt="Robonomics token, XRT image" src="/Robonomics-Token-XRT-color.svg" class="token__sign"/>
                  <h4>Robonomics token, XRT</h4>
                </div>

                <div class="section">
                    <small>Token address:</small><br/>
                    <p class="line-text">
                      <code class="address">0x7de91b204c1c737bcee6f000aaa6569cf7061cb7</code>
                      <IconCopy address="0x7de91b204c1c737bcee6f000aaa6569cf7061cb7"/>
                      <IconEtherscan address="0x7de91b204c1c737bcee6f000aaa6569cf7061cb7"/>
                    </p>
                </div>

                <div class="section">
                  <small>XRT/ETH pair:</small><br/>
                  <p><g-link to="https://uniswap.info/pair/0x3185626c14acb9531d19560decb9d3e5e80681b1">Uniswap</g-link></p>
                  <p><g-link to="https://www.coingecko.com/en/coins/robonomics-network/">Сoingecko</g-link></p>
                </div>

                <div class="section">
                  <small>Quick intro to XRT:</small><br/>
                  <p><g-link to="https://static.robonomics.network/docs/whitepaper/Robonomics-whitepaper-en.pdf">Theory in White Paper, Chapter 6</g-link></p>
                  <p><g-link to="https://ipfs.io/ipfs/QmTPuS1DZtZSsjtBiPDLp4dqXaNs9P4JAR6kaiTG51sceG/Robonomics_token_distribution_release_May_2020.pdf">Distribution Release 2020</g-link></p>
                </div>
              </div>


              <div class="section oldy token">
                <div class="section token__title">
                  <img alt="Robonomics Web Services, RWS image" src="/Robonomics-Token-RWS-color.svg" class="token__sign"/>
                  <h4>RWS Lifetime Subscription</h4>
                </div>

                <div class="section">
                    <small>Token address:</small><br/>
                    <p class="line-text">
                      <code class="address">0x08ad83d779bdf2bbe1ad9cc0f78aa0d24ab97802</code>
                      <IconCopy address="0x08ad83d779bdf2bbe1ad9cc0f78aa0d24ab97802"/>
                      <IconEtherscan address="0x08ad83d779bdf2bbe1ad9cc0f78aa0d24ab97802"/>
                    </p>
                </div>

                <div class="section">
                    <small>RWS/XRT pair:</small><br/>
                    <g-link to="https://uniswap.info/pair/0x42018a2ff89b6d662b5f746277bd02f0d85f485a">Uniswap</g-link>
                </div>

                <div class="section">
                    <small>Quick intro to RWS:</small><br/>
                    <p><g-link to="https://blog.aira.life/robonomics-web-services-and-rws-token-intro-d730ab50ad42">Robonomics Web Services and RWS token intro</g-link></p>
                    <p><g-link to="https://blog.aira.life/rws-overview-part-2-heterogeneous-tokenomics-afc209cc855">RWS overview, part 2 “Heterogeneous tokenomics”</g-link></p>
                </div>
              </div>

              <section>
                <h3>Beware of scammers</h3>
                <ol>
                  <li>Check the address of token while buying. Do not copy the address from chats or any private messages, view it on Etherscan.</li>
                  <li>Please, check the information about rewards from official channels: <g-link to="https://www.robonomics.events/#/">robonomics.events</g-link> or <g-link to="https://twitter.com/AIRA_Robonomics">Twitter</g-link></li>
                  <li>Robonomics (robonomics.network) and / or the AIRA (Airalab) team member WILL NOT send you any personal messages before you ask yourself for our help. Beware of messages containing any fake addresses or asking you personal data.</li>
                </ol>
              </section>
      
            </tab>

          <tab name="Science">
              <share :assets="science" :classes="'tab-science'"/>
          </tab>
          
          <tab name="Assets">
            <share :assets="assets"/>
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

  import IconCopy from '~/components/IconCopy.vue'
  import IconEtherscan from '~/components/IconEtherscan.vue'

  import assets from '@/data/assets.yaml'
  import docs from '@/data/docs.yaml'
  import science from '@/data/science.yaml'
  import intouch from '@/data/intouch.yaml'

  export default {

    components: {
      MetaInfo,
      share,
      tabs,
      tab,
      IconCopy,
      IconEtherscan
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


<style lang="scss">

  .address {
    word-break: break-word;
    overflow-wrap: break-word;
  }


  .token {
    padding: var(--space);

    &__sign {
      display: block;
      max-width: 100%;
      width: 10rem;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 600px) {
    .token {
      text-align: left;

      &__title {
        display: grid;
        grid-template-columns: 3rem 3fr;
        gap: calc( var(--space)/2 );
        align-items: center;

        h4 { margin: 0; }
      }

      .section {
        &:first-child { margin-top: 0; }
        &:last-child { margin-bottom: 0; }
      }
    }
  }

</style>