<template>
  <footer class="animate-inside" v-in-viewport.once>
    <div class="layout layout__content">
      <section>
        <div class="grid-4">

          <div>
            <ul class="animate-inside" v-in-viewport.once>
              <li><g-link to="/white-paper">{{$ts('White Paper 2022')}}</g-link></li>
              <li><g-link to="/timeline">{{$ts('Timeline')}}</g-link></li>
              <li><g-link to="/xrt">{{$ts('Tokenomics')}}</g-link></li>
              <li><g-link to="/kusama-slot">{{$ts('Parachain')}}</g-link></li>
            </ul>
          </div>

          <div>
            <ul class="animate-inside" v-in-viewport.once>
              <li><g-link to="/shop">{{$ts('Shop')}}</g-link></li>
              <li><g-link to="/papers">{{$ts('Science papers')}}</g-link></li>
              <li><g-link to="/books">{{$ts('Books')}}</g-link></li>
              <li><g-link to="/logos-and-assets">{{$ts('Logo and assets')}}</g-link></li>
              <li><g-link to="/wallpapers">Wallpapers</g-link></li>
              <li><g-link to="/nft">NFT</g-link></li>
            </ul>
          </div>

          <div>
            <ul class="animate-inside" v-in-viewport.once>
              <li><g-link to="/blog">{{$ts('Blog')}}</g-link></li>
              <li><g-link to="/ambassador-program">{{$ts('Ambassador program')}}</g-link></li>
              <li><g-link to="/contact">{{$ts('Contacts')}}</g-link></li>
            </ul>
          </div>

          <div>
            <ul class="animate-inside" v-in-viewport.once>
              <li><g-link to="https://wiki.robonomics.network">{{$ts('Wiki')}}</g-link></li>
              <li><g-link to="https://robonomics.academy">{{$ts('Academy')}}</g-link></li>
              <li><g-link to="https://github.com/airalab">{{$ts('Github')}}</g-link></li>
              <li><g-link to="https://dapp.robonomics.network/#/">{{$ts('Dapp')}}</g-link></li>
            </ul>
          </div>

        </div>
        <div class="robonomics-info">
          <!-- <span class="robonomics-info--accent">Robonomics is 100% open-source. </span> -->
          Robonomics is 100% open-source.
          Anyone can contribute to <g-link to="https://github.com/airalab">the code base</g-link> or <g-link to="https://robonomics.academy/en/learn/">build services with Robonomics</g-link> 
        </div>
      </section>
    </div>
  </footer>
</template>


<static-query>
query {
  metadata {
    discord,
    twitter
  }
}
</static-query>


<style scoped>

  footer {
    color: #fff;
    padding: calc(var(--space) * 0.5) 0;
    font-family: var(--font-family-code);
    transition: background-color 0.33s ease;
  }


  .layout {
    text-align: left;
  }

  h4 {
    text-align: left;
  }

  li > a {
    text-decoration: none;
    font-weight: 300;
    font-size: 1rem;
    color: var(--color-dark) !important;
    transition: opacity 0.33s ease-in-out;
  }

  footer a:hover {
    opacity: 0.7;
  }

  /* .grid-5 > div:not(:first-child) {
    
    padding: var(--space);
    background-color: var(--color-darkish);
  } */

  /* footer section {
    padding-left: calc(var(--space) * 5);
  } */

  footer .grid-4 {
    padding-bottom: var(--space);
    padding-left: calc(var(--space) * 5);
    border-bottom: 1px solid var(--color-gray-mid);
  }

  .grid-4 > div ul {
    list-style: none;
    margin-left: 0;
  }

  .grid-4 li {
    margin-bottom: calc(var(--space) * 0.5);
  }
    

  .footer-line {
    padding: var(--space) 0;
    border-top: 1px solid var(--color-gray-mid);
    color: var(--color-gray-mid);
  }

  #footer-web3Badge {
    display: block;
    max-width: 200px;
    margin-top: var(--space)
  }

  .dark-theme #footer-web3Badge svg path  {
    fill: #fff;
  }

  .robonomics-info {
    padding-top: var(--space);
    font-weight: 300;
    color: var(--color-dark);
    text-align: center;
    text-transform: uppercase;
  }

  .robonomics-info a {
    color: var(--color-blue) !important;
  }

  @media screen and (max-width:1500px){
    footer .grid-4 { grid-template-columns: repeat(3,1fr); }
  }

  @media screen and (max-width:990px){
    /* footer section {
      padding-left: 0;
    } */
    footer .grid-4 { grid-template-columns: repeat(2,1fr);  padding-left: 0;}
  }

  @media screen and (max-width:720px){
    footer .grid-4 { grid-template-columns: 1fr; }

    .robonomics-info {
      text-align: left;
    }
  }

</style>


<script>

  export default {
    methods: {
      loadPage(newpath) {
        window.location.href = newpath

        if(window.location.pathname === '/community/') {
          location.reload()
        }

      }
    },
    computed: {
      year: () => (new Date).getFullYear()
    }
  }
</script>
