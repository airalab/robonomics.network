<template>
	<nav class="menu oldy" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
		<div>
      <g-link to="/community" itemprop="url"><span itemprop="name">Enter the Robonomics</span></g-link>
      <p>All you need to know is here: white paper, roadmap, token, assets, chat and other social links.</p> 
    </div>
    <div>
      <g-link to="https://github.com/airalab/robonomics/releases" target="_blank" itemprop="url"><span itemprop="name">Github Releases</span></g-link>
      <p>Build technical && economic transactions in Polkadot/Ethereum blockchain with robots using opensource Robonomics framework.</p>
    </div>
		<div>
      <g-link to="https://wiki.robonomics.network" target="_blank" itemprop="url"><span itemprop="name">WIKI for devs</span></g-link>
      <p>Robonomics network quick start: installation and setting up guides, examples, glossary.</p>
    </div>
		<div>
      <g-link to="https://dapp.robonomics.network" target="_blank" itemprop="url"><span itemprop="name">DApp tools</span></g-link>
      <p>Decentralized application with variety of Robonomics tools: swapping tokens, telemetry, working services, parachain etc.</p>
    </div>
    
	</nav>
</template>


<style lang="scss">
	.menu{
      // max-width: 320px;
      display: inline-block;
      margin: calc(var(--space)/2) var(--space);

      div {
        padding: 1rem 0;
        border-bottom: 1px dotted var(--color-gray);
        margin-bottom: 1rem;

        &:last-child {
          border-bottom: 0;
          margin-bottom: 0;
        }

        p {
          font-size: 0.85rem;
          line-height: 1.2;
          margin-bottom: 0;
        }
      }

      a{
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        font-weight: 400;

        display: block;
        margin-bottom: 0.1rem;

        &::after {
          display: none !important
        }
      }
    }
</style>
