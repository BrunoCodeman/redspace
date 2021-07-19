import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeopleComponent } from './components/smart/people/people.component';
import { FilmsComponent } from './components/smart/films/films.component';
import { PlanetsComponent } from './components/smart/planets/planets.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BottomNavModule } from 'ngx-bottom-nav';
import { ItemSearchComponent } from './components/presentational/item-search/item-search.component';
import { ItemListComponent } from './components/presentational/item-list/item-list.component';
import { MatListModule } from '@angular/material/list';
import { ItemComponent } from './components/presentational/item/item.component';
import { MatCardModule } from '@angular/material/card';
import { PersonDetailComponent } from './components/presentational/person-detail/person-detail.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BaseService } from './services/base-service.service';
import { PeopleService } from './services/people.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PlanetDetailComponent } from './components/presentational/planet-detail/planet-detail.component';
import { FilmDetailComponent } from './components/presentational/film-detail/film-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    FilmsComponent,
    PlanetsComponent,
    ItemListComponent,
    ItemSearchComponent,
    ItemComponent,
    PersonDetailComponent,
    PlanetDetailComponent,
    FilmDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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

  ],
  providers: [HttpClient, BaseService, PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
