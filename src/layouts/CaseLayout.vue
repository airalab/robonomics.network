<template>
  <layout>

    <Header
      :path="path"
      :text="introText"
      :introImg="introImg"
      :withExtras="withExtras"
    />

    <section class="case-page layout">
      <slot/>
    </section>
    
    <Footer 
      :link="link"
      :linkText="linkText"
      :showFooter="showFooter"
    />

  </layout>
</template>

<script>
export default {

  components: {
    Header: () => import('~/components/case/CaseHeader.vue'),
    Footer: () => import('~/components/case/CaseFooter.vue'),
  },

  props: {
    path: {
      type: String,
      required: true
    },
    introText: {
      type: String,
      default: '',
      required: false
    },
    introImg: {
      type: String,
      default: '',
      required: false
    },
    link: {
      type: String,
      default: ''
    },
    linkText: {
      type: String,
      default: ''
    },
    withExtras: {
      type: Boolean,
      default: false
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  }

}
</script>

<style scoped>
  section {
    margin-top: 0;
    margin-bottom: 0;
    margin-bottom: calc(var(--space) * 0.5);
  }
</style>