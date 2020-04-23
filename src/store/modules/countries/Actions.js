import countryService from '@/services/countries.service'

export default {
  getCountryList ({ state, commit }) {
    commit('SET_LOADING', true)
    return countryService.getCountryList()
      .then(response => {
        commit('SET_ITEMS', response)
      })
      .catch(error => commit('SET_ERROR', error.message))
      .finally(() => commit('SET_LOADING', false))
  }
}
