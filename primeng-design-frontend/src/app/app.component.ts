import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { ToastMessage } from './models/toast-message';
import { ToastMessageService } from './services/toast-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService],
})
export class AppComponent implements OnInit, OnDestroy {
  _routerSubscription!: Subscription;
  _toastMessageSubscription!: Subscription;
  enableSingleContainer: boolean = false;

  constructor(
    private primengConfig: PrimeNGConfig,
    private router: Router,
    private messageService: MessageService,
    private toastMessageService: ToastMessageService
  ) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.subscribeRouter();
    this.subscribeToastMessage();
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

  subscribeToastMessage() {
    this.toastMessageService.messageSubscription.subscribe(
      (value: ToastMessage | null) => {
        if (value !== null) {
          this.addSingle(value);
        } else {
          this.clear();
        }
      }
    );
  }

  addSingle(message: ToastMessage) {
    this.messageService.add(message);
  }

  clear() {
    this.messageService.clear();
  }
}
