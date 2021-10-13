<template>
  <div>
    <div class="py-4 px-6 bg-white flex items-center relative gap-6">
      <burger></burger>
      <div class="searchbar flex-grow">
        <form @submit.prevent="searchLocation">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon left-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            @click="searchLocation"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            v-model="search"
            type="text"
            placeholder="Enter an address or city or town"
            :class="[
              searchResults.length > 0 && search
                ? 'search-result-open !rounded-tr-lg !rounded-tl-lg !rounded-br-none !rounded-bl-none'
                : 'search',
            ]"
            @input="searchApi"
            @click.stop
          />
          <div
            v-if="searchResults.length > 0 && showResult && search"
            class="search-results"
          >
            <div
              v-for="(searchResult, index) in results"
              :key="index"
              class="search-result"
              @click="apiSearchResult(searchResult)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 h-7 mr-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span class="text-xl">{{ searchResult }}</span>
            </div>
          </div>
          <svg
            v-if="search"
            xmlns="http://www.w3.org/2000/svg"
            class="icon right-7"
            viewBox="0 0 20 20"
            fill="currentColor"
            @click="removeSearchText"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </form>
      </div>
    </div>
    <NavbarSlider></NavbarSlider>
  </div>
</template>

<script>
import axios from 'axios'
import burger from '~/components/defaultComponent/burger'
import NavbarSlider from '~/components/defaultComponent/navbarSlider.vue'
export default {
  components: {
    burger,
    NavbarSlider,
  },
  props: {
    showResult: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      search: this.$route.params.search || '',
      searchResults: [],
    }
  },
  computed: {
    results() {
      const result = this.searchResults
        .filter((element, index) => {
          return this.searchResults.indexOf(element) === index
        })
        .slice(0, 5)
      return result
    },
  },
  methods: {
    removeSearchText() {
      this.search = ''
    },

    searchLocation() {
      if (this.search) {
        this.$router.push({ params: { search: this.search } })
      }
    },

    apiSearchResult(result) {
      this.search = result
      this.searchResults = []
      this.$router.push({ params: { search: this.search } })
    },

    searchApi() {
      if (this.search) {
        if (this.$route.name === 'lands-search') {
          axios
            .get(`${process.env.baseUrl}/lands/?search=${this.search}`)
            .then((response) => {
              const result = []
              response.data.results.forEach((element) => {
                result.push(element.city)
              })
              this.searchResults = [...result]
            })
        } else if (this.$route.name === 'homes-search-rent') {
          axios
            .get(
              `${process.env.baseUrl}/lands/?search=${
                this.search
              }&home_status=${'For Rent'}`
            )
            .then((response) => {
              const result = []
              response.data.results.forEach((element) => {
                result.push(element.city)
              })
              this.searchResults = [...result]
            })
        } else {
          axios
            .get(
              `${process.env.baseUrl}/homes/?search=${
                this.search
              }&home_status=${'For Sale'}`
            )
            .then((response) => {
              const result = []
              response.data.results.forEach((element) => {
                result.push(element.city)
              })
              this.searchResults = [...result]
            })
        }
        console.log()
      } else {
        this.searchResults = []
      }
      this.$emit('showResult', this.showResult)
    },
  },
}
</script>

<style lang="postcss" scoped>
.search,
.search-result-open {
  @apply w-full py-6 pl-16 pr-4 rounded-full text-xl outline-none border-2 border-gray-100;
}
.searchbar {
  @apply relative;
}
.search-results {
  @apply w-full py-4 absolute z-20 left-2/4 top-full rounded-br-lg rounded-bl-lg shadow-lg bg-white -translate-x-2/4;
}

.search-result {
  @apply p-4 transition-all duration-300 cursor-pointer ease-in-out flex items-center hover:bg-gray-200;
}
.icon {
  @apply w-7 h-7 absolute top-2/4 -translate-y-2/4 z-10 cursor-pointer;
}
</style>
