<template>
  <div>
    <el-card class="box-card">
      <el-form :model="from" label-width="100px" class="demo-ruleForm">
        <el-form-item label="商品分类" prop="region">
          <el-cascader
            clearable
            v-model="from.label"
            @input="input"
            :options="gories"
            :props="props"
          ></el-cascader>
        </el-form-item>
      </el-form>

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

       <el-table
    :data="sel"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>       
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="商品 ID"
      prop="id">
    </el-table-column>  
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
      activeIndex: "1",
      sell: "many",
      id: "", //分类参数id

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
      "getcategoriesid"
    ]),

    //监听选择框
    input() {
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
      } else if (key === "2") {
        this.sell = "only";
      }
      if (key === "1" && this.from.label != []) {
        this.sell = "many";
        this.getcategoriesid({
          id: this.id,
          sel: this.sell
        });
      } else if (key === "2" && this.from.label != []) {
        this.sell = "only";
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
    ...userState(["commoditytwo", "gories", "sel"])
  }
};
</script>

<style scoped lang='scss'>
</style>