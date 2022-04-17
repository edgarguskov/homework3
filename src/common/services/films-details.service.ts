import { Injectable } from '@angular/core';
import {FilmInterface} from "../intefaces/film.interface";
import filmsData from "./films.json"

@Injectable({
  providedIn: 'root'
})
export class FilmsDetailsService {
  films: FilmInterface[] = filmsData

  getFilms(): FilmInterface[] {
    return this.films
  }

}
