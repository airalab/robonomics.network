<template>
    <div class="layout layout__content section-vivid-green">
      <slot />
  
      <template v-if="available">
        <ProductAvailable 
          :title="title" 
          :price="price" 
          :showOrder="showOrder"
          :orderLinks="orderLinks"
          :info="info"
          @toggle-order="toggleOrder" 
        />
      </template>
  
      <template v-else>
        <section>
          <PriceSection :price="price" :message1="$t('Early bird price')" :message2="$t('Coming in early 2025')" />
  
          <gsp-form 
            :gscriptID="gscript" 
            :siteKey="siteKey" 
            @gsp-beforesubmit="beforeSubmit" 
            @gsp-onsubmit="onSubmit" 
            @gsp-oncaptchanotverified="captchaError"
          >
            <label class="block">
              <input 
                type="email" 
                data-gsp-name="Email" 
                :data-gsp-data="email" 
                v-model="email" 
                :placeholder="$t('Your email')" 
                class="block" required 
              />
            </label>
            <label class="block">
              <input disabled type="checkbox" v-model="deviceupdates" />
              <span>{{ $t('Get updates about smart devices') }}</span>
            </label>
            <label class="block">
              <input type="checkbox" v-model="regularupdates" />
              <span>{{ $t('Receive regular emails from Robonomics') }}</span>
            </label>
  
            <input type="hidden" data-gsp-name="Location" :data-gsp-data="location" />
            <input type="hidden" data-gsp-name="Tags" :data-gsp-data="tags.toString()" />
  
            <robo-button 
              class="block" 
              :loading="status === 'process'" 
              :type="buttonType"
            >
              {{ buttonText }}
            </robo-button>
            <span v-if="message">{{ message }}</span>
          </gsp-form>
        </section>
      </template>
    </div>
  </template>
  
  <script>  
  export default {
    components: {
      RoboButton: () => import("@/components/utils/Button.vue"),
      ProductAvailable: () => import("@/components/blocks/ProductAvailable.vue"),
      PriceSection: () => import("@/components/blocks/PriceSection.vue"),
    },
  
    props: {
      price: {
        type: String,
        required: true
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
    },
  
    data() {
      return {
        email: "",
        deviceupdates: true,
        regularupdates: false,
        location: `https://robonomics.network${this.$route.path}`,
        gscript: process.env.GRIDSOME_CONTACTS_FORM_SCRIPT,
        siteKey: process.env.GRIDSOME_RECAPTCHA,
        status: "init",
        tags: ["devices"],
        message: "",
        showOrder: false,
      };
    },
  
    computed: {
      buttonType() {
        return this.status === "ok" ? "ok" :
               this.status === "error" ? "error" : "primary";
      },
  
      buttonText() {
        return this.status === "ok" ? this.$t("Thanks for your submission!") :
               this.status === "error" ? this.$t("Not submitted") :
               this.$t("Notify me when available");
      },
    },
  
    methods: {
      toggleOrder() {
        this.showOrder = !this.showOrder;
      },
  
      captchaError() {
        this.status = "na";
        this.message = this.$t("Captcha is not verified. Please, check your internet connection");
      },
  
      beforeSubmit() {
        this.status = "process";
        if (!this.regularupdates) {
          this.tags.push("only-devices");
        }
      },
  
      onSubmit(response) {
        this.status = response.result === "success" ? "ok" : "error";
      },
    },

    mounted() {
      window.document.addEventListener('click', (e) => {
        const productBuy = document.querySelector('.product-buy__container');
        let clickInside = productBuy.contains(e.target)

        if(!clickInside && productBuy.classList.contains('active')) {
            this.showOrder = false;
        }
      })
    }
  };
  </script>
  
  <style scoped>
  .section-vivid-green {
    position: relative;
    min-height: 548px;
    display: grid;
    grid-template-columns: 1.5fr 2fr;
    gap: calc(var(--space) * 2);
    align-items: center;
    margin-top: calc(var(--space) * 2);
    margin-bottom: calc(var(--space) * 2);
    z-index: 15;
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
  </style>
  