<template>
  <div class="container">
    <div class="home-status">
      <nuxt-link
        :to="{ path: `/homes/${this.$route.params.search}/buy/` }"
        tag="p"
        :class="[
          $route.name === 'homes-search-buy' ? 'option-new' : 'option-old',
        ]"
      >
        Buy
      </nuxt-link>
      <nuxt-link
        :to="{ path: `/homes/${this.$route.params.search}/rent/` }"
        tag="p"
        :class="[
          $route.name === 'homes-search-rent' ? 'option-new' : 'option-old',
        ]"
      >
        Rent
      </nuxt-link>
      <nuxt-link
        :to="{ path: `/homes/${this.$route.params.search}/land/` }"
        tag="p"
        :class="[
          $route.name === 'homes-search-land' ? 'option-new' : 'option-old',
        ]"
      >
        Land
      </nuxt-link>
    </div>
    <div class="price">
      <div class="text">Price</div>
      <div class="content">
        <div class="min-price">
          <baseSelect
            v-model="selectedMinPrice"
            label="Min Price"
            :options="minPrices"
          ></baseSelect>
        </div>
        <div class="dash-line">&#8211;</div>
        <div class="max-price">
          <baseSelect
            v-model="selectedMaxPrice"
            label="Max Price"
            :options="maxPrices"
          ></baseSelect>
        </div>
      </div>
    </div>
    <div class="beds">
      <div class="text">Beds</div>
      <div class="selects">
        <div
          :class="[!selectedBed ? 'bed-select-new' : 'bed-select-old']"
          @click="bed('')"
        >
          Any
        </div>
        <div
          :class="[selectedBed === '1+' ? 'bed-select-new' : 'bed-select-old']"
          @click="bed('1+')"
        >
          1+
        </div>
        <div
          :class="[selectedBed === '2+' ? 'bed-select-new' : 'bed-select-old']"
          @click="bed('2+')"
        >
          2+
        </div>
        <div
          :class="[selectedBed === '3+' ? 'bed-select-new' : 'bed-select-old']"
          @click="bed('3+')"
        >
          3+
        </div>
        <div
          :class="[selectedBed === '4+' ? 'bed-select-new' : 'bed-select-old']"
          @click="bed('4+')"
        >
          4+
        </div>
      </div>
    </div>
    <div class="bathrooms">
      <div class="text">Bathrooms</div>
      <div class="selects">
        <div
          class="bathroom-select"
          :class="[
            !selectedBathroom ? 'bathroom-select-new' : 'bathroom-select-old',
          ]"
          @click="bathroom('')"
        >
          Any
        </div>
        <div
          class="bathroom-select"
          :class="[
            selectedBathroom === '1+'
              ? 'bathroom-select-new'
              : 'bathroom-select-old',
          ]"
          @click="bathroom('1+')"
        >
          1+
        </div>
        <div
          class="bathroom-select"
          :class="[
            selectedBathroom === '2+'
              ? 'bathroom-select-new'
              : 'bathroom-select-old',
          ]"
          @click="bathroom('2+')"
        >
          2+
        </div>
        <div
          class="bathroom-select"
          :class="[
            selectedBathroom === '3+'
              ? 'bathroom-select-new'
              : 'bathroom-select-old',
          ]"
          @click="bathroom('3+')"
        >
          3+
        </div>
        <div
          class="bathroom-select"
          :class="[
            selectedBathroom === '4+'
              ? 'bathroom-select-new'
              : 'bathroom-select-old',
          ]"
          @click="bathroom('4+')"
        >
          4+
        </div>
      </div>
    </div>
    <div class="land-size">
      <div class="text">Land Space</div>
      <div class="content">
        <div class="min-land-size">
          <baseSelect
            v-model="selectedMinLandSize"
            label="Min Size"
            :options="minLandSizes"
          ></baseSelect>
        </div>
        <div class="dash-line">&#8211;</div>
        <div class="max-land-size">
          <baseSelect
            v-model="selectedMaxLandSize"
            label="Max Size"
            :options="maxLandSizes"
          ></baseSelect>
        </div>
      </div>
    </div>
    <div class="lot-size">
      <div class="text">Lot Size</div>
      <div class="content">
        <div class="min-lot-size">
          <baseSelect
            v-model="selectedMinLotSize"
            label="Min Size"
            :options="minLotSizes"
          ></baseSelect>
        </div>
        <div class="dash-line">&#8211;</div>
        <div class="max-lot-size">
          <baseSelect
            v-model="selectedMaxLotSize"
            label="Max Size"
            :options="maxLotSizes"
          ></baseSelect>
        </div>
      </div>
    </div>
    <div class="year-built">
      <div class="text">Year Built</div>
      <div class="content">
        <div class="min-year">
          <baseInput
            v-model="selectedMinYear"
            placeholder="Min Price"
            label="Min Year"
          ></baseInput>
        </div>
        <div class="dash-line">&#8211;</div>
        <div class="max-year">
          <baseInput
            v-model="selectedMaxYear"
            placeholder="Max Price"
            label="Max Year"
          ></baseInput>
        </div>
      </div>
    </div>
    <div class="btn-container">
      <div class="btn-reset" @click="reset">
        <baseButton button-class="btn-open">Reset</baseButton>
      </div>
      <div class="btn-done">
        <baseButton button-class="btn-open" @click="filter">Filter</baseButton>
      </div>
    </div>
    <!-- <div class="checkbox-container">
      <baseCheckBox v-model="ammenities" label="Air Condition"></baseCheckBox>
    </div> -->
  </div>
