import service from"./index"


export default {
  login({username, password}) {
    return service.post('/api/login', {
      username,
      password
    })
  },
  mus() {
    return service.get('menus')
  }
}