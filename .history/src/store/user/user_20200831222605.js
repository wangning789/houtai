import api from '../../http/api'
import router from '../../router'
import {Message} from 'element-ui'

export default {
  // 开启命名空间 这个文件就是单独的一个vuex的模块
  namespaced: true,
  state: {
    menus: []//侧边栏数据
  },
  mutations: {
    //侧边栏请求赋值
    setMenus(state, data) {
      state.menus = data
    }
  },
  actions: {
    // 所有的请求都写在actions里面
    // action里面的方法可以传两个参数 第一个参数是整个store(vuex对象) 第二个参数是请求的参数
    // async getMenus({commit}) {
    //   let res = await api.getMenus()
    //   if (res.meta.status === 200) {
    //     // 提交mutation
    //     commit('setMenus', res.data)
    //   }
    // },

    // 登录请求
    async login({commit}, {username, password}) {
      let res = await api.login({
        username,
        password
      })
      if (res.meta.status === 200) {
        // 存储信息
        localStorage.setItem('adminToken', res.data.token)
        localStorage.setItem('adminUser', JSON.stringify(res.data))
        // 跳转路由
        router.push('/')
        // 提示用户
        Message.success('登录成功')
      } else {
        Message.error(res.meta.msg)
      }
    },

    // 左边导航栏请求
    getMenus(){
      api.getMenus().then(res=>{
        res.data.map((item,index)=>{
          res.data[0].com= 'this.res.data[0].55'
          item.children.map(item1=>{
            item1.path=`/${item.path}/${item1.path}`
          })
        })
       
        console.log(router.options.routes[0].children[0].meta.icon)
        console.log(res)
        commit('setMenus',res.data)
      }).catch(err=>{
        console.log(err)
      })
    }
    // getMenus() {
    //   api.getMenus().then().catch()
    // }
  },
}