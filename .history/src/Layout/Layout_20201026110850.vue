<template>
  <div>
    <el-container>
      <el-header>
        <Hometop></Hometop>
      </el-header>

      <el-container>
        <el-aside width="12vw" class="toxy">
          <Homeleft @clicktag="clicktag"></Homeleft>
        </el-aside>
        <el-main>
          <div class="tags">
            <div v-for="(item,index) in tagss" :key="index">
              <div class="tags1" :class="item.path===$route.path?'tag2':''" @click="clickpath(item,index)">
                <div  :class="item.path===$route.path?'tags3':''"></div>
                <div :class="item.path===$route.path?'tags4':''">{{item.authName}}</div>
                <div v-if="item.path===$route.path&&item.path!='/'" @click.stop="clickdelete(item,index)">X</div>
              </div>
            </div>
          </div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Hometop from "../components/Hometop/Hometop";
import Homeleft from "../components/Homeleft/Homeleft";
export default {
  name: "",
  props: {},
  components: {
    Hometop,
    Homeleft
  },
  data() {
    return {
      tagss: [
        {
          authName: "首页",
          path: "/"
        }
      ]
    };
  },
  methods: {

    //点击左侧导航添加头部跳转标签
    clicktag(val) {
      // this.tags.push(val);

      // let newobj = {};
      // let tags = this.tags.reduce((preVal, curVal) => {
      //   newobj[curVal.id] ? "" : (newobj[curVal.id] = preVal.push(curVal));
      //   return preVal;
      // }, []);
      // this.tags=tags
      // localStorage.setItem("tags", JSON.stringify(this.tags));
      // console.log("123", this.tags);
      console.log('789')
    },

    //删除
    clickdelete(val,index){
      this.tags.map((item,index)=>{
        if(item.path===val.path){
          this.tags.splice(index,1)
          if(this.tags.length===index){
            this.$router.push({path:this.tags[index-1].path})
          }else{
            this.$router.push({path:this.tags[index].path})
          }
        }
      })
      localStorage.setItem("tags", JSON.stringify(this.tags));
    },

    //点击标签跳转路由
    clickpath(val,index){
      this.$router.push({path:val.path}).catch(err => err)
    }
  },
  mounted() {
    this.tags = JSON.parse(localStorage.getItem("tags"));
  },
  watch: {},
  computed: {}
};
</script>

<style scoped>


.labe {
  width: 100vw;
  height: 2vh;
  border: 1px solid black;
}
.tags {
  display: flex;
}
.tags1 {
  font-size: 12px;
  padding: 5px 5px;
  border: 1px solid rgb(200, 200, 200);
  margin-left: 10px;
  display: flex;
  align-items: center;
}
.tags1:hover{
  cursor: pointer;
}
.tag2 {
  background-color: rgb(64, 158, 255);
  color: white;
}
.tags3 {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid rgb(100,100,100);
  background-color: white;
}
.tags4{
  margin: 0px 5px;
}
</style>