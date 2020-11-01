<template>
 <div>
     <el-card class="box-card">
      <!-- <div style="margin:15px 0px;">
        <el-input placeholder="请输入内容" v-model="content" style="width:500px" clearable>
          <el-button slot="append" @click="search" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="primary" style="margin-left:20px;" @click="addclick">添加分类</el-button>
      </div>
      <el-table :data="commoditytwo" style="width: 100%">
        <template v-for="(item,index) in msg">
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
              <template v-if="item.prop">{{scope.row[item.prop]}}</template>
              <template v-else>
                <el-button type="primary" @click="clickedit(scope)" size="mini">编辑</el-button>
                <el-button type="danger" @click="clickdelete(scope)" size="mini">删除</el-button>
              </template>
            </template>
          </el-table-column>
        </template>
      </el-table>

      <!-- 分页 -->
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pagenum"
          :page-sizes="[5,10,20,30]"
          :page-size="5"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total*1"
        ></el-pagination>
      </div> -->
    </el-card>
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
       type:'',
       pagenum:1,//当前页码值
       pagesize:10//每页显示多少条数据
     }
   },
   methods: {
     ...userActions(['getcategoriesTwo']),
     //添加分类
     addclick(){},
     handleSizeChange(){},
     handleCurrentChange(){}
   },
   mounted() {
     this.getcategoriesTwo({
      type:this.type,pagenum:this.pagenum,pagesize:this.pagesize
     })
   },
   watch: {

   },
   computed: {
     ...userState(['commoditytwo'])
   }
 }
</script>

<style scoped lang='scss'>

</style>