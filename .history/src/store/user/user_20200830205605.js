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
        // 登录请求
        getdata(){
            api.login({username:this.username,password:this.password}).then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        },

    },
   

}