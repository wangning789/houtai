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
     this.arr=this.msg
     this.total=this.msg
     console.log(this.arr)
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