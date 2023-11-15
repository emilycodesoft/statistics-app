<template lang="">
  <table class="table">
    <thead>
      <tr>
        <th scope="col" v-for="(header, index) in results[0]" :key="index">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data, index) in results.slice(1)" :key="index">
        <td>{{ data[index] }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {}
</script>
<style lang=""></style>
