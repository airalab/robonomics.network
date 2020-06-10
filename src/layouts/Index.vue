<template>
  <transition name="fade" appear>
    
    	<div class="layout homepage screen" itemscope itemtype="http://schema.org/Product">
  			<slot/>

	  		<ClientOnly> <Footer/> </ClientOnly>
    	</div>
	
  </transition>
</template>


<script>


export default {
  components: {
    Footer: () => import('~/components/Footer.vue')
  }
}
</script>
