import axios from 'axios'
import Cookies from 'js-cookie'

export default {
  methods: {
    changeLandUnLikeState() {
      if (Cookies.get('token')) {
        this.like = true
        axios
          .post(`${process.env.baseUrl}/lands/${this.land.slug}/like/`, '', {
            headers: {
              Authorization: 'Token ' + Cookies.get('token'),
            },
          })
          .catch((err) => console.log(err.response))
      } else {
        this.$router.push({
          name: 'login',
          query: { redirect: `${this.$route.path}` },
        })
      }
    },

    changeLandLikeState() {
      if (Cookies.get('token')) {
        this.like = false
        axios
          .delete(`${process.env.baseUrl}/lands/${this.land.slug}/like/`, {
            headers: {
              Authorization: 'Token ' + Cookies.get('token'),
            },
          })
          .catch((err) => console.log(err.response))
      } else {
        this.$router.push({
          name: 'login',
          query: { redirect: `${this.$route.path}` },
        })
      }
    },
  },
}
