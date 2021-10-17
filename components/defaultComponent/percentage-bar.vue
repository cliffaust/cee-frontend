<template>
  <div class="w-full bg-gray-200 h-2 rounded-full">
    <div class="percent" :style="{ '--percent': percent + '%' }"></div>
  </div>
</template>

<script>
export default {
  props: {
    percent: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="postcss" scoped>
.percent {
  background-color: #fca311;
  width: var(--percent);
  height: 7px;
  border-radius: 100px;
}
</style>
