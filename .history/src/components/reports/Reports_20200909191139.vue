<template>
 <div>
   <!--为echarts准备一个具备大小的容器dom-->
	<div id="myChart" style="width: 600px;height: 400px;"></div>
 </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("order");
const { mapState: userState, mapActions: userActions } = userModule;
// vue文件中引入echarts工具
import echarts from 'echarts'
 export default {
   name: '',
   props: {
   },
   components: {

   },
   data () {
     return {
     
			
     }
   },
   methods: {
     ...userActions(['getreports']),
     drawLine() {
        

     }
},
        
			

   
   mounted() {
      this.getreports()
       let myChart = this.$echarts.init(document.getElementById('myChart'));
        myChart.setOption(this.reports)
      
		
   },
   watch: {
     reports(val){
      
			
    
     }
   },
   computed: {
     ...userState(['reports'])
   }
 }
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
	}
</style>