import axios from 'axios'

export default {
  fetchItems() {
    return axios.get(`https://dummyjson.com/products`)
  },
  createNewItem(payload) {
    return axios.post('https://dummyjson.com/products/add',payload)
  }
}
