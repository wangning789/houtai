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

  // 商品列表数据
  getgoods(query,pagenum,pagesize){
    return service.get(`goods?query=${query}&pagenum=${pagenum}&pagesize=${pagesize}`)
  },

  // 商品分类数据列表
  getcategories(type,pagenum,pagesize){
    return service.get(`categories?type=${type}&pagenum=${pagenum}&pagesize=${pagesize}`)
  },

  //编辑商品提交
  getbianji(id,goods_name,goods_price,goods_number,goods_weight){
    return service.put(`goods/${id}`,{goods_name,goods_price,goods_number,goods_weight})
  },

  // 点击删除商品
  getdeletegoods(id){
    return service.delete(`goods/${id}`)
  },

  // 添加商品
  getaddgoods(goods_name,goods_cat,goods_price,goods_number,goods_weight){
  
    return service.post('goods',{goods_name,goods_cat,goods_price,goods_number,goods_weight})
  },

  //删除商品分类
  getboydlt(id){
    return service.delete(`categories/${id}`)
  },

  //编辑商品匪类
  geteaitfenlei(id,cat_name){
    return service.put(`categories/${id}`,{cat_name})
  },

  //添加商品分类
  getaddcategories(cat_pid,cat_name,cat_level){
    return service.post('categories',{cat_pid,cat_name,cat_level})
  },

  // 查询参数
  getcategoriesid(id,sel){
    return service.get(`categories/${id}/attributes?sel=${sel}`)
  },

  // 添加参数
  postcategories(id,attr_name,attr_sel){
    return service.post(`categories/${id}/attributes`,{attr_name,attr_sel})
  },

  //删除参数
  deletecategories(id,attrid){
    return service.delete(`categories/${id}/attributes/${attrid}`)
  },

  //编辑参数
  eiteitclick(id,attrId,attr_name,attr_sel){
    console.log('123',attrId)
    return service.put(`categories/${id}/attributes/${attrId}`,{attr_name,attr_sel})
  },
  //订单数据列表
  getorders(query,pagenum,pagesize){
    return service.get(`orders?query=${query}&pagenum=${pagenum}&pagesize=${pagesize}`)
  },
  //物流信息
  getlogistics(id){
    return service.get(`/kuaidi/${id}`)
  }
}