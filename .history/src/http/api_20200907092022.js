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
  },
  // 编辑用户提交
  getusername(id,email,mobile){
    return service.put(`users/${id}`,{email,mobile})
  },

  // 添加用户
  getaddusers({username,password,email,mobile}){
    return service.post('/users',{username,password,email,mobile})
  },

   // 删除单个用户
  getdelete(id){
  
    return service.delete(`users/${id}`)
  },

  // 分配用户
  getdistribution(id,rid){
    return service.put(`users/${id}/role`,{rid})
  },

  // 根据id查询用户信息
  getinformation(id){
    return service.get(`users/${id}`)
  },

  // 角色列表
  getrole(){
    return service.get('roles')
  },

  // 根据id查询角色
  getroleid(id){
  
    return service.get(`roles/${id}`)
  },
  // 删除用户权限
  getdeleterole(roleId,rightId){
    return service.delete(`roles/${roleId}/rights/${rightId}`)
  },

  // 编辑用户
  getroleodr(id,roleName,roleDesc){
    return service.put(`roles/${id}`,{roleName,roleDesc})
  },

  // 删除分类
  getfenlei(id){
    return service.delete(`roles/${id}`)
  },

  // 添加角色
  getlodi(roleName,roleDesc){
    return service.post('roles',{roleName,roleDesc})
  },

  // 权限列表
  getquanxian(type){
    return service.get(`rights/${type}`)
  },

  // 商品分类列表
  getcategories(type,pagenum,pagesize){
    return service.get(`categories?type=${type}&pagenum=${pagenum}&pagesize=${pagesize}`)
  }

}