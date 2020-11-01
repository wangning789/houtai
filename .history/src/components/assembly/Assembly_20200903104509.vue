<template>
 <div>
     <el-table :Data="msg"  v-loading="!msg.users.length"></el-table>
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
          console.log(msg)
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