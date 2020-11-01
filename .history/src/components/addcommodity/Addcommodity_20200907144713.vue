<template>
  <div>
    <el-card class="box-card">
      <!-- 上面 -->
      <div class="title">
        <div class="success">
          <el-steps :space="300" :active="0" finish-status="success">
            <template v-for="item in msg">
              <el-step :key="item.title" :title="item.title"></el-step>
            </template>
          </el-steps>
        </div>
      </div>

      <!-- 左边 -->
      <div class="rules">
        <div>
          <el-steps direction="vertical" :active="0" process-status="finish " :space="200">
            <el-tabs tab-position="left" style="height: 200px;">
              <el-tab-pane label="基本信息"></el-tab-pane>
              <el-tab-pane label="商品参数"></el-tab-pane>
              <el-tab-pane label="商品属性"></el-tab-pane>
              <el-tab-pane label="基本图片"></el-tab-pane>
              <el-tab-pane label="商品内容"></el-tab-pane>
            </el-tabs>
          </el-steps>
        </div>

        <!-- 输入框 -->
        <div class="inputbox">
          <el-form ref="addform" :model="form" label-width="80px" :rules="rules">
            <el-form-item label="商品名称" prop="name" class="From">
              <el-input controls-position="right" @input="inputname" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item  label="商品价格" prop="price" class="From">
              <el-input  :disabled='disabledprice'  @input="inputprice" v-model="form.price"></el-input>
            </el-form-item>
            <el-form-item label="商品数量" prop="number" class="From">
              <el-input v-model="form.number"  @input="inputnumber" :disabled='disablednumber'></el-input>
            </el-form-item>
            <el-form-item label="商品重量" prop="weight" class="From">
              <el-input v-model="form.weight"  @input="inputweight" :disabled='disabledweight'></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region" >
              <el-cascader
                v-model="value"
                :disabled='disabled'
                :options="gories"
                :props="props"
                @change="handleChange"
              ></el-cascader>
            </el-form-item>
          </el-form>
        </div>
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
        // 输入框禁止状态
        disabledprice:true,
        disablednumber:true,
        disabledweight:true,
        disabled:true,
        props:{
             expandTrigger: 'hover' ,
             label:'cat_name'
        },
        // 分类选择框数据
        value:'',
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
        region: ""
      },

      msg: [
        {
          title: "基本信息"
        },
        {
          title: "商品参数"
        },
        {
          title: "商品属性"
        },
        {
          title: "基本图片"
        },
        {
          title: "商品内容"
        },
        {
          title: "完成"
        }
      ]
    };
  },
  methods: {
    ...userActions(["getcategories"]),
    // 商品名称监听
    inputname(){
        if(this.form.name!=""){
            this.disabledprice=false
        }else if(this.form.name===''){
             this. disabledprice=true
        this.disablednumber=true
        this.disabledweight=true
        this.disabled=true
        }
    },
    inputprice(){
         if(this.form.price!=""){
            this.disablednumber=false
        }else if(this.form.price===''){
        this.disablednumber=true
        this.disabledweight=true
        this.disabled=true
        }
    },
    inputnumber(){
         if(this.form.number!=""){
            this.disabledweigth=false
        }else if(this.form.number===''){
        this.disabledweight=true
        this.disabled=true
        }
    },
    inputweight(){
         if(this.form.weight!=""){
            this.disabled=false
        }else if(this.form.weight===''){
        this.disabled=true
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
  watch: {},
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