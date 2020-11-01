<template>
 <div>
     <el-table  :data="userlist"  v-loading="!userlist.length" border style="width: 100vw">
         <template  v-for="(item,index) in attribute"> 
           <el-table-column 
           v-if="item.prop"
            :key="index" 
            :label="item.label"
            :prop="item.prop"
            :align="item.align"
            :width="item.width">
           </el-table-column>
             <el-table-column 
            v-else
            :key="index" 
            :label="item.label"
            :align="item.align"
            :width="item.width">
            <slot name="actci" :scope="scope"></slot>
           </el-table-column>
         </template>
     </el-table>

     <div @click="ob">14651sa</div>
    
 </div>
</template>

<script>
 export default {
   name: 'assembly',
   props: {
        userlist:{
       type:Array,
      //  必传项
       required:true
     },

     attribute:{
         type:Array,
         required:true
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