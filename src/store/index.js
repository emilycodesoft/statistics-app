// store.js
import { createStore } from 'vuex'

const store = createStore({
  state: {
    /* variables: [], */
    groupData: {
      variables: [],
      results: [],
      totalRecords: 0
    },
    selectedVariable: {
      name: null,
      type: null,
      index: null,
      data: []
    }
  },
  mutations: {
    SET_GROUP_DATA(state, { variables, results, totalRecords }) {
      state.groupData = {
        variables,
        results,
        totalRecords
      }
    },
    SET_SELECTED_VARIABLE(state, { name, type, index, data }) {
      state.selectedVariable = {
        name,
        type,
        index,
        data
      }
    },
    SET_VARIABLES(state, payload) {
      state.variables = payload
    }
  },
  actions: {},
  modules: {}
})

export default store
