<template>
 <div>
   <el-container>
  <el-header><Hometop></Hometop></el-header>
  <el-container>
    <el-aside width="200px"><Homeleft></Homeleft></el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>
 </div>
</template>

<script>
import Hometop from'../components/Hometop/Hometop'
import Homeleft from'../components/Homeleft/Homeleft'
 export default {
   name: '',
   props: {
   },
   components: {
     Hometop,
     Homeleft
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