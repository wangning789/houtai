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

      <el-table :data="sel" style="width: 100%">
        <template v-for="item in msg">
          <el-table-column
            v-if="item.pop"
            :key="item.label"
            :align="item.align "
            :label="item.label"
            :type="item.type"
          ></el-table-column>
          <el-table-column :key="item.wof" v-if="item.wof" :type="item.type"></el-table-column>
          <el-table-column v-else :key="item.label" :align="item.align " :label="item.label" prop>
            <template slot-scope="scope">
              <template>{{scope.row[item.porp]}}</template>
              <template v-if="item.name">
                <el-button type="primary">编辑</el-button>
                <el-button type="danger">删除</el-button>
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
      },

      msg: [
        {
          label: "#",
          type: "index",
          align: "left",
          width: "100",
          pop:'ds',
        },
        {
          label: "",
          type: "expand",
          align: "center",
          width: "150",
          wof: "ni"
        },
        {
          porp: "attr_vals",
          label: "参数名称",
          align: "center",
          width: ""
        },
        {
          label: "操作",
          align: "center",
          width: "",
          name: "操作按钮"
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