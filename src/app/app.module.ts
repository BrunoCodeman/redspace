import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BottomNavModule } from 'ngx-bottom-nav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BaseService } from './services/base-service.service';
import { PeopleService } from './services/people.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PlanetsService } from './services/planets.service';
import { FilmsService } from './services/films.service';
import { PeopleModule } from './components/smart/people/people.module';
import { FilmsModule } from './components/smart/films/films.module';
import { PlanetsModule } from './components/smart/planets/planets.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // MatButtonModule,
     MatIconModule,
    // MatDividerModule,
     MatToolbarModule,
     BottomNavModule,
    // MatListModule,
    // MatCardModule,
    // MatFormFieldModule,
    // MatInputModule,
    HttpClientModule,
    // MatProgressSpinnerModule,
    // MatSidenavModule,
    PeopleModule,
    PlanetsModule,
    FilmsModule
  ],
  providers: [HttpClient, BaseService, PlanetsService, PeopleService, FilmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
