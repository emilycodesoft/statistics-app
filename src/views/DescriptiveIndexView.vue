<template lang="">
  <div class="d-flex flex-column align-items-center">
    <h2>Choose the data type</h2>
    <div class="d-flex flex-column align-items-center">
      <router-link :to="{ name: 'UngroupData' }">
        <button class="btn btn-primary mb-4">Ungroup data</button>
      </router-link>
      <router-link :to="{ name: 'GroupData' }">
        <button type="button" class="btn btn-primary">Group Data</button></router-link
      >
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
