<template>
 <div>
     <el-table :Data="msg"></el-table>
     <div>13513</div>
 </div>
</template>

<script>
 export default {
   name: 'assembly',
   props: {
         msg:{
       type:'',
      //  必传项
       required:true
     }
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