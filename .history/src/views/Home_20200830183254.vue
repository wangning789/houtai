<template>
 <div>
 wo shi 
 </div>
</template>

<script>
import axios from 'axios'
import api from'../http/api'
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       username:"admin",
        password:123456
     }
   },
   methods: {
    getdata(){
      api.login({username:this.username,password:this.password}).then(res=>{
        console.log(res)
      })
    }
   },
   mounted() {
     this.getdata()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>