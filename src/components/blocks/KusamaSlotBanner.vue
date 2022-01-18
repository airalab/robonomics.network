<template>
    <Card :icon="'/icons/icon-future.png'">

    <h3>Dotsama for robots program initiated</h3>

    Head over to the <g-link to="/kusama-slot/">Robonomics Kusama slot page</g-link> to know more! 🦾

    </Card>
</template>

<script>
export default {
    components: {
      Card: () => import("~/components/TextCard.vue")
    }
}
</script>

<style scoped>
  .card {
    margin-top: calc(var(--space) * 2)
  }
</style>