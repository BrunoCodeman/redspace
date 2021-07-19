import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailComponent } from '../../presentational/person-detail/person-detail.component';
import { PlanetsComponent } from './planets.component';

const routes: Routes = [
  { path: '', component: PlanetsComponent },
  { path: 'detail', component: PersonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
