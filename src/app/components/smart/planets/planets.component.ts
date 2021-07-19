import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from 'src/app/models/item';
import { PlanetsService } from 'src/app/services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  _planets: BehaviorSubject<Array<Item>> = new BehaviorSubject(new Array());

  constructor(public service: PlanetsService) { }

  ngOnInit(): void {
    this.searchPlanet("");
   }

  searchPlanet(event: any) {
    this.service.search(event).subscribe((data) => {
      const items = new Array<Item>();
      data.results.forEach(e => items.push({
        icon: "public", model:e,
        route: "detail", title: e.name
      }));
      this._planets.next(items);
    });    
  }
}
