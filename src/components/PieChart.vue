<template lang="">
  <div
    style="position: relative; height: 40vh; width: 100vw"
    class="d-flex justify-content-center mb-4"
  >
    <canvas id="myChart"></canvas>
  </div>
</template>
<script>
import Chart from 'chart.js/auto'
import { mapState } from 'vuex'
export default {
  props: ['labels', 'data', 'randomColors'],
  computed: {
    ...mapState(['intervals'])
  },
  mounted() {
    const ctx = document.getElementById('myChart')

    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: '',
            data: this.data,
            fill: false,
            backgroundColor: this.randomColors,
            borderWidth: 1,
            hoverOffset: 4
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        responsive: true
      }
    })
  }
}
</script>
<style lang=""></style>
