<template>
  <footer>

    <div class="sidetext sidetext-left">
      <g-link to="/timeline">Founded in 2015</g-link> &nbsp; &bull; &nbsp; 
      <g-link :to="this.releaseLink">Latest release {{ this.releaseTime }}</g-link>
    </div>


    <div class="msg">
      <div class="msg__info msg__solid" v-if="!this.cookiePolicyAccepted()" id="alert-cookiePolicy">
        This website uses cookies. <g-link to="/cookie-policy">Read Cookie Policy</g-link>
        <button @click="this.cookiePolicySet" class="button m-space-left">Ok</button>
      </div>

      <!-- <a id="msg-editbutton" class="button button__border button__icon" href="https://github.com/airalab/robonomics.network/issues" target="_blank">
        <span class="icon">&#9998;</span>
        <small>Edit website</small>
      </a> -->
    </div>
  </footer>
</template>


<style lang="scss">

.sidetext-left {
    position:  fixed;
    left: calc(var(--screen-padding)/4);
    bottom: calc(var(--screen-padding)/1.8);

    transform: rotate(-90deg);
    transform-origin: 0 0;
    
    &, a {
      &.active--exact { opacity: .5; }
    }
  }


  .msg{
    position: fixed;
    bottom: calc( var(--screen-padding) + 1rem );
    right: calc( var(--screen-padding) + 0.6rem );
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

  #msg-editbutton {
    @media screen and (max-width: 450px) {
      padding-right: 0;
      small { display: none; }
      .icon { margin-right: 0; border: 0; }
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
        // https://www.npmjs.com/package/vue-cookies
        // 30 day after, expire, '' current path , browser default
        this.$cookies.config(60 * 60 * 24 * 30,'');
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
