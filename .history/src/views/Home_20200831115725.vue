<template>
 <div>
 wo shi 
 </div>
</template>
<script>
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
       password:'123456'
     }
   },
   methods: {
      getdata(){
        this.$api.login({username:this.username,password:this.password}).then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })
      }

   },
   mounted() {
     this.getdata()
      // this.$store.dispatch('user/login', {
      //   username: this.username,
      //   password: this.password
      // })
 
   },
   watch: {

   },
   computed: {
   
   }
 }
</script>

<style scoped lang='scss'>

</style>