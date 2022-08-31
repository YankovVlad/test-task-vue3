import categories from "../../requests/categories"

export default {
  namespaced: true,
  state: {
    categories: [],
    isLoading: false,
    responseCode: null
  },
  getters: {
    categories: (state) => state.categories,
    isLoading: (state) => state.isLoading,
    responseCodeCategories: (state) => state.responseCode
  },
  mutations: {
    SET_CATEGORIES: (state, payload) => {
      state.categories = payload
    },
    SET_LOADING: (state,payload) => {
      state.isLoading= payload
    },
    ADD_CATEGORY: (state, payload) => {
      state.categories = [...state.categories, payload].reverse()
    },
    EDIT_CATEGORY: (state, payload) => {
      state.categories = state.categories.filter(item => item.id !== payload.id)
      state.categories = [...state.categories, payload].reverse()
    },
    SET_RESPONSE_CODE: (state, payload) => {
      state.responseCode = payload
      setTimeout(()=> {
        state.responseCode = null
      },1000)
    }
  },
  actions: {
    fetchCategories: async ({commit}) => {
      try {
        commit("SET_LOADING", true)
        const { data } = await categories.fetchCategories()
        commit('SET_CATEGORIES', data.reverse())
        commit("SET_LOADING", false)

      } catch (error) {
        commit("SET_LOADING", false)
        console.error(error)
      }
      
    },
    createNewCategory: async ({commit}, payload) => {
      try {
        const res = await categories.newCategory(payload)
        commit("ADD_CATEGORY", res.data)
        commit("SET_RESPONSE_CODE", res.status)
      } catch (error) {
        console.error(error)
      }
    },
    editCategory: async ({commit}, payload) => {
      try {
        const res = await categories.editCategory(payload)
        commit("EDIT_CATEGORY", res.data)
        commit("SET_RESPONSE_CODE", res.status)
      } catch (error) {
        console.error(error)
      }
    },
  }
}