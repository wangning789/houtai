<template>
 <div>
   <assembly
    :userlist="userlist" 
   :attribute="attribute"
    :usertotal="usertotal"
     @handleSizeChange="handleSizeChange"
     @handleCurrentChange="handleCurrentChange">
     <template v-slot:new="scope">
       <el-switch v-model="scope.scope.row.mg_state"></el-switch>
     </template>
     <template v-slot:actci="scope">
        <el-tooltip  content="编辑角色" placement="top-start">
       <el-button  type="primary" @click="clickedit(scope)">编辑</el-button>
       </el-tooltip>
       <el-button  type="danger" @click="click(scope)">删除</el-button>
       <el-button  type="warning" @click="click(scope)">分配</el-button>
     </template>
   </assembly>
    <Popup :dialogVisible="dialogVisible"></Popup>
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

    dialogVisible:false,

    
    //  列表属性
    attribute:[
       {
        label:'#',
        align:"center",
        type:'index',
        width:'50'
      },
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
          width:'200'
      },
      {
        label:'状态',
        prop:'mg_state',
         align:"center",
          width:'80',
          slot:"new"
      },
         {
        label:'操作',
         align:"center",
          width:'300',
          name:"name"
      },
      
    ]

     }

   },
   methods: {
     ...userActions(["getusers"]),

     click(item){
       console.log(item)
     },
    //  点击编辑显示弹出框
    clickedit(){
      this.dialogVisible=true
    },

     handleSizeChange(val){
       this.pagesize=val
        this.getusers({
      query:this.query,
      pagenum:this.pagenum,
      pagesize:this.pagesize
   })
          //  console.log(`每页 ${val} 条`);
     },
     handleCurrentChange(val){
       this.pagenum=val
      this.getusers({
      query:this.query,
      pagenum:this.pagenum,
      pagesize:this.pagesize
   })
        console.log(`当前页: ${val}`);
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