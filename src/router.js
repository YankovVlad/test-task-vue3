
import { createRouter, createWebHashHistory } from 'vue-router'
export default new createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "login",
      components: {
        layout:() => import("./views/LoginView.vue")
      } ,
    },
    {
      path: '/catalog',
      name: 'categories',
      components: {
        layout: () => import("./views/MainView.vue"),
      },
      children: [
        {
          path: ':catid',
          name: 'subcategories',
          components: {
            centralComponent: () => import("./components/bars/SubcategoryBar.vue"),
          },
        },
        {
          path: ':catid/:subcatid',
          name: 'items',
          components: {
            centralComponent: () => import("./components/bars/SubcategoryBar.vue"),
            rightComponent: () => import("./components/bars/itemsBar/ItemsBar.vue"),
      },
        }
      ]
    },
    
  ]
})