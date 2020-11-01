<template>
  <div>
    <el-card class="box-card">
      <!-- <template>
        <el-table
          :data="commoditytwo.result"
          style="width: 100%;margin-bottom: 20px;"
          row-key="cat_id"
          border
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
        >
          <el-table-column prop="date" label="#" type="index" width="80"></el-table-column>

          <el-table-column prop="cat_name"  label="分类名称" width></el-table-column>
          <el-table-column prop="name" align="center" label="是否有效" width></el-table-column>
          <el-table-column prop="sort" align="center" label="排序" width></el-table-column>
          <el-table-column prop="operation" align="center" label="操作" width>
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template> -->

        <tree-table
        :data="commoditytwo.result"
        :columns="columns"
        :selection-type="false"
        :expand-type="false"
        show-index
        index-text="#"
        border
      >
        <!-- <template v-slot:isok="scope">
          <i
            class="el-icon-success"
            style="color: lightgreen"
            v-if="scope.row.cat_deleted === false"
          ></i>
          <i class="el-icon-error" style="color: red" v-else></i
        ></template> -->
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
         props: {
          stripe: false,//是否显示间隔斑马纹
          border: false,//是否显示纵向边框
          showHeader: true,//是否显示表头
          showSummary: false,//是否显示表尾合计行
          showRowHover: true,//鼠标悬停时，是否高亮当前行
          showIndex: false,//是否显示数据索引
          treeType: true,//是否为树形表格
          isFold: true,//树形表格中父级是否默认折叠
          expandType: false,//是否为展开行类型表格（为 True 时，需要添加作用域插槽, 它可以获取到 row, rowIndex)
          selectionType: false,//是否显示间隔斑马纹
        },

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
          headerAlign:'center',
          label: "是否有效",
          align: "center",
          width: "",
          prop: "goods_price"
        },
        {
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

<style scoped lang='scss'>
</style>