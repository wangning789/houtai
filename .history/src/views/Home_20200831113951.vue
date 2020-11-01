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
       username:"admin",
       password:'123456'
     }
   },
   methods: {
 

   },
   mounted() {
      this.$store.dispatch('user/login', {
        username: this.form.username,
        password: this.form.password
      })
 
   },
   watch: {

   },
   computed: {
   
   }
 }
</script>

<style scoped lang='scss'>

</style>