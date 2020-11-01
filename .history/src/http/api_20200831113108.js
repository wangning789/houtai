import service from"./index"


export default {
  login({username, password}) {
    return service.post('/api/login', {
      username,
      password
    })
  },
  getMenus() {
    return service.get('menus')
  }
}