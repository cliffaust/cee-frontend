<template>
  <transition name="fade">
    <div class="fixed top-0 left-0 right-0 bottom-0 z-40" @click="close">
      <div
        class="bg-white fixed py-5 px-8 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-50 h-full w-full overflow-scroll"
        @click.stop
      >
        <slot></slot>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          class="absolute top-6 right-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          @click="close"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>

<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
