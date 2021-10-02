import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-banner',
  templateUrl: './movie-banner.component.html',
  styleUrls: ['./movie-banner.component.scss']
})
export class MovieBannerComponent implements OnInit {

  public topMovieList: Array<Movie> = [];

  public carsoulIndicator: number = 0;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getTopMovies().subscribe(list => {
      this.topMovieList = list;
    });
  }

  getMovieUrl() {
    if (this.topMovieList.length > 0) {
      return 'linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%),' + `url(${this.topMovieList[this.carsoulIndicator].poster})`;
    }
    else
      return '';
  }

  bannerClickHandler(index: number) {
    this.carsoulIndicator = index;
  }

  getSelectedMovie(): Movie {
    return this.topMovieList[this.carsoulIndicator];
  }
}
