import subcategories from "../../requests/subcategories"

export default {
  namespaced: true,
  state: {
    subcategories: [],
    isLoading: false,
    responseCode: null
  },
  getters: {
    subcategories: (state) => state.subcategories,
    isLoading: (state) => state.isLoading,
    responseCodeSubcategories: (state) => state.responseCode
  },
  mutations: {
    SET_SUBCATEGORIES: (state, payload) => state.subcategories = payload,
    SET_LOADING: (state,payload) => {
      state.isLoading= payload
    },
    ADD_SUBCATEGORY: (state, payload) => {
      state.subcategories = [...state.subcategories, payload].reverse()
    },
    EDIT_SUBCATEGORY: (state, payload) => {
      state.subcategories = state.subcategories.filter(item => item.id !== payload.id)
      state.subcategories = [...state.subcategories, payload].reverse()
    },
    SET_RESPONSE_CODE: (state, payload) => {
      state.responseCode = payload
      setTimeout(()=> {
        state.responseCode = null
      },1000)
    }
  },
  actions: {
    fetchSubcategories: async ({commit, dispatch}, payload) => {
      try {
        commit("SET_LOADING", true)
        const {data} = await subcategories.fetchSubcategories()
      if (data) {
        commit('SET_SUBCATEGORIES', data.posts.reverse())
        commit("SET_LOADING", false)
      }
        commit("SET_LOADING", false)
      } catch (error) {
        commit("SET_LOADING", false)
        console.error(error)
      }
      
    },
    createNewSubcategory: async ({commit}, payload) => {
      try {
        const {data} = await subcategories.createNewSubcategory(payload)
        commit("ADD_SUBCATEGORY", data)
        commit("SET_RESPONSE_CODE", res.status)
      } catch (error) {
        console.error(error)
      }
    },
    editSubcategory: async ({commit}, payload) => {
      try {
        const res = await subcategories.editSubcategory(payload)
        commit("EDIT_SUBCATEGORY", res.data)
        commit("SET_RESPONSE_CODE", res.status)
      } catch (error) {
        console.error(error)
      }
    },
  }
}