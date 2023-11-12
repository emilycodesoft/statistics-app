<template lang="">
  <div class="mt-4 ms-4">
    <h2>General Report: {{}}</h2>
    <div class="d-flex justify-content-end w-100 mt-4">
      <div class="text-center w-50 align-self-center">
        <p><b>The frecuencies table cannot be displayed</b></p>
      </div>
      <div class="w-50">
        <h3>Mesuarements</h3>
        <p>
          <b>Media: {{ variable.values.media }}</b>
        </p>
        <p>
          <b>Mode: {{ variable.values.mode }}</b>
        </p>
        <p>
          <b>Variance: {{ variable.values.variance }}</b>
        </p>
        <p>
          <b>Standard Deviation: {{ variance.values.standardDeviation }}</b>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {}
}
</script>
<style lang=""></style>
