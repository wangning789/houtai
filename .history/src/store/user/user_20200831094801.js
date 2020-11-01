import api from"../../http/api"
import router from"../../router/index"
import {Message} from 'element-ui'

export default{
    namespaced:true,

    state: {
    },
    mutations: {
        setMenus(state,data){
            state.menus=data
        }
    },
    actions: {
      getlogin(){
        api.login({username,password}).then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
      }

    },
   

}