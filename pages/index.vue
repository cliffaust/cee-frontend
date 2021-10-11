<template>
  <div @click="showResultMethod">
    <Header
      :show-result="showResult"
      :show-options="showOptions"
      @showOptionsMethod="showOptionsMethod"
      @showResult="changeShowResult"
    ></Header>
    <Section1></Section1>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/HomeComponents/Header'
import Section1 from '~/components/HomeComponents/Section1'
import Footer from '~/components/defaultComponent/Footer.vue'
export default {
  components: {
    Header,
    Section1,
    Footer,
  },

  data() {
    return {
      showResult: true,
      showOptions: false,
    }
  },

  methods: {
    changeShowResult() {
      this.showResult = true
    },
    showOptionsMethod() {
      this.showOptions = !this.showOptions
    },
    showResultMethod() {
      if (this.showResult) {
        this.showResult = false
      } else if (this.showOptions) {
        this.showOptions = false
      }
    },
  },
}
</script>
