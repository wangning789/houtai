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
      getdata({commit},{type:type,pagenum:pagenum,pagesize:pagesize}){
          api.getcategories(type,pagenum,pagesize).then(res=>{
              console.log(res)
          }).catch(err=>{
              console.log(err)
          })
      }


    },
  
  }