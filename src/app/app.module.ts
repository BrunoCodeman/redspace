import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/smart/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PeopleComponent } from './components/smart/people/people.component';
import { MoviesComponent } from './components/smart/movies/movies.component';
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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeopleComponent,
    MoviesComponent,
    PlanetsComponent,
    ItemListComponent,
    ItemSearchComponent,
    ItemComponent,
    PersonDetailComponent,
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
