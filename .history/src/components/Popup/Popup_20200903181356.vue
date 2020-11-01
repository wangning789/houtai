<template>
 <div>
 <el-dialog
  title="title"
  :visible.sync="dialogVisible"
  width="width"
  :before-close="handleClose">
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
     我是弹出框的组件
 </div>
</template>

<script>
 export default {
   name: 'Popup',
   props: {
    //    弹出框的名字
       title:{
           type:String,
           default:"编辑用户"
       },
     
    //  弹出框的宽度
    width:{
        type:[Number,String],
        defaultL:'30%'
    },

    // 弹出框显示与隐藏
    dialogVisible:{
        type:Boolean,
     
    }
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {
        handleClose(done) {
         this.$props.dialogVisible=true
        // this.$confirm('确认关闭？')
        //   .then(_ => {
        //     done();
        //   })
        //   .catch(_ => {});
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