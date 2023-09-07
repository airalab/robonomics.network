<template>
  <CaseLayout
    :path="$route.path"
    introImg="blockchain-coffee/1.jpg"
    introText="The 'Robonomics Coffee' is a smart coffee machine integrated into the Robonomics Network. This project aims to illustrate Robonomics' potential in the IoT sphere through a real-world example."
    footerTitle="DIY or how to build your own smart blockchain coffee machine"
    footerText="<p>You can find a detailed tutorial and technical specifications in the open-source GitHub repository. Keep in mind that you can use any coffee machine you prefer and almost any token of your choice to bring this project to life in your own space.</p>"
    link="https://github.com/Multi-Agent-io/robonomics-coffee-maker"
    linkText="robonomics-coffee-maker"
  >
  test page
  </CaseLayout>
</template>

<script>
export default {

  components: {
    CaseLayout: () => import('~/layouts/CaseLayout.vue'),
  }

}
</script>

<style>

</style>