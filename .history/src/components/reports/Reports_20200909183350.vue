<template>
 <div>
   <!--为echarts准备一个具备大小的容器dom-->
	<div id="main" style="width:50vw;height:20vw;"></div>
 </div>
</template>

<script>
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
		
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>