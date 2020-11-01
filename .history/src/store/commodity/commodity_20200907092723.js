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
        // 商品分类
      getdata({commit},{query:query,pagenum:pagenum,pagesize:pagesize}){
          api.getcategories(query,pagenum,pagesize).then(res=>{
              console.log(res)
          }).catch(err=>{
              console.log(err)
          })
      }


    },
  
  }