<template>

  <div direction="ltr"  class="papers__item oldy" v-on:click="selectInButton">
    <h3 class="papers__item-title"> {{ $t(asset.title) }} </h3>
    <div class="papers__info">
      <g-link :to="option.link" class="papers__link" :class="{'center': option.position === 'center'}"  v-for="option in asset.options" :key="option.id">
        <g-image v-if="option.icon" alt="option.text" :src="require('!!assets-loader!~/assets/images/papers/'+option.icon)"/>
        <span v-else>{{ option.text }}</span>
      </g-link>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      selected: 0
    }
  },
  props: ['asset'],
  methods: {
      selectInButton(event){
        // console.log(event.target.tagName);
        if ( event.target.tagName === 'SELECT' || event.target.tagName === 'OPTION' )
          event.preventDefault();
          // event.stopPropagation();
      }
  }
}
</script>

<style scoped>
  .papers__item {
    margin-bottom: var(--space);
    border: none;
    background-color: #fff;
    color: #000;
  }

  /* dark-theme */
  .dark-theme .papers__item {
    box-shadow: 0.4rem 0.4rem 0 #223695;
  }

  .papers__item-title {
    margin-bottom: calc(var(--space) * 0.5);
    font-weight: 500;
    font-family: var(--font-family);
    font-size: calc(var(--base-font-size) * 1.2);
    text-align: left;
    text-transform: none;
    letter-spacing: 0;
  }

  .papers__info {
    display: flex;
    align-items: center;
    gap: var(--space);
    padding-left: 80px;
    min-height: 36px;
    height: 100%;
    padding-top: calc(var(--space) * 1);
    background-image: url("data:image/svg+xml,%3Csvg width='44' height='40' viewBox='0 0 44 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 35.5H0.5V36H1V35.5ZM43.8536 35.8536C44.0488 35.6583 44.0488 35.3417 43.8536 35.1464L40.6716 31.9645C40.4763 31.7692 40.1597 31.7692 39.9645 31.9645C39.7692 32.1597 39.7692 32.4763 39.9645 32.6716L42.7929 35.5L39.9645 38.3284C39.7692 38.5237 39.7692 38.8403 39.9645 39.0355C40.1597 39.2308 40.4763 39.2308 40.6716 39.0355L43.8536 35.8536ZM0.5 0V35.5H1.5V0H0.5ZM1 36H43.5V35H1V36Z' fill='black'/%3E%3C/svg%3E");
    background-position: 10px center;
    background-size: 44px 44px;
    background-repeat: no-repeat;
  }

  .papers__link {
    display: block;
  }

  .papers__link img {
    min-height: 44px;
  }

  .papers__link.center {
    margin: 0 auto;
  }

  @media screen and (max-width: 750px) {
    .papers__info {
      background-image: none;
      padding-left: 0;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media screen and (max-width: 750px) {
    .papers__info {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }


</style>