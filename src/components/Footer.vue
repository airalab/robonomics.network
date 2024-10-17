<template>
  <footer>
    <ContactsForm/>
    <Socials/>
    <Navigation/>

    <section class="footer-privacy">
        <g-link aria-label="see privacy policy page" to="/privacy-policy/">Privacy Policy</g-link>
    </section>
    
  </footer>
</template>

<script>

export default {
    components: {
        ContactsForm: () => import("~/components/utils/contactsForm.vue"),
        Navigation: () => import ('~/components/Navigation.vue'),
        Socials: () => import ('~/components/utils/socials.vue'),
    },
  }

</script>


<style scoped>
    footer {
        margin-top: calc(var(--space) * 3);
    }

    footer a {
        color: var(--text-color);
    }


    /* + Privacy */
    .footer-privacy {
        text-align: right;
        padding: calc(var(--space) * 0.5) var(--layout-sidepadding);
    }

    .footer-privacy a {
        text-transform: uppercase;
        font-size: 80%;
        text-decoration: underline;
    }
    /* - Privacy */
</style>