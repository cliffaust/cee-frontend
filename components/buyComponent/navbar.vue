<template>
  <div>
    <div class="header">
      <nuxt-link to="/" tag="div" class="logo">Cee</nuxt-link>
      <div class="searchbar">
        <form @submit.prevent="searchLocation">
          <font-awesome-icon
            :icon="['fas', 'search']"
            class="search-icon"
            @click="searchLocation"
          />
          <input
            v-model="search"
            type="text"
            placeholder="Enter an address or city or town"
            :class="[
              searchResults.length > 0 && search
                ? 'search-result-open'
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
              <font-awesome-icon
                :icon="['fas', 'map-marker-alt']"
                class="icon"
              />
              <span class="text">{{ searchResult }}</span>
            </div>
          </div>
          <font-awesome-icon
            v-if="search"
            :icon="['fas', 'times']"
            class="search-cancel"
            @click="removeSearchText"
          />
        </form>
      </div>
      <burger></burger>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import burger from '~/components/defaultComponent/burger'
export default {
  components: {
    burger,
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
      this.$router.push({ params: { search: this.search } })
    },

    searchApi() {
      if (this.search) {
        axios
          .get(`${process.env.baseUrl}/homes/?search=${this.search}`)
          .then((response) => {
            const result = []
            response.data.results.forEach((element) => {
              result.push(element.city)
            })
            this.searchResults = [...result]
          })
      } else {
        this.searchResults = []
      }
      this.$emit('showResult', this.showResult)
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  background-color: $primary-bgcolor-1;
  display: flex;
  padding: 1rem 1.5rem;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    font-size: 2.6rem;
    font-weight: 600;
    cursor: pointer;
    font-family: $secondary-font-2;
    color: $color-white;
  }
  .searchbar {
    width: 22rem;
    position: relative;
    .search,
    .search-result-open {
      width: 100%;
      padding: 1.2rem 1rem 1.2rem 5rem;
      border-radius: 50px;
      border: none;
      font-family: inherit;
      font-size: 1.6rem;

      &:focus {
        outline: none;
      }
    }

    .search-result-open {
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border: 1px solid #eee;
    }

    .search-icon {
      color: $primary-text-color;
      width: 17px;
      height: 17px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 15px;
      z-index: 5;
      cursor: pointer;
    }

    .search-cancel {
      color: $primary-text-color;
      width: 17px;
      height: 17px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 20px;
      z-index: 5;
      cursor: pointer;
    }
  }

  .search-results {
    width: 22rem;
    padding: 1rem 0;
    position: absolute;
    left: 50%;
    top: 100%;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    box-shadow: 1rem 0.5rem 1rem rgba(0, 0, 0, 0.105);
    transform: translateX(-50%);
    background-color: $color-white;
    z-index: 10;

    .search-result {
      display: flex;
      align-items: center;
      padding: 1rem;
      transition: 0.2s ease;
      cursor: pointer;

      .text {
        font-size: 1.6rem;
      }

      .icon {
        width: 28px;
        height: 28px;
        margin-right: 10px;
      }

      &:hover {
        background-color: $dark-gray;
      }
    }
  }
}

@media screen and (min-width: 500px) {
  .card {
    width: 30rem;
  }
}
</style>
