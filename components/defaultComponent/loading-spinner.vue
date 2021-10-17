<template>
  <div class="sp sp-circle" v-on="$listeners"></div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.sp {
  width: 40px;
  height: 40px;
  clear: both;
  margin: 0 auto;
}

/* Spinner Circle Rotation */
.sp-circle {
  border: 4px rgba(#002333, 0.25) solid;
  border-top: 4px rgba(#002333, 1) solid;
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
