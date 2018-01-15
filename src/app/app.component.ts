import {Component, OnInit} from '@angular/core';
import {ReadingService} from './reading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DataHub';

  ready = false;

  public lineChartData: Array<any> = [
    {data: [], label: 'Temperature'},
    {data: [], label: 'Humidity'},
    {data: [], label: 'Feels Like'},
  ];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true,
    tooltips: {
      mode: 'index',
      axis: 'x'
    }
  };
  public lineChartColors: Array<any> = [
    { // temp
      borderColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
    },
    { // humidity
      borderColor: 'rgba(99,255,132,1)',
      pointBorderColor: '#fff',
    },
    { // feels like
      borderColor: 'rgba(99,132,255,1)',
      pointBorderColor: '#fff',
    },
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  constructor(private readingService: ReadingService) {
  }

  ngOnInit(): void {
    this.readingService.getReadings(null, null, '2017-12-01', '2018-01-01')
      .subscribe(readings => {
        const labels = [];
        const tempData = [];
        const humidityData = [];
        const feelsLikeData = [];
        for (const reading of readings) {
          if (reading.code === 'tempf') {
            tempData.push(reading.value);
          }
          if (reading.code === 'hum') {
            humidityData.push(reading.value);
          }
          if (reading.code === 'feels_like') {
            feelsLikeData.push(reading.value);
          }

          if (labels.indexOf(reading.received) < 0) {
            labels.push(reading.received);
          }
        }
        this.lineChartData[0].data = tempData.reverse();
        this.lineChartData[1].data = humidityData.reverse();
        this.lineChartData[2].data = feelsLikeData.reverse();
        this.lineChartLabels = labels.reverse();
        console.log('chartData', [labels, tempData]);
        this.ready = true;
      });
  }

  chartClicked(event) {
    console.log(event);
  }

  chartHovered(event) {
    console.log(event);
  }
}
