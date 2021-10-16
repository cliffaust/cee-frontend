<template>
  <div>
    <nuxt-link
      v-slot="{ href, navigate }"
      :to="{ path: `/homeDetail/${home.slug}` }"
      append
      custom
    >
      <div
        :href="href"
        class="w-7/7 mx-auto cursor-pointer mb-6 relative shadow-md rounded-xl"
        @click="navigate"
      >
        <div class="absolute top-2 left-4 z-10" @click.stop>
          <svg
            v-if="like"
            width="28px"
            height="28px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#e63946"
            @click.stop="changeLikeState"
          >
            <path
              fill-rule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clip-rule="evenodd"
            />
          </svg>
          <svg
            v-else
            width="28px"
            height="28px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
            @click.stop="changeUnLikeState"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
        <div
          class="absolute py-1 px-1.5 top-3 text-sm right-4 z-10 bg-green-300 font-bold rounded-md"
        >
          {{ home.home_status }}
        </div>
        <div class="h-56">
          <ImageSwiper :images="home_images"></ImageSwiper>
        </div>
        <div class="px-2 pb-3">
          <div class="text-lg my-2 font-bold font-mono">
            GH¢{{ home.home_price.toLocaleString() }}
          </div>
          <div class="flex mb-2">
            <div class="mr-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6"></path>
                <circle cx="7" cy="10" r="1"></circle>
              </svg>
              <span class="text-sm">{{ home.number_bedrooms }}bd</span>
            </div>
            <div class="mr-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7"
                ></path>
                <path d="M11 13v2m0 3v2m4 -5v2m0 3v2"></path>
              </svg>
              <span class="text-sm">{{ home.number_bathrooms }}ba</span>
            </div>
            <div class="mr-4 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M8 4h10a2 2 0 0 1 2 2v10m-.584 3.412a1.994 1.994 0 0 1 -1.416 .588h-12a2 2 0 0 1 -2 -2v-12c0 -.552 .224 -1.052 .586 -1.414"
                ></path>
                <path d="M3 3l18 18"></path>
              </svg>
              <span v-if="home.home_size" class="text-sm"
                >{{ home.home_size }}sqft</span
              >
              <span v-else class="text-sm">No data</span>
            </div>
          </div>
          <div class="text-sm font-bold">{{ home.address }}</div>
          <ButtonPrimary
            v-if="$route.name === 'saved-homes'"
            class="!py-2 !px-5 text-sm mt-4 bg-red-400 ml-auto"
            @click="sendUnsaveRequest"
            >Unsave</ButtonPrimary
          >
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie'
import ButtonPrimary from '~/components/defaultComponent/button-primary.vue'
import ImageSwiper from '~/components/defaultComponent/ImageSwiper'
import saveListing from '~/mixins/saveListing'
export default {
  components: {
    ImageSwiper,
    ButtonPrimary,
  },
  mixins: [saveListing],
  props: {
    home: {
      type: [Array, Object],
      required: true,
    },
    saveHomeId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      like: this.home.has_user_liked,
      unsaveModal: false,
      home_images: [],
    }
  },
  async mounted() {
    try {
      const { data } = await axios.get(
        `${process.env.baseUrl}/homes/${this.home.slug}/home-images/`
      )
      this.home_images = [
        { home_image: this.home.cover_image },
        ...data.results,
      ]
    } catch (error) {
      console.log(error.response)
    }
  },
  methods: {
    sendUnsaveRequest() {
      if (Cookies.get('token')) {
        axios
          .delete(
            `${process.env.baseUrl}/user-saved-homes/${this.saveHomeId}/`,
            {
              headers: {
                Authorization: 'Token ' + Cookies.get('token'),
              },
            }
          )
          .then((response) => {
            location.reload()
          })
      } else if (this.$store.state.saved_homes_in_cookies) {
        let homes = this.$store.state.saved_homes_in_cookies
        homes = JSON.parse(decodeURIComponent(homes))

        const newHomes = homes.filter((el) => el.slug !== this.home.slug)

        Cookies.set('homes', JSON.stringify(newHomes))

        location.reload()
      }
    },
    closeModal() {
      this.unsaveModal = false
    },
  },
}
</script>
