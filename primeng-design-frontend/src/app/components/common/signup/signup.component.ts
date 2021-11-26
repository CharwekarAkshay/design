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
import { SignupModel } from 'src/app/models/signup-model';
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
    this.rePasswordValidator();
  }

  generateSingUpForm(): void {
    this.signUpForm = this.formBuilder.group({
      username: [
        '',
        [Validators.required],
        [
          CustomValidators.usernameAvailabilityValidator(
            this.authenticationService
          ),
        ],
      ],
      email: [
        '',
        [Validators.required, CustomValidators.emailValidator()],
        [
          CustomValidators.emailAvailabilityValidator(
            this.authenticationService
          ),
        ],
      ],
      password: [
        '',
        [Validators.required, CustomValidators.passwordValidator()],
      ],
      rePassword: ['', [Validators.required]],
    });
  }

  submitForm(): void {
    if (this.signUpForm.valid) {
      const signup: SignupModel = {
        username: this.signUpForm.get('username')?.value,
        password: this.signUpForm.get('password')?.value,
        email: this.signUpForm.get('email')?.value,
      };

      this.authenticationService
        .submitSignUpRequest(signup)
        .subscribe((response) => console.log(response));
    }
  }

  rePasswordValidator() {
    const rePasswordControl = this.signUpForm.get('rePassword');
    rePasswordControl?.valueChanges.subscribe((value) => {
      const password = this.signUpForm.get('password')?.value;
      if (password !== value) {
        rePasswordControl.setErrors({
          ...rePasswordControl.errors,
          notMatch: true,
        });
      } else {
        const err = rePasswordControl.errors;
        if (err) {
          delete err['notMatch'];
          if (!Object.keys(err).length) {
            rePasswordControl.setErrors(null);
          } else {
            rePasswordControl.setErrors(err);
          }
        }
      }
    });
  }
}
