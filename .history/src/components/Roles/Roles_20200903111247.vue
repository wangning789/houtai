<template>
 <div>
   <assembly :userlist="userlist" :usertotal="usertotal"></assembly>
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
    pagesize:5,

    
    //  列表属性
    attribute:[]

     }

   },
   methods: {
     ...userActions(["getusers"]),

     click(){
      //  console.log(this.msg)
     }
   },
   mounted() {
   this.getusers({
      query:this.query,
      pagenum:this.pagenum,
      pagesize:this.pagesize
   })
  
   },
   watch: {

   },
   computed: {
     ...userState(["userlist","usertotal"])
   }
 }
</script>

<style scoped lang='scss'>

</style>