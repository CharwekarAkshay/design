import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from 'src/app/helpers/validators';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  passwordVisible: boolean = false;
  rePasswordVisible: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.generateSingUpForm();
  }

  generateSingUpForm(): void {
    this.signUpForm = this.formBuilder.group({
      username: [
        '',
        Validators.required,
        CustomValidators.usernameAvailabilityValidator(
          this.authenticationService
        ),
      ],
      email: [
        '',
        Validators.required,
        CustomValidators.emailAvailabilityValidator(
          this.authenticationService
        ),
      ],
      password: ['', Validators.required],
      rePassword: ['', [Validators.required]],
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

  submitForm(): void {
    console.log(this.signUpForm);
  }

  showControlSeverity(control: AbstractControl): string {
    return control.invalid ? 'error' : 'success';
  }
}
