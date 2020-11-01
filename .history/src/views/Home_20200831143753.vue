<template>
 <div>
    <div>欢迎来到小爱后台系统</div>
    <div>{{time}}</div>
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
       time:''
     }
   },
   methods: {
      
   },
   mounted() {
     let date = new Date()
    this.time= dayjs(date).format("YYYY-MM-DD");
     console.log(data)
   },
   watch: {

   },
   computed: {
   
   }
 }
</script>

<style scoped lang='scss'>

</style>