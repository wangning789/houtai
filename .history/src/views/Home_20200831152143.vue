<template>
  <!-- 顶部栏 -->
  <div>
    <div class="max">
     <div class="box">
        <div>欢迎来到小爱后台系统</div>
    <div class="rigth">
      <div>{{time}}</div>
      <div>{{hourtime}}</div>
      <div>天气:{{weather}}</div>
      <div>亲爱的，{{username.username}}</div>
      <div class="out">退出</div>
    </div>
     </div>
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";
import axios from 'axios'
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      time: "",
      hourtime: "",
      username: "",
      weather:''
    };
  },
  methods: {
    // 天气请求
    getdata(){
        axios
    .get("http://wthrcdn.etouch.cn/weather_mini?city=成都")
    .then(res => {
     this.weather= res.data.data.yesterday.type
        console.log(res)
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
    this.getdata()
    console.log(date)
  },
  watch: {},
  computed: {}
};
</script>

<style>
.out {
  color: rgb(1, 102, 197);
}
.rigth{
  display: flex;

}
.rigth>div{
  margin: 0px 5px;
}
.max{
  display: flex;
  justify-content: center;
  font-size: 20px;
}
.box{
  width: 90vw;
   display: flex;
  justify-content: space-between;
}
</style>