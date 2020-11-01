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
      getdata(){
          api.getcategories().then(res=>{
              console.log(res)
          }).catch(err=>{
              console.log(err)
          })
      }


    },
  
  }