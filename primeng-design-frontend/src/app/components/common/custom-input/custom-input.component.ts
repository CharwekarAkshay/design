import { Component, Input, OnInit } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormControl,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective },
  ],
})
export class CustomInputComponent implements OnInit {
  @Input() control!: AbstractControl;
  @Input() controlName!: string;
  @Input() inputType: string = 'text';
  passwordVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showControlSeverity(): string {
    return this.control.invalid ? 'error' : 'success';
  }

  getPlaceholder(): string {
    return this.controlName.toLocaleUpperCase();
  }

  isInputTypeText(): boolean {
    return true;
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

}
