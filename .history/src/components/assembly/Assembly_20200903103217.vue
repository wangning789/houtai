<template>
 <div>
     <el-table :data="msg"></el-table>
 </div>
</template>

<script>
 export default {
   name: 'assembly',
   props: {
         msg:{
       type:Array,
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