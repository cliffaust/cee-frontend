<template>
  <div class="w-full">
    <div class="py-4 px-6 bg-white flex justify-between items-center">
      <burger></burger>
      <nuxt-link v-slot="{ href, navigate }" to="/" custom>
        <div
          :href="href"
          class="text-primary-yellow text-5xl font-bold cursor-pointer font-spectral"
          @click="navigate"
        >
          Cee
        </div></nuxt-link
      >
      <nuxt-link v-if="!login" v-slot="{ href, navigate }" to="/signup"
        ><div
          :href="href"
          class="text-2xl font-bold hover:underline cursor-pointer"
          @click="navigate"
        >
          Sign In
        </div></nuxt-link
      >
      <div v-if="login" @click.stop="showUserOptions">
        <img
          v-if="user_profile.profile_pic"
          :src="user_profile.profile_pic"
          class="rounded-full w-14 h-14 object-cover"
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
  methods: {
    showUserOptions() {
      this.$emit('showUserOptions')
    },
  },
}
</script>
