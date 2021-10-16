import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProgressService } from 'src/app/services/progress.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit, OnDestroy {

  isLoading: boolean = false;
  private _loaderSubscription: Subscription | undefined;
  private _routerSubscription: Subscription | undefined;

  constructor(private progressService: ProgressService, private router: Router, private title: Title) { }


  ngOnInit(): void {
    this.getSubscriptions();
  }

  ngOnDestroy(): void {
    this._loaderSubscription!.unsubscribe();
    this._routerSubscription!.unsubscribe();
  }

  getSubscriptions(): void {
    this._loaderSubscription = this.progressService.loaderSubscription.subscribe(state => {
      this.isLoading = state;
    });

    this._routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.progressService.showProgressBar();
      }

      if (event instanceof NavigationEnd) {
        this.progressService.hideProgressBar();
        this.setPageTitle(event.url);
      }
    });
  }

  setPageTitle(url: string): void {
    switch (url) {
      case '/settings': {
        this.title.setTitle("Settings");
        break;
      }
      case '/home': {
        this.title.setTitle("Home");
        break;
      }
    }
  }

}
