<template>
  <div>
    <Role :msg="msg" :tableData="tableData" @handleClose="handleClose">
      <template v-slot:new="scope">
        <el-button type="primary" @click="clickedit(scope)">编辑</el-button>
        <el-button type="success" @click="clickdelete(scope)">删除</el-button>
        <el-button type="warning" @click="clickdistribution(scope)">分配角色</el-button>
      </template>
    </Role>
    <div @click="click">54654</div>
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
    // 点击删除标签
    handleClose(val, scope) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
         this.getdeleterole({ roleId: scope.id, rightId: val.id });
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

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      //  this.getroleid({id:scope.id})
      
      console.log("123", val);
      // console.log(scope)
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