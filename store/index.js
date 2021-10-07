import axios from 'axios'

export const state = () => ({
  homes: [],
  user_profile: [],
  saved_homes: [],
  navbarSlider: false,
})

export const mutations = {
  ADD_HOMES(state, data) {
    state.homes = data
  },
  CHANGE_NAVBAR_SLIDER(state, value) {
    state.navbarSlider = value
  },
  ADD_USER_PROFILE(state, data) {
    state.user_profile = data
  },
  ADD_SAVED_HOMES(state, data) {
    state.saved_homes = data
  },
}

export const actions = {
  changeNavbarState({ commit }, boolVal) {
    commit('CHANGE_NAVBAR_SLIDER', boolVal)
  },
  async nuxtServerInit({ commit }, context) {
    let token
    if (context.req) {
      if (context.req.headers.cookie) {
        token = context.req.headers.cookie
          .split(';')
          .map((element) => element.trim())
        token = token.find((c) => c.startsWith('token='))

        if (token) {
          token = token.split('=')[1]
          try {
            const response = await axios.get(
              `${process.env.baseUrl}/user-profile/`,
              {
                headers: {
                  Authorization: 'Token ' + token,
                },
              }
            )
            commit('ADD_USER_PROFILE', response.data)
          } catch (error) {
            if (error.response.status === 401) {
              context.redirect('/logout')
            }
          }
        }
      }
    }
  },
}
