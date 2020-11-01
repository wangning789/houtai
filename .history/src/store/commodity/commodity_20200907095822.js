import api from '../../http/api'
import router from '../../router'
import { Message } from 'element-ui';
import dayjs from "dayjs";


export default{
    namespaced: true,
    state: {
        commodity:[]//商品分类
    },
    mutations: {
        //商品分类
        setcommodity(state,data){
            state.commodity=data
        }
    },
    actions: {
        // 商品分类
      getdata({commit},{query:query,pagenum:pagenum,pagesize:pagesize}){
          api.getgoods(query,pagenum,pagesize).then(res=>{
              if(res.meta.status===200){
                  res.data.goods.map(item=>{
                      item.add_time=dayjs(item.add_time).format("YYYY-MM-DD HH:mm:ss");
                  })
              }
              console.log(res)
          }).catch(err=>{
              console.log(err)
          })
      },

    //   商品分类数据
    getcategories({commit},{type:type,pagenum:pagenum,pagesize:pagesize}){
        api.getcategories(type,pagenum,pagesize).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }


    },
  
  }