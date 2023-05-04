<template>
    <div class="popup__content" >
      <h3>{{ $ts(title) }}</h3>
      <p class="hyphens">
        {{ $ts(description) }}
      </p>
    </div>
</template>

<script>
export default {

  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  }

}
</script>

<style scoped>
  .popup__content h3 {
    padding-right: 50px;
    font-size: calc(var(--base-font-size) * 0.7);
    text-align: left;
    text-transform: none;
  }

  .popup__content p {
    font-family: var(--font-family);
    font-size: calc(var(--base-font-size) * 0.7);
    text-transform: none;
  }


</style>