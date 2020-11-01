<template>
  <div>
    <el-card class="box-card">
       <div style=" margin:10px 10px;"><el-button type="primary" >添加</el-button></div>
      <tree-table
        :data="commoditytwo.result"
        :columns="columns"
        :selection-type="false"
        :expand-type="false"
        show-index
        index-text="#"
        border
      >
        <template slot="likes">
          <i class="el-icon-circle-check"></i>
        </template>

        <template slot="sex" scope="sex">
          <el-tag v-if="sex.row.cat_level == 0">一级</el-tag>
          <el-tag v-if="sex.row.cat_level == 1" type="success">二级</el-tag>
          <el-tag v-if="sex.row.cat_level == 2" type="warning">三级</el-tag>
        </template>

        <template slot="operation" scope="spoce">
          <el-button type="primary" @click="handleEdit(spoce.row)" size='small'>编辑</el-button>
        
          <el-button type="success" @click="clickdelete(spoce.row)" size='small'>删除</el-button>
          
        </template>
      </tree-table>

      <!-- 点击编辑 -->
      <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>


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
      dialogVisible:false,//编辑框显示
      type: "",
      pagenum: 1, //当前页码值
      pagesize: 5, //每页显示多少条数据

      columns: [
        {
          headerAlign: "left",
          label: "分类名称",
          align: "left",
          width: "300",
          prop: "cat_name"
        },
        {
          type: "template",
          template: "likes",
          headerAlign: "center",
          label: "是否有效",
          align: "center",
          width: "",
          prop: "goods_price"
        },
        {
          type: "template",
          template: "sex",
          headerAlign: "center",
          label: "排序",
          align: "center",
          width: "",
          prop: "goods_weight"
        },
        {
          type: "template",
          template: "operation",
          headerAlign: "center",
          label: "操作",
          align: "center",
          width: ""
        }
      ]
    };
  },
  methods: {
    ...userActions(["getcategoriesTwo",'getboydlt']),
    handleEdit(item) {
      console.log(item);
    },
    //点击删除
    clickdelete(item){
       this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.getboydlt({
        id:item.cat_id,
         type: this.type,
        pagenum: this.pagenum,
        pagesize: this.pagesize
      })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    
   
    },

       // 分页每页多少条
    handleSizeChange(val) {
      this.pagesize = val;
      this.getcategoriesTwo({
        type: this.type,
        pagenum: this.pagenum,
        pagesize: this.pagesize
      });
    },
    // 当前页面
    handleCurrentChange(val) {
      this.pagenum = val;
      this.getcategoriesTwo({
        type: this.type,
        pagenum: this.pagenum,
        pagesize: this.pagesize
      });
    },
    //添加分类
    addclick() {},
 
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

</style>