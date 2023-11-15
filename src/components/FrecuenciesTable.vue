<template lang="">
  <table class="table table-sm">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Intervalo</th>
        <th scope="col">Frecuencia absoluta</th>
        <th scope="col">Frecuencia acumulada</th>
        <th scope="col">Frecuencia relativa</th>
        <th scope="col" v-if="selectedVariable.type == 'numeric continue'">Marca de clase</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(interval, index) in intervals" :key="index">
        <td>{{ index + 1 }}</td>
        <td v-if="selectedVariable.type == 'numeric continue'">
          [{{ interval.inferiorLimit }} - {{ interval.superiorLimit }}]
        </td>
        <td v-else>{{ interval.value }}</td>
        <td>{{ interval.absoluteFrecuency }}</td>
        <td>{{ interval.acumulativeFrecuency }}</td>
        <td>{{ interval.relativefrecuency }}</td>
        <td v-if="selectedVariable.type == 'numeric continue'">
          {{ ((interval.inferiorLimit + interval.superiorLimit) / 2).toFixed(fixedNumber) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import Statistics from 'statistics.js'
let stats = new Statistics({}, {}, {})

import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      intervals: [],
      fixedNumber: 2,
      showFrecuenciesTable: true
    }
  },
  computed: {
    ...mapState(['groupData', 'selectedVariable'])
  },
  methods: {
    ...mapMutations(['SET_INTERVALS']),
    frecuenciesForNonContinuousValues() {
      let uniqueValues = []

      let dataSorted = this.selectedVariable.data.sort(function (a, b) {
        return a - b
      })

      dataSorted.forEach((element) => {
        if (!uniqueValues.includes(element)) {
          uniqueValues.push(element)
        }
      })

      if (uniqueValues.length < this.selectedVariable.data.length) {
        let acumulativeF = 0
        uniqueValues.forEach((value) => {
          let interval = {
            value,
            relativefrecuency: 0,
            absoluteFrecuency: 0,
            acumulativeFrecuency: 0
          }

          for (let j = 0; j <= dataSorted.length; j++) {
            if (dataSorted[j] == value) {
              interval.absoluteFrecuency++
            }
          }
          acumulativeF += interval.absoluteFrecuency
          interval.acumulativeFrecuency = acumulativeF
          interval.relativefrecuency = parseFloat(
            (interval.absoluteFrecuency / this.groupData.totalRecords).toFixed(2)
          )
          this.intervals.push(interval)
        })
      } else {
        this.$emit('setFrecuenciesTable', false)
        return
      }
    },
    frecuenciesForContinuousValues() {
      let numberOfIntervals = Math.round(1 + 3.33 * Math.log(this.groupData.totalRecords))
      let amplitude = stats.range(this.selectedVariable.data) / numberOfIntervals

      if (!amplitude) {
        this.$emit('setFrecuenciesTable', false)
        return
      }

      let inferiorLimitI = stats.minimum(this.selectedVariable.data)
      let superiorLimit = parseFloat((inferiorLimitI + amplitude).toFixed(this.fixedNumber))

      let dataSorted = this.selectedVariable.data.sort(function (a, b) {
        return a - b
      })
      let acumulativeF = 0

      for (let i = 0; i <= numberOfIntervals; i++) {
        let interval = {
          inferiorLimit: inferiorLimitI,
          relativefrecuency: 0,
          absoluteFrecuency: 0,
          acumulativeFrecuency: 0,
          superiorLimit: superiorLimit
        }
        for (let j = 0; j <= dataSorted.length; j++) {
          if (dataSorted[j] >= interval.inferiorLimit && dataSorted[j] < interval.superiorLimit) {
            interval.absoluteFrecuency++
          }
        }
        acumulativeF += interval.absoluteFrecuency
        interval.acumulativeFrecuency = acumulativeF
        interval.relativefrecuency = parseFloat(
          (interval.absoluteFrecuency / this.groupData.totalRecords).toFixed(2)
        )
        this.intervals.push(interval)
        inferiorLimitI = interval.superiorLimit
        superiorLimit = parseFloat((inferiorLimitI + amplitude).toFixed(this.fixedNumber))
      }
    }
  },
  mounted() {
    if (this.selectedVariable.type == 'numeric discrete') {
      this.fixedNumber = 0
    }

    if (
      this.selectedVariable.type == 'numeric discrete' ||
      this.selectedVariable.type == 'categoric'
    ) {
      this.frecuenciesForNonContinuousValues()
    } else {
      this.frecuenciesForContinuousValues()
    }
    this.SET_INTERVALS(this.intervals)
  }
}
</script>
<style lang=""></style>
