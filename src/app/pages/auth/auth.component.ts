import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageName } from '@enums/auth.enums';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public formType: PageName = PageName.SIGN_IN;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.router.url === '/auth/signIn') this.formType = PageName.SIGN_IN;
    if (this.router.url === '/auth/signUp') this.formType = PageName.SIGN_UP;
  }
}
