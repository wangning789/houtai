<template>
  <div>
    <el-row class="tac">
      <el-col :span="3">
        <el-menu
          :default-active="$route.path"
        class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router
        >
        <template v-for="item in menus">
          <el-submenu :index="item.path" :key="`${item.id}_${item.path}`" v-if="item.children&&item.children.length>0">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item-group v-for="item1 in item.children" :key="item1.path" >
            
            
              <el-menu-item :class="item1.icon" :index="item1.path">{{item1.authName}}</el-menu-item>
              
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

    handleOpen(key, keyPath) {
      console.log(this.menus);
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(this.menus);
      console.log(key, keyPath);
    }
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

</style>