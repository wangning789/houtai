<template>
 <div>
     <el-table :Data="arr"  v-loading="!arr.length"></el-table>
     <div @click="ob">13513</div>
 </div>
</template>

<script>
 export default {
   name: 'assembly',
   props: {
         arr:{
       type:'',
      //  必传项
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