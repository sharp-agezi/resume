<template>
  <div id="container" style="min-width: 310px; height: 400px; margin: 100px auto 0"></div>
</template>
<script>
import { onMounted  } from 'vue'
import Highcharts from 'highcharts/highstock';
export default {
    setup() {
        onMounted(()=>{
            Highcharts.chart('container', {
              chart: {
                type: 'column'
              },
              title: {
                text: '技能点能力值'
              },
              xAxis: {
                type: 'category'
              },
              yAxis: {
                title: {
                  text: '能力值'
                }
              },
              legend: {
                enabled: false
              },
              plotOptions: {
                series: {
                  borderWidth: 0,
                  dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                  }
                }
              },
              tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}<br/>'
              },
              series: [{
                name: '技能',
                colorByPoint: true,
                data: [{
                  name: 'vue',
                  y: 90
                }, {
                  name: 'html5',
                  y: 90
                }, {
                  name: 'css3',
                  y: 80
                }, {
                  name: 'es6',
                  y: 80
                }, {
                  name: 'react',
                  y: 60
                }, {
                  name: 'node',
                  y: 60
                }]
              }]
            });
        })
    },
}
</script>
