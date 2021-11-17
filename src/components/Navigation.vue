<template>
	<nav class="menu oldy" itemscope itemtype="http://www.schema.org/SiteNavigationElement">
		<div>
      <a href="/community" itemprop="url"><span itemprop="name">Enter the Robonomics</span></a>
      <!-- <a href="/community" itemprop="url"><g-image src="~/assets/images/1.gif" style="width: 25px; margin-right:15px"/><span itemprop="name">Enter the Robonomics</span></a> -->
      <p>All you need to know is here: white paper, roadmap, token, assets, chat and other social links.</p> 
    </div>
    <div>
      <a href="https://github.com/airalab/robonomics/releases" target="_blank" itemprop="url" rel="noopener"><span itemprop="name">Github Releases</span></a>
      <p>Build technical && economic transactions in Polkadot/Ethereum blockchain with robots using opensource Robonomics framework.</p>
    </div>
		<div>
      <a href="https://wiki.robonomics.network" target="_blank" itemprop="url" rel="noopener"><span itemprop="name">WIKI for devs</span></a>
      <p>Robonomics network quick start: installation and setting up guides, examples, glossary.</p>
    </div>
		<div>
      <a href="https://dapp.robonomics.network" target="_blank" itemprop="url" rel="noopener"><span itemprop="name">DApp tools</span></a>
      <p>Decentralized application with variety of Robonomics tools: swapping tokens, telemetry, working services, parachain etc.</p>
    </div>
    
	</nav>
</template>


<style scoped>
	.menu{
      max-width: 880px;
      display: block;
      margin: calc(var(--space)/2) auto;
  }

  .menu div {

        padding: 1rem 0;
        border-bottom: 1px dotted var(--color-gray);
        margin-bottom: 1rem;
  }

        .menu div:last-child {
          border-bottom: 0;
          margin-bottom: 0;
        }

        .menu div p {
          font-size: 0.85rem;
          line-height: 1.2;
          margin-bottom: 0;
        }
      

      .menu div a{
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        font-weight: 400;

        display: block;
        margin-bottom: 0.1rem;
      }
    
    .menu div a::after {
          display: none !important
        }
</style>
