<template>
 <div>
   <Role :msg="msg" :tableData="tableData"></Role>
   <div @click="click">54654</div>
 </div>
</template>

<script>
import {createNamespacedHelpers} from'vuex'
const userModule = createNamespacedHelpers("role");
const { mapState: userState, mapActions: userActions } = userModule;
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
       msg:[
           {
         label:"",
         width:'60',
         align:"center"
        },
         {
         label:"#",
         width:'60',
         align:"center"
        },
        {
         label:"职位",
         width:'',
         align:"center"
        },
          {
         label:"描述",
         width:'',
         align:"center"
        },
         {
         label:"操作",
         width:'',
         align:"center"
        },


       ]
     }
   },
   methods: {
     ...userActions(['getrole']),

     click(){
       console.log(this.tableData)
     }
   },
   mounted() {
     this.getrole()
   },
   watch: {

   },
   computed: {
     ...userState(['tableData'])
   }
 }
</script>

<style scoped lang='scss'>

</style>