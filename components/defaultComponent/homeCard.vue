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
        <div
          class="absolute flex items-center gap-3 top-2 left-4 z-10"
          @click.stop
        >
          <svg
            v-if="like"
            width="28px"
            height="28px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#e63946"
            @click.prevent="changeLikeState"
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
            @click.prevent="changeUnLikeState"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <svg
            v-if="$route.name === 'saved-homes'"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
            @click.prevent="sendUnsaveRequest"
          >
            <defs />
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Artboard-4"
                transform="translate(-224.000000, -159.000000)"
              >
                <g id="25" transform="translate(224.000000, 159.000000)">
                  <path
                    id="Path-296"
                    d="M5,7 L5,20.0081158 C5,21.1082031 5.89706013,22 7.00585866,22 L16.9941413,22 C18.1019465,22 19,21.1066027 19,20.0081158 L19,7"
                    stroke="#e63946"
                    stroke-width="2"
                  />
                  <rect
                    id="Rectangle-424"
                    fill="#e63946"
                    x="2"
                    y="4"
                    width="20"
                    height="2"
                    rx="1"
                  />
                  <path
                    id="Combined-Shape"
                    d="M9,10.9970301 C9,10.4463856 9.44386482,10 10,10 C10.5522847,10 11,10.4530363 11,10.9970301 L11,17.0029699 C11,17.5536144 10.5561352,18 10,18 C9.44771525,18 9,17.5469637 9,17.0029699 L9,10.9970301 Z M13,10.9970301 C13,10.4463856 13.4438648,10 14,10 C14.5522847,10 15,10.4530363 15,10.9970301 L15,17.0029699 C15,17.5536144 14.5561352,18 14,18 C13.4477153,18 13,17.5469637 13,17.0029699 L13,10.9970301 Z"
                    fill="#e63946"
                  />
                  <path
                    id="Path-33"
                    d="M9,5 L9,2.99895656 C9,2.44724809 9.45097518,2 9.99077797,2 L14.009222,2 C14.5564136,2 15,2.44266033 15,2.99895656 L15,5"
                    stroke="#e63946"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </g>
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
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie'
import ImageSwiper from '~/components/defaultComponent/ImageSwiper'
import saveListing from '~/mixins/saveListing'
export default {
  components: {
    ImageSwiper,
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
