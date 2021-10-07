<template>
  <div>
    <navbar :show-result="showResult" @showResult="changeShowResult"></navbar>
    <div class="error-container">
      <div v-if="error.statusCode === 404" class="image-container">
        <pageNotFound></pageNotFound>
      </div>
      <h1 v-else class="text-1">An error occurred</h1>
      <div v-if="error.statusCode === 404">
        <p class="text-1">Sorry for that! This page doesn't exist</p>
        <p class="text-2">
          But don't worry, you can go to the
          <NuxtLink to="/" class="home-link">Home page</NuxtLink>
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

<style lang="scss" scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  .text-1,
  .text-2 {
    font-size: 1.6rem;
  }

  .image-container {
    margin-bottom: 20px;
  }

  .home-link {
    font-size: 1.6rem;
    margin: 4rem auto 0 auto;
    text-decoration: none;
    padding: 0.4rem 0;
    font-weight: 700;
    color: inherit;
    position: relative;

    &::after {
      content: '';
      width: 100%;
      height: 3px;
      background-color: #fca21146;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }

    &::before {
      content: '';
      width: 0%;
      height: 3px;
      background-color: #fca311;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      transition: 0.3s ease;
    }

    &:hover::before {
      width: 100%;
    }
  }
}
</style>
