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
      // 用户列表数据  
     arr:[],
    //  用户列表数量
     total:''
     }
   },
   methods: {
     ...userActions(["getusers"])
   },
   mounted() {
   this.getusers({
      query:this.query,
      pagenum:this.pagenum,
      pagesize:this.pagesize
   })
   console.log(this.msg)
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