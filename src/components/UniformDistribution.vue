<template lang="">
  <Distribution
    :distributionName="'Uniform Distribution'"
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
        a: 0,
        b: 0
      },
      signs: ['='],
      result: 0
    }
  },
  methods: {
    calculate({ data, sign }) {
      this.result = jStat.uniform.pdf(data.k, data.a, data.b)
    }
  }
}
</script>
