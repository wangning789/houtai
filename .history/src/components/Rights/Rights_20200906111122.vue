<template>
 <div>
   <el-tree
  :data="tree"
  show-checkbox
  node-key="id"
 >
</el-tree>
<div @click="click"> sdas</div>
 </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("role");
const { mapState: userState, mapActions: userActions } = userModule;
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
         data: [{
          id: 1,
          label: '一级 2',
          children: [{
            id: 3,
            label: '二级 2-1',
            children: [{
              id: 4,
              label: '三级 3-1-1'
            }, {
              id: 5,
              label: '三级 3-1-2',
              disabled: true
            }]
          }, {
            id: 2,
            label: '二级 2-2',
            disabled: true,
            children: [{
              id: 6,
              label: '三级 3-2-1'
            }, {
              id: 7,
              label: '三级 3-2-2',
              disabled: true
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'authName'
        }
     }
   },
   methods: {
       ...userActions(["getrole", "getroleid", "getdeleterole",'getroleodr','getfenlei','getlodi','getquanxian']),
     click(){
       console.log(this.data)
     }
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