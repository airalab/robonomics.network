<template>

  <ul class="ul-nostyle">
    <li class="share" v-if="assets" v-for="(asset, key) in assets" :key="key">

      <g-link :to="asset.link" class="share__link">
        <div class="share__col share__img">
          <g-image :src="require('!!assets-loader!~/assets/images/'+asset.img)"/>
        </div>

        <div class="share__col share__info">
          <span class="share__title" v-html="asset.title"/>
          <small class="share__description" v-html="asset.description"/>
        </div>

        <div class="share__col share__buttons">

          <div class="button button__primary">
            <span v-if="asset.buttonicon" class="icon" v-html="asset.buttonicon" />
            <small v-if="asset.buttontext" v-html="asset.buttontext" />
          </div>
          
        </div>
      </g-link>

    </li>
  </ul>

</template>



<style lang="scss">

  .share {
    margin-bottom: var(--space);

    &__link {
      text-decoration: none;
      color: var(--color-text) !important;
      text-align: left;
      display: table;
      width: 100%;

      background-color: var(--color-light);
      padding: calc(var(--space)/2);
      margin-bottom: var(--space);

      &:last-child { margin-bottom: 0; }
      &:after { display: none !important; }
    }

    &__col {
      padding-right: calc(var(--space)/2);
      display: table-cell;
      vertical-align: top;

      &:last-child { padding-right:0; }
    }

    &__title, &__description {
      display: block;
    }

    &__title {
      font-weight: 500;
      line-height: 1;
    }

    &__description {
      margin-top: 0.5rem;
    }

    &__buttons {
      text-align: right;
    }

    .button {
      display: inline-block;
      white-space: nowrap;
    }

    &__img {
      width: 30%;

      img {
        display: block;
        max-width: 100%;
      }

      @media screen and (max-width: 550px) {
        display: none;
      }

      &:hover {
        transform-origin: 50% 50%;
        transform: scale(1.3);
      }
    }

    &__info {
      width: 50%;
    }

    &__buttons {
      width: 20%;
    }
  }

  
</style>


<script>

export default {
  props: {
    assets: { type: Array, default: () => [] }
  }

}
</script>
