<template>
 <div>
 wo shi 
 </div>
</template>

<script>
import axios from 'axios'

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
   axios
    .get("roles")
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err);
    });
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