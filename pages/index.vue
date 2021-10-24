<template>
  <div @click="closeResultsMethod">
    <Header
      :close-results="closeResults"
      @closeResults="changeCloseResults"
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
      closeResults: true,
    }
  },

  methods: {
    changeCloseResults() {
      this.closeResults = true
    },
    closeResultsMethod() {
      if (this.closeResults) {
        this.closeResults = false
      } else if (this.showOptions) {
        this.showOptions = false
      }
    },
  },
}
</script>
