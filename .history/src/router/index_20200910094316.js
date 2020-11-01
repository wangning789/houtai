import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from'../Layout/Layout.vue'
import addGoods from'../components/addcommodity/Addcommodity.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    component:Layout,
    children:[
      {
        path:'/',
        name:'Home',
        component: Home,
        meta:{
          icon:"el-icon-news",
          authName:"首页"
        }
      },
    ]
  },
  
  {

      path: '',
      component:Layout,
      meta:{
        icon:"el-icon-link",
        authName:"用户管理"
      },
      children:[
        {
        path:'/users/users',
        name:'users',
        component:()=>import('../components/Users/Users.vue'),
        meta:{
          icon:"el-icon-postcard",
          authName:"用户列表"
        }
      },
      
      ],
    },

    { 
    path: '',
      component:Layout,
      meta:{
        icon:"el-icon-link",
        authName:"权限管理"
      },
      children:[
        {
        path:'/rights/roles',
        name:'roles',
        component:()=>import('../components/Roles/Roles.vue'),
        meta:{
          icon:"el-icon-connection",
          authName:"角色列表"
        }
      },

      {
        path:'/rights/rights',
        name:'rights',
        component:()=>import('../components/Rights/Rights.vue'),
        meta:{
          icon:"el-icon-price-tag",
          authName:"权限列表"
        }
      },
      
      ],
    },

    {
      path: '',
      component:Layout,
      meta:{
        icon:"el-icon-coin",
        authName:"商品管理"
      },
      children:[
         {
        path:'/goods/goods',
        name:'goods',
        component:()=>import('../components/goods/goods.vue'),
        meta:{
          icon:"el-icon-wallet",
          authName:"商品列表"
        }
      },
       {
        path:'/goods/params',
        name:'params',
        component:()=>import('../components/params/params.vue'),
        meta:{
          icon:"el-icon-bangzhu",
          authName:"分类参数"
        }
      },
      
      {
        path:'/goods/categories',
        name:'categories',
        component:()=>import('../components/categories/categories.vue'),
        meta:{
          icon:"el-icon-folder-opened",
          authName:"商品分类"
        }
      },
  
      
      ],
    },
      
    {
      path: '',
      component:Layout,
      meta:{
        icon:"el-icon-date",
        authName:"订单管理"
      },
      children:[
        {
        path:'/orders/orders',
        name:'orders',
        component:()=>import('../components/orders/Orders.vue'),
        meta:{
          icon:"el-icon-printer",
          authName:"订单列表"
        },
      },
      ],
    },

    {
      path: '',
      component:Layout,
      meta:{
        icon:"el-icon-edit",
        authName:"数据统计"
      },
      children:[
       {
        path:'/reports/reports',
        name:'折现图',
        component:()=>import('../components/reports/Reports.vue'),
        meta:{
          icon:"el-icon-folder",
          authName:"数据报表"
        },
      }
      
      ]
  },
  // {
  //   path:'/',
  //   name:'Home',
  //   component: Home,
  //   meta:{
  //     icon:"el-icon-office-building",
  //     tit:"用户管理"
  //   }
  // },
  {
    path: '/login',
    name: 'login',
    component:()=>import("../components/login/login.vue")
  },

  {
    path: '',
    component:Layout,
    children:[
     {
      path:'/nba/nba',
      name:'reports',
      component:()=>import('../components/nba/nba'),
     
    }
    
    ]
},
{
  path: '',
  component:Layout,
  children:[
   {
    path:'/goods/goods',
    name:'addGoods',
    component:()=>import('../components/addcommodity/Addcommodity.vue'),
    meta:{
      icon:"",
      authName:"添加商品"
    },
  }
  
  ]
},


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
