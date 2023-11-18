<template lang="">
  <Distribution
    :distributionName="'Hypergeometric Distribution'"
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
        N: 0,
        m: 0,
        n: 0
      },
      signs: ['='],
      result: 0
    }
  },
  methods: {
    calculate({ data, sign }) {
      this.result = jStat.hypgeom.pdf(data.k, data.N, data.m, data.n)
    }
  }
}
</script>
