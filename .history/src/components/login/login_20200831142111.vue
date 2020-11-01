<template>
  <div>
   <div class="max">
      <el-card class="box-card">
      <div slot="header" class="clearfix">
          <span>登录后台</span>
      </div>
       <div class="username">
          <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="输入账号" prop="name">
            <el-input class="box"  v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="输入密码" prop="pass">
            <el-input class="box" v-model="form.passworde"></el-input>
          </el-form-item>
        </el-form>
       </div>
       <div class="slogan">特别提醒: 如果您是管理员,请使用管理员账号登录,如果不知道账号,请联系公司人事。</div>
      <div class="login">
        <el-button type="primary" @click="gologin">登录</el-button>
      </div>
    </el-card>
   </div>
  </div>
</template>

<script>
export default {
 
  props: {},
  components: {},
  data() {
    return {
      form: {
        username:'',
        passworde:''
      },

       rules: {
          name: [
            { required:true, message: '请输入账号', trigger: 'blur' },
          ],
          pass:[
             { required:true, message: '请输入密码', trigger: 'blur' },
          ],
          }
     
    };
  },
  methods: {
      gologin(){
        console.log(this.form.username)
      }
  },
  mounted() {},
  watch: {
   
  },
  computed: {}
};
</script>

<style>
.max{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-card {
  width: 40vw;
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