<template lang="">
  <div>
    <!-- <grid :cols="groupData.results[0]" :rows="groupData.results.slice(1)"></grid> -->
  </div>
</template>
<script>
// import Grid from 'gridjs-vue'
import { mapState } from 'vuex'
export default {
  /* components: {
    Grid
  }, */
  computed: {
    ...mapState(['groupData'])
  },
  mounted() {
    console.log(this.groupData.results)
  }
}
</script>
<style lang=""></style>
