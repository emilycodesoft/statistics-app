<template lang="">
  <div
    class="modal fade"
    id="myModal3"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Calculate Binomial Distribution</h1>
          <router-link :to="{ name: 'Probability' }">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </router-link>
        </div>
        <div class="modal-body d-flex flex-column justify-content-center">
          <div class="d-flex">
            <div class="d-flex g-3 me-3 align-items-center">
              <div class="me-2">
                <label class="col-form-label">n: </label>
              </div>
              <div>
                <input type="number" v-model.number="n" class="form-control" />
              </div>
            </div>
            <div class="d-flex g-3 align-items-center">
              <div class="d-flex me-3">
                <label class="col-form-label">p: </label>
              </div>
              <div class="col-auto">
                <input type="number" v-model.number="p" class="form-control" />
              </div>
            </div>
          </div>
          <div class="my-4 d-flex flex-column align-items-center justify-content-center">
            <div>
              <div class="d-flex align-items-center">
                P(x
                <select class="form-select mx-3" v-model="sign">
                  <option selected value="=">=</option>
                </select>
                <input type="number" class="form-control" placeholder="k" v-model.number="k" />

                )
              </div>
            </div>
            <button class="btn btn-primary mt-4" @click="calculate">Calculate</button>
          </div>
          <div class="d-flex justify-content-center" v-if="showResult">
            <p>P(x {{ sign }} {{ k }}) = {{ result }}</p>
          </div>
        </div>
        <div class="modal-footer">
          <router-link :to="{ name: 'Probability' }">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Statistics from 'statistics.js'

let stats = new Statistics({}, {}, {})

export default {
  data() {
    return {
      n: 0,
      p: 0,
      k: 0,
      result: null,
      sign: '',
      showResult: false
    }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    const myModal = new bootstrap.Modal(document.getElementById('myModal3'))
    myModal.show()
  },
  methods: {
    calculate() {
      this.result = parseFloat(stats.binomialProbabilityMass(this.k, this.n, this.p).toFixed(2))
      this.showResult = true
    }
  }
}
</script>
