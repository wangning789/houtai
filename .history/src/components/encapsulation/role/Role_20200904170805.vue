<template>
  <div>
    <el-card class="box-card">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column type="expand">
          <template slot-scope="scope" v-if="scope.row.children&&scope.row.children.length>0">
           
       
            <div v-for="item in scope.row.children" :key="item.id" class="box">
              <div><div>{{item.authName}}</div></div> 
            
              <div v-for="item in scope.row.children" :key="item.roleDesc">
                <div   v-for="item1 in item.children" :key="item1.id">{{item1.authName}}</div> 
             
              </div>
           
       
            </div>
           
           
           
           
            
                 <!-- <div v-for="(item1,index1) in item" :key="index1">
                    <el-tag   :disable-transitions="false" closable @close="handleClose(42452)"> {{item.id}}</el-tag>
                 </div> -->
              
          </template>
        </el-table-column>

        <template v-for="(item,index) in msg" type="expand">
          <el-table-column
            v-if="item.type"
            :type="item.type"
            :key="index"
            :label="item.label"
            :width="item.width"
            :align="item.align"
          ></el-table-column>
          <el-table-column
            v-else
            :key="index"
            :label="item.label"
            :width="item.width"
            :align="item.align"
          >
            <template slot-scope="scope">
              <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot>
              <template v-else>{{scope.row[item.prop]}}</template>
            </template>
          </el-table-column>
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
    tableData: {
      type: Array,
      required: true
    },

    // 表单信息
    msg: {
      type: Array,
      required: true
    }
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    handleClose(tag){
     
      console.log(this.tableData)
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style>
.box{
  display: flex;
}
</style>