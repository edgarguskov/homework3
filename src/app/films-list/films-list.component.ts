import {Component, Input, OnInit} from '@angular/core';
import {FilmInterface} from "../../common/intefaces/film.interface";

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {
  @Input() films: FilmInterface[] | null = null;
  @Input() isForFavorite: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
