<template>
  <footer>
    <Navigation/>
    <g-link class="footer__privacy" aria-label="see privacy policy page" to="/privacy-policy/">Privacy Policy</g-link>
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
    margin-top: var(--space);
    min-height: 450px;
    height: 100%;
    color: #000;
    padding: var(--space) 0;
    padding-bottom: 0;
    transition: background-color 0.33s ease;
    background-color: #fff;
  }

  
  .footer__privacy {
    position: absolute;
    bottom: var(--space);
    right: var(--space);
    letter-spacing: 0.5px;
    color: #000;
    text-decoration: underline;
    text-transform: uppercase;
  }

  @media screen and (max-width: 780px) {

    .footer__privacy {
      position: relative;
      margin-top: calc(var(--space) * 2);
      padding-left: calc(var(--space) + 50px);
    }
    
  }

</style>


<script>

  export default {

    components: { 
      Navigation: () => import ('../Navigation.vue'),
    },

    computed: {
      year: () => (new Date).getFullYear()
    }
  }
</script>
