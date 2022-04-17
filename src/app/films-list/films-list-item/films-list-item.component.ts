import {Component, Input, OnInit} from '@angular/core';
import {FilmInterface} from "../../../common/intefaces/film.interface";

@Component({
  selector: 'app-films-list-item',
  templateUrl: './films-list-item.component.html',
  styleUrls: ['./films-list-item.component.scss']
})
export class FilmsListItemComponent implements OnInit {
  @Input() film: FilmInterface | null = null;
  constructor() {

  }


  ngOnInit(): void {
  }

}
