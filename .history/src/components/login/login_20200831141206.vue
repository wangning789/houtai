<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
          <span>登录后台</span>
      </div>
       <div class="username">
          <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="输入账号">
            <el-input class="box" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="输入密码">
            <el-input class="box" v-model="form.passworde"></el-input>
          </el-form-item>
        </el-form>
       </div>
       <div class="slogan">特别提醒: 如果您是管理员,请使用管理员账号登录,如果不知道账号,请联系公司人事。</div>
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
      },

       rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
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
  width: 20vw;
}
.username{
  display: flex;
  justify-content: center;
}
.slogan{
  display: flex;
  justify-content: center;
  margin: 20px 0px;
}
</style>