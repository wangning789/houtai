import api from '../../http/api'
import router from '../../router'
import { Message } from 'element-ui';


export default{
    namespaced: true,
    state: {
    
    },
    mutations: {
       
    },
    actions: {
      //订单数据列表
      getorders({commit},{query:query,pagenum:pagenum,pagesize:pagesize}){
          api.getorders(query,pagenum,pagesize).then(res=>{
              console.log(res)
          }).catch(err=>{
              console.log(err)
          })
      }

    },
  
  }