<template>
  <main>
    <div class="d-flex flex-column justify-center align-items-center vh-50">
      <h1 class="my-4">Bienvenido a Statistics</h1>
      <div class="d-flex flex-column align-items-center h-100">
        <router-link :to="{ name: 'Descriptive' }">
          <button class="btn btn-primary mb-4">Estadistica</button>
        </router-link>
        <router-link :to="{ name: 'Probability' }">
          <button class="btn btn-primary">Probabilidad</button>
        </router-link>
      </div>
    </div>
  </main>
</template>
