<template>
  <div>
    <div class="py-2 px-5 bg-white flex justify-between items-center">
      <burger></burger>
      <nuxt-link v-slot="{ href, navigate }" to="/" custom
        ><div
          :href="href"
          class="text-primary-yellow text-3xl font-bold cursor-pointer font-spectral"
          @click="navigate"
        >
          Cee
        </div></nuxt-link
      >
      <div>&nbsp;</div>
    </div>
    <NavbarSlider></NavbarSlider>
  </div>
</template>

<script>
import burger from '~/components/defaultComponent/burger.vue'
import NavbarSlider from '~/components/defaultComponent/navbarSlider.vue'
export default {
  components: {
    burger,
    NavbarSlider,
  },
}
</script>
