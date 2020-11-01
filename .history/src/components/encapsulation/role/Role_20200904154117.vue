<template>
  <div>
    <el-card class="box-card">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column type="expand">
          <template>
            <el-form  inline class="demo-table-expand">
              <el-form-item>
                <template>
                <el-tag  
                v-for="item1 in tableData[0].children" :key="item1.id"
                
                :disable-transitions="false" 
                 closable @close="handleClose(item.authName)">{{item.authName}}</el-tag>
                  </template>
              </el-form-item>
            </el-form>
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

<style scoped lang='scss'>
</style>