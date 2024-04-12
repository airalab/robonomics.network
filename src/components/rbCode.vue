<template>
  <div class="post-code">
    <slot/>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.post .post-code code  {
  padding: calc(var(--space)* 0.5) var(--space);
  background-color: var(--color-light);
  border: 2px solid var(--color-blue);
  border-top: 10px solid var(--color-blue);
  margin-bottom: var(--space);
  color: var(--color-dark);
}
</style>