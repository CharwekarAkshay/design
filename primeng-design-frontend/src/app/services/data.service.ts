import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../global.constants';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getTrendingMovies(): Observable<Movie> {
    return this.httpClient.get<Movie>(GlobalConstants.backendAPI + '/' + GlobalConstants.movie + '/trending');
  }
}
