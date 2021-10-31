import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-detail-rating',
  templateUrl: './movie-detail-rating.component.html',
  styleUrls: ['./movie-detail-rating.component.scss'],
})
export class MovieDetailRatingComponent implements OnInit {
  @Input()
  movie!: Movie;

  constructor() {}

  ngOnInit(): void {}

  getReleasedYear(released: string): string {
    const splitted = released.split(' ');
    return splitted[splitted.length - 1];
  }

  getRunTime(runtime: number) {
    const hour = Math.floor(runtime / 60);
    const min = runtime % 60;
    return `${hour}h ${min}min`;
  }

  getReleaseInfo(): string {
    let releaseInfo = '';
    releaseInfo += this.getReleasedYear(this.movie.released) + ' . ';
    releaseInfo += this.movie.rated ?? 'Unrated' + ' . ';
    releaseInfo += this.getRunTime(this.movie.runtime);
    return releaseInfo;
  }
}
