<template>
 <div>
      <el-dialog
      title="权限分配"
      :visible.sync="dialog"
      width="30%"
      :before-close="handleCloseadd"
    >
    <el-tree
  default-expand-all
  :props="defaultProps"
  :data="tree"
  show-checkbox
  node-key="id"
 >
</el-tree>
 <span slot="footer" class="dialog-footer">
        <el-button @click="dialog=false">取 消</el-button>
        <el-button type="primary" @click="confirmadd('form')">确 定</el-button>
</span>
 </el-dialog>
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