</template>

<script>
import baseSelect from '~/components/defaultComponent/baseSelect'
import baseButton from '~/components/defaultComponent/baseButton'
import baseInput from '~/components/defaultComponent/baseInput'
// import baseCheckBox from '~/components/defaultComponent/baseCheckBox'
export default {
  components: {
    baseSelect,
    baseButton,
    baseInput,
    // baseCheckBox,
  },
  data() {
    return {
      selectedMinLandSize: this.$route.query.minLandSize || 'Any Size',
      selectedMaxLandSize: this.$route.query.maxLandSize || 'Any Size',
      selectedMinLotSize: this.$route.query.minLotSize || 'Any Size',
      selectedMaxLotSize: this.$route.query.maxLotSize || 'Any Size',
      selectedMinYear: this.$route.query.minYear || '',
      selectedMaxYear: this.$route.query.maxYear || '',
      selectedMinPrice: this.$route.query.minPrice || 'Any Price',
      selectedMaxPrice: this.$route.query.maxPrice || 'Any Price',
      selectedBed: this.$route.query.beds || null,
      selectedBathroom: this.$route.query.bathrooms || null,
      minPrices: [
        'Any Price',
        'GH¢100',
        'GH¢200',
        'GH¢500',
        'GH¢1000',
        'GH¢1200',
        'GH¢1400',
        'GH¢1600',
        'GH¢1800',
        'GH¢2000',
        'GH¢3000',
        'GH¢4000',
        'GH¢5000',
      ],
      maxPrices: [
        'Any Price',
        'GH¢10000',
        'GH¢12000',
        'GH¢15000',
        'GH¢20000',
        'GH¢22000',
        'GH¢25000',
        'GH¢30000',
        'GH¢40000',
        'GH¢50000',
        'GH¢70000',
        'GH¢80000',
        'GH¢100000+',
      ],
      minLandSizes: [
        'Any Size',
        '500',
        '700',
        '1000',
        '1200',
        '2000',
        '2500',
        '3000',
        '3200',
        '4000',
      ],
      maxLandSizes: [
        'Any Size',
        '5000',
        '5500',
        '6000',
        '7000',
        '8000',
        '8500',
        '9000',
        '11000',
        '12000',
      ],

      minLotSizes: [
        'Any Size',
        '100',
        '200',
        '300',
        '500',
        '700',
        '1000',
        '1200',
        '1500',
      ],
      maxLotSizes: [
        'Any Size',
        '2000',
        '2200',
        '2500',
        '3000',
        '3500',
        '4000',
        '5000',
        '6000',
      ],
    }
  },
  watch: {
    $route(to, from) {
      if (to !== from) {
        location.reload()
      }
    },
  },
  // watch: {
  //   selectedMinPrice(value) {
  //     this.$router.push({
  //       query: {
  //         minPrice: value,
  //         maxPrice: this.$route.query.maxPrice,
  //         bathrooms: this.$route.query.bathrooms,
  //         beds: this.$route.query.beds,
  //         minLandSize: this.$route.query.minLandSize,
  //         maxLandSize: this.$route.query.maxLandSize,
  //         minLotSize: this.$route.query.minLotSize,
  //         maxLotSize: this.$route.query.maxLotSize,
  //         minYear: this.$route.query.minYear,
  //         maxYear: this.$route.query.maxYear,
  //       },
  //     })
  //   },
  //   selectedMaxPrice(value) {
  //     this.$router.push({
  //       query: {
  //         maxPrice: value,
  //         minPrice: this.$route.query.minPrice,
  //         bathrooms: this.$route.query.bathrooms,
  //         beds: this.$route.query.beds,
  //         minLandSize: this.$route.query.minLandSize,
  //         maxLandSize: this.$route.query.maxLandSize,
  //         minLotSize: this.$route.query.minLotSize,
  //         maxLotSize: this.$route.query.maxLotSize,
  //         minYear: this.$route.query.minYear,
  //         maxYear: this.$route.query.maxYear,
  //       },
  //     })
  //   },
  //   selectedMinLandSize(value) {
  //     this.$router.push({
  //       query: {
  //         maxPrice: this.$route.query.maxPrice,
  //         minPrice: this.$route.query.minPrice,
  //         bathrooms: this.$route.query.bathrooms,
  //         beds: this.$route.query.beds,
  //         minLandSize: value,
  //         maxLandSize: this.$route.query.maxLandSize,
  //         minLotSize: this.$route.query.minLotSize,
  //         maxLotSize: this.$route.query.maxLotSize,
  //         minYear: this.$route.query.minYear,
  //         maxYear: this.$route.query.maxYear,
  //       },
  //     })
  //   },
  //   selectedMaxLandSize(value) {
  //     this.$router.push({
  //       query: {
  //         maxPrice: this.$route.query.maxPrice,
  //         minPrice: this.$route.query.minPrice,
  //         bathrooms: this.$route.query.bathrooms,
  //         beds: this.$route.query.beds,
  //         minLandSize: this.$route.query.minLandSize,
  //         maxLandSize: value,
  //         minLotSize: this.$route.query.minLotSize,
  //         maxLotSize: this.$route.query.maxLotSize,
  //         minYear: this.$route.query.minYear,
  //         maxYear: this.$route.query.maxYear,
  //       },
  //     })
  //   },
  //   selectedMinLotSize(value) {
  //     this.$router.push({
  //       query: {
  //         maxPrice: this.$route.query.maxPrice,
  //         minPrice: this.$route.query.minPrice,
  //         bathrooms: this.$route.query.bathrooms,
  //         beds: this.$route.query.beds,
  //         minLandSize: this.$route.query.minLandSize,
  //         maxLandSize: this.$route.query.maxLandSize,
  //         minLotSize: value,
  //         maxLotSize: this.$route.query.maxLotSize,
  //         minYear: this.$route.query.minYear,
  //         maxYear: this.$route.query.maxYear,
  //       },
  //     })
  //   },
  //   selectedMaxLotSize(value) {
  //     this.$router.push({
  //       query: {
  //         maxPrice: this.$route.query.maxPrice,
  //         minPrice: this.$route.query.minPrice,
  //         bathrooms: this.$route.query.bathrooms,
  //         beds: this.$route.query.beds,
  //         minLandSize: this.$route.query.minLandSize,
  //         maxLandSize: this.$route.query.maxLandSize,
  //         minLotSize: this.$route.query.minLotSize,
  //         maxLotSize: value,
  //         minYear: this.$route.query.minYear,
  //         maxYear: this.$route.query.maxYear,
  //       },
  //     })
  //   },
  // },
  methods: {
    numFormatter(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'b'
      } else if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'm'
      } else if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k'
      }
      return num
    },

    bed(num) {
      // this.$router.push({
      //   query: {
      //     beds: num,
      //     bathrooms: this.$route.query.bathrooms,
      //     minPrice: this.$route.query.minPrice,
      //     maxPrice: this.$route.query.maxPrice,
      //     minLandSize: this.$route.query.minLandSize,
      //     maxLandSize: this.$route.query.maxLandSize,
      //     minLotSize: this.$route.query.minLotSize,
      //     maxLotSize: this.$route.query.maxLotSize,
      //     minYear: this.$route.query.minYear,
      //     maxYear: this.$route.query.maxYear,
      //   },
      // })
      this.selectedBed = num
    },
    bathroom(num) {
      // this.$router.push({
      //   query: {
      //     bathrooms: num,
      //     beds: this.$route.query.beds,
      //     minPrice: this.$route.query.minPrice,
      //     maxPrice: this.$route.query.maxPrice,
      //     minLandSize: this.$route.query.minLandSize,
      //     maxLandSize: this.$route.query.maxLandSize,
      //     minLotSize: this.$route.query.minLotSize,
      //     maxLotSize: this.$route.query.maxLotSize,
      //     minYear: this.$route.query.minYear,
      //     maxYear: this.$route.query.maxYear,
      //   },
      // })
      this.selectedBathroom = num
    },
    filter() {
      this.$router.push({
        path: this.$router.currentRoute.fullPath,
        query: {
          bathrooms: this.selectedBathroom,
          beds: this.selectedBed,
          minPrice: this.selectedMinPrice,
          maxPrice: this.selectedMaxPrice,
          minLandSize: this.selectedMinLandSize,
          maxLandSize: this.selectedMaxLandSize,
          minLotSize: this.selectedMinLotSize,
          maxLotSize: this.selectedMaxLotSize,
          minYear: this.selectedMinYear,
          maxYear: this.selectedMaxYear,
        },
      })
      console.log(this.$router.currentRoute)
    },
    reset() {
      this.$router.push({
        path: 'homes/',
        query: {
          bathrooms: null,
          beds: null,
          minPrice: null,
          maxPrice: null,
          minLandSize: null,
          maxLandSize: null,
          minLotSize: null,
          maxLotSize: null,
          minYear: null,
          maxYear: null,
        },
      })
      this.selectedMinLandSize = 'Any Size'
      this.selectedMaxLandSize = 'Any Size'
      this.selectedMinLotSize = 'Any Size'
      this.selectedMaxLotSize = 'Any Size'
      this.selectedMinYear = ''
      this.selectedMaxYear = ''
      this.selectedMinPrice = 'Any Price'
      this.selectedMaxPrice = 'Any Price'
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 2.5rem;
  .home-status {
    display: flex;
    align-items: center;
    justify-content: center;

    .option-old {
      padding: 1rem 2.2rem;
      font-size: 1.6rem;
      font-weight: 700;
      border-radius: 8px;
      transition: 0.4s ease;
      margin-right: 1rem;
      cursor: pointer;

      &:hover {
        background-color: $dark-gray;
      }
    }

    .option {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }

    .option-new {
      padding: 1rem 2.2rem;
      font-size: 1.6rem;
      font-weight: 700;
      margin-right: 1rem;
      background-color: $primary-bgcolor-2;
      border-radius: 8px;
      cursor: pointer;
    }
  }
}

