<template>
     <div class="layout layout__content section-vivid-green">
        <slot />

        <!-- Todo: remove hardcoding, make dynamic props analitycs -->

        <template v-if="$route.path.includes('altruist')">
            <section class="product-available">
                <section class="lined">
                    <div class="price-number">{{$t('Outdoor sensor “ALTRUIST“')}}</div>
                    <div class="price" v-if="price">
                        <div class="price-number">{{price}}</div>
                        <div class="price-desc">
                            <div>{{$t('Now Available!')}}</div>
                            <div>{{$t('Worldwide Shipping')}}</div>
                        </div>
                    </div>
                    <div>
                        <ul>
                            <li class="italic-text">{{$t('Open-Source Hardware & Software')}}</li>
                            <li class="italic-text">{{$t('Independent Decentralized Network Technologies')}}</li>
                            <li class="italic-text">{{$t('Colorful 3D-Printed Cases of Your Choice')}}</li>
                        </ul>
                    </div>
                </section>
                <div class="product-buy__container" :class="{'oldy active': showOrder}">
                    <rb-button buttoncolor="black" block @click="showOrder = !showOrder">{{$t('Order Now')}}</rb-button>
                    <div :class="{'active': showOrder}">
                        <p class="italic-text">📦 {{$t('Choose your preferred shipping location for faster delivery!')}}</p>
                        <ul>
                            <li>
                                <g-link class="italic-text" to="https://shop.pinout.cloud/altruist">🇪🇺 {{ $t('Order from the EU') }}</g-link>
                            </li>
                            <li>
                                <g-link class="italic-text" to="https://shop.akagi.dev/products/outdoor-sensor-altruist-dev-kit">🇯🇵 {{$t('Order from Japan')}}</g-link>
                            </li>
                            <li>
                                <g-link class="italic-text" to="https://shop.multi-agent.io/">🇷🇺 {{$t('Order from Russia')}}</g-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </template>
        <template v-else>
            <section>
                <div class="price" v-if="price">
                    <div class="price-number">{{price}}</div>
                    <div class="price-desc">
                        <div>{{$t('Early bird price')}}</div>
                        <div>{{$t('Coming in early 2025')}}</div>
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
        </template>
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
                showOrder: false
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
        },

        mounted() {
            // Close nav on body click
            window.document.addEventListener('click', (e) => {
                const productBuy = document.querySelector('.product-buy__container');
                let clickInside = productBuy.contains(e.target)

                if(!clickInside && productBuy.classList.contains('active')) {
                    this.showOrder = false;
                }
            })
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

    @media screen and (max-width: 600px) {
        .section-vivid-green {
            display: flex;
            flex-direction: column;
            gap: var(--space);
        }
    }

    section {
        max-width: 500px;
    }

    .price {
        display: flex;
        gap: var(--space);
        align-content: flex-start;
        margin-bottom: var(--space);
    }

    .price-number {
        font-variation-settings: var(--font-flex-extrabold);
        font-size: 3rem;
        line-height: 1;
    }

    .price-desc {
        min-width: 170px;
        font-variation-settings: var(--font-flex-medium);
    }

    .product-available {
        position: relative;
        align-self: start;
    }

    .lined > * {
        margin-bottom: var(--space);
    }

    .lined > *:not(:last-child) {
        padding-bottom: var(--space);
        border-bottom: 1px solid var(--color-dark);
    }

    .lined li {
        margin-bottom: calc(var(--space)/2);
    }

    .product-available .italic-text {
        text-transform: uppercase;
    }

    .product-available ul {
        list-style: none;
        margin-left: 0;
    }

    .product-available li:not(:last-child) {
        margin-bottom: calc(var(--space) * 0.3);
    }

    .product-buy__container.active {
        position: absolute;
        right: 0;
        text-align: center;
        transition: none;
    }

    .product-buy__container.active button {
        position: relative;
        text-align: center;
        margin: 0 auto;
        margin-bottom: var(--space);
        z-index: 5;
        cursor: pointer;
    }

    .product-buy__container.active a {
        padding-right: 60px;
        background-image: url("data:image/svg+xml,%3Csvg width='44' height='16' viewBox='0 0 44 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M43.7071 8.70711C44.0976 8.31658 44.0976 7.68342 43.7071 7.29289L37.3431 0.928932C36.9526 0.538408 36.3195 0.538408 35.9289 0.928932C35.5384 1.31946 35.5384 1.95262 35.9289 2.34315L41.5858 8L35.9289 13.6569C35.5384 14.0474 35.5384 14.6805 35.9289 15.0711C36.3195 15.4616 36.9526 15.4616 37.3431 15.0711L43.7071 8.70711ZM0 9H43V7H0V9Z' fill='%232949D3'/%3E%3C/svg%3E%0A");
        background-position: right;
        background-repeat: no-repeat;
        font-variation-settings: 'wght' 800, 'wdth' 100, 'opsz' 26, 'XTRA' 468, 'XOPQ' 96, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712,  'slnt' -10;
    }

    .product-buy__container div {
        position: relative;
        padding: 0 calc(var(--space)* 0.8);
        text-align: center;
        display: none;
    }

    .product-buy__container div.active {
        display: block;
    }

    .product-buy__container div p {
        margin-bottom: calc( var(--space) * 0.7);
    }


</style>