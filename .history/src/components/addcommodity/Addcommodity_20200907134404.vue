<template>
  <div>
       <el-card class="box-card">
           <!-- 上面 -->
    <div class="title">
      <div class="success">
        <el-steps :space="300" :active="0" finish-status="success">
          <template v-for="item in msg">
            <el-step  :key="item.title" :title="item.title"></el-step>
          </template>
        </el-steps>
      </div>
    </div>

    <!-- 左边 -->
    <div>
  <el-steps direction="vertical" :active="0" process-status="finish "  :space="200">
  <el-tabs tab-position="left" style="height: 200px;">
    <el-tab-pane label="基本信息"></el-tab-pane>
    <el-tab-pane label="商品参数"></el-tab-pane>
    <el-tab-pane label="商品属性"></el-tab-pane>
    <el-tab-pane label="基本图片"></el-tab-pane>
    <el-tab-pane label="商品内容"></el-tab-pane>
  </el-tabs>
  </el-steps>
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
        msg:[
          {
               title:"基本信息" ,
          },
          {
               title:"商品参数" ,
          },
          {
               title:"商品属性" ,
          },
          {
               title:"基本图片" ,
          },
          {
               title:"商品内容" ,
          },
          {
               title:"完成" ,
          },
        ],

       
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style >
.title {
  width: 85vw;
  display: flex;
  justify-content: center;
}
.success{
    width: 70vw;
}
</style>