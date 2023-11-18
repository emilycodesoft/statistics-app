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
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            Escoge la variable que quieres analizar
          </h1>
          <router-link :to="{ name: 'GroupData' }">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </router-link>
        </div>
        <div class="modal-body d-flex flex-column justify-content-center">
          <!-- <p class="text-justify">
            De tus datos tabulados, escoge la columna o variable que quieres analizar:
          </p> -->
          <div
            class="form-check my-2"
            v-for="(variable, index) in groupData.variables"
            :key="variable"
          >
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              :id="`flexRadioDefault${index}`"
              :value="index"
              v-model="variableIndex"
            />
            <label class="form-check-label" :for="`flexRadioDefault${index}`">
              {{ variable.name }}
              ({{ variable.type }})
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <router-link :to="{ name: 'GroupData' }">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Cerrar
            </button></router-link
          >
          <button
            type="button"
            class="btn btn-primary"
            @click="seeGeneralReport"
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
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      variableIndex: null
    }
  },
  mounted() {
    if (!this.groupData.totalRecords) {
      this.$router.push({ name: 'GroupData' })
      return
    }
    // eslint-disable-next-line no-undef
    const myModal = new bootstrap.Modal(document.getElementById('myModal2'))
    myModal.show()
  },
  computed: {
    ...mapState(['groupData'])
  },
  methods: {
    ...mapMutations(['SET_SELECTED_VARIABLE']),
    seeGeneralReport() {
      if (this.variableIndex == null) return

      let res = this.groupData.results.slice(1).map((element) => {
        return element[this.variableIndex]
      })

      let data = res.filter((element) => typeof element !== 'undefined')

      this.SET_SELECTED_VARIABLE({
        ...this.groupData.variables[this.variableIndex],
        index: this.variableIndex,
        data
      })
      /* const myModal = new bootstrap.Modal(document.getElementById('modal-backdrop'))
      myModal.remove() */
      this.$router.push({ name: 'Results' })
    }
  }
}
</script>
<style lang=""></style>
