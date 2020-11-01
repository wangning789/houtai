<template>
 <div>
    <!-- <el-card class="box-card">
      <el-table :data="tree" style="width: 100%"  >
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
                </template>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </el-card> -->
 </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("commodity");
const { mapState: userState, mapActions: userActions } = userModule;
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       msg:[
         {
           label:'商品名称',
           align:'center',
           width:''
         },
           {
           label:'商品价格(元)',
           align:'center',
           width:''
         },
            {
           label:'商品重量',
           align:'center',
           width:''
         },
           {
           label:'创建时间',
           align:'center',
           width:''
         },
          {
           label:'操作',
           align:'center',
           width:'120'
         },
       ]
     }
   },
   methods: {
     ...userActions(['getdata'])
   },
   mounted() {
     this.getdata({type})
   },
   watch: {

   },
   computed: {
...userState([])
   }
 }
</script>

<style scoped lang='scss'>

</style>