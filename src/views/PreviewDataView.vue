<template lang="">
  <div class="mt-4 mx-3">
    <h2>
      <i class="fa-solid fa-arrow-left pe" @click="$router.back()"></i>
      Preview Data
    </h2>
    <table class="table mt-4 table-bordered table-responsive mx-4 w-75">
      <thead>
        <tr class="table-primary">
          <th scope="col" v-for="(header, index) in groupData.results[0]" :key="index">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in groupData.results.slice(1)" :key="index">
          <td v-for="d in data" :key="d">{{ d }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['groupData'])
  }
}
</script>
<style lang=""></style>
