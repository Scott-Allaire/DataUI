import {Component, OnInit} from '@angular/core';
import {ReadingService} from "./reading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DataHub';

  stuff;

  constructor(private readingService: ReadingService) {
  }

  ngOnInit(): void {
    this.readingService.getReadings(null, null, null, null)
      .subscribe(resp => {
        this.stuff = resp;
      });
  }
}
