import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PageNames } from '@enums/auth.enums';

import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnChanges {
  @Input() formFor: PageNames = PageNames.SIGN_IN;

  constructor(private authService: AuthService) {}

  ngOnChanges(changes: SimpleChanges) {
    for (let changeName in changes) {
      const changedProperty = changes[changeName];
      this.formFor = changedProperty.currentValue;
      if (this.formFor === PageNames.SIGN_IN) {
        this.authForm.removeControl('passwordRepeat');
        this.authForm.removeControl('fullName');
      }
    }
  }

  public SIGN_UP_PAGE_NAME = 'Sign up';

  public authForm: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    displayName: new FormControl('', [Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(24),
      Validators.pattern('^[A-Za-z0-9_\\D]+$'),
    ]),
    passwordRepeat: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(24),
      Validators.pattern('^[A-Za-z0-9_\\D]+$'),
    ]),
  });

  public labels = {
    'Sign in': {
      btnText: 'Sign in',
      redirectBtnText: 'Sign Up',
      redirectText: "Haven't account?",
      redirectLink: '/signUp',
    },
    'Sign up': {
      btnText: 'Sign up',
      redirectBtnText: 'Sign In',
      redirectText: 'Already have an account?',
      redirectLink: '/signIn',
    },
  };

  public clearPasswordFields(): void {
    this.authForm.get('password')?.setValue('');
    this.authForm.get('passwordRepeat')?.setValue('');
  }

  public submitButtonFunction(): void {
    if (this.formFor === PageNames.SIGN_UP) {
      this.authService.signUp(this.authForm.value);
      this.clearPasswordFields();
      return;
    }
  }
}
