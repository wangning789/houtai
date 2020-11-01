<template>
  <div>
    <el-card class="box-card">
      <!-- 上面 -->
      <div class="title">
        <div class="success">
          <el-steps :space="300" :active="active" finish-status="success">
            <template v-for="item in msg">
              <el-step :key="item.title" :title="item.title"></el-step>
            </template>
          </el-steps>
        </div>
      </div>

      <!-- 左边 -->
      <div class="rules">
        <div>
          <el-tabs tab-position="left" @tab-click="clickxinxi" v-model="activeName" style="height: 200px;">
            <el-tab-pane  label="基本信息" name="基本信息"></el-tab-pane>
            <el-tab-pane   :disabled="onedisabled" label="商品参数" name="商品参数"></el-tab-pane>
            <el-tab-pane  :disabled="twodisabled" label="商品属性" name="商品属性"></el-tab-pane>
            <el-tab-pane  :disabled="threedisabled" label="基本图片" name="基本图片"></el-tab-pane>
            <el-tab-pane  :disabled="forudisabled" label="商品内容" name="商品内容"></el-tab-pane>
          </el-tabs>
        </div>

        <!-- 输入框 -->
        <div class="inputbox" v-if="show===0">
          <el-form ref="addform" :model="form" label-width="80px" :rules="rules">
            <el-form-item label="商品名称" prop="name" class="From">
              <el-input controls-position="right" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="商品价格" prop="price" class="From">
              <el-input :disabled="disabledprice" v-model="form.price"></el-input>
            </el-form-item>
            <el-form-item label="商品数量" prop="number" class="From">
              <el-input v-model="form.number" :disabled="disablednumber"></el-input>
            </el-form-item>
            <el-form-item label="商品重量" prop="weight" class="From">
              <el-input v-model="form.weight" :disabled="disabledweight"></el-input>
            </el-form-item>
            <el-form-item label="商品分类" prop="region">
              <el-cascader
                clearable
                v-model="form.label"
                :disabled="disabled"
                :options="gories"
                :props="props"
                @change="handleChange"
              ></el-cascader>
            </el-form-item>
          </el-form>
        </div>
        <div v-if="show===1" style="margin:30px 30px">基本信息</div>
        <div v-if="show===2" style="margin:30px 30px">暂无参数</div>
        <div v-if="show===3">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">
              将文件拖到此处，或
              <em>点击上传</em>
            </div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
        <div v-if="show===4">
            <mavon-editor v-model="makvalue"/>
        </div>
      </div>
      <div v-if="num===1&&num!=2">
        <el-button @click="clicknext" type="primary">下一步</el-button>
      </div>
      <div v-if="num===2">
          <el-button @click="clickSubmit" type="danger">提交</el-button>
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
        //左边标签栏是否禁用
        onedisabled:true,
        twodisabled:true,
        threedisabled:true,
        forudisabled:true,

        makvalue:'',//编辑框内容
      //显示信息变量
      show: 0,

      active: 0,
      activeName: "基本信息",
      //显示下一步按钮变量
      num: 0,
      // 输入框禁止状态
      disabledprice: true,
      disablednumber: true,
      disabledweight: true,
      disabled: true,
      props: {
        expandTrigger: "hover",
        label: "cat_name",
        value: "cat_name"
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
        label: ""
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
    ...userActions(["getcategories","getaddgoods"]),
    //点击提交
    clickSubmit(){
     let msg= this.form.label.toString()
     msg=`"${msg}"`
      this.getaddgoods({
          goods_name:this.form.name,
          goods_cat:msg,
          goods_price:Number(this.form.price),
          goods_number:Number(this.form.number),
          goods_weight:Number(this.form.weight)
      })
      console.log(this.form.name,msg,this.form.price,this.form.number,this.form.weight)
    },
    // 点击基本信息标签
    clickxinxi(tab, event){
        if(tab.index==='0'){
         this.activeName = "基本信息";
        this.active = 0;
        this.show = 0;
        this.num=1
        }else if(tab.index==='1'){
        this.activeName = "商品参数";
        this.active = 1;
        this.show = 1;
        this.num=1
        }else if(tab.index==='2'){
           this.activeName = "商品属性";
        this.active = 2;
        this.show = 2;
        this.num=1
        }else if(tab.index==='3'){
        this.activeName = "基本图片";
        this.active = 3;
        this.show = 3;
        this.num=1 
        }else if(tab.index==='4'){
        this.activeName = "商品内容";
        this.active = 4;
        this.show = 4;
        this.num=2 
        }
    },
    // 点击下一步按钮
    clicknext() {
      if (this.activeName === "基本信息" && this.active === 0) {
        this.activeName = "商品参数";
        this.active = 1;
        this.show = 1;
        this.onedisabled=false
      } else if (
        this.activeName === "商品参数" &&
        this.active === 1 &&
        this.show === 1
      ) {
        this.activeName = "商品属性";
        this.active = 2;
        this.show = 2;
         this.twodisabled=false
      } else if (
        this.activeName === "商品属性" &&
        this.active === 2 &&
        this.show === 2
      ) {
        this.activeName = "基本图片";
        this.active = 3;
        this.show = 3;
        this.threedisabled=false
      } else if (
        this.activeName === "基本图片" &&
        this.active === 3 &&
        this.show === 3
      ) {
        this.activeName = "商品内容";
        this.active = 4;
        this.show = 4;
        this.num=2
        this.forudisabled=false
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
    form: {
      handler(val) {
        if (this.form.name === "") {
          this.disabledprice = true;
          this.disablednumber = true;
          this.disabledweight = true;
          this.disabled = true;
        } else {
          this.disabledprice = false;
        }
        if (this.form.price === "") {
          this.disablednumber = true;
          this.disabledweight = true;
          this.disabled = true;
        } else if (this.form.price != "" && this.form.name != "") {
          this.disablednumber = false;
        }
        if (this.form.number === "") {
          this.disabledweight = true;
          this.disabled = true;
        } else if (
          this.form.price != "" &&
          this.form.name != "" &&
          this.form.number != ""
        ) {
          this.disabledweight = false;
        }

        if (this.form.weight === "") {
          this.disabled = true;
        } else if (
          this.form.price != "" &&
          this.form.name != "" &&
          this.form.number != "" &&
          this.form.weight != ""
        ) {
          this.disabled = false;
        }
        if (
          this.form.price != "" &&
          this.form.name != "" &&
          this.form.number != "" &&
          this.form.weight != "" &&
          this.form.label != ""
        ) {
          this.num = 1;
        } else {
          this.num = 0;
        }

        //    console.log(this.form.name)
      },
      immediate: true, //刷新加载 立马触发一次handler
      deep: true // 可以深度检测到 person 对象的属性值的变化
    }
  },
  computed: {
    ...userState(["gories"])
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