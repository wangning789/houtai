import service from './index'

export default {
  // 登录数据
  login({username, password}) {
    return service.post('login', {
      username,
      password
    })
  },
  // 左边导航数据
  getMenus() {
    return service.get('menus')
  },

  // 用户数据列表
  getusers(query,pagenum,pagesize){
    return service.get(`/users?query=${query}&pagenum=${pagenum}&pagesize=${pagesize}`)
  }
}