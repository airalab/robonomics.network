<template>
  <layout>

    <MetaInfo
        pageTitle = "Timeline of infrastructure & tech development"
        pageDescription = "The Robonomics project started on 2015. See what was start idea and our checkpoints over the years. This is good brief introduction for newcomers and summary for pioneers."
        pageImage = "/website_cover_timeline.jpg"
      />

    <div class="timeline__main-title">
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

  .timeline__main-title {
    display: inline-block;
    margin-top: 0;
    padding-top: 20px;
    max-width: 1080px;
    width: 100%;
    overflow: hidden;
  }

  .timeline__main-title h1 {
    display: inline;
    text-align: left;
    padding: 0;
    font-weight: 500;
    color: var(--color-light);
    background-color: var(--color-dark);
  }

  .timeline__main-title span {
    padding-left: var(--space);
    padding-right: var(--space);
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }

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
