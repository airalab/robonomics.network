<template>
    <component 
    :is="element"
    :class="classList"
    >
        <slot/>
    </component>
</template>

<script>

export default {
  name: 'RoboList',

  props: {
    type: {
      type: String,
      default: 'ordered',
      validator: function (value) {
        return ['unordered', 'ordered'].indexOf(value) !== -1;
      }
    },
  },

  computed: {
    classList() {
      return {
        [`robo-list`]: true,
      };
    },

    element() {
        if(this.type === 'unordered') {
            return 'ul'
        } else if(this.type === 'ordered') {
            return 'ol'
        }
    }
  },

}
</script>

<style scoped>
    .robo-list {
        list-style: none;
    }
</style>