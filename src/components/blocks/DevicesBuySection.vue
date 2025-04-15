<template>
  <div class="layout layout__content section-vivid-green">
    <slot />

    <template v-if="available">
      <section class="product-available">
      <section class="lined">
        <div class="price-number">{{ $tr(title) }}</div>
        <div class="price" v-if="price">
          <div class="price-number">{{ price }}</div>
          <div class="price-desc">
            <div>{{ $tr('Now Available!') }}</div>
            <div>{{ $tr('Worldwide Shipping') }}</div>
          </div>
        </div>
        <ul>
          <li class="italic-text" v-for="item in info" :key="item">{{$tr(item)}}</li>
        </ul>
      </section>
      <div class="product-buy__wrapper" :class="{ 'active': showOrder }">
        <robo-button class="block" @click="toggleOrder">
          {{$tr('Order Now')}}
        </robo-button>
        <div class="product-buy__container" :class="{ 'active oldy': showOrder }">
        <div v-if="showOrder" class="active">
          <ul>
            <OrderLink v-for="orderLink in orderLinks" :key="orderLink.id" :link="orderLink.link" :flag="orderLink.flag" :text="orderLink.label" :region="$tr(orderLink.region)"  :payments="orderLink.payments" :title="title" />
          </ul>
        </div>
      </div>
      </div>
    </section>
    </template>

    <template v-else>
      <section>
        <div class="price" v-if="price">
          <div class="price-number">{{ price }}</div>
          <div class="price-desc">
            <div>{{ $tr('Early bird price') }}</div>
            <div>{{ $tr('Coming in early 2025') }}</div>
          </div>
        </div>
        <gsp-form 
          :gscriptID="gscript" 
          :siteKey="siteKey"
          @gsp-beforesubmit="beforeSubmit"
          @gsp-onsubmit="onSubmit"
          @gsp-oncaptchanotverified="captchaError"
        >
          <label class="block"><input type="email" data-gsp-name="Email" :data-gsp-data="email" v-model="email" :placeholder="$tr('Your email')" class="block" required /></label>

          <label class="block"><input disabled type="checkbox" v-model="deviceupdates" /> <span>{{ $tr('Get updates about smart devices') }}</span></label>

          <label class="block"><input type="checkbox" v-model="regularupdates" /> <span>{{ $tr('Receive regular emails from Robonomics') }}</span></label>

          <input type="hidden" data-gsp-name="Location" :data-gsp-data="location" />
          <input type="hidden" data-gsp-name="Tags" :data-gsp-data="tags.toString()" />

          <robo-button class="block" :loading="status === 'process'" :type="buttontype">{{ buttontext }}</robo-button>
          <span class="small-text error" v-if="message">{{ message }}</span>
        </gsp-form>
      </section>
    </template>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, defineAsyncComponent } from 'vue';
import { translateVue as $tr } from '../../assets/scripts/utils/translate';
import RoboButton from '../utils/Button.vue';
import OrderLink from "./OrderLink.vue";

const GspForm = defineAsyncComponent(() => import('../utils/Form.vue'));

// Props
const props = defineProps({
  price: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  orderLinks: {
    type: Array,
    required: true
  },
  info: {
    type: Array,
    required: true
  },
  available: {
    type: Boolean,
    default: false
  }
});

// Reactive data
const email = ref('');
const deviceupdates = ref(true);
const regularupdates = ref(false);
const location = ref(window.location.href);
const gscript = ref(import.meta.env.PUBLIC_CONTACTS_FORM_SCRIPT);
const siteKey = ref(import.meta.env.PUBLIC_RECAPTCHA);
const status = ref('init');
const tags = ref(['devices']);
const message = ref('');
const showOrder = ref(false);

// Computed values
const buttontype = computed(() => {
  return {
    ok: 'ok',
    error: 'error',
    na: 'na'
  }[status.value] ?? 'primary';
});

const buttontext = computed(() => ({
  'ok': $tr('Thanks for the submission!'),
  'error': $tr('Not submitted'),
  'process': $tr('Submitting'),
}[status.value] ?? $tr('Submit')));

// Methods
const toggleOrder = () => {
  showOrder.value = !showOrder.value;
};

const captchaError = () => {
  status.value = 'na';
  message.value = $tr('Captcha is not verified. Please, check your internet connection');
};

