import { Component, OnInit, Input } from '@angular/core';
import { AgilePointModel } from './models/AgilePointModel';
import { PlayerDetailModel } from './models/PlayerDetailModel';

@Component({
  selector: 'app-poker-admin',
  templateUrl: './poker-admin.component.html',
  styleUrls: ['./poker-admin.component.scss'],
})
export class PokerAdminComponent implements OnInit {
  @Input() agilePoints: Array<AgilePointModel>;
  @Input() playerDetails: Array<PlayerDetailModel>;
  selectedBtn: string;
  dataSource = ELEMENT_DATA;

  displayedColumns: string[] = ['no', 'name', 'points'];

  constructor() {}

  ngOnInit(): void {
    this.agilePoints = Array<AgilePointModel>();
    this.playerDetails = Array<PlayerDetailModel>();

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

    let playerDetailModel = new PlayerDetailModel();
    playerDetailModel.Points = 1;
    playerDetailModel.Name = 'Sajan Soosai Micheal';

    this.playerDetails.push(playerDetailModel);

    playerDetailModel = new PlayerDetailModel();
    playerDetailModel.Points = 100;
    playerDetailModel.Name = 'Sajan Soosai Micheal 1';

    this.playerDetails.push(playerDetailModel);

    playerDetailModel = new PlayerDetailModel();
    playerDetailModel.Points = 100;
    playerDetailModel.Name = 'Sajan Soosai Micheal 2';

    this.playerDetails.push(playerDetailModel);

    playerDetailModel = new PlayerDetailModel();
    playerDetailModel.Points = 100;
    playerDetailModel.Name = 'Sajan Soosai Micheal 3';

    this.playerDetails.push(playerDetailModel);

    playerDetailModel = new PlayerDetailModel();
    playerDetailModel.Points = 100;
    playerDetailModel.Name = 'Sajan Soosai Micheal 4';

    this.playerDetails.push(playerDetailModel);

    playerDetailModel = new PlayerDetailModel();
    playerDetailModel.Points = 100;
    playerDetailModel.Name = 'Sajan Soosai Micheal 5';

    this.playerDetails.push(playerDetailModel);
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

export interface PlayerDetail {
  name?: string;
  points?: number;
}
