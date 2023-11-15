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
    <div class="my-4 d-flex justify-content-center" v-if="showFrecuenciesTable">
      <button class="btn btn-primary">Statistic Graphic</button>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Statistics from 'statistics.js'
import FrecuenciesTable from '../components/FrecuenciesTable.vue'
let stats = new Statistics({}, {}, {})

export default {
  components: { FrecuenciesTable },
  data() {
    return {
      values: {
        media: null,
        mode: null,
        variance: null,
        standardDeviation: null
      },
      showFrecuenciesTable: true
    }
  },
  computed: {
    ...mapState(['selectedVariable'])
  },

  created() {
    if (!this.selectedVariable.index) {
      this.$router.push({ name: 'Home' })
      return
    }
    this.values.media = this.calculateMedia()
    this.values.mode = this.calculateMode()

    console.log(this.selectedVariable)
    if (this.selectedVariable.type != 'categoric') {
      this.values.variance = this.calculateVariance()
      this.values.standardDeviation = this.calculateStandardVariation()
    }
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
}
</script>
<style>
i {
  cursor: pointer;
}
</style>
