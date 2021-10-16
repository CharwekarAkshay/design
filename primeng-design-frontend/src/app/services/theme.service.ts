import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  private _currentTheme = 'saga-blue';
  private _isDark = new BehaviorSubject<boolean>(false);

  private switchTheme(theme: string) {
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css';
    }
  }

  toggleTheme() {
    if (this._currentTheme === 'saga-blue') {
      this.switchTheme('vela-blue');
      this._currentTheme = 'vela-blue';
      this._isDark.next(true);
    } else {
      this.switchTheme('saga-blue');
      this._currentTheme = 'saga-blue';
      this._isDark.next(false);
    }
  }

  get themeSubscription(): BehaviorSubject<boolean> {
    return this._isDark;
  }

}
