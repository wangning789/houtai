<template>
 <div>

 </div>
</template>

<script>
import {createNamespacedHelpers} from'vuex'
const userModule = createNamespacedHelpers("role");
const { mapState: userState, mapActions: userActionss } = userModule;
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {
     ...userActionss(['getrole'])
   },
   mounted() {
     this.getrole()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>