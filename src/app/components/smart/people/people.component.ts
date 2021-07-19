import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from 'src/app/models/person';
import { Item } from 'src/app/models/item';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  _people: BehaviorSubject<Array<Item>> = new BehaviorSubject(new Array());

  constructor(public service: PeopleService) { }

  ngOnInit(): void {
    this.searchPeople("");
   }

  searchPeople(event: any) {
    this.service.search(event).subscribe((data) => {
      const items = new Array<Item>();
      data.results.forEach(e => items.push({
        icon: "people_outline", model:e,
        route: "person", title: e.name
      }));
      this._people.next(items);
    });    
  }
}
