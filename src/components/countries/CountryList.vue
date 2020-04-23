<template>
  <b-form-select
    name="country"
    id="country"
    :value="country"
    class="mb-2 mr-sm-2 mb-sm-0"
    @change="onChange"
  >
    <option value="">
      {{ placeholder }}
    </option>
    <option
      v-for="(country, key) in countries"
      :value="country"
      :key="key"
    >
      {{ country }}
    </option>
  </b-form-select>
</template>

<script>
export default {
  name: 'CountryList',

  props: {
    countries: { type: Array },
    placeholder: { type: String },
    country: { type: String, default: '' }
  },

  methods: {
    onChange (value) {
      this.$emit('changeHandler', value)
    }
  }
}
</script>
