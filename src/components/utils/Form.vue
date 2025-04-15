<template>
  <form v-bind="$attrs" @submit.prevent="onSubmit" ref="form">
    <vue-hcaptcha
      ref="invisibleHcaptcha"
      :sitekey="siteKey"
      size="invisible"
      theme="dark"
      @verify="onVerify"
      @error="onError"
    />
    <slot />
  </form>
</template>

<script setup>
import {ref} from 'vue';
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';

const props = defineProps({
  gscriptID: {
    type: String,
    required: true,
  },
  siteKey: {
    type: String,
    required: true,
  }
});

const emit = defineEmits(['gsp-beforesubmit', 'gsp-onsubmit', 'gsp-oncaptchanotverified']);
const invisibleHcaptcha= ref(null);
const form = ref(null);

const onSubmit = () => {
  invisibleHcaptcha.value.execute();
  emit('gsp-beforesubmit');
};

const onVerify = async (token, eKey) => {
  try {
    const dataElements = form.value.querySelectorAll('[data-gsp-data]');
    const formData = new URLSearchParams();

    dataElements.forEach(item => {
      formData.append(item.dataset.gspName, item.dataset.gspData);
    });

    const response = await fetch(`https://script.google.com/macros/s/${props.gscriptID}/exec`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    });

    const responseData = await response.json();
    emit('gsp-onsubmit', responseData, formData.toString());
  } catch (error) {
    emit('gsp-onsubmit', error, null);
  }
};

const onError = () => {
  emit('gsp-oncaptchanotverified');
};
</script>
