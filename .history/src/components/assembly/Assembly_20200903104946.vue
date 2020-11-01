<template>
 <div>
     <el-table :Data="msg"  v-loading="!msg.length"></el-table>
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
         arr:Object
     }
   },
   methods: {
      ob(){
          console.log(this.arr)
      }
   },
   mounted() {
       this.arr=this.msg
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>