// store.js
import { createStore } from 'vuex'

const store = createStore({
  state: {
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
    },
    intervals: []
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
    SET_INTERVALS(state, payload) {
      console.log(payload)
      state.intervals = payload
    }
  },
  actions: {},
  modules: {}
})

export default store
