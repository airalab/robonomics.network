<template>
  <footer class="animate-inside" v-in-viewport.once>
    <div class="layout layout__content">
      <section class="grid-4">

        <div>
          <g-image aria-hidden="true" src="~/assets/images/robonomics-polkapet.png" />
          <g-link id="footer-web3Badge" to="https://medium.com/web3foundation/web3-foundation-grants-wave-two-recipients-16d9b996501d"><g-image aria-hidden="true" src="~/assets/images/web3_foundation_grants_badge_black_white.png" /></g-link>
        </div>

        <div>
          <h4>Use Robonomics</h4>
          <ul class="animate-inside" v-in-viewport.once>
            <li><g-link to="https://dapp.robonomics.network/#/">Dapp</g-link></li>
            <li><g-link to="https://github.com/airalab">GitHub</g-link></li>
            <li><g-link to="https://wiki.robonomics.network/">WIKI</g-link></li>
          </ul>
        </div>

        <div>
          <h4>Contribute</h4>
          <ul class="animate-inside" v-in-viewport.once>
            <li><g-link to="https://wiki.robonomics.network/docs/en/contributing/">Development</g-link></li>
            <li><g-link to="https://wiki.robonomics.network/docs/en/translate-wiki/">Translation</g-link></li>
          </ul>
        </div>

        <div>
          <h4>Stay tunned</h4>
          <ul class="animate-inside" v-in-viewport.once>
            <li><g-link :to="$static.metadata.discord">Discord</g-link></li>
            <li><g-link :to="$static.metadata.twitter">Twitter</g-link></li>
          </ul>
        </div>

        <!-- <div>
          <ul class="animate-inside" v-in-viewport.once>
            <li><a @click.prevent="loadPage('/community/#docs')" href="/community/#docs">Documents</a></li>
            <li><a @click.prevent="loadPage('/community/#token')" href="/community#token">Token</a></li>
            <li><a @click.prevent="loadPage('/community/#science')" href="/community/#science">Science</a></li>
            <li><a @click.prevent="loadPage('/community/#assets')" href="/community#assets">Logo and brand assets</a></li>
            <li><a @click.prevent="loadPage('/community/#intouch')" href="/community#intouch">Contact us and community</a></li>
          </ul>
        </div> -->

      </section>

      <p class="footer-line align-right">© 2021 {{$ts('This site is maintained by Airalab DAO')}} {{$ts('and')}} <g-link to="https://github.com/airalab/robonomics.network">{{$ts('opened')}}</g-link> {{$ts('for your suggestions')}}.</p>
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
    background: var(--color-darkgray);
    border-top: 10px solid #fff;
    color: #fff;
    padding: calc(var(--space) * 0.5) 0;
    font-family: var(--font-family-code);
  }


  .layout {
    text-align: left;
  }

  h4 {
    text-align: left;
  }

  a {
    text-decoration: none;
    color: #00FFFF !important;
  }

  .grid-4 > div:not(:first-child) {
    
    padding: var(--space);
    background: #333;
  }

  .grid-4 > div:not(:first-child) ul {
    list-style: none;
    margin-left: 0;
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
    }

  }
</script>
