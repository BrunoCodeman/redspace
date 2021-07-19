import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BottomNavModule } from 'ngx-bottom-nav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PresentationalModule } from '../../presentational/presentational.module';
import { FilmDetailComponent } from '../../presentational/film-detail/film-detail.component';
import { FilmsComponent } from './films.component';
import { FilmsRoutingModule } from './films-routing.module';


@NgModule({
  declarations: [
    FilmsComponent,
    FilmDetailComponent
  ],
  imports: [
    CommonModule,
    PresentationalModule,
    FilmsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    BottomNavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSidenavModule
  ]
})
export class FilmsModule { }
