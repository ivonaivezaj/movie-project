import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {SearchCriteriaComponent} from './components/search-criteria/search-criteria.component';
import {JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule, 
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
