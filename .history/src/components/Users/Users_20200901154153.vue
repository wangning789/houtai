<template>
 <div>
<el-card class="box-card">
   <el-table
    :data="msg"
    border
    style="width: 100%">
  <el-table-column
      label="#"
      type="index"
      width="5vw">
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.username}}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="角色"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.role_name}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="电话"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.mobile}}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="邮箱"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.email}}</span>
      </template>
    </el-table-column>
      <el-table-column
      label="状态"
      width="180">
      <template slot-scope="scope">
       <el-switch v-model="scope.row.mg_state">
</el-switch>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-tooltip class="item" effect="dark" content="编辑角色" placement="top-start">
          <el-button  @click="handleDelete(scope.$index, scope.row)"
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
      pagesize:10
     }
   },
   methods: {
      ...userActions(["getusers"]),
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
.nnn{
  width: 100vw;
  height: 100vh;
  background-color: aqua;
}
</style>