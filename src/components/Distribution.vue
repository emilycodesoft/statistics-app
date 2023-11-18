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
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Calcular {{ distributionName }}</h1>
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
          <!-- DistributionVariables -->
          <div class="d-flex">
            <div class="d-flex g-3 me-3 align-items-center" v-for="(value, key) in data">
              <div class="me-2">
                <label class="col-form-label">{{ key }}: </label>
              </div>
              <div>
                <input type="number" v-model.number="data[key]" class="form-control" />
              </div>
            </div>
          </div>
          <!-- DistributionProbability -->
          <div class="my-4 d-flex flex-column align-items-center justify-content-center">
            <div>
              <div class="d-flex align-items-center">
                P(x
                <select class="form-select mx-3" v-model="sign">
                  <option :value="sign" v-for="sign in signs">{{ sign }}</option>
                </select>
                <input type="number" class="form-control" placeholder="k" v-model.number="k" />

                )
              </div>
            </div>
            <button class="btn btn-primary mt-4" @click="calculate">Calcular</button>
          </div>
          <!-- DistributionResult -->
          <div class="d-flex justify-content-center" v-if="showResult">
            <p>P(x {{ sign }} {{ k }}) = {{ result }}</p>
          </div>
        </div>

        <div class="modal-footer">
          <router-link :to="{ name: 'Probability' }">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['data', 'signs', 'distributionName', 'result'],
  data() {
    return {
      sign: this.signs[0],
      k: 0,
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
      this.$emit('calculate', { data: { ...this.data, k: this.k }, sign: this.sign })
      this.showResult = true
    }
  }
}
</script>
