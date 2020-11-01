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
              <el-input controls-position="right" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item  label="商品价格" prop="price" class="From">
              <el-input  :disabled='disabledprice' v-model="form.price"></el-input>
            </el-form-item>
            <el-form-item label="商品数量" prop="number" class="From">
              <el-input v-model="form.number" :disabled='disablednumber'></el-input>
            </el-form-item>
            <el-form-item label="商品重量" prop="weight" class="From">
              <el-input v-model="form.weight" :disabled='disabledweight'></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region" :disabled='disabled'>
              <el-cascader
                v-model="value"
                
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