import { Component, Inject, Renderer2, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {FilmInterface} from "../common/intefaces/film.interface";
import {FilmsDetailsService} from "../common/services/films-details.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  get isDarkMode(): boolean {
    return this.currentTheme === 'theme-dark';
  }
  films: FilmInterface[] | null = null
  private currentTheme = 'theme-light';
  isListView: boolean = false
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private filmsDetailsService: FilmsDetailsService

  ) {
    this.films = this.filmsDetailsService.getFilms()
  }

  ngOnInit(): void {
    this.currentTheme = localStorage.getItem('activeTheme') || 'theme-light';
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme);
    this.isListView = JSON.parse(localStorage.getItem("View") || "");
  }

  switchMode(isDarkMode: boolean) {
    this.currentTheme = isDarkMode ? 'theme-dark' : 'theme-light';
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme);
    localStorage.setItem('activeTheme', this.currentTheme);
  }

  toggleView():void {
    this.isListView = !this.isListView
    localStorage.setItem("View",JSON.stringify(this.isListView))
  }
}
