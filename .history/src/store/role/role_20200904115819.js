import api from '../../http/api'
import router from '../../router'
import { Message } from 'element-ui';


export default{
    namespaced: true,
    state: {
        tableData:[]//角色列表
    },
    mutations: {
        //角色列表
        settableData(state,data){
            state.tableData=data
        }
    },
    actions: {
        getrole(){
            api.getrole({commit}).then(res=>{
                console.log(res)
                if(res.meta.status===200){
                    commit('settableData',res.data)
                }
            }).catch(err=>{
                console.log(err)
            })
        }


    },
  
  }