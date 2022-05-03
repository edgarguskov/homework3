import { Component, OnInit } from '@angular/core';
import { FilmInterface } from '../../../common/intefaces/film.interface';
import { Subject, takeUntil } from 'rxjs';
import { FavouriteFilmsDetailService } from '../../../common/services/favourite-films-detail.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  favoriteFilms: FilmInterface[] | null = null
  private componentDestroyed$: Subject<void> = new Subject<void>();

  constructor(private favoriteFilmsDetailService: FavouriteFilmsDetailService) {
    this.favoriteFilmsDetailService.getFilms().pipe(takeUntil(this.componentDestroyed$)).subscribe(films => {
      this.favoriteFilms = films
  })
  }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.componentDestroyed$.next()
    this.componentDestroyed$.complete()
  }
}
