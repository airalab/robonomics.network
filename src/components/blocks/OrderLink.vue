<template>
  <li class="order-item" v-if="link">
    <a class="italic-text" :href="link" :aria-label="`Buy ${title} in ${region}`" target="_blank">
     <span class="region">{{ region }}</span>
     <ul class="payment__list list-simple"> 
      <li 
        v-for="option in payments"
        :key="option.label"
        v-html="option.icon"
      ></li>
     </ul>
    </a>
  </li>
</template>

<script setup>
// Props
const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  flag: {
    type: String,
    default: "🌍", 
  },
  region: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  payments: {
    type: Array,
    required: true
  }
})
</script>

<style>

.payment__list li svg {
  position: relative;
  transform: scale(1.1);
}

@media screen and (max-width: 770px) {
  .payment__list li svg {
    transform: scale(0.9);
  }
}

@media screen and (max-width: 600px) {
  .payment__list li svg {
    transform: scale(1);
  }
}
</style>

<style scoped>
.order-item a {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 15px;
  width: 100%;
  border: 1px solid var(--color-blue);
  padding-right: 50px;
  background-image: url("data:image/svg+xml,%3Csvg width='26' height='16' viewBox='0 0 44 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M43.7071 8.70711C44.0976 8.31658 44.0976 7.68342 43.7071 7.29289L37.3431 0.928932C36.9526 0.538408 36.3195 0.538408 35.9289 0.928932C35.5384 1.31946 35.5384 1.95262 35.9289 2.34315L41.5858 8L35.9289 13.6569C35.5384 14.0474 35.5384 14.6805 35.9289 15.0711C36.3195 15.4616 36.9526 15.4616 37.3431 15.0711L43.7071 8.70711ZM0 9H43V7H0V9Z' fill='%232949D3'/%3E%3C/svg%3E%0A");
  background-position: 98% 17px;
  background-repeat: no-repeat;
  font-variation-settings: var(--font-flex-italicbold);
  cursor: pointer;
}

.order-item .region {
  min-height: 50px;
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-light);
  background-color: var(--color-blue);
  text-transform: uppercase;
  transition: background-color 0.3s ease-in-out;
}

.order-item a:hover .region {
  background-color: var(--color-dark);
}

.payment__list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-left: auto;
  margin-bottom: 0;
}

.payment__list li {
  margin-bottom: 0;
}

.payment__list li:not(:last-child) {
  margin-right: calc(var(--space) * 0.3);
}

@media screen and (max-width: 770px) {
  .order-item .region {
    min-width: 80px;
  }
}

</style>
