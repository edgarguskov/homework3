import {Component, Input, OnInit} from '@angular/core';
import {FilmInterface} from "../../common/intefaces/film.interface";

@Component({
  selector: 'app-films-tiles',
  templateUrl: './films-tiles.component.html',
  styleUrls: ['./films-tiles.component.scss']
})
export class FilmsTilesComponent implements OnInit {
  @Input() films: FilmInterface[] | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
