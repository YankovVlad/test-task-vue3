import { createStore } from 'vuex'

import categories from "./modules/categories"
import subcategories from "./modules/subcategories"
import items from "./modules/items"

export default createStore({
  modules: {
    categories,
    subcategories,
    items
  }
})