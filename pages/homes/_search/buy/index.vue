<template>
  <div :class="[{ 'main-container': showFilter }]" @click="showResults">
    <navbar :show-result="showResult" @showResult="changeShowResult"></navbar>
    <div class="filter-sort">
      <div class="filter" @click="showFilter = true">
        <font-awesome-icon :icon="['fas', 'filter']" class="icon" />
        <span class="text">Filter</span>
      </div>
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
    </div>
    <h1 class="search-result-text">
      search results for
      <span class="search-result-city">{{ $route.params.search }}</span>
    </h1>
    <template v-if="$fetchState.pending">
      <div v-for="i in range(8)" :key="i" class="placeholder-container">
        <SkeletonLoader></SkeletonLoader>
      </div>
    </template>
    <homeCard
      v-for="home in homes"
      v-else
      :key="home.id"
      :home="home"
    ></homeCard>
    <modal v-if="showFilter" @close="closeFilter">
      <filterResults></filterResults>
    </modal>

    <div class="btn-container">
      <baseButton button-class="btn-primary btn-rounded">
        <font-awesome-icon :icon="['fas', 'map']" class="map-icon" />
        Map</baseButton
      >
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import Cookies from 'js-cookies'
import { mapState } from 'vuex'
import navbar from '~/components/buyComponent/navbar'
import homeCard from '~/components/defaultComponent/homeCard'
import filter from '~/components/defaultComponent/filter'
import modal from '~/components/defaultComponent/modal'
import baseButton from '~/components/defaultComponent/baseButton'
import skeletonLoader from '~/components/defaultComponent/skeletonLoader'
export default {
  components: {
    navbar,
    homeCard,
    modal,
    baseButton,
    skeletonLoader,
    filterResults: filter,
  },
  data() {
    return {
      showResult: true,
      showFilter: false,
      showSort: false,
    }
  },

  async fetch() {
    const { store, params, route } = this.$nuxt.context
    if (store.state.signin.token) {
      const { data } = await axios.get(
        `${process.env.baseUrl}/homes/?search=${
          params.search
        }&home_status=${1}&min_price=${
          route.query.minPrice
            ? route.query.minPrice.replace(/[^0-9.]+/g, '')
            : ''
        }&max_price=${
          route.query.maxPrice
            ? route.query.maxPrice.replace(/[^0-9.]+/g, '')
            : ''
        }&min_bedroom_numbers=${
          route.query.beds ? route.query.beds.replace(/[^0-9.]+/g, '') : ''
        }&min_bathroom_numbers=${
          route.query.bathrooms
            ? route.query.bathrooms.replace(/[^0-9.]+/g, '')
            : ''
        }&min_home_size=${
          route.query.minLandSize
            ? route.query.minLandSize.replace(/[^0-9.]+/g, '')
            : ''
        }&max_home_size=${
          route.query.maxLandSize
            ? route.query.maxLandSize.replace(/[^0-9.]+/g, '')
            : ''
        }&min_year=${
          route.query.minYear
            ? route.query.minYear.replace(/[^0-9.]+/g, '')
            : ''
        }&max_year=${
          route.query.maxYear
            ? route.query.maxYear.replace(/[^0-9.]+/g, '')
            : ''
        }&ordering=${route.query.ordering}`,
        {
          headers: {
            Authorization: 'Token ' + store.state.signin.token,
          },
        }
      )
      store.commit('ADD_HOMES', data.results)
    } else {
      const { data } = await axios.get(
        `${process.env.baseUrl}/homes/?search=${
          params.search
        }&home_status=${1}&min_price=${
          route.query.minPrice
            ? route.query.minPrice.replace(/[^0-9.]+/g, '')
            : ''
        }&max_price=${
          route.query.maxPrice
            ? route.query.maxPrice.replace(/[^0-9.]+/g, '')
            : ''
        }&min_bedroom_numbers=${
          route.query.beds ? route.query.beds.replace(/[^0-9.]+/g, '') : ''
        }&min_bathroom_numbers=${
          route.query.bathrooms
            ? route.query.bathrooms.replace(/[^0-9.]+/g, '')
            : ''
        }&min_home_size=${
          route.query.minLandSize
            ? route.query.minLandSize.replace(/[^0-9.]+/g, '')
            : ''
        }&max_home_size=${
          route.query.maxLandSize
            ? route.query.maxLandSize.replace(/[^0-9.]+/g, '')
            : ''
        }&min_year=${
          route.query.minYear
            ? route.query.minYear.replace(/[^0-9.]+/g, '')
            : ''
        }&max_year=${
          route.query.maxYear
            ? route.query.maxYear.replace(/[^0-9.]+/g, '')
            : ''
        }&ordering=${route.query.ordering}`
      )
      store.commit('ADD_HOMES', data.results)
    }
  },
  computed: {
    ...mapState(['homes']),
  },

  watch: {
    $route(to, from) {
      if (to !== from) {
        location.reload()
      }
    },
  },

  methods: {
    changeShowResult() {
      this.showResult = true
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
    closeFilter() {
      this.showFilter = false
    },
    showResults() {
      if (this.showResult) {
        this.showResult = false
      }
      if (this.showSort) {
        this.showSort = false
      }
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
.search-result-text {
  font-size: 2.1rem;
  margin: 1rem 0 0 2rem;
  font-weight: 400;

  .search-result-city {
    font-weight: 700;
  }
}

.main-container {
  height: 100%;
  width: 100%;
  position: fixed;
}

.placeholder-container {
  width: 32rem;
  margin: 0 auto 0 auto;
}

.filter-sort {
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-left: 8px;

  .filter,
  .sort {
    padding: 0.8rem 1.5rem;
    border: 1px solid #002333;
    border-radius: 1rem;
    transition: 0.4s ease;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }
    .text {
      font-size: 1.3rem;
      text-transform: uppercase;
      font-weight: 600;
    }
    .icon {
      width: 20px;
      height: 20px;
      margin-right: 0.8rem;
    }
  }
  .filter {
    margin-right: 1rem;
  }
}

.sort-container {
  position: relative;
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

.btn-container {
  width: 14rem;
  position: fixed;
  bottom: 5px;
  margin-bottom: 0;
  margin-top: 0;
  left: 50%;
  transform: translate(-50%, -5px);
  z-index: 5;
}

.map-icon {
  width: 16px;
  height: 16px;
}
</style>
