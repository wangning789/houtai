import api from '../../http/api'
import router from '../../router'
import { Message } from 'element-ui';

export default {
  // 开启命名空间 这个文件就是单独的一个vuex的模块
  namespaced: true,
  state: {
    menus: [],//侧边栏数据,
    msg:[]//用户列表数据
  },
  mutations: {
    //侧边栏请求赋值
    setMenus(state, data) {
      state.menus = data
    },
    // 用户列表赋值
    setusers(state,data){
      state.msg=data
    }
  },
  actions: {
    // 所有的请求都写在actions里面
    // action里面的方法可以传两个参数 第一个参数是整个store(vuex对象) 第二个参数是请求的参数
    // async getMenus({commit}) {
    //   try {
    //       let res = await api.getMenus()
    //   if (res.meta.status === 200) {
    //     // 提交mutation
    //     commit('setMenus', res.data)
    //   }
    //   } catch(err){
    //     console.log(err)
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
    getMenus({commit}){
      api.getMenus().then(res=>{
       // 数据里面添加图标对象
       let msg=[]
       router.options.routes.map((item,index)=>{
         if(item.meta){
           res.data[index-1].icon=item.meta.icon
         }
         if(item.children&&item.meta){
           msg.push(item)
         }
       })
       
        res.data.map((item,index)=>{
         if(item.children){
          item.children.map((item1,index1)=>{
            item1.path=`/${item.path}/${item1.path}`
            // console.log("123",item)
           res.data[index].children[index1].icon=msg[index].children[index1].meta.icon
          })
         }
        })
           res.data.unshift(router.options.routes[0].children[0])
           commit('setMenus',res.data)
        // console.log(res)
       
      }).catch(err=>{
        console.log(err)
      })
      
    },
  
// 用户列表请求
    getusers({commit},{query:query,pagenum:pagenum,pagesize:pagesize}){
      api.getusers(
         query,
         pagenum,
        pagesize
      ).then(res=>{
        commit('setusers',res.data)
        // console.log("123",res)
      }).catch(err=>{
        console.log(err)
      })
    },


    // 编辑用户提交
    getusername({dispatch},{id:id,email:email,mobile:mobile,query:query,pagenum:pagenum,pagesize:pagesize}){
      api.getusername(id,email,mobile).then(res=>{
        Message.success('编辑成功')
        dispatch('getusers',{query,pagenum,pagesize})
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },

    // 添加用户
    getaddusers({commit},{username:username,password:password,email:email,mobile:mobile}){
      api.getaddusers({username,password,email,mobile}).then(res=>{
        if(res.meta.status===201){
        Message.success('添加成功')      
        }else{
          Message.error('添加失败，请重新添加');
        }
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    },

    // 删除单个用户

     async getdelete({id:id}) {
      try {
          let res = await api.getdelete(id)
      // if (res.meta.status === 200) {
        // 提交mutation
        console.log("usr",id)
        // commit('setMenus', res.data)
      // }
      } catch(err){
        console.log(err)
      }
    },

    // getdelete({id:id}){
    //   api.getdelete({id}).then(res=>{
    //     console.log(res)
    //   }).catch(err=>{
    //     console.log(err)
    //   })
    // }
   
  },
}