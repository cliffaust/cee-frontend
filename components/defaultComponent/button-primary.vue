<template>
  <button
    class="bg-primary-darkgray font-bold text-white px-6 py-1 rounded-xl"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
