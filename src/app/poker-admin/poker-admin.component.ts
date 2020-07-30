import { Component, OnInit, Input } from '@angular/core';
import { AgilePointModel } from './models/AgilePointModel';

@Component({
  selector: 'app-poker-admin',
  templateUrl: './poker-admin.component.html',
  styleUrls: ['./poker-admin.component.scss'],
})
export class PokerAdminComponent implements OnInit {
  @Input() agilePoints: Array<AgilePointModel>;
  selectedBtn: string;
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['no', 'name', 'points'];

  constructor() {}

  ngOnInit(): void {
    this.agilePoints = Array<AgilePointModel>();

    let agilePointModel = new AgilePointModel();
    agilePointModel.Point = '0';
    this.agilePoints.push(agilePointModel);

    agilePointModel = new AgilePointModel();
    agilePointModel.Point = '0.5';
    this.agilePoints.push(agilePointModel);

    agilePointModel = new AgilePointModel();
    agilePointModel.Point = '1';
    this.agilePoints.push(agilePointModel);

    agilePointModel = new AgilePointModel();
    agilePointModel.Point = '2';
    this.agilePoints.push(agilePointModel);

    agilePointModel = new AgilePointModel();
    agilePointModel.Point = '3';
    this.agilePoints.push(agilePointModel);

    agilePointModel = new AgilePointModel();
    agilePointModel.Point = '5';
    this.agilePoints.push(agilePointModel);

    agilePointModel = new AgilePointModel();
    agilePointModel.Point = '8';
    this.agilePoints.push(agilePointModel);

    agilePointModel = new AgilePointModel();
    agilePointModel.Point = '13';
    this.agilePoints.push(agilePointModel);

    agilePointModel = new AgilePointModel();
    agilePointModel.Point = '20';
    this.agilePoints.push(agilePointModel);

    agilePointModel = new AgilePointModel();
    agilePointModel.Point = '40';
    this.agilePoints.push(agilePointModel);

    agilePointModel = new AgilePointModel();
    agilePointModel.Point = '80';
    this.agilePoints.push(agilePointModel);

    agilePointModel = new AgilePointModel();
    agilePointModel.Point = '100';
    this.agilePoints.push(agilePointModel);

    agilePointModel = new AgilePointModel();
    agilePointModel.Point = '?';
    this.agilePoints.push(agilePointModel);
  }
  toggleColor(point: string): void {
    this.selectedBtn = point;
  }
}
const ELEMENT_DATA: PeriodicElement[] = [
  { no: 1, name: 'Hydrogen', points: 1.0079 },
  { no: 2, name: 'Helium', points: 4.0026 },
  { no: 3, name: 'Lithium', points: 6.941 },
  { no: 1, name: 'Hydrogen', points: 1.0079 },
  { no: 2, name: 'Helium', points: 4.0026 },
  { no: 3, name: 'Lithium', points: 6.941 },
  { no: 1, name: 'Hydrogen', points: 1.0079 },
  { no: 2, name: 'Helium', points: 4.0026 },
  { no: 3, name: 'Lithium', points: 6.941 },
  { no: 1, name: 'Hydrogen', points: 1.0079 },
  { no: 2, name: 'Helium', points: 4.0026 },
  { no: 3, name: 'Lithium', points: 6.941 },
  { no: 1, name: 'Hydrogen', points: 1.0079 },
  { no: 2, name: 'Helium', points: 4.0026 },
  { no: 3, name: 'Lithium', points: 6.941 },
  { no: 1, name: 'Hydrogen', points: 1.0079 },
  { no: 2, name: 'Helium', points: 4.0026 },
  { no: 3, name: 'Lithium', points: 6.941 },
  { no: 1, name: 'Hydrogen', points: 1.0079 },
  { no: 2, name: 'Helium', points: 4.0026 },
  { no: 3, name: 'Lithium', points: 6.941 },
  { no: 1, name: 'Hydrogen', points: 1.0079 },
  { no: 2, name: 'Helium', points: 4.0026 },
  { no: 3, name: 'Lithium', points: 6.941 },
  { no: 1, name: 'Hydrogen', points: 1.0079 },
  { no: 2, name: 'Helium', points: 4.0026 },
  { no: 3, name: 'Lithium', points: 6.941 },
  { no: 1, name: 'Hydrogen', points: 1.0079 },
  { no: 2, name: 'Helium', points: 4.0026 },
  { no: 3, name: 'Lithium', points: 6.941 },
  { no: 1, name: 'Hydrogen', points: 1.0079 },
  { no: 2, name: 'Helium', points: 4.0026 },
  { no: 3, name: 'Lithium', points: 6.941 },
  { no: 1, name: 'Hydrogen', points: 1.0079 },
  { no: 2, name: 'Helium', points: 4.0026 },
  { no: 3, name: 'Lithium', points: 6.941 },
];
export interface PeriodicElement {
  name: string;
  no: number;
  points: number;
}
