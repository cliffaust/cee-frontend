<template>
  <div
    :class="[{ 'h-screen overflow-hidden': showFilter }]"
    @click="showResults"
  >
    <navbar :show-result="showResult" @showResult="changeShowResult"></navbar>
    <div class="flex items-center my-4 ml-6">
      <div
        class="py-2.5 px-3 flex items-center rounded-md mr-4 bg-gray-100 cursor-pointer"
        @click="showFilter = true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="mr-4"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
        >
          <title>filter</title>
          <desc>Created with Sketch.</desc>
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
              transform="translate(-444.000000, -247.000000)"
              fill="#333333"
            >
              <g id="70" transform="translate(444.000000, 247.000000)">
                <path
                  id="Combined-Shape"
                  d="M8.82929429,17 L20.0066023,17 C20.5552407,17 21,17.4438648 21,18 C21,18.5522847 20.5550537,19 20.0066023,19 L8.82929429,19 C8.41745788,20.1651924 7.30621883,21 6,21 C4.34314575,21 3,19.6568542 3,18 C3,16.3431458 4.34314575,15 6,15 C7.30621883,15 8.41745788,15.8348076 8.82929429,17 Z M9.17070571,13 L3.99339768,13 C3.44475929,13 3,12.5561352 3,12 C3,11.4477153 3.44494629,11 3.99339768,11 L9.17070571,11 C9.58254212,9.83480763 10.6937812,9 12,9 C13.3062188,9 14.4174579,9.83480763 14.8292943,11 L20.0066023,11 C20.5552407,11 21,11.4438648 21,12 C21,12.5522847 20.5550537,13 20.0066023,13 L14.8292943,13 C14.4174579,14.1651924 13.3062188,15 12,15 C10.6937812,15 9.58254212,14.1651924 9.17070571,13 Z M15.1659641,6.98648118 C15.1124525,6.99537358 15.05751,7 15.0014977,7 L3.99850233,7 C3.44704472,7 3,6.55613518 3,6 C3,5.44771525 3.44748943,5 3.99850233,5 L15.0014977,5 C15.0575314,5 15.1124871,5.00458274 15.1660053,5.01340035 C15.5740343,3.84121344 16.6887792,3 18,3 C19.6568542,3 21,4.34314575 21,6 C21,7.65685425 19.6568542,9 18,9 C16.688735,9 15.5739592,8.15872988 15.1659641,6.98648118 Z M18,7 C18.5522847,7 19,6.55228475 19,6 C19,5.44771525 18.5522847,5 18,5 C17.4477153,5 17,5.44771525 17,6 C17,6.55228475 17.4477153,7 18,7 Z M12,13 C12.5522847,13 13,12.5522847 13,12 C13,11.4477153 12.5522847,11 12,11 C11.4477153,11 11,11.4477153 11,12 C11,12.5522847 11.4477153,13 12,13 Z M6,19 C6.55228475,19 7,18.5522847 7,18 C7,17.4477153 6.55228475,17 6,17 C5.44771525,17 5,17.4477153 5,18 C5,18.5522847 5.44771525,19 6,19 Z"
                />
              </g>
            </g>
          </g>
        </svg>
        <span class="text-sm">Filter</span>
      </div>
      <div class="relative">
        <div
          class="py-2.5 px-3 flex items-center rounded-md bg-gray-100 cursor-pointer"
          @click.stop="showSort = !showSort"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mr-4"
            width="24px"
            height="24px"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
            />
          </svg>
          <span class="text-sm">Sort</span>
        </div>
        <div
          v-if="showSort"
          class="w-52 z-30 top-14 overflow-hidden bg-white shadow-md absolute rounded-bl-md rounded-br-md"
        >
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
              $route.query.ordering === '-land_price'
                ? 'selected-sort'
                : 'option',
            ]"
            @click="sortPriceHigh"
          >
            Price(High to Low)
          </div>
          <div
            :class="[
              $route.query.ordering === 'land_price'
                ? 'selected-sort'
                : 'option',
            ]"
            @click="sortPriceLow"
          >
            Price(Low to High)
          </div>
          <div
            :class="[
              $route.query.ordering === '-land_size'
                ? 'selected-sort'
                : 'option',
            ]"
            class="option"
            @click="sortLandSize"
          >
            Land Size
          </div>
        </div>
      </div>
    </div>
    <h1 class="text-lg font-mono mt-4 ml-5 mb-5">
      search results for
      <span class="font-bold">{{ $route.params.search }}</span>
    </h1>
    <landCard v-for="land in lands" :key="land.id" :land="land"></landCard>
    <modal v-if="showFilter" @close="closeFilter">
      <filterResults></filterResults>
    </modal>
    <div
      class="w-40 fixed bottom-2 left-2/4 -translate-x-2/4 -translate-y-2/4 z-20"
    >
      <ButtonPrimary
        class="flex items-center justify-center gap-4 !py-2.5 w-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
        <span class="text-sm">Map</span>
      </ButtonPrimary>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import axios from 'axios'
