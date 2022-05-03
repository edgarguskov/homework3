import {Component, Input, OnInit} from '@angular/core';
import {FilmInterface} from "../../../common/intefaces/film.interface";
import {FilmsDetailsService} from "../../../common/services/films-details.service";
import { FavouriteFilmsDetailService } from '../../../common/services/favourite-films-detail.service';

@Component({
  selector: 'app-film-tile',
  templateUrl: './film-tile.component.html',
  styleUrls: ['./film-tile.component.scss']
})
export class FilmTileComponent implements OnInit {
  @Input() film: FilmInterface | null = null;
  constructor(private filmsDetailsService: FilmsDetailsService, private favoriteFilmsDetailService: FavouriteFilmsDetailService) { }

  ngOnInit(): void {
  }
  onDelete(): void {
    this.filmsDetailsService.deleteFilm(this.film!.id)
  }
  addToFavorite(): void {
    if (this.film) {
      this.favoriteFilmsDetailService.addFilm(this.film)
    }
  }
  isFavorite(): boolean {
    return this.favoriteFilmsDetailService.isFavorite(this.film!.id)
  }
  deleteFavorite(): void {
    if (this.film) {
      this.favoriteFilmsDetailService.deleteFilm(this.film.id)
    }
  }
}
