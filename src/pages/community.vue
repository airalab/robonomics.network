<template>
  <layout-inside>

    <div class="layout__content layout__text">
      <h1>Robonomics framework community</h1>
    </div>

    <section class="layout__content layout__text">
      <tabs>
          <tab name="Intro" class="layout__content layout__text">
            <p class="hyphens"><strong>Get involved</strong> to Robonomics Network Community: read White paper, science papers, our brochures and other docs; find here information about XRT token; read news from our social account, chat with us, get intouch.</p>

            <p class="hyphens"><strong>If you are already involved</strong>, you can find here useful assets: logotype, token sign, slides template, wallpapers etc.</p>

            <p class="hyphens"><strong>If you have no idea</strong>, what is Robonomics, go to our <g-link to="https://wiki.robonomics.network/">Wiki</g-link>, read docs from tabs 'DOCS' and 'SCIENCE', chat with us (all links in tab 'INTOUCH').</p>
          </tab>

          <tab name="Assets" class="layout__content layout__text">
            <share :assets="assets"/>
          </tab>
          <tab name="Docs" class="layout__content layout__text">
              <ul>
                <li>Book</li>
                <li>Book</li>
              </ul>
          </tab>
          <tab name="Science" class="layout__content layout__text">
              <ul>
                <li>Article</li>
                <li>Article</li>
              </ul>
          </tab>
          <tab name="Token" class="layout__content layout__text">
              some info
          </tab>
          <tab name="Intouch" class="layout__content layout__text">
              some info
          </tab>
      </tabs>
    </section>

  </layout-inside>
</template>

<style lang="scss">

  .tabs-component-tabs {
    list-style: none;
    border-bottom: 2px solid;
    border-color: var(--color-text);
    width: 100%;
    margin-left: 0;
  }

  .tabs-component-tab {
    display: inline-block;
    margin-right: 2rem;

    &:last-child {
      margin-right: 0;
    }

    &-a {
      text-transform: uppercase;
      letter-spacing: 0.05rem;
      text-decoration: none;
      font-weight: 500;
    }

    &.is-active a {
      color: var(--color-text);
    }
  }
  
</style>

<script>
  import Vue from 'vue'
  import Tabs from 'vue-tabs-component'
  Vue.use(Tabs)

  import share from '~/components/Share.vue'
  import assets from '@/data/assets.yaml'

  export default {
    components: {
      share
    },
    computed: {
      assets () {
        return assets
      }
    }
    
  }

</script>