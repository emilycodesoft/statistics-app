<template lang="">
  <Distribution
    :distributionName="'Poisson Distribution'"
    :data="data"
    :signs="signs"
    @calculate="calculate"
  />
</template>
<script>
import Statistics from 'statistics.js'
import Distribution from './Distribution.vue'

let stats = new Statistics({}, {}, {})

export default {
  components: { Distribution },
  data() {
    return {
      data: {
        lambda: 0
      },
      signs: ['=', '>=', '<=', '>', '<']
    }
  },
  methods: {
    calculate({ data, sign }) {
      return true
    }
  }
}
</script>
