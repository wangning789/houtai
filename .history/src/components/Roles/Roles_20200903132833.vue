<template>
 <div>
   <assembly :userlist="userlist" :attribute="attribute"></assembly>
 </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
const userModule=createNamespacedHelpers('user');
const { mapState: userState, mapActions: userActions } = userModule;

 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
      // 用户列表数据  
     arr:[],
    //  用户列表数量
     total:'',
     query:'',
     pagenum:1,
    pagesize:5,

    
    //  列表属性
    attribute:[
      {
        label:'姓名',
        prop:'username',
        align:"center",
        width:'300'
      },
      {
        label:'角色',
        prop:'role_name',
         align:"center",
          width:'300'
      },
      {
        label:'电话',
        prop:'mobile',
         align:"center",
          width:'300'
      },
      {
        label:'邮箱',
        prop:'email',
         align:"center",
          width:'300'
      },
      {
        label:'状态',
        prop:'mg_state',
         align:"center",
          width:'100'
      },
      
    ]

     }

   },
   methods: {
     ...userActions(["getusers"]),

     click(){
      //  console.log(this.msg)
     }
   },
   mounted() {
   this.getusers({
      query:this.query,
      pagenum:this.pagenum,
      pagesize:this.pagesize
   })
  
   },
   watch: {

   },
   computed: {
     ...userState(["userlist","usertotal"])
   }
 }
</script>

<style scoped lang='scss'>

</style>