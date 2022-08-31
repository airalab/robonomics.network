<template>
  <div class="scheme">
    <div class="scheme-item animate" v-in-viewport.once><div>{{$ts('User (D)App')}}</div></div>

    <div class="scheme-a animate-inside" v-in-viewport.once>
      <div class="scheme-a-right">
        <span>{{$ts('Function request')}}</span>
        <span aria-hidden="true" class="arrow">---------------&gt;</span>
      </div>
      <div class="scheme-a-left">
        <span>{{$ts('Report')}}</span>
        <span aria-hidden="true" class="arrow">&lt;---------------</span>
      </div>
    </div>

    <div class="scheme-item animate" v-in-viewport.once><div>{{$ts('Digital twin')}}</div></div>

    <div class="scheme-a animate-inside" v-in-viewport.once>
      <div class="scheme-a-right">
        <span>{{$ts('Control')}}</span>
        <span aria-hidden="true" class="arrow">---------------></span>
      </div>
      <div class="scheme-a-left">
        <span>{{$ts('Log')}}</span>
        <span aria-hidden="true" class="arrow">&lt;---------------</span>
      </div>
    </div>

    <div class="scheme-item animate" v-in-viewport.once><div>{{$ts('IoT Device')}}</div></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .scheme {
    display: grid;
    grid-template-columns: 1fr 150px 1fr 150px 1fr;
    gap: var(--space);
    align-items: stretch;
    align-content: center;
    justify-items: stretch;
    justify-content: space-between;
    margin: calc(var(--space)*2) 0 0;

    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: var(--font-family-code);
  }

  .scheme > * {
    display: grid;
    align-content: center;
  }

  .scheme-item {
    min-height: 150px;
    border: 1px dashed var(--color-blue-light);
    padding: var(--space);
  }

  .scheme-a {
    font-size: 60%;
    color: var(--color-blue-light);
  }

  .scheme-a span {
    display: block;
  }

  .scheme-a .arrow {
    white-space: nowrap;
  }

  .scheme-a-left {
    color: var(--color-pink);
  }

  @media screen and (max-width: 1200px) {
    .scheme {
      gap: 0;
      grid-template-columns: 1fr 120px 1fr 120px 1fr;
      font-size: 80%;
    }
  }

  @media screen and (max-width: 786px) {
    .scheme {
      grid-template-columns: 1fr;
      gap: calc(var(--space)*2);
    }

    .scheme .scheme-a {
      font-size: 80%;
      transform: rotate(90deg);
    }
  }
</style>