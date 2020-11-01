<template>
  <div>
    <el-card class="box-card">
      <div style="margin:15px 0px;">
        <el-input placeholder="请输入内容" v-model="content" style="width:500px" clearable>
          <el-button slot="append" @click="search" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="primary" style="margin-left:20px;" @click="addclick">添加用户</el-button>
      </div>
      <el-table :data="commodity" style="width: 100%">
        <template v-for="(item,index) in msg">
          <el-table-column
            v-if="item.type"
            :type="item.type"
            :key="index"
            :label="item.label"
            :width="item.width"
            :align="item.align"
          ></el-table-column>
          <el-table-column
            v-else
            :key="index"
            :label="item.label"
            :width="item.width"
            :align="item.align"
          >
            <template slot-scope="scope">
              <template v-if="item.prop">{{scope.row[item.prop]}}</template>
              <template v-else>
                <el-button type="primary" @click="clickedit(scope)" size="mini">编辑</el-button>
                <el-button type="danger" @click="clickdelete(scope)" size="mini">删除</el-button>
              </template>
            </template>
          </el-table-column>
        </template>
      </el-table>

      <!-- 分页 -->
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pagenum"
          :page-sizes="[5,10,20,30]"
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total*1"
        ></el-pagination>
      </div>
    </el-card>

    <!-- 添加用户弹出框 -->
    <el-dialog title="编辑商品" :visible.sync="adduser" width="30%">
      <el-form ref="addform" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="商品名称" prop="name">
          <el-input   controls-position="right" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="price">
          <el-input controls-position="right"  v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="商品数量" prop="number">
          <el-input v-model="form.number"></el-input>
        </el-form-item>
        <el-form-item label="商品重量" prop="weight">
          <el-input v-model="form.weight"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="adduser = false">取 消</el-button>
        <el-button type="primary" @click="Confirmedit">确 定</el-button>
      </span>
    </el-dialog>
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
      id:'',//删除商品时候id

      query: "", //查询参数
      pagenum: 1, //当前页码
      pagesize: 5, //当前显示条数
      content: "", //输入框的内容

      form: {
        id:'',//商品ID
        name: "", //商品名称
        price: "", //商品价格
        number: "", //商品数量
        weight: "" //商品重量
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        price: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        number: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        weight: [{ required: true, message: "请输入用户名", trigger: "blur" }]
      },
      adduser: false, //编辑弹出框显示状态
      msg: [
        {
          label: "#",
          align: "center",
          type: "index",
          width: ""
        },
        {
          label: "商品名称",
          align: "center",
          width: "900",
          prop: "goods_name"
        },
        {
          label: "商品价格(元)",
          align: "center",
          width: "",
          prop: "goods_price"
        },
        {
          label: "商品重量",
          align: "center",
          width: "",
          prop: "goods_weight"
        },
        {
          label: "创建时间",
          align: "center",
          width: "",
          prop: "add_time"
        },
        {
          label: "操作",
          align: "center",
          width: "200"
        }
      ]
    };
  },
  methods: {
    ...userActions(["getdata", "getcategories",'getbianji','getdeletegoods']),
    //点击删除商品
    clickdelete(scope){
       this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        this.id=scope.row.goods_id
       this.getdeletegoods({
         id:this.id,
         query: this.query,
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
    // 点击搜索
    search() {},
    //添加商品
    addclick() {},

    // 分页每页多少条
    handleSizeChange(val) {
      this.pagesize = val;
      this.getdata({
        query: this.query,
        pagenum: this.pagenum,
        pagesize: this.pagesize
      });
    },
    // 当前页面
    handleCurrentChange(val) {
      this.pagenum = val;
      this.getdata({
        query: this.query,
        pagenum: this.pagenum,
        pagesize: this.pagesize
      });
    },
    //点击编辑按钮显示编辑弹出框
    clickedit(scope){
      this.form.id=scope.row.goods_id
      this.form.name=scope.row.goods_name
      this.form.price=scope.row.goods_price
      this.form.number=scope.row.goods_number
      this.form.weight=scope.row.goods_weight
      // console.log(scope.row)
      this.adduser=true
    },

    //编辑弹出框点击确定
    Confirmedit() {
      this.getbianji({
        id: this.form.id,
        goods_name: this.form.name,
        goods_price: this.form.price,
        goods_number: this.form.number,
        goods_weight:  this.form.weight})
        this.adduser=false
    }
    
  },
  mounted() {
    this.getdata({
      query: this.query,
      pagenum: this.pagenum,
      pagesize: this.pagesize
    });

    this.getcategories({
      type: "",
      pagenum: "",
      pagesize: ""
    });
  },
  watch: {},
  computed: {
    ...userState(["commodity", "total"])
  }
};
</script>

<style scoped lang='scss'>
</style>