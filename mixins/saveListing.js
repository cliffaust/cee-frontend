import axios from 'axios'
import Cookies from 'js-cookie'

export default {
  methods: {
    changeLikeState() {
      if (Cookies.get('token')) {
        this.like = true
        axios.post(`${process.env.baseUrl}/homes/${this.home.slug}/like/`, '', {
          headers: {
            Authorization: 'Token ' + Cookies.get('token'),
          },
        })
      } else {
        this.$router.push({
          name: 'login',
          query: { redirect: `${this.$route.path}` },
        })
      }
    },

    changeUnlikeState() {
      if (Cookies.get('token')) {
        this.like = false
        axios.delete(`${process.env.baseUrl}/homes/${this.home.slug}/like/`, {
          headers: {
            Authorization: 'Token ' + Cookies.get('token'),
          },
        })
      } else {
        this.$router.push({
          name: 'login',
          query: { redirect: `${this.$route.path}` },
        })
      }
    },

    saveHome() {
      if (Cookies.get('token')) {
        axios
          .post(`${process.env.baseUrl}/homes/${this.home.slug}/save/`, {
            headers: {
              Authorization: 'Token ' + Cookies.get('token'),
            },
          })
          .then(() => location.reload())
          .catch((err) => console.log(err.response))
      } else if (!Cookies.get('token')) {
        let cookieVal = Cookies.get('homes')

        if (cookieVal !== undefined) {
          cookieVal = JSON.parse(cookieVal)
        }

        const data = [...(cookieVal || [])]
        const exist = data.some((val) => {
          return val.slug === this.home.slug
        })
        if (!exist) {
          data.push({ slug: this.home.slug })
          Cookies.set('homes', JSON.stringify(data))
          location.reload()
        }
      }
    },
  },
}
