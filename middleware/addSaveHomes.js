export default function ({ store, req }) {
  store.dispatch('saveHomesInit', req)
}
