<template>
 <div>
     <el-table  :data="userlist"  v-loading="!userlist.length">
         <template  v-for="item in userlist"> 
           <el-table-column :label="item.label"></el-table-column>
         </template>
     </el-table>
    
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