<template>

  <g-link :to="asset.options[selected].link" class="share__link oldy oldy__link" :class="{ 'no-image': !asset.img }" v-on:click="selectInButton">
      <div class="share__col share__img" v-if="asset.img">
        <g-image :src="require('!!assets-loader!~/assets/images/'+asset.img)"/>
      </div>

      <div class="share__col share__info">
        <span class="share__title" v-html="asset.title"/>
        <small class="share__description" v-html="asset.description"/>
      </div>

      <div class="share__col share__buttons">

        <button class="button primary select button__icon">
          

          <select v-model="selected" v-if="asset.options.length > 1">
            <option v-for="(option, key) in asset.options" v-bind:value="key" v-bind:name="option.link">
                {{ option.text }}
            </option>
          </select>

          <small v-if="asset.options.length === 1" v-html="asset.options[0].text" />

          <span v-if="asset.buttonicon" class="icon" v-html="asset.buttonicon" />

        </button>

      </div>
    </g-link>

</template>




<style scoped>
  .share {
    margin-bottom: var(--space);
  }
    .share__link {
      display: grid;
      grid-template-columns: 100px 3fr 1fr;
      gap: calc(var(--space)/2);
      text-decoration: none;
      color: var(--color-text) !important;
      text-align: left;
      padding: 1rem;
    }
      .share__link:last-child { margin-bottom: 0; }
      .share__link:after { display: none !important; }
      .share__link:visited { color: var(--link-color-visited) !important; }
      @media screen and (max-width: 450px) {
        .share__link { grid-template-columns: 1fr !important; }
      }
    
    .share__title, .share__description {
      display: block;
    }
    .share__title {
      font-weight: 500;
      line-height: 1.2;
    }
  .share__description {
      margin-top: 0.5rem;
    }
      .share__img img {
        display: block;
        max-width: 100%;
      }
      @media screen and (max-width: 450px) {
        .share__img { display: none; }
      }
      @media screen and (min-width: 450px) {
        .share__buttons { justify-self: end; }
      }
    
    .share .button {
      display: inline-block;
      white-space: nowrap;
    }
  
  .no-image.share__link {
      grid-template-columns: 4fr 1fr;
    }
  
</style>



<script>
export default {
  data () {
    return {
      selected: 0
    }
  },
  props: ['asset'],
  methods: {
      selectInButton(event){
        // console.log(event.target.tagName);
        if ( event.target.tagName === 'SELECT' || event.target.tagName === 'OPTION' )
          event.preventDefault();
          // event.stopPropagation();
      }
  }
}
</script>