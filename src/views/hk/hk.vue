<template>
  <div>
    <el-container>
    	<div id="main"></div>
    </el-container>
  </div>
</template>

<script>

export default {
  methods: {
    getEchart:function(){
    	var moneyArr = [
          {value:3642, name:'机票'},
          {value:1878, name:'酒店'},
          {value:848, name:'吃'},
          {value:2276, name:'化妆品+衣服'},
          {value:1980, name:'LF'},
          {value:400, name:'其他(公交车费、航班保险)'},
          {value:5408, name:'手机'},
          {value:405, name:'礼物'},
      ]
    	var option = {
		    title : {
		        text: 'HK消费',
		        subtext: '总计：'+moneyArr.reduce((a,b)=> a+b.value,0),
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: ['机票','酒店','吃','化妆品+衣服','LF','手机','其他(公交车费、航班保险)','礼物']
		    },
		    series : [
		      {
            type: 'pie',
            radius : '75%',
            center: ['50%', '50%'],
            label: {
	            normal: {
	                formatter: '{b|{b}{c}}{per|{d}%}',
	                rich: {
	                   	b: {
	                   		padding: [0, 4],
	                   		fontSize: 16
	                   	},
	                    per: {
	                        color: '#eee',
	                        backgroundColor: '#334455',
	                        padding: [2, 4],
	                        borderRadius: 2
	                    }
	                }
	            }
          	},
            data:moneyArr,
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
		      }
		    ]
			};

	  	var echarts = require('echarts');
	  	var myChart = echarts.init(document.getElementById('main'));
			// 绘制图表
			myChart.setOption(option);
    }

  },
  mounted () {
  	this.getEchart()
  }
}
</script>

<style>
	#main{
		width: 100%;
		height: 500px;
	}
</style>
