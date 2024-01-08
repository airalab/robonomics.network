<template>
  <div class="oldy post-expired-info">
    {{ $t('This study information has been expired. For up-to-date lessons and workshops visit our') }} <g-link to="https://robonomics.academy/">{{ $t('academy') }}</g-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .post-expired-info {
    margin-bottom: calc(var(--space) * 2);
    font-weight: 600;
    box-shadow: 2px 3px 0 var(--color-blue);
    text-transform: uppercase;
  }
</style>