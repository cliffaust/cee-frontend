<template>
  <transition name="fade">
    <div class="backdrop" @click="close">
      <div class="container" @click.stop>
        <slot></slot>
        <font-awesome-icon
          :icon="['fas', 'times']"
          class="icon"
          @click="close"
        />
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

<style lang="scss" scoped>
.container {
  padding: 1.2rem 2rem;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}

.backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 40;

  .icon {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 14px;
    right: 20px;
    cursor: pointer;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 400px) {
  .ps__rail-y {
    display: none !important;
  }
}
</style>
