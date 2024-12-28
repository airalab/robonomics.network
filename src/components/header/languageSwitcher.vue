<template>

  <div class="select-wrapper" :class="{'bigGap': locale !== 'en' && !translated}">
    <select aria-label="choose preferably language" v-if="$localesList" tabindex="0" @change="onSelectChange($event)">
  
      <template v-for="(item,key) in $localesList">
        <option v-bind:key="key" :selected="item == locale" v-bind:value="item">
          <!-- <template v-if="item == 'en'">English</template>
          <template v-if="item == 'ru'">Русский</template> -->
          {{item}}
        </option>
      </template>

    </select>
    <span v-if="locale !== 'en' && !translated">AI</span>
  </div>

</template>

<style scoped>

  .select-wrapper {
    position: relative;
  }

  .select-wrapper span{
    position: absolute;
    top: 2px;
    right: -5px;
    width: 25px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(var(--base-font-size) * 0.6);
    font-weight: 600;
    color: var(--color-dark);
    z-index: -1;
  }

  select {
    --border-width: 0;
    --input-padding: .2rem;
    text-transform: uppercase;
    font-size: 80%;
  }
</style>

<script>

export default {

  props: {
    translated: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      locale: 'en'
    }
  },

  computed: {
    locales() {
      return locales
    }
  },

  methods: {

    resolveI18n() {
      let locale = this.locale
      this.$setI18n({
        locale,
      })
    },

    initPath() {
      if(localStorage.getItem('locale') ) {
        this.locale = localStorage.getItem('locale');
      }  
    },

    onSelectChange(e) {
      this.$setLocale(e.target.value)
      let newpath = this.$tp(this.$route.path, e.target.value);
      window.location.href = newpath;
    },
    },

    mounted() {
      this.initPath();
      this.resolveI18n();
    }

  }

</script>