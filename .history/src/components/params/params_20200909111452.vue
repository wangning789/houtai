<template>
  <div>
    <el-card class="box-card">
      
      <el-form :model="from" label-width="100px" class="demo-ruleForm">
        <el-form-item label="商品分类" prop="region">
          <el-cascader
            clearable
            v-model="from.label"
            @input="inputop"
            :options="gories"
            :props="props"
          ></el-cascader>
        </el-form-item>
      </el-form>

      <el-button type="primary" @click="clickonco">添加属性</el-button>

      <!-- 头部导航，静态或者动态 -->
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">动态参数</el-menu-item>
        <el-menu-item index="2">静态属性</el-menu-item>
      </el-menu>

      <el-table :data="sel" style="width: 100%">
        <template v-for="item in msg">
          <el-table-column
            v-if="item.pop"
            :key="item.label"
            :align="item.align "
            :label="item.label"
            :type="item.type"
          ></el-table-column>

          <el-table-column :key="item.wof" v-if="item.wof" :type="item.type">
             
          </el-table-column>

          <el-table-column
            v-if="item.template"
            :key="item.label"
            :align="item.align "
            :label="item.label"
          >
            <template slot-scope="scope">
              <template>{{scope.row[item.porp]}}</template>
              <template v-if="item.name">
                <el-button type="primary">编辑</el-button>
                <el-button type="danger" @click="clickdelete(scope.row)">删除</el-button>
              </template>
            </template>
          </el-table-column>
        </template>
      </el-table>
      <!-- <tag 
      @handleInputConfirm='handleInputConfirm'
      @showInput='showInput'
      @handleClose='handleClose'
      :dynamicTags='dynamicTags'
      :inputValue='inputValue'
       :inputVisible="inputVisible">

      </tag> -->
         
    </el-card>

    <el-dialog
  title="添加参数"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item :label="label" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addclickon">确 定</el-button>
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
       ruleForm:{
          name:'',
        },

        id:'',//参数id

      rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 1, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
      },

      dynamicTags: [],
      inputValue: "",
      inputVisible: false,

      dialogVisible:false,
      label:'动态参数',

      activeIndex: "1",
      sell: "many",
     

      from: {
        label: "" //选择框内容
      },

      props: {
        expandTrigger: "hover",
        label: "cat_name",
        value: "cat_id"
      },

      msg: [
        {
          label: "#",
          type: "index",
          align: "left",
          width: "100",
          pop: "ds"
        },
        {
          label: "",
          type: "expand",
          align: "center",
          width: "150",
          wof: "ni"
        },
        {
          porp: "attr_name",
          label: "参数名称",
          align: "center",
          width: "",
          template: "template"
        },
        {
          label: "操作",
          align: "center",
          width: "",
          name: "操作按钮",
          template: "template"
        }
      ]
    };
  },
  methods: {
    ...userActions([
      "getcategoriesTwo",
      "getboydlt",
      "geteaitfenlei",
      "getcategories",
      "getaddcategories",
      "getcategoriesid",
      'postcategories',
      'deletecategories'
    ]),

    //点击删除
    clickdelete(val){
      this.deletecategories({
        id:val.cat_id,
        attrid:val.attr_id
      })
     
    },

    //添加确定提交
    addclickon(){
      this.dialogVisible=false
      this.postcategories({
        id:this.cid,
        attr_name:this.ruleForm.name,
        attr_sel:this.sell,
         cdid: this.id,
          sel: this.sell
      })
     
    },

    //点击弹出添加框
    clickonco(){
      this.dialogVisible=true
    },

      handleClose(tag) {
        // this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

    showInput() {
      this.inputVisible = true;
      // this.$nextTick(_ => {
      //   this.$refs.saveTagInput.$refs.input.focus();
      // });
    },

    handleInputConfirm() {
      // let inputValue = this.inputValue;
      // if (inputValue) {
      //   this.dynamicTags.push(inputValue);
      // }
      this.inputVisible = false;
      this.inputValue = "";
    },

    //监听选择框
    inputop() {
      if (this.from.label != "" && this.from.label.length === 3) {
        this.id = this.from.label[2];
        this.getcategoriesid({
          id: this.id,
          sel: this.sell
        });
      }
    },

    handleSelect(key, keyPath) {
      if (key === "1") {
        this.sell = "many";
        this.label="动态参数"
      } else if (key === "2") {
        this.sell = "only";
        this.label='静态参数'
      }
      if (key === "1" && this.from.label != []) {
        this.sell = "many";
        this.label="动态参数"
        this.getcategoriesid({
          id: this.id,
          sel: this.sell
          
        });
      } else if (key === "2" && this.from.label != []) {
        this.sell = "only";
        this.label='静态参数'
        this.getcategoriesid({
          id: this.id,
          sel: this.sell
        });
      }
      //  console.log(this.from.label)

      // console.log(key);
    }
  },
  mounted() {
    this.getcategories({
      type: "",
      pagenum: "",
      pagesize: ""
    });
  },
  watch: {},
  computed: {
    ...userState(["commoditytwo", "gories", "sel",'cid'])
  }
};
</script>

<style scoped lang='scss'>
</style>