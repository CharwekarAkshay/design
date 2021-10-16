import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  private _loader = new BehaviorSubject<boolean>(false);

  showProgressBar(): void {
    this._loader.next(true);
  }

  hideProgressBar(): void {
    this._loader.next(false);
  }


  get loaderSubscription(): BehaviorSubject<boolean> {
    return this._loader;
  }
}