const beforeSubmit = () => {
  status.value = 'process';
  if (!regularupdates.value) {
    tags.value.push('only-devices');
  } else {
    tags.value.push('website');
  }
};

const onSubmit = (response) => {
  status.value = response.result === 'success' ? 'ok' : 'error';
  if (status.value === 'error') {
    message.value = response.message
  }
};

// Mounted lifecycle hook
onMounted(() => {
  window.document.addEventListener('click', (e) => {
    const productBuy = document.querySelector('.product-buy__wrapper');
    let clickInside = productBuy.contains(e.target);
    if (!clickInside && productBuy.classList.contains('active')) {
      showOrder.value = false;
    }
  });
});
</script>

<style scoped>
.section-vivid-green {
  position: relative;
  min-height: 568px;
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: calc(var(--space) * 2);
  align-items: center;
  margin-top: calc(var(--space) * 2);
  margin-bottom: calc(var(--space) * 2);
  z-index: 15;
}

section {
  max-width: 500px;
}

.lined > * {
  margin-bottom: var(--space);
}

.lined > *:not(:last-child) {
  padding-bottom: var(--space);
  border-bottom: 1px solid var(--color-dark);
}

.lined li {
  margin-bottom: calc(var(--space) * 0.8);
}

.price {
  display: flex;
  gap: var(--space);
  align-content: flex-start;
  margin-bottom: var(--space);
}

.price-number {
  font-variation-settings: var(--font-flex-extrabold);
  font-size: calc(var(--space) * 1.3);
  line-height: 1;
}

.price-desc {
  min-width: 170px;
  font-variation-settings: var(--font-flex-medium);
}

html[lang="de"] .price-number,
html[lang="nl"] .price-number {
  hyphens: auto;
}

.price-desc {
  min-width: 170px;
  font-variation-settings: var(--font-flex-medium);
}

.product-available {
  position: relative;
  align-self: start;
}

.product-available .italic-text {
    text-transform: uppercase;
}

.product-available ul {
  list-style: none;
  margin-left: 0;
  margin-bottom: 0;
}

.product-available li:not(:last-child) {
  margin-bottom: calc(var(--space) * 0.3);
}

.product-buy__wrapper button {
  padding: 1rem;
  background-color: var(--color-dark);
  transition: background-color 0.33s ease-in-out;
}

.product-buy__wrapper button:hover {
  background-color: #333;
}

.product-buy__container.active {
    position: absolute;
    right: 0;
    left: 0;
    padding: calc(var(--space) * 0.8) calc(var(--space) * 0.5);
    text-align: center;
    transition: none;
    box-shadow: none;
}

.product-buy__wrapper.active button:hover {
  background-color: var(--color-dark);
}

.product-buy__container.active a {
  padding-right: 60px;
  background-image: url("data:image/svg+xml,%3Csvg width='44' height='16' viewBox='0 0 44 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M43.7071 8.70711C44.0976 8.31658 44.0976 7.68342 43.7071 7.29289L37.3431 0.928932C36.9526 0.538408 36.3195 0.538408 35.9289 0.928932C35.5384 1.31946 35.5384 1.95262 35.9289 2.34315L41.5858 8L35.9289 13.6569C35.5384 14.0474 35.5384 14.6805 35.9289 15.0711C36.3195 15.4616 36.9526 15.4616 37.3431 15.0711L43.7071 8.70711ZM0 9H43V7H0V9Z' fill='%232949D3'/%3E%3C/svg%3E%0A");
  background-position: right;
  background-repeat: no-repeat;
  font-variation-settings: var(--font-flex-italicbold);
}

.product-buy__container div {
  position: relative;
  text-align: center;
  display: none;
}

.product-buy__container div.active {
  display: block;
}

.product-buy__container div p {
  margin-bottom: calc( var(--space) * 0.7);
}


@media screen and (max-width: 900px) {
  .section-vivid-green {
    min-height: 498px;
  }
}

@media screen and (max-width: 600px) {
  .section-vivid-green {
    display: flex;
    flex-direction: column;
    gap: var(--space);
  }
}

@media screen and (max-width: 460px) {
  .price-number {
    font-size: calc(var(--space) * 1.8);
  }
}
</style>