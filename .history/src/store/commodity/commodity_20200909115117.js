import api from '../../http/api'
import router from '../../router'
import { Message } from 'element-ui';
import dayjs from "dayjs";


export default{
    namespaced: true,
    state: {
        commodity:[],//商品分类
        commoditytwo:[],//商品分类2
        total:'',//商品总数
        gories:[],//商品分类数据
        sel:[],//分类参数
        cid:'',//添加参数id
    },
    mutations: {

        //商品分类
        setcommodity(state,data){
            state.commodity=data
        },
        //商品分类2
        setcommoditytwo(state,data){
            state.commoditytwo=data
        },

        // 商品总类
        settotal(state,data){
            state.total=data
        },
        //商品分类数据
        setgories(state,data){
            state.gories=data
        },
        //分类参数
        setsel(state,data){
            state.sel=data
        },

        //添加参数ID
        setID(state,data){
            state.cid=data
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
      //   商品分类数据
      getcategoriesTwo({commit},{type:type,pagenum:pagenum,pagesize:pagesize}){
        api.getcategories(type,pagenum,pagesize).then(res=>{
            if(res.meta.status===200){
                commit('setcommoditytwo',res.data)
            }
           
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
    },

    //添加商品
    getaddgoods({dispatch},{goods_name:goods_name,goods_cat:goods_cat,goods_price:goods_price,goods_number:goods_number,goods_weight:goods_weight}){
        api.getaddgoods(goods_name,goods_cat,goods_price,goods_number,goods_weight).then(res=>{
           if(res.meta.status===201){
               Message.success('添加成功')
           }
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    },

      //删除商品分类
      getboydlt({dispatch},{id:id,type:type,pagenum:pagenum,pagesize:pagesize}){
        api.getboydlt(id).then(res=>{
            if(res.meta.status===200){
                Message.success('删除成功')
                dispatch('getcategoriesTwo',{type,pagenum,pagesize})
            }
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
     },

     //编辑商品分类
     geteaitfenlei({dispatch},{id:id,cat_name:cat_name,type:type,pagenum:pagenum,pagesize:pagesize}){
         api.geteaitfenlei(id,cat_name).then(res=>{
             if(res.meta.status===200){
                 Message.success('编辑成功')
                 dispatch('getcategoriesTwo',{type,pagenum,pagesize})
             }
            //  console.log(res)
         }).catch(err=>{
             console.log(err)
         })
     },

     //添加商品分类
     getaddcategories({dispatch},{cat_pid:cat_pid,cat_name:cat_name,cat_level:cat_level,type:type,pagenum:pagenum,pagesize:pagesize}){
         api.getaddcategories(cat_pid,cat_name,cat_level).then(res=>{
             if(res.meta.status===201){
                 Message.success('分类添加成功')
                 dispatch('getcategoriesTwo',{type,pagenum,pagesize})
             }
             console.log(res)
         }).catch(err=>{
             console.log(err)
         })
     },

     //分类参数
     getcategoriesid({commit},{id:id,sel:sel}){
         api.getcategoriesid(id,sel).then(res=>{
             if(res.meta.status===200&&res.data.length>0){
                 
                 Message.success('获取成功')
                 commit('setsel',res.data)
                 commit('setID',res.data[0].cat_id)
             }else if(res.data.length<1){
                 Message('暂无参数')
             }
             console.log(res)
            
         }).catch(err=>{
             console.log(err)
         })
     },

    //  添加参数
    postcategories({dispatch},{id:id,attr_name:attr_name,attr_sel:attr_sel, cdid:cdid,sel:sel}){
        api.postcategories(id,attr_name,attr_sel).then(res=>{
            if(res.meta.status===201){
                Message.success('添加成功')
                dispatch('getcategoriesid',{id,sel})
            }
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    },

    //删除参数
    deletecategories({dispatch},{id:id,attrid:attrid,sel:sel}){
        api.deletecategories(id,attrid).then(res=>{
            if(res.meta.status===200){
                Message.success('删除成功')
                dispatch('getcategoriesid',{id,sel})
            }
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    },

    //编辑参数
    eiteitclick({dispatch},{id:id,attrId:attrId,attr_name:attr_name,attr_sel:attr_sel}){
        api.eiteitclick(id,attrId,attr_name,attr_sel).then(res=>{
            dispatch('getcategoriesid',{id,attr_sel})
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }


    },

  
  
  }