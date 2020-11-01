<template>
 <div>
<el-card>
  <div style="margin:15px 0px;">
  <el-input placeholder="请输入内容" v-model="content" class="input-with-select">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
    <el-button type="primary" style="margin-left:20px;">添加用户</el-button>
</div>


   <el-table
    :data="msg"
    border
    style="width: 100vw">
  <el-table-column
      label="#"
      type="index"
      width="70"
      align="center">
      
    </el-table-column>
    <el-table-column
      label="姓名"
      align="center"
      >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.username}}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="角色"
      align="center"
     >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.role_name}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="电话"
      align="center"
     >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.mobile}}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="邮箱"
      align="center"
      >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.email}}</span>
      </template>
    </el-table-column>
      <el-table-column
      label="状态"
      width="70"
      align="center">
      <template slot-scope="scope">
       <el-switch v-model="scope.row.mg_state">
</el-switch>
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template slot-scope="scope">
        <el-tooltip class="item" effect="dark" content="编辑角色" placement="top-start">
          <el-button  @click="clickedit(scope.$index, scope.row)"
          size="mini" type="primary" class="el-icon-edit"></el-button>
        </el-tooltip>
          <el-tooltip class="item" effect="dark" content="删除角色" placement="top-start">
          <el-button
          size="mini" type="danger" class="el-icon-delete"></el-button>
        </el-tooltip>
         <el-tooltip class="item" effect="dark" content="分配角色" placement="top-start">
          <el-button
          size="mini" type="warning" class="el-icon-s-tools"></el-button>
        </el-tooltip>

      </template>
    </el-table-column>
  </el-table>
</el-card>

<el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
  
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>

 </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("user");
const { mapState: userState, mapActions: userActions } = userModule;
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
      //  查询参数
       query:'',
      //  当前页码
       pagenum:1,
      //  每页显示条数
      pagesize:10,
      // 搜索框内容
      content:'',
      // 编辑框显示状态
       dialogVisible:false
     }
   },
   methods: {
      ...userActions(["getusers"]),

    // 点击编辑按钮显示弹出框
    clickedit(){
      this.dialogVisible=true
    },

     handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }

   },
   mounted() {
    //  console.log("123",this.msg)
     this.getusers({
       query:this.query,
      pagenum:this.pagenum,
      pagesize:this.pagesize
     })
   },
   watch: {

   },
   computed: {
     ...userState(["msg"])
   }
 }
</script>

<style>

.input-with-select{
  width: 25vw;
}

</style>