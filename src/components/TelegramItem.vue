<template>
    <g-link v-if="contact" :to="contact.link" class="telegram-item">
      <g-image quality="75"  :src="require('!!assets-loader!~/assets/images/'+asset[0].img)"/>
      <span>{{ contact.text }}</span>
    </g-link>

</template>

<script>
export default {

  props: ['contact', 'asset'],


}
</script>

<style scoped>
  .telegram-item {
    position: relative;
    width: 91px;
    height: 91px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #008BDA;
  }

  .telegram-item span {
    position: absolute;
    bottom: 5px;
    left: 5px;
    font-weight: 600;
    font-size: calc(var(--base-font-size) * 0.8);
    color: #fff;
  }

  @media screen and (max-width: 650px) {
    .telegram-item {
      width: 80px;
      height: 80px;
    }
  }
</style>