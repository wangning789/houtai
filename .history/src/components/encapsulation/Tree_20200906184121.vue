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
  ref="tree"
  node-key="id"
 :render-after-expand='true'
   @node-click="handleCheckChange"
    @setCheckedKeys="setCheckedKeys">

 
</el-tree>
 <span slot="footer" class="dialog-footer">
        <el-button @click="dialoging=false">取 消</el-button>
        <el-button type="primary" @click="setCheckedK">确 定</el-button>
</span>
<div>{{ids}}</div>
 </el-dialog>
 </div>
</template>

<script>
 export default {
   name: 'Tree',


   props: {
       ids:{
           type:Array
       },

       tree:{
           type:Array
       },

       dialoging:{
           type:Boolean,
           
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
       setCheckedKeys(){
             this.$refs.tree.setCheckedKeys([109])
       },

       handleClosetree(){
           this.$emit('handleClosetree')
       },

       handleCheckChange(key, data) {
        console.log(key);
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