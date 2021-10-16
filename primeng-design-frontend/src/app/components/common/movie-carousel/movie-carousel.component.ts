import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss']
})
export class MovieCarouselComponent implements OnInit {

  @Input() movieList!: Array<Movie>;
  @Input() header!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
