import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    component:Home,
    children:[
      {
        path:'/users/users',
        name:'users',
        component:()=>import('../components/Users/Users.vue')
      },
      {
        path:'/rights/roles',
        name:'roles',
        component:()=>import('../components/Roles/Roles.vue')
      },
      {
        path:'/rights/rights',
        name:'rights',
        component:()=>import('../components/Rights/Rights.vue')
      },
      {
        path:'/goods/goods',
        name:'goods',
        component:()=>import('../components/goods/goods.vue')
      },
      {
        path:'/goods/params',
        name:'params',
        component:()=>import('../components/params/params.vue')
      },
      {
        path:'/goods/categories',
        name:'categories',
        component:()=>import('../components/categories/categories.vue')
      },
      {
        path:'/orders/orders',
        name:'orders',
        component:()=>import('../components/orders/Orders.vue')
      },
      {
        path:'/reports/reports',
        name:'reports',
        component:()=>import('../components/reports/Reports.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component:()=>import("../components/login/login.vue")
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
