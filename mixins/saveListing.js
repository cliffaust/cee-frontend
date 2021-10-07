import axios from 'axios'
import Cookies from 'js-cookie'

export default {
  methods: {
    changeLikeState() {
      if (Cookies.get('token')) {
        this.like = true
        axios.post(
          `${process.env.baseUrl}/homes/${this.home.id}/save-like/`,
          '',
          {
            headers: {
              Authorization: 'Token ' + Cookies.get('token'),
            },
          }
        )
      } else {
        this.$router.push({
          name: 'login',
          query: { redirect: `${this.$route.path}` },
        })
      }
    },

    changeUnlikeState() {
      if (this.$route.name !== 'saved-homes') {
        this.like = false
        axios.delete(
          `${process.env.baseUrl}/homes/${this.home.id}/save-like/`,
          {
            headers: {
              Authorization: 'Token ' + Cookies.get('token'),
            },
          }
        )
      } else if (this.$route.name === 'saved-homes') {
        this.unsaveModal = true
        this.$emit('showUnsaveModal', this.unsaveModal)
      }
    },
  },
}