.beds,
.bathrooms {
  margin-top: 1.8rem;
  .text {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .selects {
    display: flex;
    justify-content: center;

    .bathroom-select-new,
    .bed-select-new {
      padding: 1rem 2.2rem;
      font-size: 1.6rem;
      font-weight: 700;
      background-color: $primary-bgcolor-2;
      border-radius: 8px;
      margin-right: 1rem;
      cursor: pointer;
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }

    .bed-select-old,
    .bathroom-select-old {
      padding: 1rem 2.2rem;
      font-size: 1.6rem;
      font-weight: 700;
      border-radius: 8px;
      transition: 0.4s ease;
      margin-right: 1rem;
      cursor: pointer;

      &:hover {
        background-color: $dark-gray;
      }

      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
}
.price,
.land-size,
.lot-size,
.year-built {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 1.8rem;

  .text {
    font-size: 1.8rem;
    margin-bottom: 10px;
    font-weight: 600;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 0 0 100%;

    .dash-line {
      margin-top: 1.8rem;
    }
  }

  .min-price,
  .max-price,
  .min-land-size,
  .max-land-size,
  .min-lot-size,
  .max-lot-size,
  .min-year,
  .max-year {
    flex: 0 0 48%;
  }
}

.btn-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.8rem;
  .btn-done,
  .btn-reset {
    flex: 0 0 35%;
  }
}

@media only screen and (max-width: 400px) {
  .container {
    .beds,
    .bathrooms {
      .selects {
        .bathroom-select-new,
        .bed-select-new {
          padding: 0.8rem 1.2rem;
          background-color: $primary-bgcolor-2;
        }

        .bed-select-old,
        .bathroom-select-old {
          padding: 0.8rem 1.2rem;
        }
      }
    }
  }
}
</style>
