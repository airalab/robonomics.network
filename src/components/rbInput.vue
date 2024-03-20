<template>

  <label class="contacts__label label">
    <input
      required 
      :name="name" 
      class="contacts__input input" 
      :class="[{'sent': result === 'success'}, {'mb': mb}]"
      :type="type" 
      :data-gsp-name="name" 
      :data-gsp-data="model" 
      :model="model"
      :disabled="result === 'success'"
      @change="(event) => $emit('changeInputValue', event.target.value)"
    >
    <span>{{ text }}</span>
  </label>
  
</template>

<script>
export default {

  props: {

    model: {
      type: String,
      default: ''
    },

    text: {
      type: String,
      default: ''
    },

    result: {
      type: String,
      default: ''
    },

    name: {
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: 'text'
    },

    mb: {
      type: Boolean,
      default: false
    }
  }

}
</script>

<style scoped>

  .contacts__input.mb {
    margin-bottom: var(--space);
  }

</style>
