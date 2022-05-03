import { Component, OnInit } from '@angular/core';
import { DropdownOptionsListInterface } from '../../../common/intefaces/dropdown-options-list.interface';
import { SORT_OPTIONS } from '../../../common/properties/application.properties';
import { FilmInterface } from '../../../common/intefaces/film.interface';
import { FilmsDetailsService } from '../../../common/services/films-details.service';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { FilmsAddModalComponent } from '../../films-add-modal/films-add-modal/films-add-modal.component';
import { SortOptionsEnum } from '../../../common/enums/sort-options.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private componentDestroyed$: Subject<void> = new Subject<void>();

  sortOptionList: DropdownOptionsListInterface[] = SORT_OPTIONS
  filterInput: string = ''
  filteredFilms: FilmInterface[] | null = null
  films: FilmInterface[] | null = null
  isListView: boolean = false

  constructor(
              private filmsDetailsService: FilmsDetailsService,
              private dialog: MatDialog) {
    this.filmsDetailsService.getFilms().pipe(takeUntil(this.componentDestroyed$)).subscribe(films => {
      this.films = films
      this.filteredFilms = films
      this.filterInput = ''
    })
  }


  ngOnInit(): void {
    if (localStorage.getItem('View')){
      this.isListView = JSON.parse(localStorage.getItem("View") || "");
    }

  }
  toggleView(): void {
    this.isListView = !this.isListView
    localStorage.setItem("View", JSON.stringify(this.isListView))
  }
  openAddFilmModal(): void {
    this.dialog.open(FilmsAddModalComponent,{
      width: '350px',
      panelClass: 'add-films-modal-container'
    })
  }
  onFilter() {
    if (!this.filterInput){
      this.filteredFilms = this.films
    }
    this.filteredFilms = this.films?.filter(film => film.name.toLowerCase().includes(this.filterInput.toLowerCase())) || []
  }

  ngOnDestroy() {
    this.componentDestroyed$.next()
    this.componentDestroyed$.complete()
  }
  onSort(value: SortOptionsEnum): void {
    switch (value) {
      case SortOptionsEnum.ALL: {
        this.filteredFilms = this.films
        break
      }
      case SortOptionsEnum.ALPHABET: {
        this.filteredFilms = this.filteredFilms?.sort((a,b) => a.name > b.name ? 1 : -1) || []
        break
      }
      case SortOptionsEnum.YEAR: {
        this.filteredFilms = this.filteredFilms?.sort((a, b) => a.year - b.year) || []
        break
      }
      case SortOptionsEnum.ONSITE: {
        this.filteredFilms = this.filteredFilms?.sort((a, b) => a.onSite - b.onSite) || []
        break
      }
    }
  }
}

