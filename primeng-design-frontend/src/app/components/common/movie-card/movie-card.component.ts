import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input()
  movie!: Movie;

  ERROR_MOVIE_IMAGE = 'assets/images/error-image.png';

  constructor() {}

  ngOnInit(): void {}

  handleImageLoadFailure(event: Event) {
    (event!.target as HTMLImageElement).src = this.ERROR_MOVIE_IMAGE;
  }
}
