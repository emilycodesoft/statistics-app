<template lang="">
  <Distribution
    :distributionName="'Exponential Distribution'"
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
        lambda: 0
      },
      signs: ['='],
      result: 0
    }
  },
  methods: {
    calculate({ data, sign }) {
      this.result = jStat.exponential.pdf(data.k, data.lambda)
    }
  }
}
</script>
