<template>
 <div>
    <el-tree
  default-expand-all
  :props="defaultProps"
  :data="tree"
  show-checkbox
  node-key="id"
 >
</el-tree>
 </div>
</template>

<script>
 export default {
   name: 'Tree',
   props: {
       tree:{
           tree:Array
       }
   },
   components: {

   },
   data () {
     return {
         defaultProps: {
          children: 'children',
          label: 'authName'
        }
     }
   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>