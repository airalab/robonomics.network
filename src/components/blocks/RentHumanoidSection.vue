<template>
  <div class="layout layout__content section-vivid-green">
    <img
      src="/images/devices/unitree-g1/unitree-g1.webp"
      alt="Humanoid Unitree"
    />

    <section>
      <h2 class="title">{{$tr('Rent in California, USA')}}</h2>
      <span class="availability block italic-text"
        >{{ $tr('Available by the Hour, Day, or Week') }}</span
      >

      <gsp-form
        :gscriptID="gscript"
        :siteKey="siteKey"
        @gsp-beforesubmit="beforeSubmit"
        @gsp-onsubmit="onSubmit"
        @gsp-oncaptchanotverified="captchaError"
      >
        <div class="price">
          <div class="price-actions">
            <label>
              <input
                type="number"
                v-model="inputValue"
                data-gsp-name="Time"
                :data-gsp-data="`${inputValue} ${selectedUnit}`"
                @input="handleInputChange"
                @blur="handleInputBlur"
                @focus="handleInputFocus"
                min="1"
              />
            </label>
            <select v-model="selectedUnit" @change="handleUnitChange">
              <option value="hour">{{$tr('hour')}}</option>
              <option v-if="selectedUnit == 'hours'" value="hours">
                {{ $tr('hours') }}
              </option>
              <option value="day">{{ $tr('day') }}</option>
              <option v-if="selectedUnit == 'days'" value="days">
                {{ $tr('days') }}
              </option>
              <option value="week">{{$tr('week')}}</option>
              <option v-if="selectedUnit == 'weeks'" value="weeks">
                {{$tr('weeks')}}
              </option>
            </select>
          </div>
          <div
            class="price-number"
            :class="{
              'on-demand': selectedUnit === 'week' || selectedUnit === 'weeks',
            }"
          >
            <span v-if="/^-?[\d.]+(?:e-?\d+)?$/.test(price)">$</span>
            {{ price }}
          </div>
        </div>
        <label class="block"
          ><input
            type="email"
            data-gsp-name="Email"
            :data-gsp-data="email"
            v-model="email"
            :placeholder="$tr('Your email')"
            class="block"
            required
        /></label>
        <label class="block"
          ><input
            type="text"
            data-gsp-name="Name"
            :data-gsp-data="name"
            v-model="name"
            :placeholder="$tr('Your name')"
            class="block"
            required
        /></label>
        <label class="block">
          <textarea
            v-model="comment"
            data-gsp-name="Comment"
            :data-gsp-data="comment"
            :placeholder="$tr('Your comment')"
            class="block"
            required
          />
        </label>

        <input
          type="hidden"
          data-gsp-name="Location"
          :data-gsp-data="location"
        />

        <robo-button
          class="block"
          :loading="status === 'process'"
          :type="buttontype"
          >{{ buttontext }}</robo-button
        >
        <span class="agreement">{{ $tr('By clicking this button, you agree to receive an email regarding the rental of the Unitree G1 Humanoid Robot.') }}</span>
        <span class="small-text error"  v-if="message">{{ message }}</span>
      </gsp-form>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch, defineAsyncComponent } from 'vue';
import { translateVue as $tr} from '../../assets/scripts/utils/translate';

import RoboButton from '../utils/Button.vue';
const GspForm = defineAsyncComponent(() => import('../utils/Form.vue'));

const inputValue = ref(1); // default value
const selectedUnit = ref('day'); // default unit
const price = ref(900);
const email = ref('');
const name = ref('');
const comment = ref('');
const location = ref(window.location.href);
const gscript = ref(import.meta.env.PUBLIC_RENT_KEY);
const siteKey = ref(import.meta.env.PUBLIC_RECAPTCHA);
const status = ref('init');
const message = ref('');

// Computed properties for button type and text
const buttontype = computed(() => {
  return {
    'ok': 'ok',
    'error': 'error',
    'na': 'na',
  }[status.value] ?? 'primary';
});

const buttontext = computed(() => {
  return {
    'ok': $tr("We'll get in touch shortly!"),
    'error': $tr("Not submitted")
  }[status.value] ?? $tr("Contact me");
});

// Methods
const captchaError = () => {
  status.value = 'na';
  message.value = $tr('Captcha is not verified. Please, check your internet connection');
};

const beforeSubmit = () => {
  status.value = 'process';
};

const onSubmit = (response, postbody) => {
  if (response.result === 'success') {
    status.value = 'ok';
  } else {
    status.value = 'error';
  }
};

