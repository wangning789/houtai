<template>
 <div>
  <div @click="click">1256165</div>
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
     total:'',
     query:'',
     pagenum:1,
    pagesize:5
     }
   },
   methods: {
     ...userActions(["getusers"]),

     click(){
       console.log(this.msg)
     }
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