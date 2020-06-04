<template>
  <div class="footer">
    <div>
      <strong>#ROS</strong>&nbsp;
      <strong>#NixOS</strong>&nbsp;
      <strong>#IPFS</strong>&nbsp;
      <strong>#Ethereum</strong>&nbsp;
      <strong>#Kusama</strong>&nbsp;
      <strong>#Polkadot</strong>&nbsp;
    </div>
    <div>
      <g-link to="/timeline">Founded in 2015</g-link> &nbsp; &bull; &nbsp; 
      <g-link :to="this.releaseLink">Latest release {{ this.releaseTime }}</g-link>
    </div>

    <div class="msg">
      <div class="msg__info msg__solid" v-if="!this.cookiePolicyAccepted()" id="alert-cookiePolicy">
        This website uses cookies. <g-link to="/cookie-policy">Read Cookie Policy</g-link>
        <button @click="this.cookiePolicySet" class="button m-space-left">Ok</button>
      </div>
    </div>
  </div>
</template>


<style lang="scss">

  .footer{
    position: absolute;
    bottom: calc(var(--space) + 1rem);
    left: var(--space);
    right: var(--space);
    text-align: center;
    line-height: 1.5;

    a.active--exact { color: var(--color-text); text-decoration: none; }
  }

  .msg{
    position: fixed;
    bottom: calc( var(--screen-padding) + 0.4rem );
    right: calc( var(--screen-padding) + 0.4rem );
    max-width: calc( 100% - 2*(var(--screen-padding) + 0.4rem) ) ;

    &__solid {
      padding: 0.4rem;
    
      &, .button { font-size: 90%; }
      a { font-weight: 500; }
    }

    &__info{
      background-color: var(--link-color);

      &, a { color: var(--text-color-invert); }
      a:hover{ color: var(--text-color); }

      .button {
        background-color: var(--color-dark);
        color: var(--color-light);

        &:hover{
          background-color: var(--color-light);
          color: var(--color-dark);
        }
      }
    }
  }
</style>


<script>
  import axios from 'axios'
  import moment from 'moment'

  import Vue from 'vue'
  import VueCookies from 'vue-cookies'
  Vue.use(VueCookies)

  export default {
    data () {
      return {
        release: null,
        update: null,
        releaseTime: null,
        releaseLink: null
      }
    },

    methods: {
      cookiePolicyAccepted(){
        return this.$cookies.get('cookiePolicy');
      },
      cookiePolicySet(){
        this.$cookies.set('cookiePolicy','accepted');
        document.querySelector('#alert-cookiePolicy').style.display="none";
      }
    },

    async mounted () {
      try {
        const results = await axios.get(
          'https://api.github.com/repos/airalab/robonomics/releases/latest'
        )

        this.release = results.data;
        this.update = this.release['published_at'];
        this.releaseTime = moment(this.update).from();
        this.releaseLink = this.release['html_url'];

      } catch (error) {
        console.log(error)
      }
    }
  }
</script>
