import service from"./index"


export default {
  login({username, password}) {
    return service.post('/login', {
      username,
      password
    })
  },
  of() {
    return service.get('roles')
  }
}