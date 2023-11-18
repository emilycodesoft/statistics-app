<template lang="">
  <Distribution
    :distributionName="'Distribución de Poisson'"
    :data="data"
    :signs="signs"
    @calculate="calculate"
    :result="result"
  />
</template>
<script>
import { jStat } from 'jstat'
import Distribution from './Distribution.vue'

export default {
  components: { Distribution },
  data() {
    return {
      data: {
        lambda: 0
      },
      signs: ['='],
      result: 0
    }
  },
  methods: {
    calculate({ data, sign }) {
      this.result = jStat.poisson.pdf(data.k, data.lambda)
    }
  }
}
</script>
