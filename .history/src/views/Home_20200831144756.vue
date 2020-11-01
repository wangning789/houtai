<template>
 <div>
    <div>欢迎来到小爱后台系统</div>
    <div>{{time}}</div>
    <div>{{hourtime}}</div>
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
       time:'',
       hourtime:''
     }
   },
   methods: {
      
created() {
    this.$axios
      .get("http://wthrcdn.etouch.cn/weather_mini?city=郑州")
      .then(function(response) {
        console.log(response.data.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
   },
   mounted() {
    let date = new Date()
    this.time= dayjs(date).format("YYYY-MM-DD");
    this.hourtime=dayjs(date).format("HH:mm:ss")
     console.log(this.hourtime)

     this.created()
   },
   watch: {

   },
   computed: {
     
   }
 }
</script>

<style scoped lang='scss'>

</style>