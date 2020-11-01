<template>
 <div>
     <el-table :Data="msg"  v-loading="!msg"></el-table>
     <div @click="ob">13513</div>
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
      ob(){
          console.log(this.msg)
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