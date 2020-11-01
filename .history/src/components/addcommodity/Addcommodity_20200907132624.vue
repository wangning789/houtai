<template>
  <div>
    <div class="title">
      <div class="success">
        <el-steps :space="300" :active="0" finish-status="success">
          <template v-for="item in msg">
            <el-step  :key="item.title" :title="item.title"></el-step>
          </template>
        </el-steps>
      </div>
    </div>

    <div style="height: 300px;">
  <el-steps direction="vertical" :active="0" process-status="finish " simple='true' :space="200">
    <template  v-for="item in msg">
        <div  :key="item.title" v-if="item.title!='完成'"><el-step :title="item.title"></el-step></div>
    </template>
  </el-steps>
</div>
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