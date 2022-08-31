import axios from "axios"

export default {
  fetchCategories() {
    return axios.get('http://jsonplaceholder.typicode.com/posts')
  },
  newCategory(payload) {
    return axios.post('http://jsonplaceholder.typicode.com/posts', payload)
  },
  editCategory(payload) {
    return axios.put(`http://jsonplaceholder.typicode.com/posts/${payload.id}`, payload)
  }
}
