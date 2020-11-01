<template>
 <div>
     <el-table  :data="userlist"  v-loading="!userlist.length" border style="width: 100vw">
         <template  v-for="(item,index) in attribute"> 
           <el-table-column 
           v-if="item.prop"
            :key="index" 
            :label="item.label"
            :align="item.align"
            :width="item.width">
            <template slot-scope="scope">
               <slot v-if="item.slot" :name="item.slot" :scope="scope"></slot> 
                <template v-else>{{scope.row[item.prop]}}</template>
            </template>
           </el-table-column>
             <el-table-column 
            v-else
            :key="index" 
            :label="item.label"
            :align="item.align"
            :width="item.width">
            <template slot-scope="scope">
               <slot name="actci" :scope="scope"></slot>
            </template>
           </el-table-column>
         </template>
     </el-table>

     <!-- 分页 -->
    <div class="block" >
        <el-pagination
        v-if="display"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :usertotal="400">
        </el-pagination>
    </div>

     <div @click="ob">14651sa</div>
    
 </div>
</template>

<script>
 export default {
   name: 'assembly',
   props: {

    //    用户数据
        userlist:{
       type:Array,
      //  必传项
       required:true
     },
    
    // 表单属性数据
     attribute:{
         type:Array,
         required:true
     },

    // 用户数量数据
    usertotal:{
        type:''
    },

    // 判断显不显示分页
    display:{
        type:Boolean,
        default:false // 默认值为显示（default为默认值的意思）
    }

   
   },
   components: {

   },
   data () {
     return {
         arr:Object
     }
   },
   methods: {
       handleSizeChange(val){

       },

       handleCurrentChange(val){

       },

     ob(){
         console.log(this.attribute)
     }
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