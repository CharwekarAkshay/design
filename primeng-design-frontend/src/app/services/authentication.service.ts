import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { GlobalConstants } from '../global.constants';
import { LoginModel } from '../models/login-model';
import { LoginResponseModel } from '../models/login-response-model';
import { SignupModel } from '../models/signup-model';

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

  submitSignUpRequest(signup: SignupModel): Observable<any> {
    return this.httpClient.post(
      GlobalConstants.backendAPI + '/' + GlobalConstants.auth + '/' + 'signup',
      signup
    );
  }

  loginRequest(login: LoginModel): Observable<LoginResponseModel> {
    return this.httpClient
      .post<LoginResponseModel>(
        GlobalConstants.backendAPI + '/' + GlobalConstants.auth + '/' + 'login',
        login
      )
      .pipe(
        tap((response) => this.setSession(response)),
        shareReplay()
      );
  }

  private setSession(login: LoginResponseModel): void {
    localStorage.setItem('login_response', JSON.stringify(login));
    localStorage.setItem('jwt-token', login.authenticationToken);
    localStorage.setItem('expires_in', login.expiresIn.toString());
  }
}
