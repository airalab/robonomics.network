<template>
  <component
    :is="componentType"
    :class="classes"
    v-bind="$attrs"
    :disabled="loading"
  >
    <slot name="iconleft" />

    <Spinner v-if="loading" class="robo-button-loader" />

    <span class="robo-button-content">
      <slot />
    </span>

    <slot name="iconright" />
  </component>
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue';

// Lazy load Spinner component
const Spinner = defineAsyncComponent(() => import('./LoaderSpin.vue'));

// Define props
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'ok', 'error', 'na'].includes(value),
  },
});

// Determine component type (button or link)
const componentType = computed(() => {
  return props.to ? 'a' : 'button';
});

// Compute classes dynamically
const classes = computed(() => ({
  'robo-button': true,
  [`robo-button-${props.type}`]: props.type,
}));
</script>

<style scoped>
.robo-button {
  --color-background: var(--color-blue);
  --color-text: var(--color-light);
  --input-padding: 0.8rem;

  background-color: var(--color-background);
  border: 1px solid var(--color-dark);
  box-shadow: 0.2rem 0.2rem 0 var(--color-dark);
  color: var(--color-text);
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;

  align-items: center;
  display: inline-flex;
  gap: var(--input-padding);
  justify-content: center;
}

.robo-button:hover {
  --color-background: var(--color-blue-dark);
}

.robo-button-ok {
  --color-background: var(--color-green);
  cursor: default;
  pointer-events: none;
}

.robo-button-error {
  --color-background: var(--color-red);
  cursor: default;
  pointer-events: none;
}

.robo-button-na,
.robo-button[disabled] {
  --color-background: var(--color-gray-mid);
  cursor: default;
  pointer-events: none;
}
</style>
