<template>
 <div>
     <el-table ></el-table>
     <div class="wo">13513</div>
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
       wo(){
           console.log(this.props.msg)
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