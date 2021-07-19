import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {
  film!:Film
  constructor() {
    this.film = history.state.data;
   }

  ngOnInit(): void {
  }

}
