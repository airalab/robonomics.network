<template>
  <footer>
    <div class="footer-form">
        <div class="footer-form-content">
            <Newsletter />
        </div>
    </div>

    <Socials/>
    <Navigation/>

    <section class="footer-privacy">
        <g-link aria-label="see privacy policy page" to="/privacy-policy/">{{ $t('Privacy Policy') }}</g-link>
    </section>
    
  </footer>
</template>

<script>

export default {
    components: {
        Newsletter: () => import("~/components/blocks/Newsletter.vue"),
        Navigation: () => import ('~/components/blocks/Navigation.vue'),
        Socials: () => import ('~/components/blocks/socials.vue'),
    },
  }

</script>


<style>
    footer {
        margin-top: calc(var(--space) * 5);
    }

    footer a {
        color: var(--text-color);
    }


    [dir="rtl"] footer nav ul li{
        padding-right: var(--space);
        padding-left: 0;
    }


    /* + Privacy */
    .footer-privacy {
        text-align: right;
        padding: calc(var(--space) * 0.5) var(--layout-sidepadding);
    }

    .footer-privacy a {
        color: var(--color-dark);
        text-transform: uppercase;
        font-size: 80%;
        text-decoration: underline;
    }
    /* - Privacy */


    /* + Newsletter */
    .footer-form {
        text-align: center;
        width: 100%;
    }

   .footer-form-content {
        text-align: left;
        display: inline-block;
        background: url('~@/assets/images/contacts__decor.webp') no-repeat 0 100%;
        background-size: 284px 364px;
        padding-left: calc(284px + var(--space));
        min-height: 364px;
        margin-left: -384px;
    }

    .footer-form form {
        max-width: 294px;
        width: calc(100% - var(--space));
    }


    @media screen and (width < 1000px) {
        .footer-form-content {
        margin-left: 0;
        }
    }

    @media screen and (width < 480px) {
        .footer-form-content {
            background-position: -100px 0;
            padding-left: 184px;
        }
    }

    @media screen and (max-width: 680px) {
        .contacts__form-wrapper {
        align-items: center;
        padding-left: 0;
        }
    }
    /* - Newsletter */
</style>