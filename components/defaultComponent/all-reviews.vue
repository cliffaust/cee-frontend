<template>
  <div :class="[showModal ? 'backdrop' : 'backdrop-not-active']" @click="close">
    <div
      :class="[
        showModal
          ? 'review-container translate-y-0'
          : 'review-container translate-y-full',
      ]"
      @click.stop
    >
      <div v-for="review in reviews" :key="review.id" class="user-review mt-2">
        <UserReview :review="review"></UserReview>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 absolute top-6 right-4 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        @click="close"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import UserReview from '~/components/defaultComponent/user-review'
export default {
  components: {
    UserReview,
  },
  props: {
    reviews: {
      type: [Object, Array],
      required: true,
    },

    showModal: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    close() {
      this.$emit('close')
    },

    beforeEnter(el) {
      el.style.bottom = 0
    },

    enter(el, done) {
      gsap.to(el, {
        bottom: 200,
        duration: 5,
        ease: 'back.out(10)',
        onComplete: done,
      })
    },
  },
}
</script>

<style lang="postcss" scoped>
.review-container {
  @apply h-4/5 fixed rounded-tl-xl bottom-0 transition-transform duration-300 ease-linear rounded-tr-xl z-20 px-5 py-8 bg-white overflow-y-scroll;
}

.backdrop {
  @apply fixed top-0 left-0 right-0 bottom-0 z-10 bg-black bg-opacity-70 transition duration-300 ease-in-out;
}

.backdrop-not-active {
  @apply fixed bottom-0 z-0 bg-black bg-opacity-0 transition duration-300 ease-in-out;
}
</style>
