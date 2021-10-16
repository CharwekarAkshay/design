import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { pluck } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  constructor(private dataService: DataService) { }

  public movieList: Array<Movie> = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.dataService.getTrendingMovies().pipe(
      pluck("content")
    ).subscribe((list) => {
      if (list) {
        console.log(list);
        this.movieList = list as Array<Movie>;
      }
    });
  }

  

}
