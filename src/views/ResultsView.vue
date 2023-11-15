<template lang="">
  <div class="mt-4 ms-4">
    <h2>
      <i class="fa-solid fa-arrow-left pe" @click="$router.back()"></i>
      General Report: {{ selectedVariable.name }}
    </h2>

    <div class="d-flex justify-content-end w-100 mt-4">
      <FrecuenciesTable
        v-if="showFrecuenciesTable"
        @setFrecuenciesTable="showFrecuenciesTable = false"
      />
      <div class="text-center w-50 align-self-center" v-else>
        <p><b>The frecuencies table cannot be displayed</b></p>
      </div>
      <div class="w-50">
        <h3>Mesuarements</h3>
        <p><b>Media: </b> {{ values.media }}</p>
        <p><b>Mode: </b> {{ values.mode }}</p>
        <template v-if="selectedVariable.type != 'categoric'">
          <p><b>Variance: </b> {{ values.variance }}</p>
          <p><b>Standard Deviation: </b> {{ values.standardDeviation }}</p>
        </template>
      </div>
    </div>
    <div
      class="my-4 d-flex flex-column align-items-center justify-content-center"
      v-if="showFrecuenciesTable"
    >
      <select
        class="form-select w-25 mb-3"
        aria-label="Default select example"
        v-model="componentId"
      >
        <option selected>Select an statistical graphic</option>
        <option value="LineChart">Line Graph</option>
        <option value="BarChart">Bar Chart</option>
        <option value="PieChart">Pie Chart</option>
        <option value="ScatterChart">Scatter Chart</option>
        <option value="Histogram">Histogram</option>
      </select>
    </div>
    <div v-if="labels.length || data.length">
      <component :is="componentId" :labels="labels" :data="data"></component>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Statistics from 'statistics.js'
import FrecuenciesTable from '../components/FrecuenciesTable.vue'
import LineChart from '../components/LineChart.vue'
let stats = new Statistics({}, {}, {})

export default {
  components: { FrecuenciesTable, LineChart },
  data() {
    return {
      componentId: 'LineChart',
      values: {
        media: null,
        mode: null,
        variance: null,
        standardDeviation: null
      },
      labels: [],
      data: [],
      showFrecuenciesTable: true
    }
  },
  computed: {
    ...mapState(['selectedVariable', 'intervals'])
  },

  created() {
    if (!this.selectedVariable.index) {
      this.$router.push({ name: 'Home' })
      return
    }
    this.values.media = this.calculateMedia()
    this.values.mode = this.calculateMode()

    if (this.selectedVariable.type != 'categoric') {
      this.values.variance = this.calculateVariance()
      this.values.standardDeviation = this.calculateStandardVariation()
    }
  },
  mounted() {
    if (Object.hasOwn(this.intervals[0], 'inferiorLimit')) {
      this.intervals.forEach((element) => {
        this.labels.push(`[${element.inferiorLimit} - ${element.superiorLimit}]`)
      })
    } else {
      this.intervals.forEach((element) => {
        this.labels.push(element.value)
      })
    }

    this.data = this.intervals.map((element) => element.absoluteFrecuency)
  },
  methods: {
    calculateMedia() {
      return stats.median(this.selectedVariable.data)
    },
    calculateMode() {
      return stats.mode(this.selectedVariable.data)
    },
    calculateVariance() {
      return stats.variance(this.selectedVariable.data).toFixed(3)
    },
    calculateStandardVariation() {
      return stats.standardDeviation(this.selectedVariable.data).toFixed(3)
    }
  }
  /* watch: {
    componentId(newValue, oldValue) {
      console.log(newValue)
    }
  } */
}
</script>
<style>
i {
  cursor: pointer;
}
</style>
