<template lang="">
  <div
    class="modal fade"
    id="myModal"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Introduce los datos</h1>
          <router-link :to="{ name: 'Descriptive' }">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </router-link>
        </div>
        <div class="modal-body d-flex flex-column justify-content-center">
          <div class="d-flex justify-content-center align-items-center">
            <label for="actual-btn" class="btn btn-primary">Escoge un archivo .csv</label>
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
          <p>
            <b>{{ totalRecords }}</b> registros
          </p>

          <button
            class="btn btn-primary align-self-center"
            @click="previewData"
            v-show="totalRecords"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Visualizar datos
          </button>
        </div>
        <div class="modal-footer">
          <router-link :to="{ name: 'Descriptive' }">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </router-link>
          <button
            type="button"
            class="btn btn-primary"
            @click="checkDocument()"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            Siguiente
          </button>
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
      fileName: '',
      results: null,
      variables: [],
      totalRecords: 0
    }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    const myModal = new bootstrap.Modal(document.getElementById('myModal'))
    myModal.show()
  },
  methods: {
    ...mapMutations(['SET_GROUP_DATA']),
    updateFileName(e) {
      let file = e.target.files[0]
      this.fileName = file.name

      const that = this

      Papa.parse(file, {
        dynamicTyping: true,
        complete: function (results) {
          that.results = results.data
          that.totalRecords = results.data.length - 1

          let variableNames = results.data[0]

          variableNames.forEach((name, index) => {
            let type = ''

            if (typeof results.data[1][index] == 'string') {
              type = 'categoric'
            } else if (Number.isInteger(results.data[1][index])) {
              type = 'numeric discrete'
            } else {
              type = 'numeric continue'
            }

            that.variables.push({ name, type })
          })
        }
      })
    },
    previewData() {
      this.SET_GROUP_DATA({
        variables: this.variables,
        results: this.results,
        totalRecords: this.totalRecords
      })
      this.$router.push({ name: 'PreviewData' })
    },
    checkDocument() {
      this.SET_GROUP_DATA({
        variables: this.variables,
        results: this.results,
        totalRecords: this.totalRecords
      })
      this.$router.push({ name: 'SetVariable' })
    }
  }
}
</script>
<style lang=""></style>
