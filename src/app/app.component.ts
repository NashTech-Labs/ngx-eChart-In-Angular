import { Component } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Chart-demo';

  chartOption:EChartsOption = {
    legend: {
      data: ['SINGLE', 'BULK', 'SWEETHEART'],
      bottom: '0%'
    },
    responsive: true,
    tooltip: {
      trigger: 'axis'
      // show: true,
      // backgroundColor: '#ffffff',
      // textStyle: {
      //   color: 'grey',
      // },
     // formatter:'abcc',
      // borderColor: '#ffffff',
    },

    xAxis: {
      axisLine: { onZero: true },
      data: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thuresday', 'Friday', 'Saturday'],
      type: 'category',
      splitLine: {
        show: false,
      },
      axisLabel: {
        color: '#7b809a',
        fontSize: 12,
      //  fontWeight: 'bold'
      },
    },

    yAxis: {
      axisLabel: {
        color: '#7b809a',
        fontSize: 12,
       // fontWeight: 'bold'
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'grey',
          opacity: 0.5
        },
      },
    },
    series: [
      {
        data: [40, 35, 50, 45, 30, 39, 20],
        type: 'bar',
        name: 'SINGLE',
        barMaxWidth: 15,
         color:'#4cc4df',
         stack: 'one',
         itemStyle: {
            borderRadius: [10, 10, 0, 0]
        },
      },
      {
        data: [30, 10, 5, 25, 3, 10, 40],
        type: 'bar',
        name:'BULK',
        barMaxWidth: 15,
        color:'#1e81b6',
        stack: 'Two',
        itemStyle: {
          borderRadius: [10, 10, 0, 0]
      },
      },{
        data: [30, 20, 30, 20, 19, 30, 10],
        type: 'bar',
        name:'SWEETHEART',
        barMaxWidth: 15,
         stack: 'three',
          color:'#a572fa',
          itemStyle: {
          borderRadius: [10, 10, 0, 0]
      },
      }
    ]
  };



//2nd

option:EChartsOption = {
  responsive: true,
  tooltip: {

  //  trigger: 'axis'
    show: true,
    backgroundColor: '#ffffff',
    textStyle: {
      color: 'grey',
    },
   //formatter:'abcc',
    borderColor: '#ffffff',
  },
  dataset: [
    {
      dimensions: ['name', 'age', 'profession', 'score', 'date'],
      source: [
        ['Hannah Krause', 41, 'Engineer', 314, '2011-02-12'],
        ['Zhao Qian', 20, 'Teacher', 351, '2011-03-01'],
        ['Jasmin Krause ', 52, 'Musician', 287, '2011-02-14'],
        ['Li Lei', 37, 'Teacher', 219, '2011-02-18'],
        ['Mia Neumann', 71, 'Engineer', 165, '2011-03-19'],
        ['Böhm Fuchs', 36, 'Musician', 318, '2011-02-24'],
        ['Han Meimei', 67, 'Engineer', 366, '2011-03-12'],
          ['Hannah ', 41, 'Engineer', 314, '2011-02-12'],
          ['Zhao ', 20, 'Teacher', 351, '2011-03-01'],
          ['Jasmin  ', 52, 'Musician', 287, '2011-02-14'],
          ['Li ', 37, 'Teacher', 219, '2011-02-18'],
          ['Karle ', 25, 'Engineer', 253, '2011-04-02'],
          ['Mia ', 71, 'Engineer', 165, '2011-03-19'],
          ['Böhm ', 36, 'Musician', 318, '2011-02-24'],
          ['Han ', 67, 'Engineer', 366, '2011-03-12']
      ]
    },
    {
      transform: {
        type: 'sort',
        config: { dimension: 'score', order: 'desc' }
      }
    }
  ],
  xAxis: {
    type: 'category',
    axisLabel: { interval: 0, rotate: 30 }
  },
  yAxis: {},
  series: {
    type: 'bar',
    encode: { x: 'name', y: 'score' },
    datasetIndex: 1,
    barMaxWidth: 19,
    color:'#53b8a9',
    itemStyle: {
       borderRadius: [10, 10, 0, 0]
   },
  }
};
}
