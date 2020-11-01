import api from '../../http/api'
import router from '../../router'
import { Message } from 'element-ui';


export default{
    namespaced: true,
    state: {
        tableData:[],//角色列表
        roleId:'',//根据角色查询rid
        tree:[]//权限列表
    },
    mutations: {
        //角色列表
        settableData(state,data){
            state.tableData=data
        },
        //根据角色查询rid
        setroleTd(state,data){
            state.roleId=data
        },
        // 权限列表
        settree(state,data){
            state.tree=data
        }
    },
    actions: {
        getrole({commit}){
            api.getrole().then(res=>{
                console.log(res)
                commit('settableData',res)
                if(res.meta.status===200){
                    commit('settableData',res.data)
                }
            }).catch(err=>{
                console.log(err)
            })
        },


        // 根据id查询角色
        getroleid({commit},{id:id}){
            api.getroleid(id).then(res=>{
             if(res.meta.status===200){
                 commit('setroleTd',res.data.roleId)
             }
                console.log("123",res)
            }).catch(err=>{
                console.log(err)
            })
        },

        // 删除用户权限
        getdeleterole({dispatch},{roleId:roleId,rightId:rightId}){
            api.getdeleterole(roleId,rightId).then(res=>{
                if(res.meta.status===200){
                Message.success('取消权限成功')

                }
               
                // dispatch('getrole')
                // console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        },

        // 编辑用户
        getroleodr({dispatch},{id:id,roleName:roleName,roleDesc:roleDesc}){
            api.getroleodr(id,roleName,roleDesc).then(res=>{
                if(res.meta.status===200){
                    Message.success('编辑成功')
                      dispatch('getrole')
                    }
               
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        },

        // 删除分类
        getfenlei({dispatch},{id:id}){
            api.getfenlei(id).then(res=>{
                if(res.meta.status===200){
                    Message.success('编辑成功')
                      dispatch('getrole')
                    }
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        },

        // 添加角色
        getlodi({dispatch},{roleName:roleName,roleDesc:roleDesc}){
            api.getlodi(roleName,roleDesc).then(res=>{
                if(res.meta.status===201){
                    Message.success('添加成功')
                      dispatch('getrole')
                    }
            }).catch(err=>{
                console.log(err)
            })
        },

        // 权限列表
        getquanxian({commit},{type:type}){
            api.getquanxian(type).then(res=>{
                if(res.meta.status===200){
                    commit('settree',res.data)
                    if(res.data.length>10){
                        res.data.map(item=>{
                            if(item.level==="0"){
                                item.level="一级标签"
                            }
                        })
                    }
                }
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        }
    },
  
  }