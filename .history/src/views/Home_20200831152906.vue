<template>
 <div>
   <el-container>
  <el-header><Hometop></Hometop></el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
 </div>
</template>

<script>
import Hometop from'../components/Hometop/Hometop'
 export default {
   name: '',
   props: {
   },
   components: {
     Hometop
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