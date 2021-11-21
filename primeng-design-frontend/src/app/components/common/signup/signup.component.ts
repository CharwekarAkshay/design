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

  submitForm(): void {
    console.log(this.signUpForm);
  }
}
