import axios from 'axios'

export const state = () => ({
  land: [],
})

export const mutations = {
  ADD_LAND(state, data) {
    state.land = Object.assign({}, ...data)
  },
}

export const actions = {
  async addLand({ commit }, payload) {
    const data = []
    let land = []
    if (payload.token) {
      land = await axios.get(`${process.env.baseUrl}/lands/${payload.slug}/`, {
        headers: {
          Authorization: 'Token ' + payload.token,
        },
      })
    } else {
      land = await axios.get(`${process.env.baseUrl}/lands/${payload.slug}/`)
    }

    const landVideo = await axios.get(
      `${process.env.baseUrl}/lands/${payload.slug}/land-videos/`
    )
    const landImages = await axios.get(
      `${process.env.baseUrl}/lands/${payload.slug}/land-images/`
    )
    const landOpenDateTime = await axios.get(
      `${process.env.baseUrl}/lands/${payload.slug}/open-date-time/`
    )
    const landContactNumber = await axios.get(
      `${process.env.baseUrl}/lands/${payload.slug}/contact-numbers/`
    )
    const landCoordinate = await axios.get(
      `${process.env.baseUrl}/lands/${payload.slug}/land-coordinate/`
    )
    const landReview = await axios.get(
      `${process.env.baseUrl}/lands/${payload.slug}/land-reviews/`
    )
    data.push(land.data)
    data.push({ land_video: landVideo.data.results })
    data.push({
      land_images: [
        { land_image: land.data.cover_image },
        ...landImages.data.results,
      ],
    })
    data.push({ open_date_time: landOpenDateTime.data.results })
    data.push({ contact_numbers: landContactNumber.data.results })
    data.push({ land_coordinate: landCoordinate.data.results })
    data.push({ land_reviews: landReview.data.results })

    commit('ADD_HOME', data)
  },
}
