<template>
  <HeaderApp />
  <RouterView />
</template>

<script setup>
import HeaderApp from './components/HeaderApp.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200;6..12,300;6..12,400;6..12,500;6..12,600;6..12,700&display=swap');

* {
  font-family: 'Nunito Sans';
}
</style>
