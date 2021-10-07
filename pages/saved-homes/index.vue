<template>
  <div
    :class="[
      {
        'main-container': unsaveModal,
      },
    ]"
    @click="showOptionsMethod"
  >
    <navbar
      :show-options="showOptions"
      @showUserOptions="showUserOptions"
    ></navbar>
    <div class="saved-content">
      <div class="header-text">Saved Homes ({{ saved_homes.length }})</div>

      <div class="sort-container">
        <div class="sort" @click.stop="showSort = !showSort">
          <font-awesome-icon
            :icon="['fas', 'sort-amount-down-alt']"
            class="icon"
          />
          <span class="text">Sort</span>
        </div>
        <div v-if="showSort" class="sort-options">
          <div
            :class="[
              $route.query.ordering === '-date_posted'
                ? 'selected-sort'
                : 'option',
            ]"
            @click="sortNewest"
          >
            Newest
          </div>
          <div
            :class="[
              $route.query.ordering === '-home_price'
                ? 'selected-sort'
                : 'option',
            ]"
            @click="sortPriceHigh"
          >
            Price(High to Low)
          </div>
          <div
            :class="[
              $route.query.ordering === 'home_price'
                ? 'selected-sort'
                : 'option',
            ]"
            @click="sortPriceLow"
          >
            Price(Low to High)
          </div>
          <div
            :class="[
              $route.query.ordering === '-number_bedrooms'
                ? 'selected-sort'
                : 'option',
            ]"
            @click="sortBedroom"
          >
            Bedrooms
          </div>
          <div
            :class="[
              $route.query.ordering === '-number_bathrooms'
                ? 'selected-sort'
                : 'option',
            ]"
            @click="sortBathroom"
          >
            Bathrooms
          </div>
          <div
            :class="[
              $route.query.ordering === '-home_size'
                ? 'selected-sort'
                : 'option',
            ]"
            class="option"
            @click="sortHomeSize"
          >
            Home Size
          </div>
        </div>
      </div>
      <template v-if="$fetchState.pending">
        <div v-for="i in range(4)" :key="i" class="placeholder-container">
          <SkeletonLoader></SkeletonLoader>
        </div>
      </template>
      <homeCard
        v-for="home in saved_homes"
        v-else
        :key="home.id"
        :home="home"
        @showUnsaveModal="showUnsaveModal"
      ></homeCard>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import Cookies from 'js-cookies'
import { mapState } from 'vuex'
import navbar from '~/components/defaultComponent/defaultNavbar'
import homeCard from '~/components/defaultComponent/homeCard'
import skeletonLoader from '~/components/defaultComponent/skeletonLoader'
export default {
  components: {
    navbar,
    homeCard,
    skeletonLoader,
  },
  middleware: ['checkUser'],
  data() {
    return {
      showOptions: false,
      showSort: false,
      unsaveModal: false,
    }
  },
  async fetch() {
    const { store, route } = this.$nuxt.context
    const { data } = await axios.get(
      `${process.env.baseUrl}/user-saved-homes/?ordering=${route.query.ordering}`,
      {
        headers: {
          Authorization: 'Token ' + store.state.signin.token,
        },
      }
    )
    store.commit('ADD_SAVED_HOMES', data.results)
  },
  computed: {
    ...mapState(['saved_homes']),
  },
  watch: {
    $route(to, from) {
      if (to !== from) {
        location.reload()
      }
    },
  },
  methods: {
    showUserOptions() {
      this.showOptions = !this.showOptions
    },
    showOptionsMethod() {
      this.showSort = false
      this.showOptions = false
    },
    showUnsaveModal() {
      this.unsaveModal = true
    },
    showResults() {
      this.showSort = false
    },
    range(start, stop, step) {
      if (typeof stop === 'undefined') {
        // one param defined
        stop = start
        start = 0
      }

      if (typeof step === 'undefined') {
        step = 1
      }

      if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return []
      }

      const result = []
      for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i)
      }

      return result
    },
    sortNewest() {
      this.$router.push({
        path: this.$router.currentRoute.fullPath,
        query: {
          ordering: '-date_posted',
        },
      })
    },
    sortPriceHigh() {
      this.$router.push({
        path: this.$router.currentRoute.fullPath,
        query: {
          ordering: '-home_price',
        },
      })
    },
    sortPriceLow() {
      this.$router.push({
        path: this.$router.currentRoute.fullPath,
        query: {
          ordering: 'home_price',
        },
      })
    },
    sortBedroom() {
      this.$router.push({
        path: this.$router.currentRoute.fullPath,
        query: {
          ordering: '-number_bedrooms',
        },
      })
    },
    sortBathroom() {
      this.$router.push({
        path: this.$router.currentRoute.fullPath,
        query: {
          ordering: '-number_bathrooms',
        },
      })
    },
    sortHomeSize() {
      this.$router.push({
        path: this.$router.currentRoute.fullPath,
        query: {
          ordering: '-home_size',
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.saved-content {
  margin-top: 1.5rem;
  .header-text {
    font-size: 2.8rem;
    font-weight: 500;
    margin-left: 1rem;
    font-family: $secondary-font-1;
  }
}

.sort-container {
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: $dark-gray;
    position: absolute;
    left: 0;
    right: 0;
    top: -10px;
  }

  .sort {
    padding: 0.8rem 1.5rem;
    border: 1px solid #002333;
    border-radius: 1rem;
    transition: 0.4s ease;
    display: flex;
    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    width: 80px;
    margin-top: 2rem;
    margin-left: 1rem;

    &:hover {
      background-color: #eee;
    }
    .text {
      font-size: 1.5rem;
    }
    .icon {
      width: 20px;
      height: 20px;
    }
  }
}

.main-container {
  height: 100%;
  width: 100%;
  position: fixed;
}

.sort-options {
  background-color: #fff;
  position: absolute;
  box-shadow: 0px 2px 18px 2px rgba(0, 0, 0, 0.4);
  width: 20rem;
  top: 50px;
  z-index: 100;

  &::before {
    content: '';
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid $color-white;
    position: absolute;
    top: -20px;
    left: 50px;
    transform: translateX(-50%);
  }

  .selected-sort {
    background-color: $primary-bgcolor-2;
    font-size: 1.6rem;
    padding: 1rem 0.8rem;
    cursor: pointer;
  }

  .option {
    font-size: 1.6rem;
    padding: 1rem 0.8rem;
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }
  }
}
</style>
