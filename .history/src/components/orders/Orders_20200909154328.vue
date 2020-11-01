<template>
  <div>
    <el-card class="box-card">
      <el-input placeholder="请输入内容" v-model="content" class="input-with-select" clearable>
        <el-button slot="append" @click="search" icon="el-icon-search"></el-button>
      </el-input>

      <el-table :data="tableData" border style="width: 100%">
        <template>
          <el-table-column prop="date" align="center" type="index" label="#" width="80"></el-table-column>
          <el-table-column prop="name" align="center" label="订单编辑" width></el-table-column>
          <el-table-column prop="date" align="center" label="订单价格" width></el-table-column>
          <el-table-column prop="name" align="center" label="是否付款" width></el-table-column>
          <el-table-column prop="date" align="center" label="是否发货" width></el-table-column>
          <el-table-column prop="name" align="center" label="下单时间" width></el-table-column>
          <el-table-column label="操作" align="center" width></el-table-column>
        </template>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("orders");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      content: "" ,//输入框数据

      query:'',//查询参数
      pagenum:1,//当前页码
      pagesize:5//每页显示调数
    };
  },
  methods: {
    ...userActions(['orders']),
    //点击搜索
    search() {}
  },
  mounted() {
    this.orders({
      query:this.query,
      pagenum:this.pagenum,
      pagesize:this.pagesize
    })
  },
  watch: {},
  computed: {}
};
</script>

<style>
.input-with-select{
  width: 500px;
}
</style>