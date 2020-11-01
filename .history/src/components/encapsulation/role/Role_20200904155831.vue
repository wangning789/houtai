<template>
  <div>
    <el-card class="box-card">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column type="expand">
          <template>
              <div v-for="(item,index) in tableData" :key="index" >
                {{item[0]}}
                <!-- <template v-for="item1 in item">
                  <el-tag  :key="item1.id" :disable-transitions="false" closable @close="handleClose(42452)">125132</el-tag>
                </template> -->
             
                 
              </div>
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