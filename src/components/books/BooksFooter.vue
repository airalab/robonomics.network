<template>
  <div class="books-footer">
    <span> {{ $t('Do you want') }} <br/> {{$t('to dive even deeper?')}}</span>
    <div class="books-footer__links">
      {{ $t('Our') }} <g-link to="/white-paper/">{{ $t('White Paper') }} </g-link> & <g-link to="/papers/">{{ $t('Science') }}</g-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .books-footer  {
    position: relative;
    margin-top: calc(var(--space) * 6);
    padding-left: calc(var(--space) * 2);
    font-family: "Roboto Flex";
    font-weight: 900;
    font-size: calc(var(--base-font-size) * 1.8);
    line-height: 1.2;
    text-align: center;
  }

  .books-footer::after {
    content: '';
    position: absolute;
    top: -120px;
    right: -140px;
    width: 215px;
    height: 250px;
    background-image: url('../../assets/images/books-decor.png');
    background-position: center;
    background-size: 215px;
  }

  .books-footer span {
    display: block;
    margin-bottom: calc(var(--space) * 1.1);
    text-align: left;
  }

  .books-footer__links {
    font-size: calc(var(--base-font-size) * 1.2);
    color: var(--color-blue);
    text-align: left;
  }

  @media screen and (max-width: 865px) {
    .books-footer::after {
      top: -120px;
      right: -40px;
    }
  }

  @media screen and (max-width: 650px) {

    .books-footer {
      margin-top: calc(var(--space) * 2);
    }

    .books-footer::after {
      display: none;
    }
  }


</style>