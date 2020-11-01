import api from '../../http/api'
import router from '../../router'
import { Message } from 'element-ui';
import dayjs from "dayjs";


export default{
    namespaced: true,
    state: {
        commodity:[],//商品分类
        total:'',//商品总数
        gories:[]//商品分类数据
    },
    mutations: {
        //商品分类
        setcommodity(state,data){
            state.commodity=data
        },

        // 商品总类
        settotal(state,data){
            state.total=data
        },
        //商品分类数据
        setgories(state,data){
            state.gories=data
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
              commit('setcommodity',res.data.goods)
              commit('settotal',Number(res.data.total))
              console.log(res)
          }).catch(err=>{
              console.log(err)
          })
      },

    //   商品分类数据
    getcategories({commit},{type:type,pagenum:pagenum,pagesize:pagesize}){
        api.getcategories(type,pagenum,pagesize).then(res=>{
            if(res.meta.status===200){
                res.data.splice(6)
            }
            commit('setgories',res.data)
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    },

    //编辑用户提交
    getbianji({dispatch},{id:id,goods_name:goods_name,goods_price:goods_price,goods_number:goods_number,goods_weight:goods_weight}){
        console.log('321',id,goods_name,goods_price,goods_number,goods_weight)
        api.getbianji(id,goods_name,goods_price,goods_number,goods_weight).then(res=>{
            Message.error('暂时不能编辑')
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    },

    //删除商品
    getdeletegoods({dispatch},{id:id,query:query,pagenum:pagenum,pagesize:pagesize}){
        api.getdeletegoods(id).then(res=>{
            if(res.meta.status===200){
               Message.success('删除成功')
            }
            dispatch('getdata',{query,pagenum,pagesize})
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }


    },
  
  }