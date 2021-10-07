<template>
  <div class="placeholder wave">
    <div class="square"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.placeholder {
  padding: 10px;
  width: 100%;
  // border: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
}

.placeholder div {
  background: #e8e8e8;
}

.placeholder .square {
  width: 100%;
  height: 22rem;
  border-radius: 1rem;
  margin: 0 0 10px;
}

.placeholder .line {
  height: 12px;
  margin: 0 0 10px 0;
}
.placeholder .line:nth-child(2) {
  width: 120px;
}
.placeholder .line:nth-child(3) {
  width: 180px;
}
.placeholder .line:nth-child(4) {
  width: 150px;
}

.placeholder .circle {
  float: left;
  width: 15px;
  height: 15px;
  margin: 0 15px 10px 0;
  border-radius: 15px;
}

/* 
  --------------
  Pulse effect animation 
  Activated by adding a '.pulse' class to the placeholder
  --------------
*/

.placeholder.pulse div {
  animation: pulse 1s infinite ease-in-out;
  -webkit-animation: pulse 1s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }
  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }
  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
}

@-webkit-keyframes pulse {
  0% {
    background-color: rgba(165, 165, 165, 0.1);
  }
  50% {
    background-color: rgba(165, 165, 165, 0.3);
  }
  100% {
    background-color: rgba(165, 165, 165, 0.1);
  }
}

/* 
  --------------
  Wave effect animation 
  Activated by adding a '.wave' class to the placeholder
  --------------
*/

.placeholder.wave div {
  animation: wave 1s infinite linear forwards;
  -webkit-animation: wave 1s infinite linear forwards;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
}

@keyframes wave {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

@-webkit-keyframes wave {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>
