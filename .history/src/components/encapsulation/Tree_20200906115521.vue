<template>
 <div>
      <el-dialog
      title="权限分配"
      :visible.sync="dialoging"
      width="30%"
      :before-close="handleClosetree"
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
        <el-button @click="dialoging=false">取 消</el-button>
        <el-button type="primary" @click="confirmadd">确 定</el-button>
</span>
 </el-dialog>
 </div>
</template>

<script>
 export default {
   name: 'Tree',
   props: {
       tree:{
           type:Array
       },

       dialoging:{
           type:Boolean,
           default:false
       }

   },
   components: {

   },
   data () {
       
     return {
         defaultProps: {
          children: 'children',
          label: 'authName'
        },

       
     }
   },
   methods: {
       confirmadd(){},

       handleClosetree(){
           this.$emit('handleClosetree')
       },

       handleNodeClick(data) {
        console.log(data);
      }
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