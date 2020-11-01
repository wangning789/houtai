<template>
  <div>
    <el-card class="box-card">
      <el-input placeholder="请输入内容" v-model="content" class="input-with-select" clearable>
        <el-button slot="append" @click="search" icon="el-icon-search"></el-button>
      </el-input>
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
      content:'',//输入框数据
    };
  },
  methods: {

    //点击搜索
    search(){
      
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>