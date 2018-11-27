import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit, AfterViewInit, OnDestroy {
  chart;
  startC: number;
  endC: number;
  title = 'My First Angular App!';
  ngOnInit(){
    this.drawChart();
  }
  ngAfterViewInit(){

  }

  addPoint(){
    console.log(this.startC,this.endC, this.chart.series);
    this.chart.series['0'].addPoint([this.startC,this.endC]);
  }

  drawChart(){
    let series = [];
      series.push({
        name: '',
        data: [5, 8],
    });
    let sd = this;
    sd.chart = new Highcharts.Chart({
      chart: {
        renderTo: 'container',
        type: 'spline',
        // type: 'column',
        zoomType: 'xy'
      },
      // rangeSelector: {
      //     selected: 1
      // },
      title: {
        text: ''
      },
      subtitle: {
        text: ''
      },
      xAxis: {
      },
      yAxis: {
      },
      tooltip: {

      },
      plotOptions: {
      },
      series: series
    });
  }

  ngOnDestroy(){

  }
}

