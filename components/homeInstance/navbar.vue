<template>
  <div>
    <div class="header">
      <burger></burger>
      <nuxt-link to="/" tag="div" class="logo">Cee</nuxt-link>
      <div>&nbsp;</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  background-color: $primary-bgcolor-1;
  display: flex;
  padding: 0.8rem 1.5rem;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-size: 2.6rem;
    font-weight: 600;
    cursor: pointer;
    font-family: $secondary-font-2;
    color: $color-white;
  }
}
</style>
