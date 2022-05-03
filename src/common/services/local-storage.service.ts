import { Injectable } from '@angular/core';
import { FilmInterface } from '../intefaces/film.interface';
import { FAVORITE_FILMS_KEY, FILMS_KEY } from '../properties/application.properties';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getFilms(): FilmInterface[] | null {
    if (localStorage.getItem(FILMS_KEY)) {
      return JSON.parse(localStorage.getItem(FILMS_KEY) || "") as FilmInterface[]

    } else {
      return null
    }

  }
  setFilms(films: FilmInterface[]): void {
    return localStorage.setItem(FILMS_KEY, JSON.stringify(films))
  }
  getFavoriteFilms(): FilmInterface[] | null {
    if (localStorage.getItem(FAVORITE_FILMS_KEY)) {
      return JSON.parse(localStorage.getItem(FAVORITE_FILMS_KEY) || "") as FilmInterface[]

    } else {
      return null
    }

  }
  setFavoriteFilms(films: FilmInterface[]): void {
    return localStorage.setItem(FAVORITE_FILMS_KEY, JSON.stringify(films))
  }
}

