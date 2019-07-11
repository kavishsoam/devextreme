import { Component, OnInit } from '@angular/core';
import { ServicesService, Population } from 'src/app/services.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  constructor(service : ServicesService) { }

  chartData : Population[];
  ngOnInit() {
  }


}
