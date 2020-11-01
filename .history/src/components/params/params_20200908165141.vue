<template>
  <div>
    <el-card class="box-card">
      <el-form :model="from" label-width="100px" class="demo-ruleForm">
        <el-form-item label="商品分类" prop="region">
          <el-cascader clearable v-model="from.label" @input="input" :options="gories" :props="props"></el-cascader>
        </el-form-item>
      </el-form>

      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">动态参数</el-menu-item>
        <el-menu-item index="2">静态属性</el-menu-item>
      </el-menu>
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
      activeIndex: "1",
      sel:'many',

      from: {
        label: "" //选择框内容
      },

      props: {
        expandTrigger: "hover",
        label: "cat_name",
        value: "cat_id"
      }
    };
  },
  methods: {
    ...userActions([
      "getcategoriesTwo",
      "getboydlt",
      "geteaitfenlei",
      "getcategories",
      "getaddcategories",
      'getcategoriesid'
    ]),

    //监听选择框
    input(){
      let id=''
      if(this.from.label!=''&&this.from.label.length===3){
       id=this.from.label[2]
       this.getcategoriesid({
        id:id,
        sel:this.sel
      })
      }
      
      console.log(id)
    },

     handleSelect(key, keyPath) {
       if(key==="1"){
         this.sel="many"
       }else if(key==="2"){
         this.sel='only'
       }
      //  console.log(this.from.label)
      //  this.getcategoriesid({
      //    id:this.id,
      //   sel:'only'
      //  })
        console.log(key);
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
    ...userState(["commoditytwo", "gories",'sel'])
  }
};
</script>

<style scoped lang='scss'>
</style>