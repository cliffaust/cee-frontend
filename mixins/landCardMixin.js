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

    saveLand() {
      if (Cookies.get('token')) {
        this.disableSaveBtn = true
        axios
          .post(`${process.env.baseUrl}/lands/${this.land.slug}/save/`, '', {
            headers: {
              Authorization: 'Token ' + Cookies.get('token'),
            },
          })
          .then(() => location.reload())
          .catch((err) => {
            console.log(err.response)
            this.disableSaveBtn = false
          })
      } else if (!Cookies.get('token')) {
        let cookieVal = Cookies.get('lands')

        if (cookieVal !== undefined) {
          cookieVal = JSON.parse(cookieVal)
        }

        const data = [...(cookieVal || [])]
        const exist = data.some((val) => {
          return val.slug === this.land.slug
        })
        if (!exist) {
          data.push({ slug: this.land.slug })
          Cookies.set('lands', JSON.stringify(data))
          location.reload()
        }
      }
    },
  },
}
