<template>
  <div class="mt-10">
    <div class="flex items-center justify-center gap-2">
      <nuxt-link
        v-slot="{ href, navigate }"
        :to="{ path: `/homes/${this.$route.params.search}/buy/` }"
        custom
      >
        <div
          :class="[
            $route.name === 'homes-search-buy' ? 'option-new' : 'option-old',
          ]"
          :href="href"
          @click="navigate"
        >
          Buy
        </div>
      </nuxt-link>
      <nuxt-link
        v-slot="{ href, navigate }"
        :to="{ path: `/homes/${this.$route.params.search}/rent/` }"
        custom
      >
        <div
          :class="[
            $route.name === 'homes-search-rent' ? 'option-new' : 'option-old',
          ]"
          :href="href"
          @click="navigate"
        >
          Rent
        </div>
      </nuxt-link>
      <nuxt-link
        v-slot="{ href, navigate }"
        :to="{ path: `/lands/${this.$route.params.search}/` }"
        custom
      >
        <div
          :class="[
            $route.name === 'lands-search' ? 'option-new' : 'option-old',
          ]"
          :href="href"
          @click="navigate"
        >
          Land
        </div>
      </nuxt-link>
    </div>
    <div class="price">
      <div class="text-2xl font-mono font-bold">Price</div>
      <div class="content">
        <div class="min-price">
          <baseSelect
            v-model="selectedMinPrice"
            label="Min Price"
            :options="minPrices"
          ></baseSelect>
        </div>
        <div class="w-5 h-1 bg-gray-200 mt-6"></div>
        <div class="max-price">
          <baseSelect
            v-model="selectedMaxPrice"
            label="Max Price"
            :options="maxPrices"
          ></baseSelect>
        </div>
      </div>
    </div>
    <div class="mt-7">
      <div class="text-2xl font-mono font-bold mb-3">Beds</div>
      <div class="flex items-center justify-center gap-2">
        <div
          :class="[!selectedBed ? 'option-new !px-6' : 'option-old !px-6']"
          @click="bed('')"
        >
          Any
        </div>
        <div
          :class="[
            selectedBed === '1+' ? 'option-new !px-6' : 'option-old !px-6',
          ]"
          @click="bed('1+')"
        >
          1+
        </div>
        <div
          :class="[
            selectedBed === '2+' ? 'option-new !px-6' : 'option-old !px-6',
          ]"
          @click="bed('2+')"
        >
          2+
        </div>
        <div
          :class="[
            selectedBed === '3+' ? 'option-new !px-6' : 'option-old !px-6',
          ]"
          @click="bed('3+')"
        >
          3+
        </div>
        <div
          :class="[
            selectedBed === '4+' ? 'option-new !px-6' : 'option-old !px-6',
          ]"
          @click="bed('4+')"
        >
          4+
        </div>
      </div>
    </div>
    <div class="mt-7">
      <div class="text-2xl font-mono font-bold mb-3">Bathrooms</div>
      <div class="flex items-center justify-center gap-2">
        <div
          class="bathroom-select"
          :class="[!selectedBathroom ? 'option-new !px-6' : 'option-old !px-6']"
          @click="bathroom('')"
        >
          Any
        </div>
        <div
          class="bathroom-select"
          :class="[
            selectedBathroom === '1+' ? 'option-new !px-6' : 'option-old !px-6',
          ]"
          @click="bathroom('1+')"
        >
          1+
        </div>
        <div
          class="bathroom-select"
          :class="[
            selectedBathroom === '2+' ? 'option-new !px-6' : 'option-old !px-6',
          ]"
          @click="bathroom('2+')"
        >
          2+
        </div>
        <div
          class="bathroom-select"
          :class="[
            selectedBathroom === '3+' ? 'option-new !px-6' : 'option-old !px-6',
          ]"
          @click="bathroom('3+')"
        >
          3+
        </div>
        <div
          class="bathroom-select"
          :class="[
            selectedBathroom === '4+' ? 'option-new !px-6' : 'option-old !px-6',
          ]"
          @click="bathroom('4+')"
        >
          4+
        </div>
      </div>
    </div>
    <div class="land-size">
      <div class="text-2xl font-mono font-bold">Land Space</div>
      <div class="content">
        <div class="min-land-size">
          <baseSelect
            v-model="selectedMinLandSize"
            label="Min Size"
            :options="minLandSizes"
          ></baseSelect>
        </div>
        <div class="w-5 h-1 bg-gray-200 mt-6"></div>
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
      <div class="text-2xl font-mono font-bold">Lot Size</div>
      <div class="content">
        <div class="min-lot-size">
          <baseSelect
            v-model="selectedMinLotSize"
            label="Min Size"
            :options="minLotSizes"
          ></baseSelect>
        </div>
        <div class="w-5 h-1 bg-gray-200 mt-8"></div>
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
      <div class="text-2xl font-mono font-bold">Year Built</div>
      <div class="content">
        <div class="min-year">
          <baseInput
            v-model="selectedMinYear"
            placeholder="Min Price"
            label="Min Year"
          ></baseInput>
        </div>
        <div class="w-5 h-1 bg-gray-200 mt-6"></div>
        <div class="max-year">
          <baseInput
            v-model="selectedMaxYear"
            placeholder="Max Price"
            label="Max Year"
          ></baseInput>
        </div>
      </div>
    </div>
    <div class="flex mt-10 gap-6">
      <div class="flex-grow">
        <ButtonPrimary class="w-full h-16 text-xl" @click="reset"
          >Reset</ButtonPrimary
        >
      </div>
      <div class="flex-grow">
        <ButtonPrimaryOpen class="w-full h-16 text-xl" @click="filter"
          >Filter</ButtonPrimaryOpen
        >
      </div>
    </div>
    <!-- <div class="checkbox-container">
      <baseCheckBox v-model="ammenities" label="Air Condition"></baseCheckBox>
    </div> -->
  </div>
</template>

<script>
import baseSelect from '~/components/defaultComponent/baseSelect'
import ButtonPrimary from '~/components/defaultComponent/button-primary.vue'
import ButtonPrimaryOpen from '~/components/defaultComponent/button-primary-open.vue'
import baseInput from '~/components/defaultComponent/baseInput'
export default {
  components: {
    baseSelect,
    ButtonPrimary,
    ButtonPrimaryOpen,
    baseInput,
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

<style lang="postcss" scoped>
.option-old {
  @apply py-4 px-9 text-xl font-bold rounded-2xl hover:bg-gray-200 transition-all duration-300 cursor-pointer ease-in-out;
}

.option-new {
  @apply py-4 px-9 text-xl font-bold relative cursor-pointer rounded-2xl bg-primary-darkgray text-white;
}

.content {
  @apply flex items-center justify-center gap-2;
}

.price,
.land-size,
.lot-size,
.year-built {
  @apply flex flex-col justify-center mt-7;
}
.min-price,
.max-price,
.min-land-size,
.max-land-size,
.min-lot-size,
.max-lot-size,
.min-year,
.max-year {
  flex: 0 0 45%;
}
</style>
