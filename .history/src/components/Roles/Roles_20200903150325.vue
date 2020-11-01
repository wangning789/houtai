<template>
 <div>
   <assembly :userlist="userlist" :attribute="attribute">
     <template v-slot:new="scope">
       <!-- <el-switch v-model="scope.scope.row.mg_state"></el-switch> -->
     </template>
     <template v-slot:actci="scope">
        <el-tooltip  content="编辑角色" placement="top-start">
       <el-button  type="primary" @click="click(scope)">编辑</el-button>
       </el-tooltip>
       <el-button  type="danger" @click="click(scope)">删除</el-button>
       <el-button  type="warning" @click="click(scope)">分配</el-button>
     </template>
   </assembly>
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
          width:'100',
          slot:"new"
      },
         {
        label:'状态',
         align:"center",
          width:''
      },
      
    ]

     }

   },
   methods: {
     ...userActions(["getusers"]),

     click(item){
       console.log(item)
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