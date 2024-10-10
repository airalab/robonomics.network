<template>
  <div class="home-member">
    <div class="layout layout__new">
      <rb-button class="home-member__btn" buttoncolor="accent-green" to="https://robonomics.app/">Become a Member</rb-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .home-member {
    margin-top: -2rem;
    margin-bottom: calc(var(--space) * 3);
    min-height: 125px;
    height: 100%;
    display: flex;
    align-items: center;
    background-image: url("../../assets/images/home-member-decor.png");
    background-size: contain;
    background-position: center;
  }

  .home-member__btn {
    padding: 0.7rem 1.6rem;
  }
</style>