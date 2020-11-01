<template>
 <div>
   <el-card class="box-card">
   <!--为echarts准备一个具备大小的容器dom-->
	<div id="myChart" style="width:80vw;height: 25vw;"></div>
  </el-card>
 </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const userModule = createNamespacedHelpers("order");
const { mapState: userState, mapActions: userActions } = userModule;
import echarts from'../../../echarts.min'


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
     
      
		
   },
   watch: {
     reports(val){
      
			 var echarts=require('echarts');
       let myChart = echarts.init(document.getElementById('myChart'));
        myChart.setOption(this.reports)
    
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