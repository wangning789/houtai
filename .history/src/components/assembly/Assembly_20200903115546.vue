<template>
 <div>
     <el-table  :data="userlist"  v-loading="!userlist.length">
         <template> 
           <el-table-column></el-table-column>
         </template>
     </el-table>
     <div @click="ob">dsada</div>
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