import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetDetailComponent } from '../../presentational/planet-detail/planet-detail.component';
import { PlanetsComponent } from './planets.component';

const routes: Routes = [
  { path: '', component: PlanetsComponent },
  { path: 'detail', component: PlanetDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
