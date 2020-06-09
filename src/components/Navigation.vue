<template>
	<nav class="menu" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
		<g-link to="https://github.com/airalab/robonomics/releases" target="_blank" itemprop="url"><span itemprop="name">Releases</span></g-link>
		<g-link to="https://wiki.robonomics.network" target="_blank" itemprop="url"><span itemprop="name">WIKI</span></g-link>
		<g-link to="https://dapp.robonomics.network" target="_blank" itemprop="url"><span itemprop="name">DApp</span></g-link>
		<g-link to="/community" itemprop="url"><span itemprop="name">Community</span></g-link>
	</nav>
</template>


<style lang="scss">
	.menu{
      display: inline-block;
      border: 1px solid var(--color-dark);
      padding: calc(var(--space)/2);
      margin-top: calc(var(--space)/2);

      box-shadow: .2rem .2rem 0 var(--color-dark);
      background-color: var(--color-light);

      a{
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        font-weight: 400;

        display: block;
        margin-bottom: 0.1rem;
      }
    }
</style>