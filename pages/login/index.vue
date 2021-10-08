<template>
  <div>
    <navbar></navbar>
    <div
      v-if="loginError"
      class="text-white text-xl py-3 px-4 bg-red-500 font-bold"
    >
      We couldn’t find an account matching the email or password you entered.
      Please check your email or password and try again.
    </div>
    <div class="py-0 px-8 mt-8">
      <div class="font-bold text-4xl font-mono text-center mb-5">Login</div>
      <ValidationObserver v-slot="{ handleSubmit }">
        <ValidationProvider
          v-slot="{ errors }"
          name="email"
          mode="eager"
          rules="required"
        >
          <div class="mb-6">
            <baseInput
              v-model="data.email"
              placeholder="Email"
              type="email"
              :error-style="Boolean(errors[0])"
              label="Email"
            ></baseInput>
            <span class="text-xl mt-3 font-bold text-red-400">{{
              errors[0]
            }}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          name="password"
          mode="eager"
          rules="required"
        >
          <div class="mb-2">
            <baseInput
              v-model="data.password"
              placeholder="Password"
              :error-style="Boolean(errors[0])"
              :show-password="showPassword"
              label="Password"
              :type="showPassword ? 'text' : 'password'"
              @changeShowPasswordToTrue="changeShowPasswordToTrue"
              @changeShowPasswordToFalse="changeShowPasswordToFalse"
            ></baseInput>

            <span class="text-xl mt-3 font-bold text-red-400">{{
              errors[0]
            }}</span>
          </div>
        </ValidationProvider>
        <div class="float-right text-xl font-bold mb-6 text-blue-500">
          Forgot your password?
        </div>
        <div>
          <ButtonPrimary
            :disabled="loading"
            :class="[
              'w-full',
              '!py-5',
              'text-2xl',
              'bg-primary-yellow',
              '!text-primary-blue-200',
              { 'bg-opacity-30': loading },
            ]"
            @click="handleSubmit(login)"
          >
            <div v-if="!loading">Login</div>
            <div v-if="loading">
              <ButtonLoadingSpinner></ButtonLoadingSpinner>
            </div>
          </ButtonPrimary>
        </div>
        <div class="mt-10 flex gap-4 items-center">
          <div class="flex-grow h-1 bg-gray-200"></div>
          <div class="text-xl font-bold text-center">Or Sign in With</div>
          <div class="flex-grow h-1 bg-gray-300"></div>
        </div>
        <div class="mt-10 flex items-center gap-8 justify-center">
          <div
            class="w-20 h-20 rounded-full shadow-xl bg-white flex justify-center items-center cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="32px"
              height="32px"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
              />
              <path
                fill="#FF3D00"
                d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
              />
              <path
                fill="#1976D2"
                d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
              />
            </svg>
          </div>
          <div
            class="w-20 h-20 rounded-full shadow-xl bg-white flex justify-center items-center cursor-pointer"
          >
            <svg
              width="32px"
              height="32px"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                d="M23.446 18l.889-5.791h-5.557V8.451c0-1.584.776-3.129 3.265-3.129h2.526V.392S22.277.001 20.085.001c-4.576 0-7.567 2.774-7.567 7.795v4.414H7.431v5.791h5.087v14h6.26v-14z"
                fill="#6681eb"
              />
            </svg>
          </div>
        </div>
        <div v-if="$route.query.redirect" class="mt-6 flex justify-center">
          <span class="text">Don't have an account? </span
          ><nuxt-link
            :to="{
              path: '/signup',
              query: { redirect: `${$route.query.redirect}` },
            }"
            class="text-xl font-bold ml-2 text-blue-500"
          >
            Register</nuxt-link
          >
        </div>
        <div v-else class="mt-12 flex justify-center">
          <span class="text-xl font-bold">Don't have an account? </span
          ><nuxt-link to="/signup" class="text-xl font-bold ml-2 text-blue-500">
            Register</nuxt-link
          >
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import navbar from '~/components/homeInstance/navbar.vue'
import ButtonPrimary from '~/components/defaultComponent/button-primary.vue'
import baseInput from '~/components/defaultComponent/baseInput'
import ButtonLoadingSpinner from '~/components/defaultComponent/button-loading-spinner.vue'
export default {
  components: {
    navbar,
    baseInput,
    ButtonPrimary,
    ButtonLoadingSpinner,
  },
  data() {
    return {
      data: {
        email: '',
        password: '',
      },
      showPassword: false,
      redirectQuery: this.$route.query.redirect || '/',
    }
  },
  computed: {
    ...mapState({
      loading: (state) => state.signin.loading,
    }),
    ...mapState({
      loginError: (state) => state.signin.loginError,
    }),
  },
  methods: {
    login() {
      this.$store.commit('signin/LOADING_STATE')
      this.$store.dispatch('signin/login', {
        data: this.data,
        redirect: this.redirectQuery,
      })
    },

    changeShowPasswordToTrue() {
      this.showPassword = true
    },

    changeShowPasswordToFalse() {
      this.showPassword = false
    },
  },
}
</script>
