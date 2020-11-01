<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
          <span>登录后台</span>
      </div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="输入账号">
            <el-input class="box" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="输入密码">
            <el-input v-model="form.passworde"></el-input>
          </el-form-item>
        </el-form>
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
      form: {
        name:''
      }
     
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
.box{
  width: 20ve;
}
</style>