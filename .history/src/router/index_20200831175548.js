import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from'../Layout/Layout.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    component:Layout,
    children:[
      // {
      //   path:'/',
      //   name:'Home',
      //   component: Home,
      //   meta:{
      //     icon:"el-icon-office-building",
      //     tit:"用户管理"
      //   }
      // },
      // {
      //   path:'',
      //   name:'users',
      //   component:()=>import('../components/Users/Users.vue'),
      //   meta:{
      //     icon:"el-icon-office-building",
      //     tit:"用户管理"
      //   }
      // },
      // {
      //   path:'/users/users',
      //   name:'users',
      //   component:()=>import('../components/Users/Users.vue'),
      //   meta:{
      //     icon:"el-icon-office-building",
      //     tit:"用户列表"
      //   }
      // },
      
      // {
      //   path:'/rights/roles',
      //   name:'roles',
      //   component:()=>import('../components/Roles/Roles.vue'),
      //   meta:{
      //     icon:"el-icon-connection",
      //     tit:"角色列表"
      //   }
      // },
      // {
      //   path:'',
      //   name:'',
      //   component:()=>import(''),
      //   meta:{
      //     icon:"el-icon-price-tag",
      //     tit:"权限管理"
      //   }
      // },
      
      // {
      //   path:'/rights/rights',
      //   name:'rights',
      //   component:()=>import('../components/Rights/Rights.vue'),
      //   meta:{
      //     icon:"el-icon-price-tag",
      //     tit:"权限列表"
      //   }
      // },
      // {
      //   path:'',
      //   name:'',
      //   component:()=>import(''),
      //   meta:{
      //     icon:"el-icon-connection",
      //     tit:"商品管理"
      //   }
      // },


      // {
      //   path:'/goods/goods',
      //   name:'goods',
      //   component:()=>import('../components/goods/goods.vue'),
       
      // },
      // {
      //   path:'/goods/params',
      //   name:'params',
      //   component:()=>import('../components/params/params.vue')
      // },
      // {
      //   path:'/goods/categories',
      //   name:'categories',
      //   component:()=>import('../components/categories/categories.vue')
      // },
      // {
      //   path:'/orders/orders',
      //   name:'orders',
      //   component:()=>import('../components/orders/Orders.vue')
      // },
      // {
      //   path:'/reports/reports',
      //   name:'reports',
      //   component:()=>import('../components/reports/Reports.vue')
      // }
    ]
  },
  {
    path:'/',
    name:'Home',
    component: Home,
    meta:{
      icon:"el-icon-office-building",
      tit:"用户管理"
    }
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
