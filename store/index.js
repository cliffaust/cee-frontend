import axios from 'axios'

export const state = () => ({
  homes: [],
  user_profile: [],
  saved_homes: [],
  saved_homes_in_cookies: null,
  saved_land_in_cookies: null,
  navbarSlider: false,
  inSaves: false,
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
  ADD_CART(state, value) {
    state.cartVal = value
  },
  ADD_SAVED_HOMES(state, data) {
    state.saved_homes = data
  },
  ADD_SAVED_HOMES_IN_COOKIES(state, data) {
    state.saved_homes_in_cookies = data
  },
  ADD_SAVED_LANDS_IN_COOKIES(state, data) {
    state.saved_lands_in_cookies = data
  },
  ALREADY_IN_SAVES(state, value) {
    state.inSaves = value
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
            const response = await axios.get(`${process.env.baseUrl}/user/`, {
              headers: {
                Authorization: 'Token ' + token,
              },
            })
            commit('ADD_USER_PROFILE', response.data[0])
          } catch (error) {
            if (error.response.status === 401) {
              context.redirect('/logout')
            }
          }
        }
      }
    }
  },

  saveHomesInit({ commit }, req) {
    let homes
    if (req) {
      if (req.headers.cookie) {
        homes = req.headers.cookie.split(';').map((element) => element.trim())
        homes = homes.find((c) => c.startsWith('homes='))

        if (homes) {
          homes = homes.split('=')[1]
          commit('ADD_SAVED_HOMES_IN_COOKIES', homes)
        }
      }
    }
  },

  saveLandsInit({ commit }, req) {
    let lands
    if (req) {
      if (req.headers.cookie) {
        lands = req.headers.cookie.split(';').map((element) => element.trim())
        lands = lands.find((c) => c.startsWith('lands='))

        if (lands) {
          lands = lands.split('=')[1]
          commit('ADD_SAVED_LANDS_IN_COOKIES', lands)
        }
      }
    }
  },
}
