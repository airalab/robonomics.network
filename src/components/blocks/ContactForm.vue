<template>
  <gsp-form
    :gscriptID="gscript"
    :siteKey="siteKey"
    @gsp-beforesubmit="beforeSubmit"
    @gsp-onsubmit="onSubmit"
    @gsp-oncaptchanotverified="captchaError"
  >
    <div class="form-title-wrapper">
      <h3 v-if="pageTitle" class="form-page-title">{{ pageTitle }}</h3>
      <select
        v-model="formTitle"
        class="form-title-select"
        data-gsp-name="Form Title"
        :data-gsp-data="formTitle"
      >
        <option value="Smart Rwa complex">Smart Rwa complex</option>
        <option value="Feecc installation for factories">
          Feecc installation for factories
        </option>
        <option value="Custom hardware development">
          Custom hardware development
        </option>
        <option value="Robotics & Cyber-Physical Systems">
          Robotics & Cyber-Physical Systems
        </option>
        <option value="Privacy Smart Home System for Co-Working & Co-Living">
          Privacy Smart Home System for Co-Working & Co-Living
        </option>
      </select>
    </div>

    <div class="input-wrapper">
      <input
        type="text"
        data-gsp-name="Name"
        :data-gsp-data="name"
        v-model="name"
        :placeholder="$tr('Your name')"
        class="block floating-input"
        :class="{ 'has-value': name, 'is-focused': nameFocused }"
        @focus="nameFocused = true"
        @blur="nameFocused = false"
        required
      />
      <label
        class="floating-label"
        :class="{ 'is-active': nameFocused || name }"
      >
        {{ $tr("Your name") }}
      </label>
    </div>

    <div class="input-wrapper">
      <input
        type="email"
        data-gsp-name="Email"
        :data-gsp-data="email"
        v-model="email"
        :placeholder="$tr('Your email')"
        class="block floating-input"
        :class="{ 'has-value': email, 'is-focused': emailFocused }"
        @focus="emailFocused = true"
        @blur="emailFocused = false"
        required
      />
      <label
        class="floating-label"
        :class="{ 'is-active': emailFocused || email }"
      >
        {{ $tr("Your email") }}
      </label>
    </div>

    <div
      class="input-wrapper textarea-wrapper"
      :class="{ 'has-active-label': messageFocused || message }"
    >
      <div class="textarea-label-area" v-if="(messageFocused || message) && !textareaScrolled">
        <label class="floating-label is-active">
          {{ $tr("Your message") }}
        </label>
      </div>
      <textarea
        data-gsp-name="Comment"
        :data-gsp-data="message"
        v-model="message"
        :placeholder="$tr('Your message')"
        class="block floating-input"
        :class="{
          'has-value': message,
          'is-focused': messageFocused,
          'has-label-active': (messageFocused || message) && !textareaScrolled,
        }"
        @focus="messageFocused = true"
        @blur="messageFocused = false"
        @scroll="handleTextareaScroll"
      ></textarea>
    </div>

    <input type="hidden" data-gsp-name="Location" :data-gsp-data="location" />
    <input
      type="hidden"
      data-gsp-name="Tags"
      :data-gsp-data="tags.toString()"
    />

    <RoboButton
      class="block"
      :loading="status === 'process'"
      :type="buttontype"
    >
      {{ buttontext }}
    </RoboButton>

    <span class="text-small error" v-if="errorMessage">{{ errorMessage }}</span>
  </gsp-form>
</template>

<script setup>
import { ref, computed, defineAsyncComponent, onMounted } from "vue";
import { translateVue as $tr } from "../../assets/scripts/utils/translate";

import RoboButton from "../utils/Button.vue";
const GspForm = defineAsyncComponent(() => import("../utils/Form.vue"));

