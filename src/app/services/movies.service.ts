import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }


  getTopMovies(): Observable<Array<Movie>> {
    return this.httpClient.get<Array<Movie>>("./../../assets/mocks/topMoviesList.json");
  }
}
