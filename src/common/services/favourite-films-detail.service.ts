import { Injectable } from '@angular/core';
import { FilmInterface } from '../intefaces/film.interface';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class FavouriteFilmsDetailService {


  favoriteFilms: FilmInterface[] = this.localstorageService.getFavoriteFilms() || []
  favoriteFilms$: BehaviorSubject<FilmInterface[]> = new BehaviorSubject<FilmInterface[]>(this.favoriteFilms)

  constructor(private localstorageService: LocalStorageService) {
  }

  getFilms(): BehaviorSubject<FilmInterface[]> {
    return this.favoriteFilms$
  }

  addFilm(film: FilmInterface): void{
    this.favoriteFilms.push(film)
    this.favoriteFilms$.next([...this.favoriteFilms])
    this.localstorageService.setFavoriteFilms(this.favoriteFilms)
  }
  deleteFilm(id: string): void {
    this.favoriteFilms = this.favoriteFilms.filter(film => id != film.id)
    this.favoriteFilms$.next([...this.favoriteFilms])
    this.localstorageService.setFavoriteFilms(this.favoriteFilms)
  }
  isFavorite(id: string): boolean {
    return this.favoriteFilms.findIndex(film => id === film.id) !== -1
  }

}
