<template>
 <div>
     <el-card class="box-card">
       <el-button @click="addto" type="primary">添加</el-button>
      <el-table :data="tableData" style="width: 100%" border >
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
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("role");
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
         label:'#',
         width:'',
         align:"center"
       },
        {
          width:'',
         label:'权限名称',
         align:"center"
       },
          {
            width:'',
         label:'权限等级',
         align:"center"
       }
     ]
     }
   },
   methods: {
     ...userActions(['getquanxian']),
   },
   mounted() {
     this.getquanxian({type:"list"})
   },
   watch: {

   },
   computed: {
    ...userState(['tree'])
   }
 }
</script>

<style>

</style>