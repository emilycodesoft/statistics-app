<template lang="">
  <div class="mt-4 ms-4">
    <h2>
      <i class="fa-solid fa-arrow-left pe" @click="$router.back()"></i>
      Reporte General: {{ selectedVariable.name }}
    </h2>

    <div class="d-flex justify-content-end w-100 mt-4">
      <FrecuenciesTable
        v-if="showFrecuenciesTable"
        @setFrecuenciesTable="showFrecuenciesTable = false"
      />
      <div class="text-center w-50 align-self-center" v-else>
        <p><b>La tabla de Frecuencias no puede ser mostrada</b></p>
      </div>
      <div class="w-50">
        <h3>Medidas</h3>
        <p><b>Media aritmetica: </b> {{ values.mean }}</p>
        <p><b>Moda: </b> {{ values.mode }}</p>
        <template v-if="selectedVariable.type != 'categoric'">
          <p><b>Varianza: </b> {{ values.variance }}</p>
          <p><b>Desviación estandar: </b> {{ values.standardDeviation }}</p>
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
        <option selected>Escoge una grafica estadistica</option>
        <option value="LineChart">Grafico de lineas</option>
        <option value="BarChart">Grafico de Barras</option>
        <option value="PieChart">Diagrama Pastel</option>
      </select>
    </div>
    <div v-if="labels.length || data.length">
      <component
        :is="componentId"
        :labels="labels"
        :data="data"
        :randomColors="randomColors"
      ></component>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Statistics from 'statistics.js'
import FrecuenciesTable from '../components/FrecuenciesTable.vue'
import LineChart from '../components/LineChart.vue'
import BarChart from '../components/BarChart.vue'
import PieChart from '../components/PieChart.vue'
let stats = new Statistics({}, {}, {})

import randomColor from 'randomcolor'

export default {
  components: { FrecuenciesTable, LineChart, PieChart, BarChart },
  data() {
    return {
      componentId: 'BarChart',
      values: {
        mean: null,
        mode: null,
        variance: null,
        standardDeviation: null
      },
      labels: [],
      data: [],
      randomColors: [],
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
    this.values.mean = Math.round(this.calculateMean())
    this.values.mode = this.calculateMode()

    if (this.selectedVariable.type != 'categoric') {
      this.values.variance = this.calculateVariance()
      this.values.standardDeviation = this.calculateStandardVariation()
    }
  },
  mounted() {
    if (!this.intervals.length) {
      this.showFrecuenciesTable = false
      return null
    }
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

    this.randomColors = randomColor({
      count: this.data.length
      /* luminosity: 'light',
      hue: 'blue' */
    })
  },
  methods: {
    calculateMean() {
      return stats.arithmeticMean(this.selectedVariable.data)
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
}
</script>
<style>
i {
  cursor: pointer;
}
</style>
