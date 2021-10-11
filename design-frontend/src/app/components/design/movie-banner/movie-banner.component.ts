import { Component, OnInit } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-banner',
  templateUrl: './movie-banner.component.html',
  styleUrls: ['./movie-banner.component.scss']
})
export class MovieBannerComponent implements OnInit {

  public movieList: Array<Movie> = [];

  public carsoulIndicator: number = 0;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getTrendingMovies().pipe(
      pluck("content")
    ).subscribe(list => {
      if (list) {
        console.log(list);
        this.movieList = list;
      }
    })
  }

  getMovieUrl() {
    if (this.movieList.length > 0) {
      return 'linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%),' + `url(${this.movieList[this.carsoulIndicator].poster})`;
    }
    else
      return '';
  }

  bannerClickHandler(index: number) {
    this.carsoulIndicator = index;
  }

  getSelectedMovie(): Movie {
    return this.movieList[this.carsoulIndicator];
  }
}
