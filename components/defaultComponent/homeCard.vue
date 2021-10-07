<template>
  <div class="container-card noSelect">
    <nuxt-link
      :to="{ path: `/homeDetail/${home.slug}` }"
      tag="div"
      class="card"
      append
    >
      <div class="icon-container-save" @click.stop>
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
        <ImageSwiper :images="home.home_images"></ImageSwiper>
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
            <ImageSwiper :images="home.home_images"></ImageSwiper>
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
.card {
  width: 32rem;
  cursor: pointer;
  margin: 4rem auto;
  position: relative;
  .icon-container-save {
    position: absolute;
    top: 4px;
    left: 8px;
    z-index: 10;
    .icon {
      width: 26px;
      height: 26px;
      color: #f4f4f4;
    }
  }
  &__image {
    height: 22rem;
  }
  &:first-child {
    margin: 2rem auto 4rem auto;
  }
  &__price {
    font-size: 2.5rem;
    font-weight: 500;
    margin: 0.8rem 0;
    font-family: $secondary-font-1;
  }

  &__address {
    font-size: 1.6rem;
    font-weight: 400;
    width: 20rem;
  }

  &__features {
    display: flex;
    margin-bottom: 0.8rem;
  }

  .icon-container {
    margin-right: 1rem;

    .text {
      font-size: 1.6rem;
    }
  }
}

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
