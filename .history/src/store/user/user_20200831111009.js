import api from '../../http/api'
import router from '../../router'


export default {
  // 开启命名空间 这个文件就是单独的一个vuex的模块
  namespaced: true,
  state: {
    menus: []
  },
  mutations: {
    setMenus(state, data) {
      state.menus = data
    }
  },
  actions: {
    getMenus(){
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
}