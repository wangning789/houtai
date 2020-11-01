<template>
 <div>
 wo shi 
 </div>
</template>

<script>

// import { createNamespacedHelpers } from 'vuex'
// const userModule = createNamespacedHelpers('user')
// const { mapState: userState, mapActions: userActions } = userModule

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
    getdata(){
      api.getMenus().then(res=>{
        console.log(res)
      })
    }

  //  ...userActions(['getdata'])
   },
   mounted() {
    //  this.getMenus()
  this.getdata()
  // this.$store.dispatch('user/getMenus')
  // console.log(this.$store)
 
   },
   watch: {

   },
   computed: {
   
   }
 }
</script>

<style scoped lang='scss'>

</style>