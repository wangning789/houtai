<template>
  <div>
    <el-form-item label="商品分类" prop="region">
      <el-cascader
        clearable
        v-model="label"
        :options="gories"
        :props="props"
      ></el-cascader>
    </el-form-item>
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
      label:'',//选择框内容

        props: {
         checkStrictly: true ,
        expandTrigger: "hover",
        label: "cat_name",
        value: "cat_id"
      },
    };
  },
  methods: {
    ...userActions([
      "getcategoriesTwo",
      "getboydlt",
      "geteaitfenlei",
      "getcategories",
      "getaddcategories"
    ])
  },
  mounted() {
    // this.getcategories({
    //   type: "",
    //   pagenum: "",
    //   pagesize: ""
    // });
  },
  watch: {},
  computed: {
    ...userState(["commoditytwo", "gories"])
  }
};
</script>

<style scoped lang='scss'>
</style>