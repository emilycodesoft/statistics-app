<template lang="">
  <Distribution
    :distributionName="'Binomial Distribution'"
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
        n: 0,
        p: 0
      },
      signs: ['='],
      result: 0
    }
  },
  methods: {
    calculate({ data, sign }) {
      this.result = jStat.binomial.pdf(data.k, data.n, data.p)
    }
  }
}
</script>
