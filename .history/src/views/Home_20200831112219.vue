<template>
 <div>
 wo shi 
 </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const userModule = createNamespacedHelpers('user')
const { mapState: userState, mapActions: userActions } = userModule

 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
      //  username:'admin',
      //   password:"123456"
     }
   },
   methods: {
     

  //  ...userActions(['getdata'])
   },
   mounted() {
    //  this.getMenus()

  this.$store.dispatch('user/getMenus')
  console.log(this.$store)
 
   },
   watch: {

   },
   computed: {
   
   }
 }
</script>

<style scoped lang='scss'>

</style>