<template>
  <div>
    <navbar :show-result="showResult" @showResult="changeShowResult"></navbar>
    <div class="flex flex-col items-center mt-12">
      <div v-if="error.statusCode === 404">
        <pageNotFound></pageNotFound>
      </div>
      <h1 v-else class="text-xl">An error occurred</h1>
      <div v-if="error.statusCode === 404">
        <p class="text-xl">Sorry for that! This page doesn't exist</p>
        <p class="text-xl">
          But don't worry, you can go to the
          <NuxtLink to="/" class="primary-link">Home page</NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import pageNotFound from '~/components/defaultComponent/pageNotFound'
import navbar from '~/components/buyComponent/navbar'
export default {
  components: {
    pageNotFound,
    navbar,
  },
  layout: 'error',

  props: {
    error: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      showResult: true,
    }
  },
  head() {
    return {
      title: this.message,
    }
  },
  computed: {
    message() {
      return this.error.message
    },
  },
  methods: {
    changeShowResult() {
      this.showResult = true
    },
  },
}
</script>
