<template>
 <div>
 wo shi 
 </div>
</template>

<script>


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
      this.$api.of().then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
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