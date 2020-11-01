<template>
 <div>
   <el-tree
  :data="tree"
  show-checkbox
  node-key="id"
 >
</el-tree>

 </div>
</template>

<script>

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
    
   },
   mounted() {

   },
   watch: {

   },
   computed: {
     ...userState(["tableData", "roleId",'tree'])
   }
 }
</script>

<style>

</style>