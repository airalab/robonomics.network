<template>
  <div class="price" v-if="price">
    <div class="price-number">{{ price }}</div>
    <div class="price-desc">
      <div>{{ $t(message1) }}</div>
      <div>{{ $t(message2) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    price: {
      type: String,
      required: true,
    },
    message1: {
      type: String,
      required: true,
    },
    message2: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.price {
  display: flex;
  gap: var(--space);
  align-content: flex-start;
  margin-bottom: var(--space);
}

.price-number {
  font-variation-settings: var(--font-flex-extrabold);
  font-size: 2.7rem;
  line-height: 1;
}

.price-desc {
  min-width: 170px;
  font-variation-settings: var(--font-flex-medium);
}
</style>
