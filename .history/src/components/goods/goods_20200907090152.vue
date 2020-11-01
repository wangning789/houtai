<template>
 <div>
    <el-card class="box-card">
      <el-table :data="tree" style="width: 100%" border >
        <template v-for="(item,index) in msg" >
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
              <template v-if='item.label==="权限名称"'>{{scope.row[item.prop]}}</template>
              <template v-if='item.label==="权限等级"'>
                <template v-if="scope.row.level==='一级'"> <el-tag> {{scope.row[item.prop]}}</el-tag></template>
                <template v-if="scope.row.level==='二级'"> <el-tag type="success"> {{scope.row[item.prop]}}</el-tag></template>
                <template v-if="scope.row.level==='三级'"> <el-tag type="info"> {{scope.row[item.prop]}}</el-tag></template>
                </template>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </el-card>
 </div>
</template>

<script>
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>