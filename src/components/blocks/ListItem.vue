<template>
    <li :class="classList"><div class="robo-list-item-content"><slot/></div></li>
</template>

<script>
export default {
  name: 'RoboListItem',

  computed: {
    classList() {
      return {
        [`robo-list-item`]: true,
      };
    }
  },

}
</script>

<style>
    ol.robo-list {
      counter-reset: counter;
      margin-left: 0;
    }

    ol.robo-list li {
      counter-increment: counter;
      display: grid;
      align-items: center;
      grid-template-columns: 5rem auto;
      padding-left: 0;
      margin-bottom: var(--space);
      box-shadow: .2rem .2rem 0 var(--color-dark);
      position: relative;
      font-weight: bold;
    }

    ol.robo-list li:before {
      content: counter(counter);
      display: block;
      color: var(--color-light);
      
      font-family: var(--font-family-code);
      font-size: 3rem;
      
      text-align: center;
    }

    ol.robo-list li:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 5rem;
      background-color: var(--color-dark);
      z-index: 0;
    }

    .robo-list-item-content {
      background-color: var(--color-light);
      /* padding: calc(var(--space)*0.5); */
      padding: var(--space);
    }

    ol.robo-list li:before, .robo-list-item-content {
      position: relative;
      z-index: 1;
    }
</style>