const name = ref("");
const email = ref("");
const message = ref("");
const formTitle = ref("Smart Rwa complex");
const pageTitle = ref("");
const location = ref(window.location.href);
const gscript = ref(import.meta.env.PUBLIC_CONTACTS_FORM_SCRIPT);
const siteKey = ref(import.meta.env.PUBLIC_RECAPTCHA);
const status = ref("init");
const tags = ref(["contact-form"]);
const errorMessage = ref("");

// Focus states for floating labels
const nameFocused = ref(false);
const emailFocused = ref(false);
const messageFocused = ref(false);
const textareaScrolled = ref(false);

// Pre-fill form based on URL parameters
const initializeFormFromURL = () => {
  if (typeof window === "undefined") return;

  const urlParams = new URLSearchParams(window.location.search);
  const source = urlParams.get("source") || urlParams.get("from");

  if (source === "for-coworking-and-coliving" || source === "coworking") {
    pageTitle.value = "";
    formTitle.value = "Privacy Smart Home System for Co-Working & Co-Living";
    message.value =
      "Hello,\nI found information on your website regarding for co-working & co-living.\nPlease contact me to discuss this use case.";
    messageFocused.value = true;
  } else if (
    source === "smart-rwa" ||
    source === "rwa" ||
    source === "connect-real-estate"
  ) {
    pageTitle.value = "";
    formTitle.value = "Smart Rwa complex";
    message.value =
      "Hello,\nI found information on your website regarding Smart RWA.\nPlease contact me to discuss this use case.";
    messageFocused.value = true;
  } else if (
    source === "feecc" ||
    source === "deploy-feecc" ||
    source === "factory"
  ) {
    pageTitle.value = "";
    formTitle.value = "Feecc installation for factories";
    message.value =
      "Hello,\nI found information on your website regarding FEECC installation for factories.\nPlease contact me to discuss this use case.";
    messageFocused.value = true;
  } else if (source === "custom-hardware" || source === "pcb-engineer") {
    pageTitle.value = "";
    formTitle.value = "Custom hardware development";
    message.value =
      "Hello,\nI found information on your website about custom hardware development for projects.\nPlease contact me to discuss this use case.";
    messageFocused.value = true;
  } else if (source === "robotics" || source === "robotics-project") {
    pageTitle.value = "";
    formTitle.value = "Robotics & Cyber-Physical Systems";
    message.value =
      "Hello,\nI found information on your website regarding Robotics & cyber-physical systems.\nPlease contact me to discuss this use case.";
    messageFocused.value = true;
  }
};

// Handle textarea scroll
const handleTextareaScroll = (event) => {
  const textarea = event.target;
  textareaScrolled.value = textarea.scrollTop > 0;
};

// Initialize on mount
onMounted(() => {
  initializeFormFromURL();
});

const buttontype = computed(
  () =>
    ({
      ok: "ok",
      error: "error",
      na: "na",
    })[status.value] ?? "primary",
);

const buttontext = computed(
  () =>
    ({
      ok: $tr("Thanks for the submission!"),
      error: $tr("Not submitted"),
      process: $tr("Submitting"),
    })[status.value] ?? $tr("SEND"),
);

const captchaError = () => {
  status.value = "na";
  errorMessage.value = $tr(
    "Captcha is not verified. Please, check your internet connection",
  );
};

const beforeSubmit = () => {
  status.value = "process";
  errorMessage.value = "";
};

const onSubmit = (response) => {
  status.value = response.result === "success" ? "ok" : "error";
  if (status.value === "error") {
    errorMessage.value = response.message;
  } else if (status.value === "ok") {
    // Reset form on success
    name.value = "";
    email.value = "";
    message.value = "";
  }
};
</script>

<style scoped>
:deep(gsp-form) {
  text-align: center;
}

.form-title-wrapper {
  text-align: left;
  margin-bottom: calc(var(--space) * 1.2);
}

