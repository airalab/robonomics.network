<template>
  <section v-if="showFooter" class="case-page-footer layout">
    <div class="layout__text">
      <h2>The way forward</h2>
      <p class="italic-abstract">
        Reducing energy usage in the office is just as important as compensating for carbon emissions. We can achieve this by making small changes like using energy-efficient lighting and appliances and keeping office equipment well-maintained.
      </p>
      <p class="italic-abstract">
        Energy consumption is a big part of our carbon footprint, and businesses must do their part to be more environmentally friendly. Having a system that tracks energy usage and helps offset carbon emissions can greatly reduce the impact of an office building on the environment. By adopting the right approach, businesses can contribute to a greener future.
      </p>

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

</style>