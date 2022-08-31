import axios from "axios"

export default {
  fetchSubcategories() {
    return axios.get(`https://dummyjson.com/posts`)
  },
  createNewSubcategory(payload) {
    return axios.post('https://dummyjson.com/posts/add',payload)
  },
  editSubcategory(payload) {
    return axios.put(`https://dummyjson.com/posts/${payload.id}`, payload)
  }
}