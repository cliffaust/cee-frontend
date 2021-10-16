<template>
  <div @click="showOptionsMethod">
    <navbar
      :show-options="showOptions"
      @showUserOptions="showUserOptions"
    ></navbar>
    <div v-if="saved_homes.length > 0" class="mt-8 ml-4">
      <div class="font-bold text-sm font-mono">
        Saved Homes ({{ saved_homes.length }})
      </div>

      <div class="relative w-24 my-4 ml-4">
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
      <homeCard
        v-for="home in saved_homes"
        :key="home.id"
        :home="home.home"
        :save-home-id="home.id"
      ></homeCard>
      <div v-if="!$store.state.signin.token" class="mt-2 mb-2 text-sm px-5">
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
        <div class="font-bold text-base font-mono mt-4 ml-3">Saved Homes</div>
        <div class="flex flex-col mt-10 items-center">
          <div class="w-7/7 h-52">
            <img
              class="h-full w-full"
              src="~/assets/images/empty.png"
              alt="No Item in saves"
            />
          </div>
          <div class="text-center mt-8 text-sm font-bold">
            Nothing in here. Don't worry!
          </div>
          <a href="#" class="primary-link">check these homes out</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import navbar from '~/components/defaultComponent/defaultNavbar'
import homeCard from '~/components/defaultComponent/homeCard'
export default {
  components: {
    navbar,
    homeCard,
  },
  async asyncData({ store, route }) {
    if (store.state.signin.token) {
      const { data } = await axios.get(
        `${process.env.baseUrl}/user-saved-homes/?ordering=${route.query.ordering}`,
        {
          headers: {
            Authorization: 'Token ' + store.state.signin.token,
          },
        }
      )
      return {
        saved_homes: data.results,
      }
    } else if (store.state.saved_homes_in_cookies) {
      const homes = []

      let savedHomes = store.state.saved_homes_in_cookies
      savedHomes = JSON.parse(decodeURIComponent(savedHomes))

      for (const item of savedHomes) {
        await axios
          .get(`${process.env.baseUrl}/homes/${item.slug}/`)
          .then((res) => {
            homes.push({ home: res.data })
          })
          .catch((err) => {
            console.log(err.response)
          })
      }
      return {
        saved_homes: homes,
      }
    }
    return {
      saved_homes: [],
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

<style lang="postcss" scoped>
.selected-sort {
  @apply bg-primary-yellow text-sm py-2.5 px-4 cursor-pointer;
}

.option {
  @apply text-sm py-2.5 px-4 cursor-pointer hover:bg-gray-50;
}
</style>
