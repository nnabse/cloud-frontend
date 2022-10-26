import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PageName } from '@enums/auth.enums';
import { AuthForm, Placeholders } from '@enums/authForm.enums';
import {
  FULLNAME_PATTERN,
  PASSWORD_PATTERN,
  SIGN_UP_PAGE_NAME,
} from '@constants/auth.constants';

import { AuthService } from '@services/auth.service';
import { SnackbarService } from '@services/notifications/snackbar.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnChanges {
  @Input() formFor: PageName = PageName.SIGN_IN;

  public get placeholderEmail(): Placeholders {
    return this.formFor === this.signUpPageName
      ? Placeholders.SIGN_UP_EMAIL
      : Placeholders.SIGN_IN_EMAIL;
  }

  public get placeholderPassword(): Placeholders {
    return this.formFor === this.signUpPageName
      ? Placeholders.SIGN_UP_PASSWORD
      : Placeholders.SIGN_IN_PASSWORD;
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackbar: SnackbarService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    for (let changeName in changes) {
      const changedProperty = changes[changeName];
      this.formFor = changedProperty.currentValue;
      if (this.formFor === PageName.SIGN_IN) {
        this.authForm.removeControl(AuthForm.PASSWORD_REPEAT);
        this.authForm.removeControl(AuthForm.FULLNAME);
      }
    }
  }

  public authForm: FormGroup = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.pattern(FULLNAME_PATTERN),
    ]),
    displayName: new FormControl('', [Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(24),
      Validators.pattern(PASSWORD_PATTERN),
    ]),
    passwordRepeat: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(24),
      Validators.pattern(PASSWORD_PATTERN),
    ]),
    avatar: new FormControl(''),
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

  public submit(): void {
    if (this.formFor === PageName.SIGN_UP) {
      const formData = new FormData();
      const formLength = Object.keys(this.authForm.controls)?.length;
      const formControlsKeys = Object.keys(this.authForm.controls);

      for (let i = 0; i <= formLength - 1; i++) {
        const controlName = Object.keys(this.authForm.controls)[i];
        if (controlName === AuthForm.PASSWORD_REPEAT) continue;
        formData.append(
          formControlsKeys[i],
          this.authForm.get(controlName)?.value
        );
      }
      this.authService.signUp(formData).subscribe({
        next: () => this.router.navigate(['/dashboard']),
        error: (error) => this.snackbar.openErrorServer(error),
      });
    } else {
      const { email, password } = this.authForm.value;
      this.authService.signIn({ email, password }).subscribe({
        next: () => this.router.navigate(['/dashboard']),
        error: (error) => this.snackbar.openErrorServer(error),
      });
    }
    this.clearPasswordFields();
  }
}
