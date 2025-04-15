<template>
  <gsp-form
    :gscriptID="gscript"
    :siteKey="siteKey"
    @gsp-beforesubmit="beforeSubmit"
    @gsp-onsubmit="onSubmit"
    @gsp-oncaptchanotverified="captchaError"
  >
    <h4>{{$tr('Sign up for updates')}}</h4>

    <input
      type="email"
      data-gsp-name="Email"
      :data-gsp-data="email"
      v-model="email"
      :placeholder="$tr('Your email')"
      class="block"
      required
    />

    <input type="hidden" data-gsp-name="Location" :data-gsp-data="location" />
    <input type="hidden" data-gsp-name="Tags" :data-gsp-data="tags.toString()" />

    <RoboButton 
      class="block"
      :loading="status === 'process'"
      :type="buttontype">
      {{ buttontext }}
    </RoboButton>

    <span class="text-small error" v-if="message">{{ message }}</span>

    <div class="text-small">
      {{$tr('By clicking on the button “Submit” you agree to receive regular emails from Robonomics (no more than 1 per month) and you agree with') }}
      <a href="/privacy-policy/" aria-label="check robonomics privacy policy page">{{$tr('Privacy Policy') }}</a>.
    </div>
  </gsp-form>
</template>

<script setup>
import { ref, computed, defineAsyncComponent } from 'vue';
import { translateVue as $tr} from '../../assets/scripts/utils/translate';

import RoboButton from '../utils/Button.vue';
const GspForm = defineAsyncComponent(() => import('../utils/Form.vue'));

const email = ref('');
const location = ref(window.location.href);
const gscript = ref(import.meta.env.PUBLIC_CONTACTS_FORM_SCRIPT);
const siteKey = ref(import.meta.env.PUBLIC_RECAPTCHA);
const status = ref('init');
const tags = ref(['website']);
const message = ref('');

const buttontype = computed(() => ({
  'ok': 'ok',
  'error': 'error',
  'na': 'na',
}[status.value] ?? 'primary'));

const buttontext = computed(() => ({
  'ok': $tr('Thanks for the submission!'),
  'error': $tr('Not submitted'),
  'process': $tr('Submitting'),
}[status.value] ?? $tr('Submit')));

const captchaError = () => {
  status.value = 'na';
  message.value = $tr('Captcha is not verified. Please, check your internet connection');
};

const beforeSubmit = () => {
  status.value = 'process';
};

const onSubmit = (response) => {
  status.value = response.result === 'success' ? 'ok' : 'error';
  if(status.value === 'error') {
    message.value = response.message
  }
};


</script>

<style scoped>
h4 {
  margin-top: 0;
  margin-bottom: calc(var(--space) * 0.5);
  text-align: left;
}

.error {
  display: inline-block;
  margin-bottom: var(--space);
  line-height: 1.2;
  color: var(--color-red);
}
</style>
