export default {
  SET_RESULT (state, data) {
    state.result = data
    state.fetched = true
  },

  SET_ERROR (state, data) {
    state.error = data
  },

  SET_LOADING (state, data) {
    state.loading = data
  }
}
