<template>
  <div>
    <el-card class="box-card">
      <template>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="分类名称" prop="id"></el-table-column>
          <el-table-column label="商品名称" prop="name"></el-table-column>
          <el-table-column label="描述" prop="desc"></el-table-column>
        </el-table>
      </template>
    </el-card>
  </div>
</template>
      <!-- 分页 -->
      // <div class="block">
      //   <el-pagination
      //     @size-change="handleSizeChange"
      //     @current-change="handleCurrentChange"
      //     :current-page="pagenum"
      //     :page-sizes="[5,10,20,30]"
      //     :page-size="5"
      //     layout="total, sizes, prev, pager, next, jumper"
      //     :total="commoditytwo.total*1"
      //   ></el-pagination>
      // </div>
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
          width: "850",
          prop: "goods_name"
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
          width: "180"
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