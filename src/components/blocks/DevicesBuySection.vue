<template>
    <section>
        <div class="price" v-if="price">
            <div class="price-number">{{price}}</div>
            <div class="price-desc">
                <div>Early bird price</div>
                <div>Stay Tuned: Sales Starting Soon!</div>
            </div>
        </div>
        
        <gsp-form :gscriptID="gscript" :siteKey="siteKey" @gsp-beforesubmit="beforeSubmit" @gsp-onsubmit="onSubmit">
            <label class="block"><input type="email" data-gsp-name="Email" :data-gsp-data="email" v-model="email" :placeholder="$t('Your email')" class="block" required /></label>
            <label class="block"><input disabled type="checkbox" v-model="deviceupdates" /> <span>Get updates about smart devices</span></label>
            <label class="block"><input type="checkbox" v-model="regularupdates" /> <span>Receive regular emails from Robonomics</span></label>
            
            <input type="hidden" data-gsp-name="Location" :data-gsp-data="location" />
            <input type="hidden" data-gsp-name="customTags" :data-gsp-data="tags.toString()" />

            <robo-button class="block" :loading="status === 'process'" :type="buttontype">{{buttontext}}</robo-button>
            <span v-if="message">{{message}}</span>
        </gsp-form>
    </section>
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
                    'error': 'error'
                }[this.status] ?? 'primary'
            },

            buttontext() {
               return {
                    'ok': 'Thanks for the submition!',
                    'error': 'Not submitted'
                }[this.status] ?? 'Notify me when available'
            }
        },

        methods: {
            beforeSubmit(responce) {
                this.status = 'process';

                if(responce === 'captcha error') {
                    this.status = 'error';
                    this.message = 'Some network error occured. Please, check your network and try to submit later.';
                    return;
                }

                if(!this.regularupdates) {
                    this.tags.push('only-devices');
                }
            },

            onSubmit(responce, postbody) {
                if(responce === 'success') {
                    this.status = 'ok';
                } else {
                    console.log('responce', responce);
                    this.status = 'error';
                }

                console.log('postbody', postbody);
            }
        }
    }
</script>

<style scoped>
    section {
        max-width: 500px;
        margin: calc(var(--space)*2) auto calc(var(--space)*3);
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