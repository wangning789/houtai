<template>
  <div>
    <el-row class="tac">
      <el-col :span="20">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
        <template v-for="item in menus">
          <el-submenu index="1" :key="item.path" v-if="item.children&&item.children.length>0">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item-group v-for="item1 in item.children" :key="item1.path">
              <el-menu-item index="1-1">{{item1.authName}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
         
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

<style scoped lang='scss'>
</style>