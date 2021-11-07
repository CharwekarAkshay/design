import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  passwordVisible: boolean = false;
  rePasswordVisible: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.generateSingUpForm();
  }

  generateSingUpForm(): void {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      rePassword: ['', Validators.required],
    });
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  toggleRePasswordVisibility(): void {
    this.rePasswordVisible = !this.rePasswordVisible;
  }

  get passwordFieldType(): string {
    return this.passwordVisible ? 'text' : 'password';
  }

  get passwordIcon(): string {
    return this.passwordVisible ? 'pi pi-eye' : 'pi pi-eye-slash';
  }

  get rePasswordFieldType(): string {
    return this.rePasswordVisible ? 'text' : 'password';
  }

  get rePasswordIcon(): string {
    return this.rePasswordVisible ? 'pi pi-eye' : 'pi pi-eye-slash';
  }
}
