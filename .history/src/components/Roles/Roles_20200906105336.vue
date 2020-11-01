<template>
  <div>
    <Role
      :msg="msg"
      :tableData="tableData"
      :dialogVisible="dialogVisible"
      @handleClose="handleClose"
      @addto='addto'
    >
      <template v-slot:new="scope">
        <el-button type="primary" @click="clickedit(scope)">编辑</el-button>
        <el-button type="success" @click="clickdelete(scope)">删除</el-button>
        <el-button type="warning" @click="clickdistribution(scope)">分配角色</el-button>
      </template>
    </Role>
    <div @click="click">54654</div>

  <!-- 编辑弹出框 -->
    <el-dialog
      title="编辑角色"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClosebox"
    >
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        label-width="100px"
        :rules="rules"
      >
        <el-form-item label="职位名称" prop="role">
          <el-input v-model="ruleForm.role"></el-input>
        </el-form-item>
         <el-form-item label="角色描述" prop="describe">
          <el-input v-model="ruleForm.describe"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible=false">取 消</el-button>
        <el-button type="primary" @click="confirm('ruleForm')">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 添加弹出框 -->
      <el-dialog
      title="编辑角色"
      :visible.sync="dialog"
      width="30%"
      :before-close="handleCloseadd"
    >
      <el-form
        :model="form"
        ref="form"
        label-width="100px"
        :rules="addrules"
        
      >
        <el-form-item label="职位名称" prop="role">
          <el-input v-model="form.role"></el-input>
        </el-form-item>
         <el-form-item label="角色描述" prop="describe">
          <el-input v-model="form.describe"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialog=false">取 消</el-button>
        <el-button type="primary" @click="confirmadd('form')">确 定</el-button>
      </span>
    </el-dialog>

    <el-tree
     show-checkbox
    :data="tree"
  :props="defaultProps"
  lazy
  node-key="id"
  @check-change="handleCheckChange">
</el-tree>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("role");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
        defaultProps: {
          children: 'children',
          label: 'authName',
          
        },


         // 输入框验证
        rules: {

          role:[
             { required: true, message: '请输角色职业', trigger: 'blur' },
          ],
      },

      // 添加的呼入框
      addrules:{
          role:[
             { required: true, message: '请输角色职业', trigger: 'blur' },
          ],
      },

      // 添加弹出框显示状态变量
      dialog:false,

      // 添加弹出框内容
      form:{
        role:'',
        describe:''
      },

      // 弹出框显示也隐藏变量
      dialogVisible: false,
      // 角色的ID
      id:'',

      // 编辑框输入框的内容
      ruleForm:{
        role:'',
        describe:'',
      },

      
     

      // 添加输入框验证
      // torules:{
      //   torolel: [
      //       { required: true, message: '请输入职业名称', trigger: 'blur' },
      //     ]
      // },
      msg: [
        // {
        //   label: "",

        //   width: "60",
        //   align: "center"
        // },
        {
          label: "#",
          type: "index",
          width: "60",
          align: "center"
        },
        {
          label: "职位",
          prop: "roleName",
          width: "",
          align: "center"
        },
        {
          label: "描述",
          prop: "roleDesc",
          width: "",
          align: "center"
        },
        {
          label: "操作",
          width: "",
          align: "center",
          slot: "new"
        }
      ]
    };
      
  },
  methods: {
    ...userActions(["getrole", "getroleid", "getdeleterole",'getroleodr','getfenlei','getlodi','getquanxian']),

    handleClosebox(done) {
      this.dialogVisible = false;
    },
  handleCloseadd(){
    this.dialog=false
  },  
  
  // 树状列表
  handleCheckChange(){},
  
  // 添加角色确认
  confirmadd(formName){
       this.$refs[formName].validate((valid) => {
          if (valid) {
               this.getlodi({roleName:this.form.role,roleDesc:this.form.describe})
               this.dialog=false
            this.$refs[formName].resetFields();
          } else {
             this.$refs[formName].resetFields();
            console.log('5152');
            return false;
          }
        });

  },

    

    // 点击显示添加弹出框
    addto(){
      this.dialog=true
    },

    // 点击删除角色
    clickdelete(val){
       this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.getfenlei({id:val.scope.row.id})
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    // 点击确认按钮
    confirm(formName){
       this.$refs[formName].validate((valid) => {
          if (valid) {
           this.getroleodr({id:this.id,roleName:this.ruleForm.role,roleDesc:this.ruleForm.describe})
           this.dialogVisible=false
          } else {
            console.log('5152');
            return false;
          }
        });
    },

    // 点击弹出编辑弹出框
    clickedit(val) {
      this.ruleForm.role=val.scope.row.roleName
      this.ruleForm.describe=val.scope.row.roleDesc
      this.id=val.scope.row.id
      // console.log('123',val.scope.row.id)
      this.dialogVisible = true;
    },

    // 点击删除标签
    handleClose(val, scope) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.getdeleterole({ roleId: scope.id, rightId: val.id });
          //  循环删除授权标签的数据
          this.tableData.map((item, index) => {
            if (scope.id === item.id) {
              item.children.map((item1, index1) => {
                if (val.id === item1.id) {
                  item.children.splice(index1, 1);
                } else {
                  item1.children.map((item2, index2) => {
                    if (item2.id === val.id) {
                      item1.children.splice(index2, 1);
                    } else {
                      item2.children.map((item3, index3) => {
                        if (item3.id === val.id) {
                          item2.children.splice(index3, 1);
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    click() {
      console.log(this.tree);
    }
  },
  mounted() {
    this.getrole();
    this.getquanxian({type:'tree'})
  },
  watch: {},
  computed: {
    ...userState(["tableData", "roleId",'tree'])
  }
};
</script>

<style scoped lang='scss'>
</style>