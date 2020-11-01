<template>
  <div>
    <div class="max">
      <div>欢迎来到小爱后台系统</div>
    <div class="rigth">
      <div>{{time}}</div>
      <div>{{hourtime}}</div>
      <div>亲爱的，{{username.username}}</div>
      <div class="out">退出</div>
    </div>
    </div>
  </div>
</template>
<script>
import dayjs from "dayjs";
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      time: "",
      hourtime: "",
      username: ""
    };
  },
  methods: {},
  mounted() {
    let date = new Date();
    this.time = dayjs(date).format("YYYY-MM-DD");
    this.hourtime = dayjs(date).format("HH:mm:ss");

    this.username = JSON.parse(localStorage.getItem("adminUser"));
    // console.log(this.username)
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
  justify-content: space-between;
}
</style>