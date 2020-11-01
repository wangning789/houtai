<template>
 <div>
 <el-dialog
  title="title"
  :visible.sync="dialogVisible"
  width="width"
  :before-close="handleClose">
  <span slot="footer" class="dialog-footer">
    <el-button @clickcancel="clickcancel">取 消</el-button>
    <el-button type="primary" @clicktrue="clicktrue">确 定</el-button>
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
    //    点击右上角的取消，关闭唐初框，改变父组件的dialogVisible定义的值为false
        handleClose(done) {
         this.$parent.dialogVisible=false
        // this.$confirm('确认关闭？')
        //   .then(_ => {
        //     done();
        //   })
        //   .catch(_ => {});
      },
 //    点击取消按钮，关闭唐初框，改变父组件的dialogVisible定义的值为false
      clickcancel(){
           this.$parent.dialogVisible=false
      },
      //    点击确认按钮，关闭唐初框，改变父组件的dialogVisible定义的值为false
      clicktrue(){
         this.$parent.dialogVisible=false 
      },
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