.form-page-title {
  font-variation-settings: var(--font-flex-extrabold);
  font-size: calc(var(--base-font-size) * 1.2);
  margin-bottom: calc(var(--space) * 0.8);
  color: var(--color-dark);
}

.form-title-select {
  width: 100%;
  font-variation-settings: var(--font-flex-extrabold);
  font-size: calc(var(--base-font-size) * 1.2);
  border: var(--border-width) solid var(--border-color);
  background-color: var(--input-background);
  padding: var(--input-padding) calc(var(--input-padding) * 1.2);
  padding-right: calc(var(--input-padding) * 1.2 + 35px);
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='14' height='10' viewBox='0 0 14 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L7 7L13 1' stroke='%23000' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-size: 14px 10px;
  background-repeat: no-repeat;
  background-position: right calc(var(--input-padding) * 1.2) center;
  color: var(--color-dark);
  border-radius: 6px;
  min-width: 250px;
  display: inline-block;
}

.form-title-select:focus {
  --border-color: var(--color-link);
  --input-text-color: var(--color-link);
  outline: none;
}

.input-wrapper {
  position: relative;
  margin-bottom: var(--space);
  text-align: left;
}

.floating-input {
  width: 100%;
  padding-top: calc(0.9rem * 1.5);
}

input.floating-input.has-value,
input.floating-input.is-focused {
  padding-top: calc(5px + 0.9rem * 0.35 + 1.2rem * 0.7 + 4px) !important;
}

/* Hide placeholder when label is active */
.floating-input::placeholder {
  opacity: 0.6;
  transition: opacity 0.2s ease;
}

.floating-input.is-focused::placeholder,
.floating-input.has-value::placeholder {
  opacity: 0;
}

.floating-label {
  position: absolute;
  left: calc(0.8rem * 1.5);
  top: calc(5px + 0.9rem * 0.35);
  color: #595959;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 10;
  line-height: 1;
  font-size: calc(1.2rem * 0.7);
}

/* Show label inside at top when focused or has value */
.floating-label.is-active {
  top: calc(5px + 0.9rem * 0.35);
  left: calc(0.9rem * 1.2);
  font-size: calc(1.2rem * 0.7);
  opacity: 0.4;
  background-color: transparent;
}

textarea.floating-input + .floating-label.is-active {
  background-color: var(--input-background);
}

.textarea-wrapper {
  position: relative;
}

.textarea-label-area {
  position: absolute;
  top: var(--border-width);
  left: var(--border-width);
  right: var(--border-width);
  height: calc(5px + 0.9rem * 0.35 + 1.2rem * 0.7 + 4px);
  background-color: var(--input-background);
  z-index: 12;
  pointer-events: none !important;
  display: flex;
  align-items: flex-start;
  padding-left: calc(0.9rem * 1.2);
  padding-top: calc(5px + 0.9rem * 0.35);
  border-radius: 4px 4px 0 0;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.textarea-label-area .floating-label {
  position: static;
  font-size: calc(1.2rem * 0.7);
  opacity: 0.4;
  color: #595959;
  background-color: transparent;
  padding: 0;
  margin: 0;
}

textarea.floating-input {
  min-height: 120px;
  resize: none;
  border-radius: 6px;
  border: var(--border-width) solid var(--border-color);
  padding-top: calc(0.9rem * 1.5);
  position: relative;
  z-index: 10;
  background-color: var(--input-background);
}

textarea.floating-input:focus {
  z-index: 2;
}

textarea.floating-input.has-label-active {
  padding-top: calc(5px + 0.9rem * 0.35 + 1.2rem * 0.7 + 4px) !important;
}

.textarea-wrapper .floating-label:not(.is-active) {
  top: calc(5px + 0.9rem * 0.35);
  left: calc(0.9rem * 1.2);
  z-index: 13;
}

.error {
  display: inline-block;
  margin-top: calc(var(--space) * 0.5);
  line-height: 1.2;
  color: var(--color-red);
  text-align: center;
}
</style>
