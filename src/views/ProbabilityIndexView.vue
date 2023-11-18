<template lang="">
  <div class="d-flex flex-column align-items-center">
    <h2 class="mb-4">Probability's Distributions</h2>

    <router-link :to="{ name: 'BinomialDistribution' }">
      <button class="btn btn-primary mb-3">Binomial Distribution</button>
    </router-link>
    <router-link :to="{ name: 'HypergeometricDistribution' }">
      <button class="btn btn-primary mb-3">Hypergeometric Distribution</button>
    </router-link>
    <router-link :to="{ name: 'PoissonDistribution' }">
      <button class="btn btn-primary mb-3">Poisson Distribution</button>
    </router-link>
    <router-link :to="{ name: 'PascalDistribution' }">
      <button class="btn btn-primary mb-3">Pascal Distribution</button>
    </router-link>
    <router-link :to="{ name: 'ExponentialDistribution' }">
      <button class="btn btn-primary mb-3">Exponential Distribution</button>
    </router-link>
    <router-link :to="{ name: 'UniformDistribution' }">
      <button class="btn btn-primary mb-3">Uniform Distribution</button>
    </router-link>
    <router-link :to="{ name: 'NormalDistribution' }">
      <button class="btn btn-primary mb-3">Normal Distribution</button>
    </router-link>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
