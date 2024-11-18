<template>
  <transition name="pop" appear>
  <div class="product-notify-modal">
    <rb-button class="product-notify-modal__close-btn" @click="$emit('closeModal')">
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M9.66198 1.96966L6.63204 4.99993L9.66198 8.03006C10.1127 8.48093 10.1127 9.21127 9.66198 9.66213C9.4368 9.88732 9.14156 10 8.84647 10C8.55089 10 8.25563 9.88749 8.03062 9.66213L5.00001 6.63165L1.96964 9.6621C1.74448 9.88729 1.44922 9.99997 1.15387 9.99997C0.85861 9.99997 0.563548 9.88746 0.338189 9.6621C-0.1125 9.21144 -0.1125 8.48107 0.338189 8.03004L3.36804 4.9999L0.338017 1.96966C-0.112672 1.51896 -0.112672 0.788452 0.338017 0.33776C0.788619 -0.112587 1.5187 -0.112587 1.96947 0.33776L4.99999 3.36804L8.03027 0.33776C8.48113 -0.112587 9.2113 -0.112587 9.66181 0.33776C10.1127 0.788452 10.1127 1.51896 9.66198 1.96966Z" fill="black"/>
      </svg>
    </rb-button>
    <transition name="fade" appear>
      <div class="product-notify-modal__container oldy">
        <h2>{{ deviceName }} updates</h2>

        <gsp-form :gscriptID="gscript" :siteKey="siteKey">

        <label :for="`devices-checkbox-${id}`" class="product-notify-modal__label">
          <input type="checkbox" :value="`${deviceName}`" name="check" :id="`devices-checkbox-${id}`" class="product-notify-modal__input" v-model="customTags" />
          <span class="product-notify-modal__checkbox checkbox"></span>
          <b>Get updates about smart devices</b>
        </label>
          <label :for="`robonomics-checkbox-${id}`" class="product-notify-modal__label">
            <input type="checkbox" value="website" name="check" :id="`robonomics-checkbox-${id}`" class="product-notify-modal__input" v-model="customTags"/>
            <span class="product-notify-modal__checkbox checkbox"></span>
            <b>Receive regular emails from Robonomics</b>
          </label>

          <input
            required 
            name="email" 
            class="product-notify-modal__email-input" 
            :class="{'sent': result === 'success'}"
            type="email" 
            :placeholder="$t('Your email')" 
            data-gsp-name="Email" 
            :data-gsp-data="data_email" 
            v-model="data_email"
            :disabled="result === 'success'"
          >
          <input       
            type="hidden" 
            placeholder="customTags" 
            data-gsp-name="customTags" 
            :data-gsp-data="customTags.toString()" 
            v-model="customTags"
          />

          <div class="product__notify-btn google-sheets-form__actions">
            <rb-button @click="onSubmit" v-if="result !== 'success'" block :disabled="result === 'error' || result === 'wait'"  buttoncolor="accent-green">
              <span class="contacts__form-btn-text" v-if="result !== 'wait'">{{$t('Notify me when available')}}</span>
              <span class="isLoading contacts__form-btn-text" v-else>{{$t('Adding you to our special list...')}}</span>
              <span  v-if="result === 'wait'" class="spinner">
                <Spinner/>
              </span>
            </rb-button >
            <rb-button block disabled v-else class="success contacts__form-btn-text">{{$t('Signed up successfully')}}</rb-button>
            <div v-if="result === 'error'" class="error">{{$t('Something went  wrong. Try again later')}}</div>
          </div>
        </gsp-form>
      </div>
    </transition>
  </div>
</transition>
  
</template>

