<template>
  <div>
    <Role
      :msg="msg"
      :tableData="tableData"
      :dialogVisible="dialogVisible"
      @handleClose="handleClose"
      @cancel="cancel"
    >
      <template v-slot:new="scope">
        <el-button type="primary" @click="clickedit(scope)">编辑</el-button>
        <el-button type="success" @click="clickdelete(scope)">删除</el-button>
        <el-button type="warning" @click="clickdistribution(scope)">分配角色</el-button>
      </template>
    </Role>
    <div @click="click">54654</div>

    <el-dialog title="编辑角色" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible=false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible=false">确 定</el-button>
      </span>
    </el-dialog>
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
      // 弹出框显示也隐藏变量
      dialogVisible: false,
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
          prop: "roleDesc",
          width: "",
          align: "center"
        },
        {
          label: "描述",
          prop: "roleName",
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
    ...userActions(["getrole", "getroleid", "getdeleterole"]),
    
   handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    

    // 点击弹出编辑弹出框
    clickedit() {
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
      console.log(this.tableData);
    }
  },
  mounted() {
    this.getrole();
  },
  watch: {},
  computed: {
    ...userState(["tableData", "roleId"])
  }
};
</script>

<style scoped lang='scss'>
</style>