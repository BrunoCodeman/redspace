import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', 
  loadChildren: () => import('./components/smart/people/people.module').then(m => m.PeopleModule) },
  { path: 'people', 
  loadChildren: () => import('./components/smart/people/people.module').then(m => m.PeopleModule) },

  { path: 'movies', 
  loadChildren: () => import('./components/smart/films/films.module').then(m => m.FilmsModule) },

  { path: 'planets', 
  loadChildren: () => import('./components/smart/planets/planets.module').then(m => m.PlanetsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
