<template>
  <div>
    <el-card class="box-card">
   

        <tree-table
        :data="commoditytwo.result"
        :columns="columns"
        :selection-type="false"
        :expand-type="false"
        show-index
        index-text="#"
        border
      >
         <template slot="likes" >
          <i class="opo el-icon-circle-check"></i>
        </template>

          <template slot="sex" scope="sex">
          <el-tag v-if="sex.row.cat_level == 0"> 一级</el-tag>
          <el-tag v-if="sex.row.cat_level == 1" type="success"> 二级</el-tag>
          <el-tag v-if="sex.row.cat_level == 2" type="warning"> 三级</el-tag>
        </template>

      </tree-table>

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
      pagesize: 5, //每页显示多少条数据

      columns: [
        
        {
          headerAlign:'left',
          label: "分类名称",
          align: "left",
          width: "300",
          prop: "cat_name"
        },
        {
          type:'template',
           template: "likes",
          headerAlign:'center',
          label: "是否有效",
          align: "center",
          width: "",
          prop: "goods_price"
        },
        {
          type:'template',
           template: "sex",
          headerAlign:'center',
          label: "排序",
          align: "center",
          width: "",
          prop: "goods_weight"
        },
        {
          headerAlign:'center',
          label: "操作",
          align: "center",
          width: ""
        }
      ]
    };
  },
  methods: {
    ...userActions(["getcategoriesTwo"]),
    handleEdit(index, item) {
      console.log(item);
    },

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

<style>
.opo{
  width: 10px;
}
</style>