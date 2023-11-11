<template>
  <div class="about m-4">
    <h2>Choose the data type</h2>
    <div class="d-flex flex-column align-items-center">
      <router-link to="/descriptive-statistics">
        <button class="btn btn-primary mb-4">Ungroup data</button>
      </router-link>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Group Data
      </button>
    </div>
  </div>
  <router-view></router-view>
  <UploadDataModal></UploadDataModal>
</template>
<script>
import UploadDataModal from '../components/UploadDataModal.vue'
export default {
  components: { UploadDataModal }
}
</script>
<style></style>
