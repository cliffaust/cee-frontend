<template>
  <button
    class="bg-transparent font-bold text-primary-blue-200 px-6 py-1 rounded-xl border-2 border-primary-darkgray border-solid"
    v-on="$listeners"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>
