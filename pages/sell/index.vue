<template>
  <div>
    <navbar></navbar>
    <div class="font-bold text-2xl font-mono text-center my-5">
      Sell your home
    </div>
    <div class="px-4">
      <ValidationObserver>
        <ValidationProvider name="price" mode="eager" rules="required">
          <div class="mb-6">
            <baseInput
              v-model="data.price"
              placeholder="Home Price"
              type="number"
              label="Price"
            ></baseInput>
          </div>
        </ValidationProvider>
        <ValidationProvider name="price" mode="eager" rules="required">
          <div class="mb-6">
            <baseInput
              v-model="data.hoa_dues"
              placeholder="Home Monthly Dues"
              type="number"
              label="Hoa Dues"
            ></baseInput>
          </div>
        </ValidationProvider>
        <ValidationProvider name="home_type" mode="eager" rules="required">
          <div class="mb-6">
            <baseSelect
              v-model="data.home_type"
              placeholder="Type of home"
              label="Home Type"
              :options="home_types"
            ></baseSelect>
          </div>
        </ValidationProvider>
        <ValidationProvider name="address" mode="eager" rules="required">
          <div class="mb-6">
            <baseInput
              v-model="data.address"
              placeholder="Home Address"
              type="text"
              label="Address"
            ></baseInput>
          </div>
        </ValidationProvider>
        <ValidationProvider name="city" mode="eager" rules="required">
          <div class="mb-6">
            <baseInput
              v-model="data.city"
              placeholder="Home City"
              type="text"
              label="City"
            ></baseInput>
          </div>
        </ValidationProvider>
        <ValidationProvider name="bedroom_number" mode="eager" rules="required">
          <div class="mb-6">
            <baseInput
              v-model="data.number_bedroom"
              placeholder="Number of Bedroom in the House"
              type="number"
              label="Number of Bedroom"
            ></baseInput>
          </div>
        </ValidationProvider>
        <ValidationProvider
          name="bathroom_number"
          mode="eager"
          rules="required"
        >
          <div class="mb-6">
            <baseInput
              v-model="data.number_bathroom"
              placeholder="Number of Bathroom in the House"
              type="number"
              label="Number of Bathroom"
            ></baseInput>
          </div>
        </ValidationProvider>
        <ValidationProvider name="home_size" mode="eager" rules="required">
          <div class="mb-6">
            <baseInput
              v-model="data.home_size"
              placeholder="Size of Home"
              type="number"
              label="Home Size"
            ></baseInput>
          </div>
        </ValidationProvider>
        <ValidationProvider name="year_built" mode="eager" rules="required">
          <div class="mb-6">
            <baseInput
              v-model="data.year_built"
              placeholder="Year home was built"
              type="number"
              label="Year Built"
            ></baseInput>
          </div>
        </ValidationProvider>
        <ValidationProvider name="about_home" mode="eager" rules="required">
          <div class="mb-6">
            <baseTextArea
              v-model="data.about_home"
              label="About Home"
              placeholder="About Your Home"
            ></baseTextArea>
          </div>
        </ValidationProvider>
        <ValidationProvider
          name="love_about_home"
          mode="eager"
          rules="required"
        >
          <div class="mb-6">
            <baseTextArea
              v-model="data.love_about_home"
              label="Love About Home"
              placeholder="Love About Your Home"
            ></baseTextArea>
          </div>
        </ValidationProvider>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import navbar from '~/components/homeInstance/navbar.vue'
import baseInput from '~/components/defaultComponent/baseInput'
import baseSelect from '~/components/defaultComponent/baseSelect'
import baseTextArea from '~/components/defaultComponent/baseTextArea'
export default {
  components: {
    navbar,
    baseInput,
    baseSelect,
    baseTextArea,
  },
  // middleware: ['checkUser'],

  data() {
    return {
      data: {
        price: '',
        hoa_dues: '',
        home_type: '',
        city: '',
        address: '',
        number_bedroom: '',
        number_bathroom: '',
        home_size: '',
        about_home: '',
        love_about_home: '',
      },
      home_types: ['Duplex', 'Bongalow'],
    }
  },
}
</script>

<style lang="postcss" scoped></style>
