<template>
  <div class="layout layout__content section-vivid-green">
    <g-image src="~/assets/images/devices/unitree-g1/unitree-g1.webp" alt="Humanoid Unitree" immediate/>

     <section>
        <h2 class="title">{{ $t('Rent in California, USA') }}</h2>
        <span class="availability block">{{ $t('Available by the Hour, Day, or Week') }}</span>
         
         <gsp-form :gscriptID="gscript" :siteKey="siteKey" @gsp-beforesubmit="beforeSubmit" @gsp-onsubmit="onSubmit" @gsp-oncaptchanotverified="captchaError">
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
                <option value="hour">hour</option>
                <option v-if="selectedUnit=='hours'" value="hours">hours</option>
                <option value="day">day</option>
                <option v-if="selectedUnit=='days'" value="days">days</option>
                <option value="week">week</option>
                <option v-if="selectedUnit=='weeks'" value="weeks">weeks</option>
            </select>
            </div>
             <div class="price-number" :class="{'on-demand': selectedUnit === 'week' || selectedUnit === 'weeks'}"> <span v-if="price !== 'on demand'">$</span> {{price}}</div>
          </div>
             <label class="block"><input type="email" data-gsp-name="Email" :data-gsp-data="email" v-model="email" :placeholder="$t('Your email')" class="block" required /></label>
             <label class="block"><input type="text" data-gsp-name="Name" :data-gsp-data="name" v-model="name" :placeholder="$t('Your name')" class="block" required /></label>
             <label class="block"><textarea v-model="comment" data-gsp-name="Comment" :data-gsp-data="comment" :placeholder="$t('Your comment')" class="block" required/></label>

             <input type="hidden" data-gsp-name="Location" :data-gsp-data="location" />
            
             <robo-button class="block" :loading="status === 'process'" :type="buttontype">{{buttontext}}</robo-button>
             <span class="agreement">{{ $t('By clicking this button, you agree to receive an email regarding the rental of the Unitree G1 Humanoid Robot.') }}</span>
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

  data() {
    return {
      inputValue: 1, // default value
      selectedUnit: 'hour', // default unit
      price: 200,
      email: '',
      name: '',
      comment: '',
      location: 'https://robonomics.network' + this.$route.path,
      gscript: process.env.GRIDSOME_RENT_KEY,
      siteKey: process.env.GRIDSOME_RECAPTCHA,
      status: 'init',
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
          'ok': this.$t("We'll get in touch shortly!"),
          'error': this.$t('Not submitted')
      }[this.status] ?? this.$t('Contact me')
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

    onSubmit(response, postbody) {
      if(response.result === 'success') {
          this.status = 'ok';
      } else {
          this.status = 'error';
      }
    },

    handleInputChange(event) {
      const rawValue = event.target.value;

      if (/^\d*$/.test(rawValue)) {
        this.inputValue = rawValue === '' ? '' : parseInt(rawValue); 

        if (this.inputValue && this.inputValue > 0) {
          if (this.selectedUnit === 'hour' || this.selectedUnit === 'hours') {
            if (this.inputValue === 1) {
              this.selectedUnit = 'hour';
            } else if (this.inputValue <= 23) {
              this.selectedUnit = 'hours';
            } else {
              this.inputValue = Math.ceil(this.inputValue / 24);
              this.selectedUnit = this.inputValue === 1 ? 'day' : 'days';
            }
          } else if (this.selectedUnit === 'day' || this.selectedUnit === 'days') {
            if (this.inputValue === 1) {
              this.selectedUnit = 'day';
            } else if (this.inputValue <= 7) {
              this.selectedUnit = 'days';
            } else {
              this.inputValue = Math.ceil(this.inputValue / 7);
              this.selectedUnit = this.inputValue === 1 ? 'week' : 'weeks';
            }
          } else if (this.selectedUnit === 'week' || this.selectedUnit === 'weeks') {
            this.selectedUnit = this.inputValue === 1 ? 'week' : 'weeks';
          }
        }
      }
    },

    handleInputBlur() {
      if (!this.inputValue || this.inputValue < 1) {
        this.inputValue = 1;
      }
    },

    handleInputFocus() {
      this.inputValue = '';
    },

    handleUnitChange() {
      if (this.selectedUnit === 'hour' || this.selectedUnit === 'hours') {
        this.inputValue = Math.min(this.inputValue, 23); 
        this.selectedUnit = this.inputValue === 1 ? 'hour' : 'hours';
      } else if (this.selectedUnit === 'day' || this.selectedUnit === 'days') {
        this.inputValue = Math.min(this.inputValue, 7);
        this.selectedUnit = this.inputValue === 1 ? 'day' : 'days';
      } else if (this.selectedUnit === 'week' || this.selectedUnit === 'weeks') {
        this.selectedUnit = this.inputValue === 1 ? 'week' : 'weeks';
      }
    }
  },

  watch: {
    selectedUnit: function(curr) {

      if(curr === 'hour' || curr === 'hours') {
        this.price = this.inputValue * 200
      } else if (curr === 'day' || curr === 'days') {
        this.price = this.inputValue * 900;
      } else {
        this.price = 'on demand'
      }
    },

    inputValue: function(value) {
      if(this.selectedUnit === 'hour' || this.selectedUnit === 'hours') {
        this.price = value * 200
      } else if (this.selectedUnit === 'day' || this.selectedUnit === 'days') {
        this.price = value * 900;
      } else {
        this.price = 'on demand'
      }
    }
  }
 }
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

  input::placeholder, textarea::placeholder {
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
  font-size: calc(var(--base-font-size) * 0.75);
  font-variation-settings: 'wght' 500, 'wdth' 100, 'opsz' 26, 'XTRA' 468, 'XOPQ' 96, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712,  'slnt' -10;
  letter-spacing: 1px;
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