// store.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    variables: []
  },
  mutations: {
    SET_VARIABLES(state, payload) {
      state.variables = payload
    }
    // tus mutaciones aquí
  },
  actions: {
    // tus acciones aquí
  },
  modules: {
    // tus módulos aquí
  }
})
