<template>
  <div>
    <el-table :data="tableData" style="width: 100%" border>
        <template v-for="(item,index) in msg">
            <el-table-column :key="index" :label="item.label" :width="item.width" :align="item.align">
              <template slot-scope="scope" >
                <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
                <template>{{scope.row[item.prop]}}</template>
              </template>
            </el-table-column>
        </template>    
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Role",
  props: {

    //   数据
    tableData:{
        type:Array,
        required:true
    },

    // 表单信息
    msg:{
        type:Array,
        required:true
    }
  },
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

<style scoped lang='scss'>
</style>