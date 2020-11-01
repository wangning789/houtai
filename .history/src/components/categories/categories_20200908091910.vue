<template>
  <div>
    <el-card class="box-card">
      <template>
        <el-table
          :data="commoditytwo.result"
          style="width: 100%;margin-bottom: 20px;"
          row-key="cat_id"
          border
          :tree-props="{children: 'children'}"
        >
          <template slot-scope="scope">
          <el-table-column  prop="date" label="#" type="index"  width="80" > </el-table-column>
          <el-table-column prop="cat_name" label="分类名称"  width=""></el-table-column>
          <el-table-column prop="name" label="是否有效"  width=""></el-table-column>
          <el-table-column prop="sort" label="排序" width=""></el-table-column>
          <el-table-column prop="operation" label="操作" width=""></el-table-column>
         
          </template>
        </el-table>
      </template>

      <!-- 分页 -->
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pagenum"
          :page-sizes="[5,10,20,30]"
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="commoditytwo.total*1"
        ></el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("commodity");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      type: "",
      pagenum: 1, //当前页码值
      pagesize: 10, //每页显示多少条数据

      msg: [
        {
          label: "#",
          align: "center",
          type: "index",
          width: ""
        },
        {
          label: "分类名称",
          align: "center",
          width: "300",
          prop: "cat_name"
        },
        {
          label: "是否有效",
          align: "center",
          width: "",
          prop: "goods_price"
        },
        {
          label: "排序",
          align: "center",
          width: "",
          prop: "goods_weight"
        },
        {
          label: "操作",
          align: "center",
          width: ""
        }
      ]
    };
  },
  methods: {
    ...userActions(["getcategoriesTwo"]),
    //添加分类
    addclick() {},
    handleSizeChange() {},
    handleCurrentChange() {}
  },
  mounted() {
    this.getcategoriesTwo({
      type: this.type,
      pagenum: this.pagenum,
      pagesize: this.pagesize
    });
  },
  watch: {},
  computed: {
    ...userState(["commoditytwo"])
  }
};
</script>

<style scoped lang='scss'>
</style>