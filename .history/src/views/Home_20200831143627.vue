<template>
 <div>
    <div>欢迎来到小爱后台系统</div>
    <div></div>
 </div>
</template>
<script>

import dayjs from 'dayjs'
 export default {
   name: '',
   props: {
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
     let date = new Date()
    dayjs(date).format("YYYY-MM-DD");
     console.log(date)
   },
   watch: {

   },
   computed: {
   
   }
 }
</script>

<style scoped lang='scss'>

</style>