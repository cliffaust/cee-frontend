<template>
  <div class="container-card noSelect">
    <nuxt-link
      :to="{ path: `/homeDetail/${home.slug}` }"
      tag="div"
      class="w-7/7 mx-auto cursor-pointer mb-16 relative shadow-md rounded-2xl"
      append
    >
      <div class="absolute top-4 left-8 z-10" @click.stop>
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
          @click.stop="changeUnlikeState"
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
        class="absolute py-1.5 px-2.5 top-6 text-xl right-8 z-10 bg-green-300 font-bold rounded-lg"
      >
        {{ home.home_status }}
      </div>
      <div class="h-88">
        <ImageSwiper :images="home_images"></ImageSwiper>
      </div>
      <div class="px-4 pb-6">
        <div class="text-3xl my-3 font-bold font-mono">
          GH¢{{ home.home_price.toLocaleString() }}
        </div>
        <div class="flex mb-3">
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
            <span class="text-xl">{{ home.number_bedrooms }}bd</span>
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
            <span class="text-xl">{{ home.number_bathrooms }}ba</span>
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
            <span v-if="home.home_size" class="text-xl"
              >{{ home.home_size }}sqft</span
            >
            <span v-else class="text-xl">No data</span>
          </div>
        </div>
        <div class="text-xl font-bold">{{ home.address }}</div>
      </div>
    </nuxt-link>

    <modal
      v-if="$route.name === 'saved-homes' && unsaveModal"
      @close="closeModal"
    >
      <div class="unsave-container">
        <div class="unsave-header-text">
          Are you sure you want to unsave this home?
        </div>
        <nuxt-link
          :to="{ path: `/homeDetail/${home.slug}` }"
          tag="div"
          class="card card-unsave"
          append
        >
          <div class="icon-container-save">
            <font-awesome-icon
              v-if="like"
              :icon="['fas', 'heart']"
              class="icon-like"
              @click.stop="changeUnlikeState"
            />
            <font-awesome-icon
              v-else
              :icon="['far', 'heart']"
              class="icon-unlike"
              @click.stop="changeLikeState"
            />
          </div>
          <div class="card__image">
            <ImageSwiper :images="home_images"></ImageSwiper>
          </div>
          <div class="card__price">GH¢{{ home.home_price }}</div>
          <div class="card__features">
            <div class="icon-container">
              <font-awesome-icon :icon="['fas', 'bed']" class="icon" />
              <span class="text">{{ home.number_bedrooms }}bd</span>
            </div>
            <div class="icon-container">
              <font-awesome-icon :icon="['fas', 'bath']" class="icon" />
              <span class="text">{{ home.number_bathrooms }}ba</span>
            </div>
            <div class="icon-container">
              <font-awesome-icon :icon="['fas', 'crop-alt']" class="icon" />
              <span v-if="home.home_size" class="text"
                >{{ home.home_size }}sqft</span
              >
              <span v-else class="text">No data</span>
            </div>
          </div>
          <div class="card__address">{{ home.address }}</div>
        </nuxt-link>
        <div class="btn-cancel-unsave">
          <baseButton button-class="btn-open" @click="closeModal"
            >Cancel</baseButton
          >
          <baseButton button-class="btn-secondary" @click="sendUnsaveRequest"
            >Unsave</baseButton
          >
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import axios from 'axios'
import Cookies from 'js-cookie'
import modal from '~/components/defaultComponent/modal'
import baseButton from '~/components/defaultComponent/baseButton'
import ImageSwiper from '~/components/defaultComponent/ImageSwiper'
import saveListing from '~/mixins/saveListing'
export default {
  components: {
    ImageSwiper,
    modal,
    baseButton,
  },
  mixins: [saveListing],
  props: {
    home: {
      type: [Array, Object],
      required: true,
    },
  },
  data() {
    return {
      like: this.home.has_user_saved,
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
      axios
        .delete(`${process.env.baseUrl}/homes/${this.home.id}/save-like/`, {
          headers: {
            Authorization: 'Token ' + Cookies.get('token'),
          },
        })
        .then((response) => {
          location.reload()
        })
    },
    closeModal() {
      this.unsaveModal = false
    },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  width: 1.6rem;
  height: 1.6rem;
  color: inherit;
}

.icon-container-save {
  padding: 1rem;
}
.icon-unlike {
  width: 2.6rem;
  height: 2.6rem;
  color: #fff;
  z-index: 100;
}
.icon-like {
  width: 2.6rem;
  height: 2.6rem;
  color: #e63946;
  z-index: 100;
}

.placeholder-container {
  width: 32rem;
  margin: 0 auto 0 auto;
}

@media screen and (min-width: 500px) {
  .card {
    width: 45rem;
  }
}

.card-unsave {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.unsave-container {
  margin-top: 5rem;
}

.unsave-header-text {
  font-size: 2.2rem;
  text-align: center;
  font-weight: 500;
}

.btn-cancel-unsave {
  display: flex;
  justify-content: space-between;
}
</style>
