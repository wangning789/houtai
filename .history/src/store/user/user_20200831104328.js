import api from"../../http/api"
import router from"../../router/index"
import {Message} from 'element-ui'

export default{
    namespaced:true,

    state: {
    },
    mutations: {
        setMenus(state,data){
            state.menus=data
        }
    },
    actions: {
      async getlogin({commit}, {username, password}) {
        let res = await api.login({
          username,
          password
        })
        if (res.meta.status === 200) {
          // 存储信息
          localStorage.setItem('adminToken', res.data.token)
          localStorage.setItem('adminUser', JSON.stringify(res.data))
          // 跳转路由
          router.push('/menus')
          // 提示用户
          Message.success('登录成功')
        } else {
          Message.error(res.meta.msg)
        }
      }
      // getMenus() {
      //   api.getMenus().then().catch()
      // }
    },


    getdata(){
      api.getMenus().then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },


    async getMenus({commit}) {
      let res = await api.getMenus()
      if (res.meta.status === 200) {
        // 提交mutation
        commit('setMenus', res.data)
      }
    },
   

}