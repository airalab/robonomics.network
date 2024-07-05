<template>
  <footer class="animate-inside" v-in-viewport.once>
    <div class="layout layout__content">
      <section>
        <div class="grid-4">

          <div>
            <ul class="animate-inside" v-in-viewport.once>
              <li><a href="/white-paper">{{$t('White Paper 2022')}}</a></li>
              <li><a href="/timeline">{{$t('Timeline')}}</a></li>
              <li><a href="/xrt">{{$t('Tokenomics')}}</a></li>
              <!-- <li><a href="/kusama-slot">{{$t('Parachain')}}</a></li> -->
            </ul>
          </div>

          <div>
            <ul class="animate-inside" v-in-viewport.once>
              <li><a href="/merch">{{$t('Robonomics merch')}}</a></li>
              <li><a href="/papers">{{$t('Science papers')}}</a></li>
              <li><a href="/books">{{$t('Books')}}</a></li>
              <li><a href="/logos-and-assets">{{$t('Logo and assets')}}</a></li>
              <li><a href="/home-assistant-themes">{{ $t('Home Assistant themes') }}</a></li>
              <li><a href="/wallpapers">{{ $t('Wallpapers') }}</a></li>
              <li><a href="/nft">NFT</a></li>
            </ul>
          </div>

          <div>
            <ul class="animate-inside" v-in-viewport.once>
              <li><a href="/devices">{{$t('Devices')}}</a></li>
              <li><a href="/blog">{{$t('Blog')}}</a></li>
              <li><a href="/cases">{{ $t('Cases') }}</a></li>
              <li><a href="/contact">{{$t('Contacts')}}</a></li>
            </ul>
          </div>

          <div>
            <ul class="animate-inside" v-in-viewport.once>
              <li><a href="https://wiki.robonomics.network">{{$t('Wiki')}}</a></li>
              <li><a href="https://robonomics.academy">{{$t('Academy')}}</a></li>
              <li><a href="https://github.com/airalab">{{$t('Github')}}</a></li>
              <li><a href="https://dapp.robonomics.network/#/">{{$t('Dapp')}}</a></li>
            </ul>
          </div>

        </div>
        <div class="robonomics-info">
          {{ $t('Robonomics is 100% open-source.') }}
          {{ $t('Anyone can contribute to') }} <g-link to="https://github.com/airalab">{{ $t('the code base') }}</g-link> {{ $t('or') }} <g-link to="https://robonomics.academy/en/learn/">{{ $t('build services with Robonomics') }}</g-link> 
        </div>

        <div class="robonomics-info footer-text"  v-if="$locale != 'en'">
          <span class="">{{ $t('Translation was executed by AI so there may be some inaccuracies') }}. </span>
           <g-link to="https://github.com/airalab/robonomics.network/issues">{{ $t('Inform us') }}</g-link>, {{ $t('please') }}, {{ $t('if you find any') }}
        </div>

        <div class="footer-text robonomics-info">
          <a href="/privacy-policy">{{ $t('Privacy Policy') }}</a>
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
    transition: background-color 0.33s ease;
    border-top: 1rem solid var(--color-light);
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

  .footer-text {
    font-weight: 300;
    font-size: 0.8rem;
    font-style: italic;
    color: #2b2b2b;
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
