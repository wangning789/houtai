<template>
  <div>
 <div class="leftdaohang">
      <el-row >
      <el-col  :span="24">
        <el-menu
       
          :default-active="$route.path"
        class="el-menu-vertical-demo"
          router
        >
        <template v-for="item in menus">
          <el-submenu :index="item.path" :key="`${item.id}_${item.path}`" v-if="item.children&&item.children.length>0">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item-group v-for="item1 in item.children" :key="item1.path" >
            
            
              <el-menu-item :class="item1.icon" @click="clicktag(item1)" :index="item1.path">{{item1.authName}}</el-menu-item>
              
            </el-menu-item-group>
          </el-submenu>
        <el-menu-item :index="item.path"  :key="`${item.id}_${item.path}`" v-else>
          <template slot="title">
              <i :class="item.meta.icon"></i>
            <span>{{item.meta.authName}}</span>
          </template>
         </el-menu-item>
         
        </template>
        </el-menu>
      </el-col>
    </el-row>
 </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("user");
const { mapState: userState, mapActions: userActions } = userModule;
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {};
  },
  methods: {
    ...userActions(["getMenus"]),
    clicktag(item){
      this.$emit('clicktag',item)
     
    },

   
  },
  mounted() {
    this.getMenus();
    //    this.$store.dispatch('user/getMenus')
  },
  watch: {},
  computed: {
    ...userState(["menus"])
  }
};
</script>

<style >
.tac{
  height: 100vw;
}
.leftdaohang{
  position: fixed;
  left: 0px;
  height: 100vw;
}
.el-menu-vertical-demo{
  height: 100vw;
}
</style>