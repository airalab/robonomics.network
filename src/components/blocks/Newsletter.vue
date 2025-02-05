<template>
   <gsp-form id="newsletter" :gscriptID="gscript" :siteKey="siteKey" @gsp-beforesubmit="beforeSubmit" @gsp-onsubmit="onSubmit" @gsp-oncaptchanotverified="captchaError">
        <h4>{{ $t('Sign up for updates') }}</h4>
        <input type="email" data-gsp-name="Email" :data-gsp-data="email" v-model="email" :placeholder="$t('Your email')" class="block" required />
        <input type="hidden" data-gsp-name="Location" :data-gsp-data="location" />
        <input type="hidden" data-gsp-name="Tags" :data-gsp-data="tags.toString()" />
        <robo-button class="block" :loading="status === 'process'" :type="buttontype">{{buttontext}}</robo-button>
        <span v-if="message">{{message}}</span>

        <div class="text-small">
            {{ $t('By clicking on the button “Submit” you agree to receive regular emails from Robonomics (no more than 1 per month) and you agree with') }} <g-link to="/privacy-policy/">{{$t('Privacy Policy')}}</g-link>
        </div>
    </gsp-form>
</template>

<script>
    export default {

        components: {
            RoboButton: () => import("@/components/utils/Button.vue"),
        },

        data() {
            return {
                email: '',
                location: 'https://robonomics.network' + this.$route.path,
                gscript: process.env.GRIDSOME_CONTACTS_FORM_SCRIPT,
                siteKey: process.env.GRIDSOME_RECAPTCHA,
                status: 'init',
                tags: ['website'],
                message: '',
            }
        },

        computed: {
            buttontype() {
               return {
                    'ok': 'ok',
                    'error': 'error',
                    'na': 'na',
                }[this.status] ?? 'primary'
            },

            buttontext() {
               return {
                    'ok': this.$t('Thanks for the submition!'),
                    'error': this.$t('Not submitted'),
                    'process': this.$t('Submitting')
                }[this.status] ?? this.$t('Submit')
            }
        },

        methods: {
            captchaError() {
                this.status = 'na';
                this.message = this.$t('Captcha is not verified. Please, check your internet connection');
            },

            beforeSubmit() {
                this.status = 'process';
            },

            onSubmit(responce, postbody) {
                if(responce.result === 'success') {
                    this.status = 'ok';
                } else {
                    this.status = 'error';
                }
            }
        }
    }
</script>

<style scoped>

    h4 {
        margin-top: 0;
        margin-bottom: calc(var(--space) * 0.5);
        text-align: left;
    }

</style>