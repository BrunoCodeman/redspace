import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailComponent } from '../../presentational/person-detail/person-detail.component';
import { PeopleComponent } from './people.component';

const routes: Routes = [
  { path: '', component: PeopleComponent },
  { path: 'detail', component: PersonDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
