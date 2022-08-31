import items from "../../requests/items"
export default {
  namespaced: true,
  state: {
    items: [],
    isLoading: false,
    responseCode: null
  },
  getters: {
    items: (state) => state.items,
    isLoading: (state) => state.isLoading,
    responseCodeItems: (state) => state.responseCode
  },
  mutations: {
    SET_ITEMS: (state, payload) => state.items = payload,
    SET_LOADING: (state, payload) => state.isLoading = payload,
    ADD_ITEM: (state, payload) => {
      state.items = [...state.items, payload].reverse()
    },
    SET_RESPONSE_CODE: (state, payload) => {
      state.responseCode = payload
      setTimeout(()=> {
        state.responseCode = null
      },1000)
    }
  },
  actions: {
    fetchItems: async ({commit}, payload) => {
      try {
        commit("SET_LOADING", true)
        const {data} = await items.fetchItems()
        commit('SET_ITEMS', data.products.reverse())
        commit("SET_LOADING", false)
      } catch (error) {
        commit("SET_LOADING", false)
        console.error(error)
      }
    },
    createNewItem: async ({commit}, payload) => {
      try {
        const res = await items.createNewItem(payload)
        commit("ADD_ITEM", res.data)
        commit("SET_RESPONSE_CODE", res.status)
      } catch (error) {
        console.error(error)
      }
    }
  }
}