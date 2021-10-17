<template>
  <div class="bar">
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
.bar {
  background-color: #e4e4e4;
  width: 100%;
  height: 7px;
  border-radius: 100px;
}

.percent {
  background-color: #fca311;
  width: var(--percent);
  height: 7px;
  border-radius: 100px;
}
</style>
