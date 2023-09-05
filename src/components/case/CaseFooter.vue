<template>
  <section v-if="showFooter" class="case-page-footer layout">
    <div class="layout__text">
      <h2>{{ title }}</h2>
      <div class="mb" v-html="text" />
      <CaseGithubLink v-if="link" :link="link" :linkText="linkText"/>
    </div>
  </section>
</template>

<script>
export default {

  components: {
    CaseGithubLink: () => import('~/components/case/CaseGithubLink.vue'),
  }, 

  props: {
    link: {
      type: String,
      default: ''
    },
    linkText: {
      type: String,
      default: ''
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  }

}
</script>

<style scoped>

  .case-page-footer {
    padding-bottom: var(--space);
  }
  .case-page-footer p {
    margin-bottom: var(--space);
  }

  .case-page-footer h2 {
    margin-bottom: calc(var(--space) * 0.5);
    text-align: left;
    text-transform: unset;
    font-family: var(--font-family);
    font-size: calc(var(--base-font-size) * 1.3);
    font-weight: 800;
    letter-spacing: 0;
  }

  .mb {
    margin-bottom: var(--space);
  }

</style>