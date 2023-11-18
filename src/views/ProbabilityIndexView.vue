<template lang="">
  <div class="d-flex flex-column align-items-center">
    <h2 class="mb-4">Distribuciones de Probabilidad</h2>

    <router-link :to="{ name: 'BinomialDistribution' }">
      <button class="btn btn-primary mb-3">Binomial Distribución</button>
    </router-link>
    <router-link :to="{ name: 'HypergeometricDistribution' }">
      <button class="btn btn-primary mb-3">Distribución Hipergeometrica</button>
    </router-link>
    <router-link :to="{ name: 'PoissonDistribution' }">
      <button class="btn btn-primary mb-3">Distribución de Poisson</button>
    </router-link>
    <router-link :to="{ name: 'PascalDistribution' }">
      <button class="btn btn-primary mb-3">Distribución Binomial negativa</button>
    </router-link>
    <router-link :to="{ name: 'ExponentialDistribution' }">
      <button class="btn btn-primary mb-3">Distribución Exponencial</button>
    </router-link>
    <router-link :to="{ name: 'UniformDistribution' }">
      <button class="btn btn-primary mb-3">Distribución Uniforme</button>
    </router-link>
    <router-link :to="{ name: 'NormalDistribution' }">
      <button class="btn btn-primary mb-3">Distribución Normal</button>
    </router-link>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
