<template>
 <div>
     <el-table  :data="userlist"  v-loading="!userlist.length">
         <template  v-for="(item,index) in attribute"> 
           <el-table-column 
            :key="index" 
            :label="item.label"
            :prop="item.prop">

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
         console.log(this.userlist)
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