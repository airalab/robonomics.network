<template>
  <div class="timeline__item" :class="{'bottom-line': bottomLine}">
    <span class="timeline__year">{{ year }}</span>
    <h2 class="timeline__title">{{ title }}</h2>
    <div class="timeline__text" v-html="text"></div>
    <div class="timeline__events" v-if="events.length">
      <h3>Notable events:</h3>
      <div class="timeline__events-wrapper">
        <g-link class="timeline__link" v-for="event in events" :key="event.id" :to="event.link">
          {{ event.name }}
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: {
    year: {
      type: String | Number,
      default: '',
      required: true
    },
    title: {
      type: String,
      default: '',
      required: true
    },
    text: {
      type: String,
      default: '',
      required: true
    },
    events: {
      type: Array,
      default() {
        return []
      }
    },
    bottomLine: {
      type: Boolean,
      default: true,
    }
  }

}
</script>

<style>

  .timeline__item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 166px;
  }

  .bottom-line {
    margin-bottom: var(--space);
  }

  .bottom-line::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 130px;
    background-color: var(--color-dark);

  }

  .timeline__year {
    font-family: var(--font-family-code);
    font-size: calc(var(--base-font-size) * 2);
  }

  .timeline__title {
    margin-top: var(--space);
    font-family: var(--font-family);
    font-weight: 500;
    font-size: var(--base-font-size);
    text-transform: none;
  }

  .timeline__link{
    text-decoration: none;
  }

  .timeline__events {
    margin-top: var(--space);
    align-self: flex-start;
  }

  .timeline__events h3 {
    margin-bottom: calc(var(--space) * 0.5);
    text-align: left;
    font-family: var(--font-family);
    font-weight: 400;
    text-transform: none;
  }

  .timeline__events-wrapper {
    display: flex;
    flex-direction: column;
  }

</style>