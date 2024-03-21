<template>
  <div class="devices-shop-counter">
    <div class="devices-shop-counter__item">
      <button class="devices-shop-counter__btn" @click="$emit('decreaseCount')">-</button>
      <input type="number" :value="count" name="device count" @change="(event) => $emit( 'changeCount', event.target.value)" />
      <button class="devices-shop-counter__btn" @click="$emit('increaseCount')">+</button>
    </div>
    <rb-button class="devices-shop-counter__btn-cart" buttonstyle="flat" buttoncolor="green" to="/"> {{ $t('Go to cart') }} </rb-button>
  </div>
</template>

<script>
export default {

  props: {
    count: {
      type: Number | String,
      default: 0
    }
  }

}
</script>

<style scoped>

  .devices-shop-counter {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: calc(var(--space) * 0.5);
  }

  .devices-shop-counter__btn {
    width: 28px;
    height: 28px;
    padding: 0;
    line-height: 0;
    border-radius: 100%;
    background-color: var(--rb-color-light-gray);
    color: var(--color-dark);
    border: none;
    text-align: center;
  }

  .devices-shop-counter__btn:first-of-type {
    margin-right: calc(var(--space) * 0.3);
  }

  .devices-shop-counter__btn:last-of-type {
    margin-left: calc(var(--space) * 0.3);
  }

  .devices-shop-counter__item input {
    padding-right: 10px;
    padding-left: 10px;
    max-width: 62px;
    font-family: var(--font-family);
    text-align: center;
  }

  .devices-shop-counter__btn-cart {
    padding: calc(var(--space)* 0.5) calc(var(--space)* 0.2);
    font-family: var(--font-family);
    letter-spacing: 0;
    font-size: calc(var(--base-font-size)* 0.8);
    
    background-color:  hsl(72, 100%, 41%);
  }

  @media screen and (max-width: 1160px) {
    .devices-shop-counter  {
      justify-content: center;
      gap: 20px;
    }
  }


</style>