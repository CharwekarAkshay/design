import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-carousel',
  templateUrl: './movie-carousel.component.html',
  styleUrls: ['./movie-carousel.component.scss']
})
export class MovieCarouselComponent implements OnInit {

  @Input() movieList!: Array<Movie>;
  @Input() header!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showMovieDetails(id: string) {
    this.router.navigate([`movie-detail/${id}`]);
  }

}
