<template>
  <div @click="showResultsMethod">
    <Header
      :show-results="showResults"
      @showResults="changeShowResults"
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
      showResults: true,
    }
  },

  methods: {
    changeShowResults() {
      this.showResults = true
    },
    showResultsMethod() {
      if (this.showResults) {
        this.showResults = false
      } else if (this.showOptions) {
        this.showOptions = false
      }
    },
  },
}
</script>
