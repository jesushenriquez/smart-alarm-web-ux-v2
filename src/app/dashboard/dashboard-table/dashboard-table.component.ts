import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.scss'],
})
export class DashboardTableComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  displayedColumns: string[] = [
    '#',
    'Device ID',
    'Fecha de Instalación',
    'Alarmas',
  ];
  dataSource = [
    {
      '#': 1,
      'Device ID': '123456',
      'Fecha de Instalación': '2022-01-01',
      Alarmas: 5,
    },
    {
      '#': 2,
      'Device ID': '789012',
      'Fecha de Instalación': '2022-01-15',
      Alarmas: 8,
    },
  ];
}
