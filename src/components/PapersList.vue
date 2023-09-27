<template>

  <div class="papers__container"  v-if="assets">
    <div v-for="year in years" :key="year">
      <h2>{{ year }}</h2>
      <ul class="list-simple papers__list">
        <li class="share" :class="classes" v-for="(asset, key) in yearPapers(year)" :key="key">
          <PapersItem :asset=asset />
        </li>
      </ul>
    </div>

  </div>

</template>


<script>

import PapersItem from '~/components/PapersItem.vue'

export default {
  components: {
      PapersItem
    },

  props: {
    assets: { type: Array, default: () => [] },
    classes: ''
  },

  data() {
    return {
      years: [2023, 2022, 2021, 2020, 2019, 2018, 2017]
    }
  },
  
  methods: {
    yearPapers(year) {
      return this.assets.filter(asset => asset.year === year && !asset.pinned)
    }
  }

}
</script>

<style scoped>
  .papers__container > div {
    margin-bottom: calc(var(--space) * 2)
  }

  .papers__container h2 {
    font-family: var(--font-family);
    font-weight: 500;
    text-align: left;
    margin-bottom: calc(var(--space) * 0.4);
    letter-spacing: 0;
  }
</style>