<template>
  <div>
    <el-card class="box-card">
      <el-input placeholder="请输入内容" v-model="content" class="input-with-select" clearable>
        <el-button slot="append" @click="search" icon="el-icon-search"></el-button>
      </el-input>

      <!-- 表格页面 -->
      <el-table :data="orderdata.goods" border style="width: 100%">
        <template>
          <el-table-column  align="center" type="index" label="#" width="80"></el-table-column>
          <el-table-column prop="order_number" align="center" label="订单编辑" width></el-table-column>
          <el-table-column prop="order_price" align="center" label="订单价格" width></el-table-column>
          <el-table-column  align="center" label="是否付款" width>
            <template slot-scope="scope">
             <div v-if="scope.row.order_pay==='0'"><el-tag>已付款</el-tag></div>
            </template>
          </el-table-column>
          <el-table-column prop="is_send" align="center" label="是否发货" width></el-table-column>
          <el-table-column prop="create_time" align="center" label="下单时间" width></el-table-column>
          <el-table-column label="操作" align="center" width>
            <template slot-scope="scope">
               <el-button type="primary" @click="eitclick(scope.row)"><i class="el-icon-edit"></i></el-button>
               <el-button type="danger" @click="clickdelete(scope.row)"><i class="el-icon-delete"></i></el-button>
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
          :total="orderdata.total*1"
        ></el-pagination>
      </div>
    </el-card>

      <!-- 点击弹出选择弹出框 -->
        <el-dialog title="编辑地址" :visible.sync="dialog" width="30%" :before-close="addhandleClose">
        <el-form :model="from"  label-width="100px" class="demo-ruleForm">
          <el-form-item label="城市" prop="region">
            <el-cascader
              clearable
              v-model="from.label"
              :options="city"
              :props="props"
            ></el-cascader>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialog= false">取 消</el-button>
          <el-button type="primary" @click="addclicktrue">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
import city from'../../../city'
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("order");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      props:{
         expandTrigger: 'hover' ,
         label:'name',
         value:'id'
      },
      city,
      dialog:false,
      //城市选择框的值
      from:{
        label:''
      },

      content: "" ,//输入框数据

      query:'',//查询参数
      pagenum:1,//当前页码
      pagesize:5//每页显示调数
    };
  },
  methods: {
    ...userActions(['getorders']),
  addhandleClose(){
    this.dialog=false
  },

    //点击编辑
    eitclick(){
      this.dialog=true
    },
    //点击删除
    clickdelete(){},
    //点击搜索
    search() {},
    //点击确定
    addclicktrue(){
      this.dialog=false
    },

      // 分页每页多少条
    handleSizeChange(val) {
      this.pagesize = val;
      this.getorders({
        type: this.type,
        pagenum: this.pagenum,
        pagesize: this.pagesize
      });
    },
    // 当前页面
    handleCurrentChange(val) {
      this.pagenum = val;
      this.getorders({
        type: this.type,
        pagenum: this.pagenum,
        pagesize: this.pagesize
      });
    }
  },
  mounted() {
    this.getorders({
      query:this.query,
      pagenum:this.pagenum,
      pagesize:this.pagesize
    })
  },
  watch: {},
  computed: {
    ...userState(['orderdata'])
  }
};
</script>

<style>
.input-with-select{
  width: 500px;
}
</style>