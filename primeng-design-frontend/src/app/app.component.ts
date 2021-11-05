import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  _routerSubscription!: Subscription;
  enableSingleContainer: boolean = false;

  constructor(private primengConfig: PrimeNGConfig, private router: Router) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.subscribeRouter();
  }

  ngOnDestroy(): void {
    this._routerSubscription.unsubscribe();
  }

  subscribeRouter(): void {
    this._routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.split('/').includes('authorization')) {
          this.enableSingleContainer = true;
        } else {
          this.enableSingleContainer = false;
        }
      }
    });
  }
}
