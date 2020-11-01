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
       username:'admin',
        password:"123456"
     }
   },
   methods: {
    
   },
   mounted() {
     this.getdata()
    // this.$store.dispatch('user/getdata')
 
   },
   watch: {

   },
   computed: {
      ...userState(['menus'])
   }
 }
</script>

<style scoped lang='scss'>

</style>