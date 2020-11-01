<template>
  <div>
    <Role :msg="msg" :tableData="tableData">
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
    ...userActions(["getrole"]),

    click() {
      console.log(this.tableData);
    }
  },
  mounted() {
    this.getrole();
  },
  watch: {},
  computed: {
    ...userState(["tableData"])
  }
};
</script>

<style scoped lang='scss'>
</style>