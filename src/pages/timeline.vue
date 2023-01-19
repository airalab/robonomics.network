<template>
  <layout>

    <MetaInfo
        pageTitle = "Timeline of infrastructure & tech development"
        pageDescription = "The Robonomics project started on 2015. See what was start idea and our checkpoints over the years. This is good brief introduction for newcomers and summary for pioneers."
        pageImage = "/website_cover_timeline.jpg"
      />

    <div class="timeline__main-title title-with-bg">
      <h1><span>Infrastructure && tech development timeline</span></h1>
    </div>

    <section class="layout layout__text">
      <TimelineItem 
        v-for="item in items"
        :key="item.id"
        :year="item.year"
        :title="item.title"
        :text="item.text"
        :events="item.events"
        :bottomLine="item.line"
      />
    </section>

  </layout>
</template>

<style scoped>

  @media screen and (max-width: 480px) {
    .timeline__main-title h1 {
      font-size: 1.6rem;
    }
  }

  
</style>

<script>

  import MetaInfo from '~/components/MetaInfo.vue';
  import TimelineItem from '~/components/TimelineItem.vue'

  import timeline from '@/data/timeline.yaml'

  export default {
    components: {
      MetaInfo,
      TimelineItem
    },

    computed: {
      items () {
        return timeline
      }
    }
  }
</script>
