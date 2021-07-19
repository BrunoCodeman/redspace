import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailComponent } from '../../presentational/film-detail/film-detail.component';
import { FilmsComponent } from './films.component';


const routes: Routes = [
  { path: '', component: FilmsComponent },
  { path: 'detail', component: FilmDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
