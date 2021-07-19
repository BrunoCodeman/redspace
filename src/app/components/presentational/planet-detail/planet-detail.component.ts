import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {
  planet!:Planet;
  constructor() {
    this.planet = history.state.data;
   }

  ngOnInit(): void {
  }

}
