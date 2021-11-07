import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationOption } from 'src/app/models/authorization-option';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnInit {
  authorizationOptions!: AuthorizationOption[];
  authorizationValue: string = 'login';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initializeAuthorizationOptions();
    this.getDefaultValue();
  }

  initializeAuthorizationOptions(): void {
    this.authorizationOptions = [
      { label: 'Login', value: 'login' },
      { label: 'SignUp', value: 'signup' },
    ];
  }

  getDefaultValue(): void {
    const currentRoute = this.router.url;
    if (currentRoute.endsWith('login')) {
      this.authorizationValue = 'login';
    } else {
      this.authorizationValue = 'signup';
    }
  }

  selectionChange(): void {
    this.router.navigate([`authorization/${this.authorizationValue}`]);
  }
}
