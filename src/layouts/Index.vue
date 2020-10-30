<template>
  <transition name="fade" appear>
    
    	<div class="layout homepage screen" itemscope itemtype="http://schema.org/Product">

        <g-image itemprop="logo" :alt="$static.metadata.siteName + ' logotype'" src="~/assets/images/robonomics-logo.svg" class="logo"/>
  			
        <slot/>

	  		<ClientOnly> <Footer/> </ClientOnly>
    	</div>
	
  </transition>
</template>



<static-query>
query {
  metadata {
    siteName,
    siteDescription
  }
}
</static-query>

<script>

export default {
  components: {
    Footer: () => import('~/components/Footer.vue')
  }
}
</script>
