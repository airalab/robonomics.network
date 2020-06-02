<template>
  <layout-inside>

    <div class="layout__content layout__text">
      <h1>Robonomics framework community</h1>
    </div>

    <section class="layout__content layout__text">
      <tabs>
          <!-- <tab name="Intro" :selected="true"> -->
          <tab name="Intro" :selected="true">
            <p class="hyphens"><strong>Get involved</strong> to Robonomics Network Community: read White paper, science papers, our brochures and other docs; find here information about XRT token; read news from our social account, chat with us, get intouch.</p>

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
              <share :assets="science"/>
          </tab>
          <tab name="Token"></tab>
          <tab name="Intouch"></tab>
      </tabs>
    </section>

  </layout-inside>
</template>


<script>

  import share from '~/components/Share.vue'
  import tabs from '~/components/tabs.vue'
  import tab from '~/components/tab.vue'

  import assets from '@/data/assets.yaml'
  import docs from '@/data/docs.yaml'
  import science from '@/data/science.yaml'

  export default {
    components: {
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
      }
    }
    
  }

</script>