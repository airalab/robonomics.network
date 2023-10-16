<template>

  <g-link :to="asset.options[0].link" class="share__link" :class="{ 'no-image': !asset.img }">
    <div class="share__col share__img" v-if="asset.img">
      <g-image quality="75"  :src="require('!!assets-loader!~/assets/images/'+asset.img)"/>
    </div>
  </g-link>

</template>




<style scoped>

  .share {
    margin-bottom: var(--space);
  }

  @media screen and (max-width: 650px) {
    .share__link {
      display: inline-block;
      width: 80px;
      height: 80px;
    }
  }
  
</style>



<script>

export default {
  
  data () {
    return {
    }
  },

  props: ['asset'],


  methods: {
  }

}
</script>
