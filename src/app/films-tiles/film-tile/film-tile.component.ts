import {Component, Input, OnInit} from '@angular/core';
import {FilmInterface} from "../../../common/intefaces/film.interface";

@Component({
  selector: 'app-film-tile',
  templateUrl: './film-tile.component.html',
  styleUrls: ['./film-tile.component.scss']
})
export class FilmTileComponent implements OnInit {
  @Input() film: FilmInterface | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
