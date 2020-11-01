<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <div> <span>登录后台</span></div>
       
      </div>
      <div class="login"> <el-button type="primary">登录</el-button></div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
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
.clearfix{
  display: flex;
  justify-content: center;
}
.login{
  display: flex;
  justify-content: center;
}
</style>