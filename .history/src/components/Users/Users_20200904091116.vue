<template>
 <div>
   <!-- 头部搜索框 -->
<el-card>
  <div style="margin:15px 0px;">
  <el-input placeholder="请输入内容" v-model="content" class="input-with-select">
    <el-button slot="append" icon="el-icon-search"></el-button>
  </el-input>
    <el-button type="primary" style="margin-left:20px;" @click="addclick">添加用户</el-button>
</div>
   <el-table
    :data="msg.users"
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
          <el-tooltip class="item" effect="dark" @click="delclick" content="删除角色" placement="top-start">
          <el-button
          size="mini" type="danger"  @click="delclick(scope.$index, scope.row)" class="el-icon-delete"></el-button>
        </el-tooltip>
         <el-tooltip class="item" effect="dark"  content="分配角色" placement="top-start">
          <el-button
          size="mini" type="warning" @click="fenbution(scope.$index, scope.row)" class="el-icon-s-tools"></el-button>
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>

   <!-- 分页 -->
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[5,10,20,30]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="msg.total">
    </el-pagination>
  </div>

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

<!-- 添加用户弹出框 -->
<el-dialog title="添加用户" :visible.sync="adduser" width="30%" >
  <el-form ref="addform" :model="addform" label-width="80px" :rules="addrules">
  <el-form-item label="用户名" prop="addusername" >
    <el-input v-model="addform.addusername" ></el-input>
  </el-form-item>
   <el-form-item label="密码" prop="addpassword">
    <el-input type="password" v-model="addform.addpassword"></el-input>
  </el-form-item>
   <el-form-item label="邮箱" prop="addmailbox">
    <el-input v-model="addform.addmailbox"></el-input>
  </el-form-item>
   <el-form-item label="电话" prop="addipone">
    <el-input v-model="addform.addipone"></el-input>
  </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="adduser = false">取 消</el-button>
    <el-button type="primary" @click="addConfirmedit('addform')">确 定</el-button>
  </span>
</el-dialog>

<!-- 用户分配 -->
<el-dialog title="分配用户" :visible.sync="bution" width="30%" >
  <div class="user">当前用户:{{nuuser}}</div>
  <div class="Administration">当前管理:{{Tube}}</div>
  <el-form ref="form" :model="form" >
  <el-form-item >
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="龙王" value="longwang"></el-option>
      <el-option label="打手" value="dashou"></el-option>
    </el-select>
  </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="bution = false">取 消</el-button>
    <el-button type="primary" @click="fenConfirmedit('addform')">确 定</el-button>
  </span>
</el-dialog>


  

 </div>
</template>

<script>
// import api from'../../http/api'
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
          var addiphone=this.addform.addipone
          if (!(/^1[3456789]\d{9}$/.test(iphone||addiphone))) {
           callback(new Error('请输入正确的电话号码'));;
          }
          callback();
        }
      }
     return {
      //  分配角色选择
      longwang:'',
      dashou:'',

      Tube:'',//当前管理
      nuuser:'',//当前用户

      //  分配用户选择框
      distribute:'',
      //  分配用户弹出框显示状态
       bution:false,
      //  查询参数
       query:'',
      //  当前页码
       pagenum:1,
      //  每页显示条数
      pagesize:5,
      // 搜索框内容
      content:'',
      // 编辑框显示状态
       dialogVisible:false,
      //  添加用户弹出框显示状态
      adduser:false,
      //  编辑表单
      form:{
        username:'',
        mailbox:'',
        ipone:'',
        // 用户id
        id:''
      },
      // 添加表单数据
      addform:{
        addusername:'',
        addpassword:'',
        addmailbox:'',
        addipone:''
      },
  // 编辑输入框验证状态设置
     
       rules: {
          mailbox: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
             { type: 'email', message: '请输入正确的邮箱地址', trigger:'blur', }
          ],
           ipone: [
            { required: true, trigger: 'blur' },
             { validator: validatePass, trigger: 'blur' }
          ],
       },

      //  添加输入框验证设置
      addrules:{
        addusername:[
          { required: true, message: '请输入用户名', trigger: 'blur'},
           { min: 2, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        addpassword:[
            { required: true, message: '请输入密码', trigger: 'blur'},
             { min: 2, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        addmailbox: [
            { required: true, message: '请输入邮箱', trigger: 'blur' },
             { type: 'email', message: '请输入正确的邮箱地址', trigger:'blur', }
          ],
          addipone: [
            { required: true, trigger: 'blur' },
             { validator: validatePass, trigger: 'blur' }
          ]
      },


     }
   },
   methods: {
      ...userActions(["getusers","getusername","getaddusers",'getdelete']),

 


    // 点击显示分配用户弹出框
    fenbution(index,item){
      this.Tube=item.role_name
      this.nuuser=item.username
      console.log(item)
      this.bution=true
    },
  
    // 点击删除
    delclick(index,item){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          
      let id =Number(item.id)
     this.getdelete({id:id,
       query:this.query,
       pagenum:this.pagenum,
       pagesize:this.pagesize
     })
         
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });

    
    //  console.log(id)
    },

      // 分页每页多少条
     handleSizeChange(val) {
       this.pagesize=val
       this.getusers({
          query:this.query,
       pagenum:this.pagenum,
       pagesize:this.pagesize
       })
        console.log('123',val);
      },
      // 当前页面
      handleCurrentChange(val) {
        this.pagenum=val
           this.getusers({
          query:this.query,
       pagenum:this.pagenum,
       pagesize:this.pagesize
       })
      },

    // 点击显示添加用户弹框
    addclick(){
      this.adduser=true
    },

    // 点击提交添加用户
    addConfirmedit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.getaddusers({
              username:this.addform.addusername,
              password:this.addform.addpassword,
              email:this.addform.addmailbox,
              mobile:this.addform.addipone,
              query:this.query,
              pagenum:this.pagenum,
              pagesize:this.pagesize
                        
            })
            this.adduser=false
              this.$refs[formName].resetFields();
       
          } else {
             this.$refs[formName].resetFields();
            console.log('error submit!!');
            return false;
          }
        });
    },

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
      this.getusername({
       id:this.form.id,
       email:this.form.mailbox,
       mobile:this.form.ipone,
       query:this.query,
       pagenum:this.pagenum,
       pagesize:this.pagesize
     })
            console.log("dengchenggong")
           
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    
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
.user{
  margin: 10px 0px;
}
.Administration{
  margin: 10px 0px;
}

</style>