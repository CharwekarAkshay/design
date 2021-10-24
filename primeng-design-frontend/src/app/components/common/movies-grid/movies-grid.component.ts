import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { DataService } from 'src/app/services/data.service';
import { ProgressService } from 'src/app/services/progress.service';

@Component({
  selector: 'app-movies-grid',
  templateUrl: './movies-grid.component.html',
  styleUrls: ['./movies-grid.component.scss']
})
export class MoviesGridComponent implements OnInit {

  @Input()
  movieList: Array<Movie> = [];

  constructor() { }

  ngOnInit(): void {
  }


}
