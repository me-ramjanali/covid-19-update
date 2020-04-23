import statisticsService from '@/services/statistics.service'

export default {
  getStatistics ({ state, commit }, param) {
    commit('SET_LOADING', true)
    return statisticsService.getStatistics(param)
      .then(response => {
        commit('SET_RESULT', response)
      })
      .catch(error => commit('SET_ERROR', error.message))
      .finally(() => commit('SET_LOADING', false))
  }
}
