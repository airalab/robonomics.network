<template>
  <footer>

    <div class="sidetext sidetext-left">
      <g-link to="/timeline">Founded in 2015</g-link> &nbsp; &bull; &nbsp; 
      <g-link :to="this.releaseLink">Latest release {{ this.releaseTime }}</g-link>
    </div>

  </footer>
</template>


<style lang="scss">

.sidetext-left {
    position:  fixed;
    left: calc(var(--screen-padding-left)/4);
    bottom: calc(var(--screen-padding-bottom)/1.8);

    transform: rotate(-90deg);
    transform-origin: 0 0;
    white-space: nowrap;
    
    &, a {
      &.active--exact { opacity: .5; }
    }
  }

</style>


<script>
  import axios from 'axios'
  import moment from 'moment'

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
