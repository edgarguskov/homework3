import { Injectable } from '@angular/core';
import { FilmInterface } from '../intefaces/film.interface';
import filmsData from './films.json';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsDetailsService{
  films: FilmInterface[] = this.localstorageService.getFilms() || filmsData
  films$: BehaviorSubject<FilmInterface[]> = new BehaviorSubject<FilmInterface[]>(this.films)

  constructor(private localstorageService: LocalStorageService) {
  }

  getFilms(): BehaviorSubject<FilmInterface[]> {
    return this.films$
  }

  addFilm(film: FilmInterface): void{
    this.films.push(film)
    this.films$.next([...this.films])
    this.localstorageService.setFilms(this.films)
  }
  deleteFilm(id: string): void {
    this.films = this.films.filter(film => id != film.id)
    this.films$.next([...this.films])
    this.localstorageService.setFilms(this.films)
  }

}
