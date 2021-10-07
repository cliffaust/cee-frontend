<template>
  <div
    class="sp sp-circle"
    :style="{ width: width + 'px', height: height + 'px' }"
  ></div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 20,
    },
    height: {
      type: Number,
      default: 20,
    },
  },
}
</script>

<style lang="scss" scoped>
.sp {
  clear: both;
  margin: 0 auto;
}

/* Spinner Circle Rotation */
.sp-circle {
  border: 4px rgba($primary-bgcolor-1, 0.25) solid;
  border-top: 4px rgba($primary-bgcolor-1, 1) solid;
  border-radius: 50%;
  -webkit-animation: spCircRot 0.6s infinite linear;
  animation: spCircRot 0.6s infinite linear;
}
@-webkit-keyframes spCircRot {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}
@keyframes spCircRot {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
