import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';

export class CustomValidators {
  // Async Validators

  static usernameAvailabilityValidator(
    authenticationService: AuthenticationService
  ): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return authenticationService
        .checkUsername(control.value)
        .pipe(
          map((result) => (result['available'] ? null : { notAvailable: true }))
        );
    };
  }

  static emailAvailabilityValidator(
    authenticationService: AuthenticationService
  ): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return authenticationService
        .checkEmail(control.value)
        .pipe(
          map((result) => (result['available'] ? null : { notAvailable: true }))
        );
    };
  }

  // Validators

  static emailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regex.test(control.value.toLowerCase())) {
        return { notValid: true };
      }
      return null;
    };
  }

  static passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value.length < 8) {
        return { notValid: true };
      }
      return null;
    };
  }


  // Implement it later

  // static passwordLengthValidator(): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const regex = /^([a-zA-Z0-9_-]){8,15}$/;
  //     if (!regex.test(control.value.toLowerCase())) {
  //       return { notValidLength: true };
  //     }
  //     return null;
  //   };
  // }

  // static passwordNumberValidator(): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const regex = /[0-9]$/;
  //     if (regex.test(control.value.toLowerCase())) {
  //       return { notValidNumber: true };
  //     }
  //     return null;
  //   };
  // }

  // static passwordUpperCaseValidator(): ValidatorFn {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const regex = /[A-Z]$/;
  //     if (regex.test(control.value.toLowerCase())) {
  //       return { notValidCase: true };
  //     }
  //     return null;
  //   };
  // }
}
