import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from 'src/app/models/item';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  _films: BehaviorSubject<Array<Item>> = new BehaviorSubject(new Array());

  constructor(public service: FilmsService) { }

  ngOnInit(): void {
    this.searchFilms("");
   }

  searchFilms(event: any) {
    this.service.search(event).subscribe((data) => {
      const items = new Array<Item>();
      data.results.forEach(e => items.push({
        icon: "movies", model:e,
        route: "movies/detail", title: e.title
      }));
      this._films.next(items);
    });    
  }
}
