<template>
  <div class="w-full">
    <div class="py-2 px-5 bg-white flex justify-between items-center">
      <burger></burger>
      <nuxt-link v-slot="{ href, navigate }" to="/" custom>
        <div
          :href="href"
          class="text-primary-yellow text-3xl font-bold cursor-pointer font-spectral"
          @click="navigate"
        >
          Cee
        </div></nuxt-link
      >
      <nuxt-link v-if="!login" v-slot="{ href, navigate }" to="/login" custom
        ><div
          :href="href"
          class="text-sm font-bold hover:underline cursor-pointer"
          @click="navigate"
        >
          Sign In
        </div></nuxt-link
      >
      <div v-if="login">
        <img
          v-if="user_profile.profile_pic"
          :src="user_profile.profile_pic"
          class="rounded-full w-10 h-10 object-cover"
          alt="Profile Image"
        />
      </div>
    </div>
    <NavbarSlider></NavbarSlider>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import burger from '~/components/defaultComponent/burger'
import NavbarSlider from '~/components/defaultComponent/navbarSlider.vue'
export default {
  components: {
    burger,
    NavbarSlider,
  },
  computed: {
    ...mapState({
      user_profile: (state) => state.user_profile,
    }),
    ...mapState({
      login: (state) => state.signin.token,
    }),
  },
}
</script>
