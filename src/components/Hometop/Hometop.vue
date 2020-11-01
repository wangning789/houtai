<template>
  <!-- 顶部栏 -->
  <div>
   <div class="dasdads">
      <el-menu  mode="horizontal" >
    <div class="dmjaskdma">
      <div class="jijij">
        <div>欢迎来到欣垒睿享后台管理系统</div>
        <div class="rigth">
          <div>{{time}}/{{hourtime}}</div>
          <div>天气:{{weather}}</div>
          <div>亲爱的，{{username.username}}</div>
          <div class="out" @click="out">退出</div>
        </div>
      </div>
    </div>
    </el-menu>
   </div>
  </div>
</template>
<script>
import dayjs from "dayjs";
import axios from "axios";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      time: "",
      hourtime: "",
      username: "",
      weather: ""
    };
  },
  methods: {
      //退出登录
      out(){
          localStorage.removeItem('adminUser')
          this.$router.push({path:'/login'})
      },

    // 天气请求
    getdata() {
      axios
        .get("http://wthrcdn.etouch.cn/weather_mini?city=成都")
        .then(res => {
          this.weather = res.data.data.yesterday.type;
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    let date = new Date();
    this.time = dayjs(date).format("YYYY-MM-DD");
    this.hourtime = dayjs(date).format("HH:mm:ss");

    this.username = JSON.parse(localStorage.getItem("adminUser"));
    this.getdata();
    // console.log(date);
  },
  watch: {},
  computed: {}
};
</script>

<style>
.dasdads{
  width: 100vw;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 10;
}
.out {
  color: rgb(1, 102, 197);
}
.rigth {
  display: flex;
}
.rigth > div {
  margin: 0px 5px;
}
.dmjaskdma {
  padding: 17px 0px;
  display: flex;
  justify-content: center;
  font-size: 20px;
  color: rgb(0, 55, 100);
}
.jijij {
  width: 90vw;
  display: flex;
  justify-content: space-between;
}
</style>