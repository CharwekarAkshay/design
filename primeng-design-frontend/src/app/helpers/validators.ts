import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';

export class CustomValidators {
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
}
