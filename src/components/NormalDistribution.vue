<template lang="">
  <Distribution
    :distributionName="'Normal Distribution'"
    :data="data"
    :signs="signs"
    @calculate="calculate"
    :result="result"
  />
</template>
<script>
import Distribution from './Distribution.vue'
import { jStat } from 'jstat'
export default {
  components: { Distribution },
  data() {
    return {
      data: {
        mean: 0,
        deviation: 0
      },
      result: 0,
      signs: ['='],
      result: 0
    }
  },
  methods: {
    calculate({ data, sign }) {
      this.result = jStat.normal.pdf(data.k, data.mean, data.deviation)
    }
  }
}
</script>
