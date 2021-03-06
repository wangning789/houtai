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
    // 所有的请求都写在actions里面
    // action里面的方法可以传两个参数 第一个参数是整个store(vuex对象) 第二个参数是请求的参数
    // async getMenus({commit}) {
    //   let res = await api.getMenus()
    //   if (res.meta.status === 200) {
    //     // 提交mutation
    //     commit('setMenus', res.data)
    //   }
    // },
    async getMenus({
      commit
  }) {
      let res = await api.getMenus()
      if (res.meta.status === 200) {
          res.data.unshift({
              path: 'home',
              authName: '首页'
          })
          res.data.map(item => {
              item.path = '/' + item.path
              if (item.children && item.children.length > 0) {
                  item.children.map(item1 => {
                      item1.path = item.path + '/' + item1.path
                  })
              }
          })
          console.log(res.data)
          commit('setMenus', res.data)

      }
  },}
}