import navbar from '~/components/buyComponent/navbar'
import landCard from '~/components/defaultComponent/landCard'
import filter from '~/components/defaultComponent/landFilter.vue'
import modal from '~/components/defaultComponent/modal'
import ButtonPrimary from '~/components/defaultComponent/button-primary.vue'
import Footer from '~/components/defaultComponent/Footer.vue'
export default {
  components: {
    navbar,
    landCard,
    modal,
    ButtonPrimary,
    Footer,
    filterResults: filter,
  },
  async asyncData({ store, params, route }) {
    if (store.state.signin.token) {
      const { data } = await axios.get(
        `${process.env.baseUrl}/lands/?search=${params.search}&min_price=${
          route.query.minPrice
            ? route.query.minPrice.replace(/[^0-9.]+/g, '')
            : ''
        }&max_price=${
          route.query.maxPrice
            ? route.query.maxPrice.replace(/[^0-9.]+/g, '')
            : ''
        }&min_land_size=${
          route.query.minLandSize
            ? route.query.minLandSize.replace(/[^0-9.]+/g, '')
            : ''
        }&max_land_size=${
          route.query.maxLandSize
            ? route.query.maxLandSize.replace(/[^0-9.]+/g, '')
            : ''
        }&ordering=${route.query.ordering}`,
        {
          headers: {
            Authorization: 'Token ' + store.state.signin.token,
          },
        }
      )
      return {
        lands: data.results,
      }
    } else {
      const { data } = await axios.get(
        `${process.env.baseUrl}/lands/?search=${params.search}&min_price=${
          route.query.minPrice
            ? route.query.minPrice.replace(/[^0-9.]+/g, '')
            : ''
        }&max_price=${
          route.query.maxPrice
            ? route.query.maxPrice.replace(/[^0-9.]+/g, '')
            : ''
        }&min_land_size=${
          route.query.minLandSize
            ? route.query.minLandSize.replace(/[^0-9.]+/g, '')
            : ''
        }&max_land_size=${
          route.query.maxLandSize
            ? route.query.maxLandSize.replace(/[^0-9.]+/g, '')
            : ''
        }&ordering=${route.query.ordering}`
      )
      return {
        lands: data.results,
      }
    }
  },
  data() {
    return {
      showResult: true,
      showFilter: false,
      showSort: false,
    }
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
          ordering: '-land_price',
        },
      })
    },
    sortPriceLow() {
      this.$router.push({
        path: this.$router.currentRoute.fullPath,
        query: {
          ordering: 'land_price',
        },
      })
    },
    sortLandSize() {
      this.$router.push({
        path: this.$router.currentRoute.fullPath,
        query: {
          ordering: '-land_size',
        },
      })
    },
  },
}
</script>

<style lang="postcss" scoped>
.selected-sort {
  @apply bg-primary-yellow text-sm py-2.5 px-4 cursor-pointer;
}

.option {
  @apply text-sm py-2.5 px-4 cursor-pointer hover:bg-gray-50;
}
</style>
