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
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Add Data</h1>
          <button
            type="button"
            class="btn-close"
            @click="$router.back()"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex flex-column justify-content-center">
          <div class="d-flex justify-content-center align-items-center">
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
          <p>
            <b>{{ totalRecords }}</b> records
          </p>
          <button class="btn btn-primary align-self-center">Preview data</button>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="$router.back()"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="checkDocument()">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Papa from 'papaparse'
import { mapMutations } from 'vuex'
import Statistics from 'statistics.js'

let stats = new Statistics({}, {}, {})

export default {
  data() {
    return {
      fileName: '',
      totalRecords: 0
    }
  },
  mounted() {
    const myModal = new bootstrap.Modal(document.getElementById('myModal'))
    myModal.show()
  },
  methods: {
    ...mapMutations(['SET_VARIABLES']),
    calculateMedia(data) {
      return stats.median(data)
    },
    calculateMode(data) {
      return stats.mode(data)
    },
    updateFileName(e) {
      let file = e.target.files[0]
      this.fileName = file.name

      const that = this

      Papa.parse(file, {
        dynamicTyping: true,
        complete: function (results) {
          that.totalRecords = results.data.length - 2

          let variableNames = results.data[0]
          let variables = []

          for (let index = 0; index < variableNames.length; index++) {
            let type = ''
            let values = {
              media: null,
              mode: null,
              midRange: null,
              variance: null,
              standardDeviation: null
            }
            let data = results.data.map((element) => {
              return element[index]
            })

            values.media = that.calculateMedia(data)
            values.mode = that.calculateMode(data)

            if (values.mode.length == results.data.length) {
              values.mode = null
            }

            console.log(values)

            if (typeof results.data[1][index] == 'string') {
              type = 'categoric'
            } else if (Number.isInteger(results.data[1][index])) {
              type = 'numeric discrete'
            } else {
              type = 'numeric continue'
            }

            variables.push({
              name: variableNames[index],
              type,
              ...values
            })
          }
          that.SET_VARIABLES(variables)
        }
      })
    },
    checkDocument() {
      this.$router.push({ name: 'SetVariable' })
    }
  }
}
</script>
<style lang=""></style>
