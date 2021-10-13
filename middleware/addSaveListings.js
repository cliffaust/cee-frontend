export default function ({ store, req }) {
  store.dispatch('saveHomesInit', req)
  store.dispatch('saveLandsInit', req)
}
