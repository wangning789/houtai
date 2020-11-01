<template>
 <div>

 </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("user");
const { mapState: userState, mapActions: userActions } = userModule;
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
      //  查询参数
       query:'',
      //  当前页码
       pagenum:1,
      //  每页显示条数
      pagesize:10
     }
   },
   methods: {
      ...userActions(["getusers"]),
   },
   mounted() {
     this.getusers(
    
     )
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style>
.nnn{
  width: 100vw;
  height: 100vh;
  background-color: aqua;
}
</style>