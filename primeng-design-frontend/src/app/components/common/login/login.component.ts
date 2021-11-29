import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginModel } from 'src/app/models/login-model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  passwordVisible: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.generateLoginForm();
  }

  generateLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginUser(): void {
    console.log();
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  get passwordFieldType(): string {
    return this.passwordVisible ? 'text' : 'password';
  }

  get passwordIcon(): string {
    return this.passwordVisible ? 'pi pi-eye' : 'pi pi-eye-slash';
  }

  submitForm(): void {
    if (this.loginForm.valid) {
      const login: LoginModel = {
        ...this.loginForm.value,
      };

      this.authenticationService.loginRequest(login).subscribe((response) => {
        console.log(response);
      });
    }
  }
}
