import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, pluck } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie';
import { Page } from 'src/app/models/page';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  constructor(private movieService: MoviesService) { }

  movieList: Array<Movie> = [];
  page?: Page;

  ngOnInit(): void {
    this.fetchMovies();
  }

  // Make correct request

  fetchMovies(): void {
    const requestParams = {
      page: 0,
      size: 10
    };

    this.movieService.getPopularMovies(requestParams).subscribe(response => {
      if (response) {
        this.page = response.pageable;
        this.movieList = response.content;
      }
    });
  }

}
