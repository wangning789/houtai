<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div>
          <span>登录后台</span>
        </div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="login">
        <el-button type="primary">登录</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      ruleForm: ""
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style>
.box-card {
  width: 50vw;
}
.clearfix {
  display: flex;
  justify-content: center;
}
.login {
  display: flex;
  justify-content: center;
}
</style>