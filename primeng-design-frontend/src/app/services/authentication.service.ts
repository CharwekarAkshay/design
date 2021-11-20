import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../global.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}

  checkUsername(username: string): Observable<any> {
    return this.httpClient.get(
      GlobalConstants.backendAPI +
        '/' +
        GlobalConstants.auth +
        `/usernameAvailability/${username}`
    );
  }

  checkEmail(email: string): Observable<any> {
    return this.httpClient.get(
      GlobalConstants.backendAPI +
        '/' +
        GlobalConstants.auth +
        `/emailAvailability/${email}`
    );
  }
}
