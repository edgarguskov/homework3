import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './navigation/navigation.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {FilmsTilesComponent} from './films-tiles/films-tiles.component';
import {FilmTileComponent} from './films-tiles/film-tile/film-tile.component';
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FilmsListComponent} from './films-list/films-list.component';
import {FilmsListItemComponent} from './films-list/films-list-item/films-list-item.component';
import {NumberSuffixPipe} from "../common/pipes/number-suffix.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FilmsTilesComponent,
    FilmTileComponent,
    FilmsListComponent,
    FilmsListItemComponent,
    NumberSuffixPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
