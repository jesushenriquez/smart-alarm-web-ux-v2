import { Component, OnInit } from '@angular/core';

export interface Element {
  number: number;
  deviceId: string;
  installationDate: string;
  alarms: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  displayedColumns: string[] = ['#', 'deviceId', 'installationDate', 'alarms'];
  dataSource: Element[] = [
    {
      number: 1,
      deviceId: 'ABC123',
      installationDate: '2024-03-13',
      alarms: 5,
    },
    {
      number: 2,
      deviceId: 'XYZ789',
      installationDate: '2024-03-14',
      alarms: 8,
    },
  ];
}
