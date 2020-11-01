<template>
  <div>
    <el-card class="box-card">
      <div style=" margin:10px 10px;">
        <el-button type="primary" @click="addclick">添加</el-button>
      </div>
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
          <el-button type="primary" @click="handleEdit(spoce.row)" size="small">编辑</el-button>

          <el-button type="success" @click="clickdelete(spoce.row)" size="small">删除</el-button>
        </template>
      </tree-table>

      <!-- 点击编辑 -->
      <el-dialog title="编辑分类" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <el-form :model="from" :rules="rules" label-width="100px" class="demo-ruleForm">
          <el-form-item label="编辑名称" prop="name">
            <el-input v-model="from.name"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="clicktrue">确 定</el-button>
        </span>
      </el-dialog>

      <!-- 点击添加分类 -->
      <el-dialog title="添加编辑" :visible.sync="dialog" width="30%" :before-close="addhandleClose">
        <el-form :model="roufrom" :rules="addrules" label-width="100px" class="demo-ruleForm">
          <el-form-item label="编辑名称" prop="name">
            <el-input v-model="roufrom.name"></el-input>
          </el-form-item>
          <el-form-item label="商品分类" prop="region">
            <el-cascader
              clearable
              v-model="roufrom.label"
              :disabled="disabled"
              :options="gories"
              :props="props"
            ></el-cascader>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialog= false">取 消</el-button>
          <el-button type="primary" @click="addclicktrue">确 定</el-button>
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
      disabled:true,

       props: {
        expandTrigger: "hover",
        label: "cat_name",
        value: "cat_id"
      },

      //添加弹出框
      dialog: false,

      //添加分类
      roufrom: {
        name: "",
        label:''
      },

      //编辑输入框
      from: {
        name: "",
        id: ""
      },

      addrules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 1 到 10 个字符", trigger: "blur" }
        ]
      },

      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 1, max: 10, message: "长度在 1 到 10 个字符", trigger: "blur" }
        ]
      },

      dialogVisible: false, //编辑框显示
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
    ...userActions(["getcategoriesTwo", "getboydlt", "geteaitfenlei",'getcategories']),
    handleClose(done) {
      this.dialogVisible = false;
    },
    addhandleClose() {
      this.dialog = false;
    },
    //添加分类确定
    addclicktrue() {},
    //点击弹出添加弹出框
    addclick() {
      this.dialog = true;
    },

    //点击确认提交编辑
    clicktrue() {
      this.geteaitfenlei({
        id: this.from.id,
        cat_name: this.from.name,
        type: this.type,
        pagenum: this.pagenum,
        pagesize: this.pagesize
      });
      this.dialogVisible = false;
    },

    handleEdit(item) {
      this.dialogVisible = true;
      this.from.id = item.cat_id;
      this.from.name = item.cat_name;
      console.log(item);
    },
    //点击删除
    clickdelete(item) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.getboydlt({
            id: item.cat_id,
            type: this.type,
            pagenum: this.pagenum,
            pagesize: this.pagesize
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
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
    }
  },
  mounted() {
     this.getcategories({
      type: "",
      pagenum: "",
      pagesize: ""
    });

    this.getcategoriesTwo({
      type: this.type,
      pagenum: this.pagenum,
      pagesize: this.pagesize
    });
  },
  watch: {},
  computed: {
    ...userState(["commoditytwo","gories"])
  }
};
</script>

<style>
</style>