import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent {
  @Input() formFor: 'Sign In' | 'Sign Up' = 'Sign In';

  labels = {
    'Sign In': {
      btnText: 'Sign In',
      redirectBtnText: 'Sign Up',
      redirectText: "Haven't account?",
    },
    'Sign Up': {
      btnText: 'Sign Up',
      redirectBtnText: 'Sign In',
      redirectText: 'Already have an account?',
    },
  };
}
