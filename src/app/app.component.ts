import {Component, OnInit} from '@angular/core';
import {ReadingService} from './reading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DataHub';

  chartOptions = {
    responsive: true,
    scales: {
      xAxes: [{
        type: 'time',
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Date'
        },
        ticks: {
          major: {
            fontStyle: 'bold',
            fontColor: '#FF0000'
          }
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'value'
        }
      }]
    }
  };

  chartData = {
    datasets: []
  };

  constructor(private readingService: ReadingService) {
  }

  ngOnInit(): void {
    this.readingService.getReadings(null, null, '2017-12-01', '2018-01-01')
      .subscribe(readings => {
      });
  }

  onChartClick(event) {
    console.log(event);
  }
}
