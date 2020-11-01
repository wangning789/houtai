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
                <el-button type="primary" size="mini">编辑</el-button>
                <el-button type="danger" size="mini">删除</el-button>
              </template>
            </template>
          </el-table-column>
        </template>
      </el-table>
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
      query: "", //查询参数
      pagenum: 1, //当前页码
      pagesize: 5, //当前显示条数
      content:'',//输入框的内容

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
    ...userActions(["getdata", "getcategories"]),

  // 点击搜索
    search(){

    },
   //添加商品
   addclick(){

   }, 
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
    ...userState(["commodity"])
  }
};
</script>

<style scoped lang='scss'>
</style>