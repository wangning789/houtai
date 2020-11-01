<template>
  <div>
    <el-card class="box-card">
    <el-table :data="tableData" style="width: 100%" border>
        <template v-for="(item,index) in msg"  type="expand">
            <el-table-column v-if="item.type" :type="item.type" :key="index" :label="item.label" :width="item.width" :align="item.align">
            </el-table-column>
            <el-table-column v-else :key="index" :label="item.label" :width="item.width" :align="item.align">
              <template slot-scope="scope" >
                <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
                <template v-else>{{scope.row[item.prop]}}</template>
              </template>
            </el-table-column>
        </template>  

                  
      <template >
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>sacads</span>
          </el-form-item>
        </el-form>
      </template>
  
    </el-table>
    </el-card>



    
   
  
   

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