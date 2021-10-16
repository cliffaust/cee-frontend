<template>
  <div class="mt-6">
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
      <div class="text-sm font-mono font-bold">Price</div>
      <div class="content">
        <div class="min-price">
          <baseSelect
            v-model="selectedMinPrice"
            label="Min Price"
            :options="minPrices"
          ></baseSelect>
        </div>
        <div class="w-5 h-0.5 bg-gray-200 mt-6"></div>
        <div class="max-price">
          <baseSelect
            v-model="selectedMaxPrice"
            label="Max Price"
            :options="maxPrices"
          ></baseSelect>
        </div>
      </div>
    </div>
    <div class="land-size">
      <div class="text-sm font-mono font-bold">Land Space</div>
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
    <div class="flex mt-10 gap-6">
      <div class="flex-grow">
        <ButtonPrimary class="w-full h-10 text-sm" @click="reset"
          >Reset</ButtonPrimary
        >
      </div>
      <div class="flex-grow">
        <ButtonPrimaryOpen class="w-full h-10 text-sm" @click="filter"
          >Filter</ButtonPrimaryOpen
        >
      </div>
    </div>
  </div>
</template>

<script>
import baseSelect from '~/components/defaultComponent/baseSelect'
import ButtonPrimary from '~/components/defaultComponent/button-primary.vue'
import ButtonPrimaryOpen from '~/components/defaultComponent/button-primary-open.vue'
// import baseInput from '~/components/defaultComponent/baseInput'
export default {
  components: {
    baseSelect,
    ButtonPrimary,
    ButtonPrimaryOpen,
  },
  data() {
    return {
      selectedMinPrice: this.$route.query.minPrice || 'Any Price',
      selectedMaxPrice: this.$route.query.maxPrice || 'Any Price',
      selectedMinLandSize: this.$route.query.minLandSize || 'Any Size',
      selectedMaxLandSize: this.$route.query.maxLandSize || 'Any Size',
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
    }
  },

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

    filter() {
      this.$router.push({
        path: this.$router.currentRoute.fullPath,
        query: {
          minPrice: this.selectedMinPrice,
          maxPrice: this.selectedMaxPrice,
          minLandSize: this.selectedMinLandSize,
          maxLandSize: this.selectedMaxLandSize,
        },
      })
    },
    reset() {
      this.$router.push({
        path: 'homes/',
        query: {
          minPrice: null,
          maxPrice: null,
          minLandSize: null,
          maxLandSize: null,
        },
      })
      this.selectedMinLandSize = 'Any Size'
      this.selectedMaxLandSize = 'Any Size'
      this.selectedMinPrice = 'Any Price'
      this.selectedMaxPrice = 'Any Price'
    },
  },
}
</script>

<style lang="postcss" scoped>
.option-old {
  @apply py-2.5 px-5 text-sm font-bold rounded-lg hover:bg-gray-200 transition-all duration-300 cursor-pointer ease-in-out;
}

.option-new {
  @apply py-2.5 px-5 text-sm font-bold relative cursor-pointer rounded-lg bg-primary-darkgray text-white;
}

.content {
  @apply flex items-center justify-center gap-2;
}

.price,
.land-size,
.lot-size,
.year-built {
  @apply flex flex-col justify-center mt-4;
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
