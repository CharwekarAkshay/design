import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastMessage } from '../models/toast-message';

@Injectable({
  providedIn: 'root',
})
export class ToastMessageService {
  private _message = new Subject<ToastMessage | null>();

  constructor() {}

  showMessage(toastMessage: ToastMessage): void {
    this._message.next(toastMessage);
  }

  genericErrorMessage(): void  {
    const messsage: ToastMessage = {
      severity: 'error',
      summary: "Error",
      detail: "Something went wrong"
    }
    this.showMessage(messsage);
  }

  clearMessage(): void {
    this._message.next(null);
  }

  get messageSubscription(): Subject<ToastMessage | null> {
    return this._message;
  }
}
