import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PageNames } from '@enums/auth.enums';
import { AuthForm } from '@enums/authForm.enums';
import { SIGN_UP_PAGE_NAME } from '@constants/auth-pageNames.constants';

import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnChanges {
  @Input() formFor: PageNames = PageNames.SIGN_IN;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    for (let changeName in changes) {
      const changedProperty = changes[changeName];
      this.formFor = changedProperty.currentValue;
      if (this.formFor === PageNames.SIGN_IN) {
        this.authForm.removeControl(AuthForm.PASSWORD_REPEAT);
        this.authForm.removeControl(AuthForm.FULLNAME);
      }
    }
  }

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

  public signUpPageName = SIGN_UP_PAGE_NAME;

  public clearPasswordFields(): void {
    this.authForm.get(AuthForm.PASSWORD)?.setValue('');
    this.authForm.get(AuthForm.PASSWORD_REPEAT)?.setValue('');
  }

  public submitButton(): void {
    if (this.formFor === PageNames.SIGN_UP) {
      const { fullName, displayName, email, password } = this.authForm.value;
      this.authService
        .signUp({ fullName, displayName, email, password })
        .subscribe();
      this.clearPasswordFields();
      return;
    }
    const { email, password } = this.authForm.value;
    this.authService
      .signIn({ email, password })
      .subscribe(() => this.router.navigate(['/dashboard']));
    this.clearPasswordFields();
  }
}
