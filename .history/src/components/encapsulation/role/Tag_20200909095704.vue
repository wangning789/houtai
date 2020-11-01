<template>
 <div>
      <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >{{tag}}</el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            ></el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
            
 </div>
</template>

<script>
 export default {
   name: 'Tag',
   props: {
       dynamicTags:{
           type:Array
       },

       inputValue:{
        //    type:String
       },
       inputVisible:{
           type:Boolean
       }
   },
   components: {

   },
   data () {
     return {
         inputValue:'',
    // dynamicTags: [],
    //   inputValue: "",
    //   inputVisible: false,
     }
   },
   methods: {
       
      handleClose(tag) {
         this.$emit("handleClose",tag)
        // this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

    showInput() {
        this.$emit('showInput')
    //   this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
        // this.$emit('handleInputConfirm')
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
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