<script>
export default {

  props: {
    deviceName: {
      type: String,
      default: 'device'
    },
    id: {
      type: Number,
      default: 0
    }
  },

  components: {
    Spinner: () => import ('@/components/utils/spinner.vue')
  },
    

  data() {
    return {
      data_email: '',
      customTags: [],
      result: this.$response,
      interval: null,
      gscript: process.env.GRIDSOME_CONTACTS_FORM_SCRIPT,
      siteKey: process.env.GRIDSOME_RECAPTCHA,
    }
  },

  methods: {

    onSubmit() {

      if(!this.data_email) {
        return
      }

      if(this.data_email.includes('testing@example')) {
        window.stop();
        return
      }

      if(this.data_email.includes('@')) {
        this.interval = setInterval(() => {
          this.result = this.$response
          console.log(this.$response)
        }, 1000)
      }

      if (this.$response === 'success' || this.$response === 'error') {
        clearInterval(this.interval)
      }

    }

  },

  watch: {

    'result': function(old, curr) {
      if(old === 'success' || old === 'error') {
        clearInterval(this.interval)
      }
    }
  },

  mounted() {
    this.customTags.push(this.$props.deviceName)
  }

}
</script>

<style scoped>

.product-notify-modal {
  position: absolute;
  top: -100px;
  left: 50%;
  max-width: 280px;
  width: 100%;
  z-index: 100;
  transform: translateX(-50%);
}

.product-notify-modal__container {
  padding: calc(var(--space) * 0.5) calc(var(--space) * 0.5) calc(var(--space) * 0.8);
  background-color: #e5e4f3;
}


.product-notify-modal__close-btn {
  position: absolute;
  top: -8px;
  right: -5px;
  padding: 5px;
  background-color: #c1cdff;
  z-index: 1000;
}

.product-notify-modal__container h2 {
  margin: 0 0 10px;
  font-size: calc(var(--base-font-size) * 0.8);
  letter-spacing: 0;
  font-weight: 700;
  text-align: left;
  text-transform: none;
}

.product-notify-modal__container form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.product-notify-modal__label {
  position: relative;
  padding-left: 3px;
  margin-bottom: calc(var(--space) * 0.3);
  font-size: calc(var(--base-font-size) * 0.6);
  transition: color 0.3s ease-in-out;
  cursor: pointer;
}

.product-notify-modal__label:last-of-type{
  margin-bottom: calc(var(--space) * 0.5);
}


.product-notify-modal__input {
  opacity: 0;
  width: 0;
  height: 0;
}

.product-notify-modal__input+span {
  position: absolute;
  top: 3px;
  left: 0;
  width: 14px;
  height: 14px;
  text-align: center;
  border: 1px solid var(--color-dark);
  transition: border .3s ease-in-out;
}

.product-notify-modal__input+span::before {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  top: 0;
  left: 0;
  opacity: 0;
  background-color: var(--rb-color-green-accent);
  transition: opacity .2s ease-in-out;
}

.product-notify-modal__input:checked+span::before {
  opacity: 1;
}

.product-notify-modal__label:active {
  color: var(--rb-color-green);
}

.product-notify-modal__label:focus {
  color: var(--rb-color-green);
}

.product-notify-modal__input.sent,
.product-notify-modal__email-input.sent  {
  background-color: var(--rb-color-green-accent);
}

.product-notify-modal__email-input  {
  width: 100%;
  font-weight: 700;

  font-size: calc(var(--base-font-size) * 0.8);
  border: 1px solid var(--color-dark);
}

.product-notify-modal__email-input::placeholder {
  font-size: calc(var(--base-font-size) * 0.7);
  font-weight: 700;
  color: var(--color-dark);
}

.google-sheets-form__actions {
  width: 100%;
}

.product-notify-modal button {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(var(--base-font-size) * 0.6);
}

.error {
  margin-top: 20px;
}

.spinner svg {
  width: 40px;
  height: 30px;
}

.isLoading {
  width: 100%;
}


@media screen and (max-width: 1000px) {
  .product-notify-modal__label {
    padding-left: 6px;
  }
  .product-notify-modal__input+span {
    top: 0;
  }
}


/* modal animation */

.fade-enter-active,
.fade-leave-active {
  transition: opacity .4s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}

</style>