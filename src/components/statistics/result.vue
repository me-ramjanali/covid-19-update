<template>
  <b-container class="bv-example-row">
    <b-row
      v-for="(result, index) in data"
      :key="index"
      class="pt-3 pb-5"
    >
      <b-col cols="12" class="p-0"><b-alert variant="danger" show><strong v-if="result.country">In <h1>{{result.country}}</h1></strong> Updated on: <strong>{{moment(result.time).format($FORMAT_DATETIME.DATETIME)}}</strong></b-alert></b-col>
      <div class="w-100">
        <div>
          <b-card-group deck>
            <b-card
              bg-variant="secondary"
              text-variant="white"
              header="New Infected"
              class="text-center"
            >
              <b-card-text><h1>{{result.cases.new}}</h1></b-card-text>
            </b-card>

            <b-card
              bg-variant="dark"
              header="Total Infected"
              text-variant="white"
              class="text-center"
            >
              <b-card-text><h1>{{result.cases.total}}</h1></b-card-text>
            </b-card>

            <b-card
              bg-variant="warning"
              text-variant="white"
              header="Critical"
              class="text-center"
            >
              <b-card-text><h1>{{result.cases.critical}}</h1></b-card-text>
            </b-card>
          </b-card-group>
        </div>
        <div class="mt-3">
          <b-card-group deck>
            <b-card
              bg-variant="success"
              text-variant="white"
              header="Recovered"
              class="text-center"
            >
              <b-card-text><h1>{{result.cases.recovered}}</h1></b-card-text>
            </b-card>

            <b-card
              bg-variant="primary"
              text-variant="white"
              header="New Death"
              class="text-center"
            >
              <b-card-text><h1>{{result.deaths.new}}</h1></b-card-text>
            </b-card>
            
            <b-card
              bg-variant="danger"
              text-variant="white"
              header="Total Death"
              class="text-center"
            >
              <b-card-text><h1>{{result.deaths.total}}</h1></b-card-text>
            </b-card>
          </b-card-group>
        </div>
        <div class="mt-3">
          <b-card-group deck>
            <b-card
              bg-variant="info"
              text-variant="white"
              header="Total Tests"
              class="text-center"
            >
              <b-card-text><h1>{{result.tests.total}}</h1></b-card-text>
            </b-card>
          </b-card-group>
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'statistics',

  props: {
    data: { type: Array }
  }
}
</script>
