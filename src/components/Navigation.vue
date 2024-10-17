<template>
  <nav class="navigation">
    <ul aria-label="Use it">
      <li><g-link aria-label="Robonomics smart devices" to="/devices/">Smart devices</g-link></li>
      <li><g-link aria-label="Robonomics dapp" to="https://robonomics.app/">dapp</g-link></li>
      <li><g-link aria-label="Robonomics merch" to="/merch/">Wearable merch</g-link></li>
    </ul>

    <ul aria-label="Learn">
      <li><g-link aria-label="Robonomics academy" to="https://robonomics.academy/">Academy</g-link></li>
      <li><g-link aria-label="Robonomics wiki" to="https://wiki.robonomics.network/">Wiki</g-link></li>
    </ul>

    <ul aria-label="Explore website">
      <li><g-link aria-label="Robonomics papers" to="/papers/">Science & White paper</g-link></li>
      <li><g-link aria-label="about XRT" to="/xrt/">Tokenomics</g-link></li>
      <li><g-link aria-label="use cases" to="/cases/">Cases</g-link></li>
      <li><g-link aria-label="timeline" to="/timeline/">Timeline</g-link></li>
      <li><g-link aria-label="assets" to="/logos-and-assets/">Brand assets</g-link></li>
      <li><g-link aria-label="wallpapers" to="/wallpapers/">Wallpapers</g-link></li>
      <li><g-link aria-label="Home assistant themes" to="/home-assistant-themes/">Home assistant themes</g-link></li>
      <li><g-link aria-label="Robonomics NFT" to="/nft/">NFT</g-link></li>
      <li><g-link aria-label="books" to="/books/">Books & reading inspiration</g-link></li>
      <li><g-link aria-label="blog" to="/blog/">Blog</g-link></li>
      <li><g-link aria-label="contact us" to="/contact/">Contacts</g-link></li>
    </ul>
  </nav>
</template>

<style scoped>
  .navigation {
    display: flex;
    font-size: 80%;
    font-variation-settings: 'wght' 800;
    gap: var(--space);
    line-height: 1.2;
    padding: var(--space) var(--layout-sidepadding);
    text-transform: uppercase;
  }

  .navigation a {
    color: var(--text-color);
    font-size: 80%;
    font-variation-settings: var(--font-flex-bold);
    text-decoration: underline;
  }

  ul {
    position: relative;
    margin: 0;
  }

  ul li {
    padding-left: var(--space);
    margin-bottom: calc(var(--space) * 0.3);
  }

  ul:before {
    content: attr(aria-label);
    position: absolute;
    writing-mode: vertical-lr;
    writing-mode: sideways-lr;
    white-space: nowrap;

    color: var(--rb-color-light-gray);
  }

  ul:nth-child(1) a {
    white-space: nowrap;
  }

  ul:nth-child(3) {
    column-count: 4;
    gap: var(--space);
  }

  @media screen and (width > 1400px) {
    ul:nth-child(3) {
      column-count: 5;
    }
  }

  @media screen and (width < 1200px) {
    ul:nth-child(3) {
      column-count: 3;
    }
  }

  @media screen and (width < 900px) {
    ul:nth-child(3) {
      column-count: 2;
    }
  }

  @media screen and (width < 700px) {
    ul:nth-child(3) {
      column-count: 1;
    }
  }

  @media screen and (width < 500px) {
    .navigation {
      flex-direction: column;
    }

    ul li {
      padding-left: calc(var(--space) * 2);
    }
  }
</style>