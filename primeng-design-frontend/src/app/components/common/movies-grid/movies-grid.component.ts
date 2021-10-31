import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.scss']
})
export class MoviesGridComponent implements OnInit {

  @Input()
  movieList: Array<Movie> = [];

  @Input()
  fetchingMovie: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  get updatingMovieGrid(): boolean {
    return this.fetchingMovie;
  }

}
