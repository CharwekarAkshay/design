import { Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor(private progressService: ProgressService, private router: Router) { }


  ngOnInit(): void {
    this.getSubscriptions();
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
      }
    });
  }

  ngOnDestroy(): void {
    this._loaderSubscription!.unsubscribe();
    this._routerSubscription!.unsubscribe();
  }

}
