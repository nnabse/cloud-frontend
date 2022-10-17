import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PageNames } from '@enums/auth.enums';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(private router: Router) {}

  public formType: PageNames = PageNames.SIGN_IN;

  ngOnInit(): void {
    if (this.router.url === '/signIn') this.formType = PageNames.SIGN_IN;
    if (this.router.url === '/signUp') this.formType = PageNames.SIGN_UP;
  }
}
