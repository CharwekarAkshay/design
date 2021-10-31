import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie';
import { DataService } from 'src/app/services/data.service';
import { ProgressService } from 'src/app/services/progress.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  private movieId: string = '';
  movie!: Movie;

  constructor(
    private router: ActivatedRoute,
    private dataService: DataService,
    private progressService: ProgressService
  ) {}

  ngOnInit(): void {
    this.movieId = this.router.snapshot.paramMap.get('movieId') ?? '';
    this.fetchMovieDetails();
  }

  fetchMovieDetails(): void {
    if (this.movieId !== '') {
      this.progressService.showProgressBar();
      this.dataService.getMovieById(this.movieId).subscribe((response) => {
        this.progressService.hideProgressBar();
        this.movie = response;
      });
    }
  }
}
