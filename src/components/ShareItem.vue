<template>

  <g-link :to="asset.options[selected].link" class="share__link">
      <div class="share__col share__img" v-if="asset.img">
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
            <option v-for="(option, key) in asset.options" v-bind:value="key" v-bind:name="option.link">
                {{ option.text }}
            </option>
          </select>

          <small v-if="asset.options.length === 1" v-html="asset.options[0].text" />

        </div>

      </div>
    </g-link>

</template>




<style lang="scss">

  .share {
    margin-bottom: var(--space);

    &__link {
      display: grid;
      grid-template-columns: 1fr 3fr 1fr;
      gap: calc(var(--space)/2);

      text-decoration: none;
      color: var(--color-text) !important;
      text-align: left;
      background-color: var(--color-light);
      padding: 1rem;

      &:last-child { margin-bottom: 0; }
      &:after { display: none !important; }

      &:hover {
        box-shadow: 0 .2rem 0 var(--link-color);
      }

      &:visited { color: var(--link-color-visited) !important; }
    }

    &__title, &__description {
      display: block;
    }

    &__title {
      font-weight: 500;
      line-height: 1.2;
    }

    &__description {
      margin-top: 0.5rem;
    }

    &__img {

      img {
        display: block;
        max-width: 100%;
      }

      @media screen and (max-width: 450px) {
        display: none;
      }

    }

    &__buttons {
      justify-self: end;
    }

    .button {
      display: inline-block;
      white-space: nowrap;
    }

  }


  .tab-science {
    .share__link {
      grid-template-columns: 4fr 1fr;
    }
  }

  .tab-intouch {
    .share__link {
      grid-template-columns: minmax(auto, 60px) 3fr 1fr;
    }
  }
  
</style>



<script>

export default {
  data () {
    return {
      selected: 0
    }
  },

  props: ['asset']

}
</script>
