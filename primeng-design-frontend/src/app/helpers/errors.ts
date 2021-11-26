import { AbstractControl } from '@angular/forms';

export class ErrorMessage {
  static getErrorMessage(
    control: AbstractControl,
    controlName: string
  ): string {
    let finalMessage = '';
    controlName = this.getTitleCase(controlName);
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
            break;
          case 'notValid':
            finalMessage = this.addMessage(
              `${controlName} is not valid`,
              finalMessage
            );
            break;
          case 'notValidLength':
            finalMessage = this.addMessage(
              `${controlName} doesn't match accepted length`,
              finalMessage
            );
            break;
          case 'notValidNumber':
            finalMessage = this.addMessage(
              `${controlName} should contain at least one number`,
              finalMessage
            );
            break;
          case 'notValidCase':
            finalMessage = this.addMessage(
              `${controlName} should contain at least one upper and one lower case character`,
              finalMessage
            );
            break;
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

  private static getTitleCase(word: string) {
    const temp = word.replace(/([A-Z])/g, ' $1');
    return temp.charAt(0).toUpperCase() + temp.slice(1);
  }
}
