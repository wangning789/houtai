<template>
 <div>
   <!--为echarts准备一个具备大小的容器dom-->
	<div id="main" style="width: 600px;height: 400px;"></div>
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
       charts: '',
			/*	opinion: ["1", "3", "3", "4", "5"],*/
				opinionData: ["3", "2", "4", "4", "5"]
			
     }
   },
   methods: {
     ...userActions(['getreports']),
     drawLine(id) {
				this.charts = echarts.init(document.getElementById(id))
				this.charts.setOption({
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['近七日收益']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},

					toolbox: {
						feature: {
							saveAsImage: {}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
					data: ["1","2","3","4","5"]
					
					},
					yAxis: {
						type: 'value'
					},

					series: [{
						name: '近七日收益',
						type: 'line',
						stack: '总量',
						data: this.opinionData
					}]
				})
			}

   },
   mounted() {
     this.$nextTick(function() {
				this.drawLine('main')
      })
      
      this.getreports()
		
   },
   watch: {

   },
   computed: {

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