export default {
  getStatistics (param) {
    return new Promise((resolve, reject) => {
      let parameter = ''
      let entity = 'statistics'
      let country = ''
      if (!param.all && param.country) {
        parameter = `day=${param.day}&`
        entity = 'history'
      }
      if (param.country) {
        country = `country=${param.country}`
      }
      fetch(`https://covid-193.p.rapidapi.com/${entity}?${parameter}${country}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'covid-193.p.rapidapi.com',
          'x-rapidapi-key': '90a763d51dmsh2a7100183349ff8p148903jsn049da8aa37e2'
        }
      })
        .then(response => response.json().then((data) => {
          resolve(data.response)
        }))
        .catch(err => {
          reject(err)
        })
    })
  }
}
