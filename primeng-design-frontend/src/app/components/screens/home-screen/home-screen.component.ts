import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { pluck } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie';
import { ProgressService } from 'src/app/services/progress.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  constructor(private dataService: DataService, private progressService: ProgressService) { }

  public movieCaouselList: Array<Movie> = [];
  public movieGridList: Array<Movie> = [];

  ngOnInit(): void {
    this.fetchCarouselData();
    this.fetchGridData();
  }

  fetchCarouselData(): void {
    this.progressService.showProgressBar();
    this.dataService.getTrendingMovies().pipe(
      pluck("content")
    ).subscribe((list) => {
      this.progressService.hideProgressBar();
      if (list) {
        console.log(list);
        this.movieCaouselList = list as Array<Movie>;
      }
    });
  }


  fetchGridData(): void {
    this.progressService.showProgressBar();
    this.dataService.getPouplarMovies(0, 10).subscribe(response => {
      this.progressService.hideProgressBar();
      this.setGridResponseData(response);
    })
  }

  setGridResponseData(response: any): void {
    const {content, ...pageable} = response;
    console.log(content);
    console.log(pageable);
    this.movieGridList = content;
  }

}