const handleInputChange = (event) => {
  const rawValue = event.target.value;

  if (/^\d*$/.test(rawValue)) {
    inputValue.value = rawValue === '' ? '' : parseInt(rawValue);

    if (inputValue.value && inputValue.value > 0) {
      if (selectedUnit.value === 'hour' || selectedUnit.value === 'hours') {
        if (inputValue.value === 1) {
          selectedUnit.value = 'hour';
        } else if (inputValue.value <= 23) {
          selectedUnit.value = 'hours';
        } else {
          inputValue.value = Math.ceil(inputValue.value / 24);
          selectedUnit.value = inputValue.value === 1 ? 'day' : 'days';
        }
      } else if (selectedUnit.value === 'day' || selectedUnit.value === 'days') {
        if (inputValue.value === 1) {
          selectedUnit.value = 'day';
        } else if (inputValue.value <= 7) {
          selectedUnit.value = 'days';
        } else {
          inputValue.value = Math.ceil(inputValue.value / 7);
          selectedUnit.value = inputValue.value === 1 ? 'week' : 'weeks';
        }
      } else if (selectedUnit.value === 'week' || selectedUnit.value === 'weeks') {
        selectedUnit.value = inputValue.value === 1 ? 'week' : 'weeks';
      }
    }
  }
};

const handleInputBlur = () => {
  if (!inputValue.value || inputValue.value < 1) {
    inputValue.value = 1;
  }
};

const handleInputFocus = () => {
  inputValue.value = '';
};

const handleUnitChange = () => {
  if (selectedUnit.value === 'hour' || selectedUnit.value === 'hours') {
    inputValue.value = Math.min(inputValue.value, 23);
    selectedUnit.value = inputValue.value === 1 ? 'hour' : 'hours';
  } else if (selectedUnit.value === 'day' || selectedUnit.value === 'days') {
    inputValue.value = Math.min(inputValue.value, 7);
    selectedUnit.value = inputValue.value === 1 ? 'day' : 'days';
  } else if (selectedUnit.value === 'week' || selectedUnit.value === 'weeks') {
    selectedUnit.value = inputValue.value === 1 ? 'week' : 'weeks';
  }
};

// Watchers for price changes based on input and selected unit
watch(selectedUnit, (curr) => {
  if (curr === 'hour' || curr === 'hours') {
    price.value = inputValue.value * 200;
  } else if (curr === 'day' || curr === 'days') {
    price.value = inputValue.value * 900;
  } else {
    price.value = $tr('on demand');
  }
});

watch(inputValue, (value) => {
  if (selectedUnit.value === 'hour' || selectedUnit.value === 'hours') {
    price.value = value * 200;
  } else if (selectedUnit.value === 'day' || selectedUnit.value === 'days') {
    price.value = value * 900;
  } else {
    price.value = $tr('on demand');
  }
});
</script>

<style scoped>
h2 {
  margin-bottom: 0;
  font-size: calc(var(--base-font-size) * 1.2);
  font-variation-settings: var(--font-flex-extrabold);
  text-align: left;
}

section {
  max-width: 500px;
}

input {
  min-height: 48px;
}

textarea {
  min-height: 90px;
  height: 100%;
}

input::placeholder,
textarea::placeholder {
  padding-left: 10px;
  color: #b3b3b3;
}

.section-vivid-green {
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  gap: calc(var(--space) * 2);
  align-items: center;
  margin-top: calc(var(--space) * 2);
  margin-bottom: calc(var(--space) * 2);
}

.availability {
  text-transform: uppercase;
  margin-bottom: var(--space);
}

.price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space);
  align-content: flex-start;
  margin-bottom: 10px;
}

.price-actions {
  display: flex;
  align-items: center;
}

.price-actions input {
  display: inline-block;
  max-width: 60px;
  min-height: 44px;
  margin-right: calc(var(--space) * 0.3);
  text-align: center;
}

textarea {
  width: 100%;
  min-height: 90px;
  height: 100%;
  resize: none;
 }

.price-actions select {
  background-color: transparent;
  border: 1px solid transparent;
  text-transform: uppercase;
  text-align: right;
  cursor: pointer;
}

.price-number {
  font-variation-settings: var(--font-flex-extrabold);
  font-size: 3rem;
  line-height: 1;
}

.price-number.on-demand {
  font-size: 2rem;
  text-transform: uppercase;
}

.agreement {
  display: block;
  max-width: 456px;
  font-size: calc(var(--base-font-size) * 0.8);
}

.error {
  display: inline-block;
  margin-bottom: var(--space);
  line-height: 1.2;
  color: var(--color-red);
}

@media screen and (max-width: 620px) {
  .section-vivid-green {
    display: flex;
    flex-direction: column;
    gap: var(--space);
    padding-bottom: 3rem;
  }

  h2 {
    text-align: center;
  }

  .availability {
    text-align: center;
  }

  .price {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: calc(var(--space) * 0.5);
    margin-bottom: var(--space);
  }
}
</style>