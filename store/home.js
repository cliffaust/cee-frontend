import axios from 'axios'

export const state = () => ({
  home: [],
})

export const mutations = {
  ADD_HOME(state, data) {
    state.home = Object.assign({}, ...data)
  },
}

export const actions = {
  async addHome({ commit }, payload) {
    const data = []
    if (payload.token) {
      const home = await axios.get(
        `${process.env.baseUrl}/homes/${payload.slug}/`,
        {
          headers: {
            Authorization: 'Token ' + payload.token,
          },
        }
      )
      const homeVideo = await axios.get(
        `${process.env.baseUrl}/homes/${payload.slug}/home-videos/`
      )
      const homeOpenDateTime = await axios.get(
        `${process.env.baseUrl}/homes/${payload.slug}/open-date-time/`
      )
      const homeContactNumber = await axios.get(
        `${process.env.baseUrl}/homes/${payload.slug}/contact-numbers/`
      )
      const homeCoordinate = await axios.get(
        `${process.env.baseUrl}/homes/${payload.slug}/home-coordinate/`
      )
      const homeReview = await axios.get(
        `${process.env.baseUrl}/homes/${payload.slug}/home-reviews/`
      )
      const homeRoomFeature = await axios.get(
        `${process.env.baseUrl}/homes/${payload.slug}/room-features/`
      )
      const homeKitchenFeature = await axios.get(
        `${process.env.baseUrl}/homes/${payload.slug}/kitchen-features/`
      )
      const homeGeneralHomeFeatures = await axios.get(
        `${process.env.baseUrl}/homes/${payload.slug}/general-home-features/`
      )
      const homeSittingRoomFeature = await axios.get(
        `${process.env.baseUrl}/homes/${payload.slug}/sitting-room-features/`
      )
      data.push(home.data)
      data.push({ home_video: homeVideo.data.results })
      data.push({ open_date_time: homeOpenDateTime.data.results })
      data.push({ contact_numbers: homeContactNumber.data.results })
      data.push({ home_coordinate: homeCoordinate.data.results })
      data.push({ home_reviews: homeReview.data.results })
      data.push({ room_features: homeRoomFeature.data.results })
      data.push({ kitchen_features: homeKitchenFeature.data.results })
      data.push({ general_home_features: homeGeneralHomeFeatures.data.results })
      data.push({ sitting_room_features: homeSittingRoomFeature.data.results })

      commit('ADD_HOME', data)
    } else {
      const home = await axios.get(
        `${process.env.baseUrl}/homes/${payload.slug}/`
      )
      const homeVideo = await axios.get(
        `${process.env.baseUrl}/homes/${payload.slug}/home-videos/`
      )
      const homeOpenDateTime = await axios.get(
        `${process.env.baseUrl}/homes/${payload.slug}/open-date-time/`
      )
      const homeContactNumber = await axios.get(
        `${process.env.baseUrl}/homes/${payload.slug}/contact-numbers/`
      )
      const homeCoordinate = await axios.get(
        `${process.env.baseUrl}/homes/${payload.slug}/home-coordinate/`
      )
      const homeReview = await axios.get(
        `${process.env.baseUrl}/homes/${payload.slug}/home-reviews/`
      )
      const homeRoomFeature = await axios.get(
        `${process.env.baseUrl}/homes/${payload.slug}/room-features/`
      )
      const homeKitchenFeature = await axios.get(
        `${process.env.baseUrl}/homes/${payload.slug}/kitchen-features/`
      )
      const homeGeneralHomeFeatures = await axios.get(
        `${process.env.baseUrl}/homes/${payload.slug}/general-home-features/`
      )
      const homeSittingRoomFeature = await axios.get(
        `${process.env.baseUrl}/homes/${payload.slug}/sitting-room-features/`
      )
      data.push(home.data)
      data.push({ home_video: homeVideo.data.results })
      data.push({ open_date_time: homeOpenDateTime.data.results })
      data.push({ contact_numbers: homeContactNumber.data.results })
      data.push({ home_coordinate: homeCoordinate.data.results })
      data.push({ home_reviews: homeReview.data.results })
      data.push({ room_features: homeRoomFeature.data.results })
      data.push({ kitchen_features: homeKitchenFeature.data.results })
      data.push({ general_home_features: homeGeneralHomeFeatures.data.results })
      data.push({ sitting_room_features: homeSittingRoomFeature.data.results })

      commit('ADD_HOME', data)
    }
  },
}
