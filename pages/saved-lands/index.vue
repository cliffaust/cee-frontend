<template>
  <div @click="showOptionsMethod">
    <navbar
      :show-options="showOptions"
      @showUserOptions="showUserOptions"
    ></navbar>
    <div v-if="saved_lands.length > 0" class="mt-8 ml-4">
      <div class="font-bold text-2xl font-mono">
        Saved Lands ({{ saved_lands.length }})
      </div>

      <div class="relative w-32 my-6 ml-6">
        <div
          class="py-4 px-6 flex items-center rounded-lg bg-gray-100 cursor-pointer"
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
          <span class="text-xl">Sort</span>
        </div>
        <div
          v-if="showSort"
          class="sort-options-tooltip w-80 z-30 top-16 overflow-hidden bg-white shadow-lg absolute rounded-bl-lg rounded-br-lg"
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
      <landCard
        v-for="land in saved_lands"
        :key="land.id"
        :land="land.land"
        :save-land-id="land.id"
      ></landCard>
      <div v-if="!$store.state.signin.token" class="mt-4 mb-4 text-xl px-8">
        You are currently not signed in. To save these items or see your
        previously saved items across devices,
        <nuxt-link
          :to="{ path: '/login', query: { redirect: `${$route.path}` } }"
          class="text-blue-500 font-bold"
          >sign in</nuxt-link
        >
      </div>
    </div>
    <div v-else>
      <div class="flex flex-col justify-between overflow-y-scroll">
        <div class="font-bold text-2xl font-mono mt-6 ml-4">Saved Lands</div>
        <div class="flex flex-col items-center">
          <div class="w-7/7 h-96">
            <img
              class="h-full w-full"
              src="~/assets/images/empty.png"
              alt="No Item in saves"
            />
          </div>
          <div class="text-center mt-8 text-xl font-bold">
            Nothing in here. Don't worry!
          </div>
          <a href="#" class="primary-link">check these lands out</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import navbar from '~/components/defaultComponent/defaultNavbar'
import landCard from '~/components/defaultComponent/landCard'
export default {
  components: {
    navbar,
    landCard,
  },
  async asyncData({ store, route }) {
    if (store.state.signin.token) {
      const { data } = await axios.get(
        `${process.env.baseUrl}/user-saved-lands/?ordering=${route.query.ordering}`,
        {
          headers: {
            Authorization: 'Token ' + store.state.signin.token,
          },
        }
      )
      return {
        saved_lands: data.results,
      }
    } else if (store.state.saved_lands_in_cookies) {
      const lands = []

      let savedLands = store.state.saved_lands_in_cookies
      savedLands = JSON.parse(decodeURIComponent(savedLands))

      for (const item of savedLands) {
        await axios
          .get(`${process.env.baseUrl}/lands/${item.slug}/`)
          .then((res) => {
            lands.push({ land: res.data })
          })
          .catch((err) => {
            console.log(err.response)
          })
      }
      return {
        saved_lands: lands,
      }
    }
    return {
      saved_lands: [],
    }
  },
  data() {
    return {
      showOptions: false,
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
    showUserOptions() {
      this.showOptions = !this.showOptions
    },
    showOptionsMethod() {
      this.showSort = false
      this.showOptions = false
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
  @apply bg-primary-yellow text-xl py-4 px-3 cursor-pointer;
}

.option {
  @apply text-xl py-4 px-6 cursor-pointer hover:bg-gray-50;
}

.sort-options-tooltip {
  &::before {
    content: '';
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid #fff;
    position: absolute;
    top: -20px;
    left: 50px;
    transform: translateX(-50%);
  }
}
</style>
