<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.noSelect {
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}

html {
  font-size: 62.5%;
}

body {
  font-family: $primary-font;
  color: $primary-text-color;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  select,
  textarea,
  input {
    font-size: 16px !important;
  }
}
</style>
