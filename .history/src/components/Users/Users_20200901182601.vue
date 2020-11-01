<template>
 <div>
   <!-- 头部搜索框 -->
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

<!-- 弹出框编辑页面 -->
<el-dialog title="编辑用户" :visible.sync="dialogVisible" width="30%" >
  <el-form ref="form" :model="form" label-width="80px" :rules="rules">
  <el-form-item label="用户名" prop="username" >
    <el-input v-model="form.username" :disabled="true"></el-input>
  </el-form-item>
   <el-form-item label="邮箱" prop="mailbox">
    <el-input v-model="form.mailbox"></el-input>
  </el-form-item>
   <el-form-item label="电话" prop="ipone">
    <el-input v-model="form.ipone"></el-input>
  </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="Confirmedit('form')">确 定</el-button>
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
    //  自定义ipunt框验证状态
     var  validatePass=(rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入电话号码'));
        } else {
          var iphone=this.form.ipone
          if (!(/^1[3456789]\d{9}$/.test(iphone))) {
           callback(new Error('请输入正确的电话号码'));;
          }
          callback();
        }
      }
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
       dialogVisible:false,
      //  编辑表单
      form:{
        username:'',
        mailbox:'',
        ipone:'',
        // 用户id
        id:''
      },
  // 编辑输入框状态设置
     
       rules: {
          mailbox: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
             { type: 'email', message: '请输入正确的邮箱地址', trigger:'blur', }
          ],
           ipone: [
            { required: true, message: '请输入电话', trigger: 'blur' },
             { validator: validatePass, trigger: 'blur' }
          ],
       }
     }
   },
   methods: {
      ...userActions(["getusers","getusername"]),

    // 点击编辑按钮显示弹出框
    clickedit(index,row){
      this.dialogVisible=true
      this.form.username=row.username
       this.form.mailbox=row.email
         this.form.ipone=row.mobile
         this.form.id=row.id
      // console.log("555",index)
      console.log("666",row)
    },

  // 点击编辑确认修改用户提交
  Confirmedit(formName){
     
          this.$refs[formName].validate((valid) => {
          if (valid) {
            this.dialogVisible = false
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    //    this.getusername({
    //    id:this.form.id,
    //    email:this.form.mailbox,
    //    mobile:this.form.ipone

    //  })
  },
  
    

   },
   mounted() {
    

    
    // 发送用户数据列表请求
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