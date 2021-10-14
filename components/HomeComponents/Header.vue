<template>
  <div class="w-full">
    <navbar @showUserOptions="showUserOptions"></navbar>
    <div class="h-500 bg-header-image relative bg-center bg-cover">
      <h1
        class="text-6xl font-standard-tt absolute text-center w-2/8 left-2/4 top-1/3 -translate-y-2/4 -translate-x-2/4"
      >
        Your path to the perfect
        <span class="secondary-heading before:w-32 !text-5xl">home</span>
      </h1>
      <div class="options">
        <p
          :class="[
            options.buy ? 'option-new option-new-tooltip' : 'option-old',
          ]"
          @click="buy"
        >
          Buy
        </p>
        <p
          :class="[
            options.rent ? 'option-new option-new-tooltip' : 'option-old',
          ]"
          @click="rent"
        >
          Rent
        </p>
        <p
          :class="[
            options.land ? 'option-new option-new-tooltip' : 'option-old',
          ]"
          @click="land"
        >
          Land
        </p>
      </div>

      <div class="searchbar">
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
                ? 'search-result-open !rounded-tr-lg !rounded-tl-lg !rounded-br-none !rounded-bl-none !border-gray-100 !border-2'
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
                class="w-8 h-8 mr-4"
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
            class="icon right-4"
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
  </div>
</template>

<script>
import navbar from '~/components/defaultComponent/defaultNavbar'
export default {
  components: {
    navbar,
  },

  props: {
    showResult: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      search: '',
      options: {
        buy: true,
        rent: false,
        land: false,
      },

      searchResults: [],

      optionState: 'buy',
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

    showUserOptions() {
      this.$emit('showOptionsMethod')
    },

    buy() {
      this.options.buy = true
      this.options.rent = false
      this.options.land = false
      this.optionState = 'buy'
    },

    rent() {
      this.options.rent = true
      this.options.buy = false
      this.options.land = false
      this.optionState = 'rent'
    },

    land() {
      this.options.land = true
      this.options.buy = false
      this.options.rent = false
      this.optionState = 'land'
    },

    searchLocation() {
      if (this.search && this.optionState === 'buy') {
        this.$router.push(`homes/${this.search}/${this.optionState}`)
      } else if (this.search && this.optionState === 'rent') {
        this.$router.push(`homes/${this.search}/${this.optionState}`)
      } else if (this.search && this.optionState === 'land') {
        this.$router.push(`lands/${this.search}`)
      }
    },

    apiSearchResult(result) {
      this.search = result
      this.searchResults = []
      if (this.optionState === 'buy') {
        this.$router.push(`homes/${result}/${this.optionState}`)
      } else if (this.optionState === 'rent') {
        this.$router.push(`homes/${result}/${this.optionState}`)
      } else if (this.optionState === 'land') {
        this.$router.push(`lands/${result}`)
      }
    },

    searchApi() {
      if (this.search) {
        if (this.optionState === 'land') {
          this.$axios
            .get(`${process.env.baseUrl}/lands/?search=${this.search}`)
            .then((response) => {
              const result = []
              response.data.results.forEach((element) => {
                result.push(element.city)
              })
              this.searchResults = [...result]
            })
        } else if (this.optionState === 'rent') {
          this.$axios
            .get(
              `${process.env.baseUrl}/homes/?search=${
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
          this.$axios
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
      } else {
        this.searchResults = []
      }
      this.$emit('showResult', this.showResult)
    },
  },
}
</script>

<style lang="postcss" scoped>
.options {
  @apply absolute left-2/4 top-2/4 flex -translate-y-2/4 -translate-x-2/4 bg-white rounded-full;
}

.option-old {
  @apply py-4 px-9 text-xl font-bold rounded-full hover:bg-gray-200 transition-all duration-300 cursor-pointer ease-in-out;
}

.option-new {
  @apply py-4 px-9 text-xl font-bold relative cursor-pointer rounded-full bg-primary-darkgray text-white;
}

.searchbar {
  @apply absolute left-2/4 top-2/3 -translate-y-2/4 -translate-x-2/4 w-11/12;
}

.search,
.search-result-open {
  @apply w-full py-6 pl-20 pr-4 rounded-full text-xl outline-none;
}

.icon {
  @apply w-8 h-8 absolute top-2/4 -translate-y-2/4 z-10 cursor-pointer;
}

.search-results {
  @apply w-full py-4 absolute left-2/4 top-full rounded-br-lg rounded-bl-lg shadow-lg bg-white -translate-x-2/4;
}

.search-result {
  @apply p-4 transition-all duration-300 cursor-pointer ease-in-out flex items-center hover:bg-gray-200;
}

.option-new-tooltip {
  &::before {
    content: '';
    border-left: 1.2rem solid transparent;
    border-right: 1.2rem solid transparent;
    border-top: 1.2rem solid #3d405b;
    border-bottom: 1.2rem solid transparent;
    position: absolute;
    bottom: -50%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
