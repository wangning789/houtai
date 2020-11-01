<template>
  <div>
    <el-card class="box-card">
      <!-- 上面 -->
      <div class="title">
        <div class="success">
          <el-steps :space="300" :active="active" finish-status="success">
              <el-step title="基本信息"></el-step>
              <el-step title="商品参数"></el-step>
              <el-step title="商品属性"></el-step>
              <el-step title="基本图片"></el-step>
              <el-step title="商品内容"></el-step>
              <el-step title="完成"></el-step>
          </el-steps>
        </div>
      </div>

      <!-- 左边 -->
      <div class="rules">
        <div>
            <el-tabs tab-position="left" v-model="activeName" style="height: 200px;" >
              <el-tab-pane label="基本信息" name="基本信息"></el-tab-pane>
              <el-tab-pane label="商品参数" name="商品参数"></el-tab-pane>
              <el-tab-pane label="商品属性" name="商品属性"></el-tab-pane>
              <el-tab-pane label="基本图片" name="基本图片"></el-tab-pane>
              <el-tab-pane label="商品内容" name="商品内容"></el-tab-pane>
            </el-tabs>
        </div>

        <!-- 输入框 -->
        <div class="inputbox">
          <el-form ref="addform" :model="form" label-width="80px" :rules="rules">
            <el-form-item label="商品名称" prop="name" class="From">
              <el-input controls-position="right" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item  label="商品价格" prop="price" class="From">
              <el-input  :disabled='disabledprice'  v-model="form.price"></el-input>
            </el-form-item>
            <el-form-item label="商品数量" prop="number" class="From">
              <el-input v-model="form.number"   :disabled='disablednumber'></el-input>
            </el-form-item>
            <el-form-item label="商品重量" prop="weight" class="From">
              <el-input v-model="form.weight"   :disabled='disabledweight'></el-input>
            </el-form-item>
            <el-form-item label="商品分类" prop="region" >
              <el-cascader
              clearable
                v-model="form.value"
                :disabled='disabled'
                :options="gories"
                :props="props"
                @change="handleChange"
              ></el-cascader>
            </el-form-item>
          </el-form>
        </div>
      </div>
    <div v-if="num===1"> <el-button @click="clicknext" type="primary">下一步</el-button></div>
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
        active:1,
        activeName:'基本信息',
        // 左边进度条
        active:3,
        //显示下一步按钮变量
        num:0,
        // 输入框禁止状态
        disabledprice:true,
        disablednumber:true,
        disabledweight:true,
        disabled:true,
        props:{
             expandTrigger: 'hover' ,
             label:'cat_name',
             value:'cat_id'
        },
        // 分类选择框数据
       
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        price: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        number: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        weight: [{ required: true, message: "请输入用户名", trigger: "blur" }]
      },

      form: {
        name: "",
        price: "",
        number: "",
        weight: "",
        region: "",
         value:'',
      },

    };
  },
  methods: {
    ...userActions(["getcategories"]),
    // 商品名称监听
   clicknext(){
       if(this.activeName==='基本信息'&&this.active===0){
           this.activeName='商品参数'
           this.active=1
       }
   },

    handleChange() {}
  },
  mounted() {
    this.getcategories({
      type: "",
      pagenum: "",
      pagesize: ""
    });
  },
  watch: {
  form:{
       handler(val){
         if(this.form.name===''){
        this.disabledprice=true
        this.disablednumber=true
        this.disabledweight=true
        this.disabled=true
         }else{    
        this.disabledprice=false
         } if(this.form.price===""){
             this.disablednumber=true
        this.disabledweight=true
        this.disabled=true 
         }else if(this.form.price!=""&&this.form.name!=''){
             this.disablednumber=false
         }
         if(this.form.number===""){
        this.disabledweight=true
        this.disabled=true 
         }else if(this.form.price!=""&&this.form.name!=''&&this.form.number!=""){
        this.disabledweight=false
         }
         
         if(this.form.weight===""){
        this.disabled=true 
         }else if(this.form.price!=""&&this.form.name!=''&&this.form.number!=""&&this.form.weight!=""){
              this.disabled=false
         }
         if(this.form.price!=""&&this.form.name!=''&&this.form.number!=""&&this.form.weight!=""&&this.form.value!=''){
             this.num=1
         }else{
             this.num=0
         }
      
     
    //    console.log(this.form.name)
   },
     immediate: true,  //刷新加载 立马触发一次handler
    deep: true  // 可以深度检测到 person 对象的属性值的变化
  }
  },
  computed: {
      ...userState(['gories'])
  }
};
</script>

<style >
.title {
  width: 85vw;
  display: flex;
  justify-content: center;
}
.success {
  width: 70vw;
}
.From {
  width: 40vw;
}
.rules {
  display: flex;
}
.inputbox {
  margin: 20px 20px;
}
</style>