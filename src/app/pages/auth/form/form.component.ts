import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { PageNames } from '@enums/auth.enums';

@Component({
  selector: 'app-auth-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnChanges {
  @Input() formFor: PageNames = PageNames.SIGN_IN;

  public SIGN_UP_PAGE_NAME = 'Sign up';

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

  public authForm: FormGroup = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    displayName: new FormControl('', [Validators.minLength(5)]),
    email: new FormControl('', [Validators.required]),
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

  labels = {
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
}
