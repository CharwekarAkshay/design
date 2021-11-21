import { AbstractControl } from '@angular/forms';

export class ErrorMessage {
  static getErrorMessage(
    control: AbstractControl,
    controlName: string
  ): string {
    let finalMessage = '';
    if (control.errors !== null) {
      Object.keys(control.errors).forEach((error) => {
        switch (error) {
          case 'required':
            finalMessage = this.addMessage(
              `${controlName} is required`,
              finalMessage
            );
            break;
          case 'notAvailable':
            finalMessage = this.addMessage(
              `${controlName} is not available`,
              finalMessage
            );
        }
      });
    }
    return finalMessage;
  }

  private static addMessage(message: string, finalMessage: string): string {
    if (finalMessage === '') {
      return message;
    } else {
      message += '\n' + message;
      return message;
    }
  }
}
