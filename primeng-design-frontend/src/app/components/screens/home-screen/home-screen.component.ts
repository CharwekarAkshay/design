import { Component, ElementRef, OnInit } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie';
import { Page } from 'src/app/models/page';
import { DataService } from 'src/app/services/data.service';
import { ProgressService } from 'src/app/services/progress.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
})
export class HomeScreenComponent implements OnInit {
  DEFAULT_PAGE_SIZE = 10;
  page!: Page;
  showScrollToTopButton: boolean = false;

  constructor(
    private dataService: DataService,
    private progressService: ProgressService,
    private elementRef: ElementRef
  ) {}

  public movieCarouselList: Array<Movie> = [];
  public movieGridList: Array<Movie> = [];

  ngOnInit(): void {
    this.fetchCarouselData();
    this.fetchGridData();
  }

  fetchCarouselData(): void {
    this.progressService.showProgressBar();
    this.dataService
      .getTrendingMovies()
      .pipe(pluck('content'))
      .subscribe((list) => {
        this.progressService.hideProgressBar();
        if (list) {
          this.movieCarouselList = list as Array<Movie>;
        }
      });
  }

  fetchGridData(): void {
    this.progressService.showProgressBar();
    if (this.page) {
      const nextPageNumber = this.page.pageable.pageNumber + 1;
      this.dataService
        .getPopularMovies(nextPageNumber, this.DEFAULT_PAGE_SIZE)
        .subscribe((response) => {
          this.progressService.hideProgressBar();
          this.setGridResponseData(response);
        });
    } else {
      this.dataService
        .getPopularMovies(0, this.DEFAULT_PAGE_SIZE)
        .subscribe((response) => {
          this.progressService.hideProgressBar();
          this.setGridResponseData(response);
        });
    }
  }

  setGridResponseData(response: any): void {
    const { content, ...page } = response;
    this.page = page;
    this.movieGridList = this.movieGridList.concat(content);
  }

  scrolled() {
    this.fetchGridData();
  }

  onComponentScroll(event: any): void {
    const scrollDistance = event['originalTarget'].scrollTop;

    if (scrollDistance > 100) {
      this.showScrollToTopButton = true;
    } else {
      this.showScrollToTopButton = false;
    }
  }

  scrollToTop(): void {
    const options: ScrollToOptions = {
      top: 0,
      left: 0,
      behavior: 'smooth',
    };
    const element: HTMLDivElement = this.elementRef.nativeElement.firstChild;
    element.scroll(options);
  }
}
