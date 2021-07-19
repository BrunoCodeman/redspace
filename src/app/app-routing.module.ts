import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailComponent } from './components/presentational/person-detail/person-detail.component';
import { FilmsComponent } from './components/smart/films/films.component';
import { PeopleComponent } from './components/smart/people/people.component';
import { PlanetsComponent } from './components/smart/planets/planets.component';

const routes: Routes = [
  {path: "", component: PeopleComponent},
  {path:"people", component: PeopleComponent},
  {path:"person", component: PersonDetailComponent},
  {path:"movies", component: FilmsComponent},
  {path:"planets", component: PlanetsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
