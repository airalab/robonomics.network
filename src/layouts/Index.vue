<template>
  <transition name="fade" appear>
    <div class="layout homepage screen" itemscope itemtype="http://schema.org/Product">
    
      <slot/>

      <Footer/>

    </div>
  </transition>
</template>


<script>
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Footer
  }
}
</script>
