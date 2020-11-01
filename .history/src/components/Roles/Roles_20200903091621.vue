<template>
 <div>

 </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
const userModule=createNamespacedHelpers('user');
const { mapState: userState, mapActions: userActions } = userModule;

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
     ...userActions(["getusers"])
   },
   mounted() {
     console.log(msg)
   },
   watch: {

   },
   computed: {
     ...userState(["msg"])
   }
 }
</script>

<style scoped lang='scss'>

</style>