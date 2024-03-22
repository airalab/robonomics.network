<template>
  <div class="oldy devices-shop-item" v-if="!unavailable">
    <div class="devices-shop-item__content">
      <div class="devices-shop-item__price"> <sub>$</sub> <span>{{ price }}</span> </div>
      <h2 class="devices-shop-item__title"> {{ title}} </h2>
    </div>
    <rb-button v-if="count === 0" buttonstyle="flat" class="devices-shop-item__btn" @click="addToCart">{{ $t('Add to cart') }}</rb-button>
    <!-- show if count more than 0 -->
    <DevicesShopCounter 
      v-else :count="count" 
      @changeCount="changeCount"
      @increaseCount="increaseCount"
      @decreaseCount="decreaseCount"
    />
    <span class="devices-shop-item__shipping">{{ $t('Free worldwide shipping') }}</span>
  </div>
  <div v-else class="oldy devices-shop-item" >
    <h2 class="devices-shop-item__title">{{ title }}</h2>
    <DevicesShopNotify />
  </div>
</template>

<script>
export default {

  components: {
    DevicesShopCounter: () => import("~/components/devices/DevicesShopCounter.vue"),
    DevicesShopNotify: () => import("~/components/devices/DevicesShopNotify.vue"),
  },

  props: {
    
    price: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    unavailable: {
      type: Boolean,
      default: false
    }

  },

  data() {
    return {
      count: 0
    }
  },

  methods: {
    // fires when count changing in input
    changeCount(count) {
      this.count = count
    },

    // fires when "add to cart" button is clicked
    addToCart() {
      this.count = 1;
    },
    
    // fires when increase item count
    increaseCount() {
      this.count++;
    },


    // fires when decrease item count
    decreaseCount() {
      this.count--;
    }
  }

}
</script>

<style scoped>

.devices-shop-item {
  padding: var(--space) calc(var(--space) * 0.5);
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  border: none;
  color: #000;
  background-color: #fff;
}

.devices-shop-item__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-family);
  margin-bottom:  var(--space);
}

.devices-shop-item__price {
  margin-right: calc(var(--space) * 0.6);
  display: flex;
  align-items: flex-end;
  align-self: flex-start;
  font-weight: 300;
  gap: 5px;
}

.devices-shop-item__price span {
  font-size: calc(var(--base-font-size) * 1.4);
  line-height: 1.1;
  font-weight: 500;
}

.devices-shop-item__title {
  margin: 0;
  font-family: inherit;
  font-size: calc(var(--base-font-size) * 0.9);
  font-weight: 900;
  letter-spacing: 0;
  text-transform: capitalize;
  text-align: left;
}

.devices-shop-item__btn {
  width: 100%;
  margin-bottom: calc(var(--space) * 0.3);
  text-align: center;
  font-family: var(--font-family);
  font-weight: 600;
  letter-spacing: 0;
  font-size: calc(var(--base-font-size) * 0.8);
  background-color: hsl(228.7,67.5%,49.4%);
}

.devices-shop-item__shipping {
  font-weight: 500;
  text-transform: uppercase;
  font-size: calc(var(--base-font-size) * 0.6);
  letter-spacing: 1px;
}

</style>