import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', 
  loadChildren: () => import('./components/smart/people/people.module').then(m => m.PeopleModule) },
  { path: 'people', 
  loadChildren: () => import('./components/smart/people/people.module').then(m => m.PeopleModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
