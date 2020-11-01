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
  :default-checked-keys="ids"
 :render-after-expand='true'
   @node-click="handleCheckChange"
>

 
</el-tree>
 <span slot="footer" class="dialog-footer">
        <el-button @click="clickjur">取 消</el-button>
        <el-button type="primary" @click="clickjurisdiction">确 定</el-button>
</span>
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
     //弹除框取消
     clickjur(){
       this.$emit('clickjur')
     },

     //权限点击确认
      clickjurisdiction(){
        let arr=this.$refs.tree.getCheckedKeys()
        let msg=this.$refs.tree.getHalfCheckedKeys()
        let val=arr.concat(msg)
         let mot=val. toString()
         this.$emit('clickjurisdiction',mot)
        // console.log(mot)
        // console.log(this.$refs.tree.getCheckedKeys());
        // console.log('123',this.$refs.tree.getHalfCheckedKeys())
      },

       confirmadd(){},
       setCheckedKeys(){
             this.$refs.tree.setCheckedKeys([109])
       },

       handleClosetree(){
           this.$refs.tree.setCheckedKeys([]);
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