import api from '../../http/api'
import router from '../../router'
import { Message } from 'element-ui';
import dayjs from'dayjs'


export default{
    namespaced: true,
    state: {
    orderdata:{}//订单数据
    },
    mutations: {
        //订单数据
    setsrder(state,data){
        state.orderdata=data
    }

    },
    actions: {
      //订单数据列表
      getorders({commit},{query:query,pagenum:pagenum,pagesize:pagesize}){
          api.getorders(query,pagenum,pagesize).then(res=>{
              if(res.meta.status===200){
                res.data.goods.map(item=>{
                    item.create_time=dayjs(item.create_time).format('YYYY-MM-DD HH:mm:ss') 
                })
                commit('setsrder',res.data)
              }
              console.log(res)
          }).catch(err=>{
              console.log(err)
          })
      }

    },
  
  }