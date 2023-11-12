<template lang="">
  <div
    class="modal fade"
    id="myModal2"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Choose the variable to analyze</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="$router.back()"
          ></button>
        </div>
        <div class="modal-body d-flex flex-column justify-content-center">
          <div
            class="form-check my-2"
            @click="setVariable(index)"
            v-for="(variable, index) in variables"
            :key="variable"
          >
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              :id="`flexRadioDefault${index}`"
            />
            <label class="form-check-label" :for="`flexRadioDefault${index}`">
              {{ variable.name }}
              ({{ variable.type }})
            </label>
          </div>
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
          <button type="button" class="btn btn-primary">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  mounted() {
    const myModal = new bootstrap.Modal(document.getElementById('myModal2'))
    myModal.show()
  },
  computed: {
    ...mapState(['variables'])
  },
  methods: {
    setVariable(index) {
      console.log(index)
    }
  }
}
</script>
<style lang=""></style>
