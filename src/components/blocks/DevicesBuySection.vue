<template>
     <div class="layout layout__content section-vivid-green">
        <slot />

        <section>
            <div class="price" v-if="price">
                <div class="price-number">{{price}}</div>
                <div class="price-desc">
                    <div>{{$t('Early bird price')}}</div>
                    <div>{{$t('Stay Tuned: Sales Starting Soon!')}}</div>
                </div>
            </div>
            
            <gsp-form :gscriptID="gscript" :siteKey="siteKey" @gsp-beforesubmit="beforeSubmit" @gsp-onsubmit="onSubmit" @gsp-oncaptchanotverified="captchaError">
                <label class="block"><input type="email" data-gsp-name="Email" :data-gsp-data="email" v-model="email" :placeholder="$t('Your email')" class="block" required /></label>
                <label class="block"><input disabled type="checkbox" v-model="deviceupdates" /> <span>{{ $t('Get updates about smart devices') }}</span></label>
                <label class="block"><input type="checkbox" v-model="regularupdates" /> <span>{{ $t('Receive regular emails from Robonomics') }}</span></label>
                
                <input type="hidden" data-gsp-name="Location" :data-gsp-data="location" />
                <input type="hidden" data-gsp-name="Tags" :data-gsp-data="tags.toString()" />

                <robo-button class="block" :loading="status === 'process'" :type="buttontype">{{buttontext}}</robo-button>
                <span v-if="message">{{message}}</span>
            </gsp-form>
        </section>
    </div>
</template>

<script>
    export default {

        components: {
            RoboButton: () => import("@/components/utils/Button.vue"),
        },

        props: {
            price: {
                type: String
            }
        },

        data() {
            return {
                email: '',
                deviceupdates: true,
                regularupdates: false,
                location: 'https://robonomics.network' + this.$route.path,
                gscript: process.env.GRIDSOME_CONTACTS_FORM_SCRIPT,
                siteKey: process.env.GRIDSOME_RECAPTCHA,
                status: 'init',
                tags: ['devices'],
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
                    'ok': this.$t('Thanks for your submission!'),
                    'error': this.$t('Not submitted')
                }[this.status] ?? this.$t('Notify me when available')
            }
        },

        methods: {
            captchaError() {
                this.status = 'na';
                this.message = this.$t('Captcha is not verified. Please, check your internet connection');
            },

            beforeSubmit() {
                this.status = 'process';

                if(!this.regularupdates) {
                    this.tags.push('only-devices');
                }
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
    .section-vivid-green {
        display: grid;
        grid-template-columns: 1.5fr 2fr;
        gap: calc(var(--space) * 2);
        align-items: center;
        margin-top: calc(var(--space) * 2);
        margin-bottom: calc(var(--space) * 2);
    }

    @media screen and (width < 600px) {
        .section-vivid-green {
        display: flex;
        flex-direction: column;
        gap: var(--space);
        }
    }

    section {
        max-width: 500px;
        /* margin: calc(var(--space)*2) auto calc(var(--space)*3); */
    }

    .price {
        display: flex;
        gap: var(--space);
        align-content: flex-start;
        margin-bottom: var(--space);
    }

    .price-number {
        font-variation-settings: var(--font-flex-bold);
        font-size: 3rem;
        line-height: 1;
    }

    .price-desc {
        font-variation-settings: var(--font-flex-medium);
    }
</style>