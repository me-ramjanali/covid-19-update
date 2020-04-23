<template>
  <div class="home page">
    <b-container class="bv-example-row">
      <b-row>
        <h1>{{ msg }}</h1>
      </b-row>
    </b-container>
    <b-container class="bv-example-row">
      <b-row>
        <b-form inline>
          <countryList
            :value="country"
            :countries="countries"
            :placeholder="!loading ? 'Select Country' : 'loading'"
            @changeHandler="this.changeCountry" />
          <b-form-datepicker
            :disabled="showAll || !country"
            v-model="day"
            @context="onContext"
            :min="min"
            :max="max"
            class="mb-2 mr-sm-2 mb-sm-0"
            locale="en"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: '2-digit' }"
          ></b-form-datepicker>
          <b-form-checkbox
            :disabled="!country"
            id="all"
            class="mb-2 mr-sm-2 mb-sm-0"
            v-model="showAll"
            name="all"
          >
            Show Total for selected country
          </b-form-checkbox>
          <b-button variant="primary" @click="this.getStatistics">Search</b-button>
        </b-form>
      </b-row>
    </b-container>
    <statistics />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import countryList from '../components/countries/CountryList'
import statistics from '../components/statistics/result'

export default {
  name: 'IndexPage',

  components: {
    countryList,
    statistics
  },

  data () {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    // 15th two months prior
    const minDate = new Date(today)
    minDate.setMonth(minDate.getMonth() - 5)
    minDate.setDate(1)
    // 15th in two months
    const maxDate = new Date(today)
    return {
      msg: 'Welcome to Covid-19 world tracker!!!',
      showAll: false,
      day: today,
      min: minDate,
      max: maxDate,
      country: ''
    }
  },

  methods: {
    fetchCountries () {
      this.$store.dispatch('countries/getCountryList')
    },
    changeCountry (country) {
      this.country = country
    },
    getStatistics () {
      const param = {
        country: this.country,
        all: this.showAll,
        day: this.day
      }
      this.$store.dispatch('statistics/getStatistics', param)
    },
    onContext (ctx) {
      // The following will be an empty string until a valid date is entered
      this.day = ctx.selectedYMD
    }
  },

  computed: {
    ...mapState('countries', {
      countries: 'items',
      error: 'error',
      loading: 'loading'
    })
  },

  mounted () {
    this.fetchCountries()
  }
}
</script>

<style lang="scss" scoped>
.page {
  margin-top: 5%;
}
</style>
