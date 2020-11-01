<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
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
}
</style>