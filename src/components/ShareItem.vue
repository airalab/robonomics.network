<template>

  <g-link :to="(asset.options.length === 1)?asset.options[0].link:selected" class="share__link">
    <div class="share__col share__img">
      <g-image :src="require('!!assets-loader!~/assets/images/'+asset.img)"/>
    </div>

    <div class="share__col share__info">
      <span class="share__title" v-html="asset.title"/>
      <small class="share__description" v-html="asset.description"/>
    </div>

    <div class="share__col share__buttons">

      <div class="button button__primary button__select">
        <span v-if="asset.buttonicon" class="icon" v-html="asset.buttonicon" />

        <select v-model="selected" v-if="asset.options.length > 1">
          <option v-for="(option, key) in asset.options" v-bind:value="option.link">
              {{ option.text }}
          </option>
        </select>

        <small v-if="asset.options.length === 1" v-html="asset.options[0].text" />

      </div>

    </div>
  </g-link>

</template>



<script>

export default {
  data () {
    return {
      selected: ''
    }
  },

  props: {
    asset
  }

}
</script>
