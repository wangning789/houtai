<template>
 <div>
     <el-table  :data="userlist"  v-loading="!userlist.length"></el-table>
     <div @click="ob">13513</div>
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

     usertotal:{
         type:Number,
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
         console.log(this.usertotal)
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