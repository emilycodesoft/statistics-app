<template lang="">
  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Add Data</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex justify-content-center align-items-center">
          <label for="actual-btn" class="btn btn-primary">Choose a .csv File</label>
          <input
            type="file"
            id="actual-btn"
            name="actual-btn"
            accept=".csv"
            ref="fileInput"
            @change="updateFileName"
            hidden
          />
          <p class="align-self-center">{{ fileName }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Papa from 'papaparse'
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      fileName: ''
    }
  },
  methods: {
    ...mapMutations(['SET_VARIABLES']),
    updateFileName(e) {
      let file = e.target.files[0]
      this.fileName = file.name
      Papa.parse(file, {
        complete: function (results) {
          console.log(results[0][0])
          this.SET_VARIABLES(results[0][0])
          // executed after all files are complete
        }
      })
    }
  }
}
</script>
<style lang=""></style>
