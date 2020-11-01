<template>
 <div>
    <el-tree
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
          label: 'label'
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