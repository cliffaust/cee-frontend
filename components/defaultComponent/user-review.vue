<template>
  <div>
    <div class="flex items-center">
      <div class="mr-2">
        <img
          :src="review.profile_pic"
          class="rounded-full w-12 h-12 object-cover"
          alt="Profile Pic"
        />
      </div>
      <div>
        <div class="text-base font-bold">{{ review.name }}</div>
        <div class="text-sm font-light">
          {{ review.date_posted.split('-').join('/') }}
        </div>
        <StarRating :rating="review.rate" :font-size="15"></StarRating>
      </div>
    </div>
    <div class="text-sm mt-4">
      {{ review.message }}
    </div>

    <div class="flex items-center mt-2">
      <div class="text-xs text-bold text-blue-500">Was this hepful?</div>

      <div class="ml-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from '~/components/defaultComponent/star-rating'
export default {
  components: {
    StarRating,
  },

  props: {
    review: {
      type: [Array, Object],
      required: true,
    },
  },
}
</script>
