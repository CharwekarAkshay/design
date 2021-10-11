import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private MOVIES_ENDPOINT = "api/movie"

  constructor(private httpClient: HttpClient) { }


  getTrendingMovies(): Observable<any> {
    return this.httpClient.get<any>(this.MOVIES_ENDPOINT + '/trending');
  }
}
