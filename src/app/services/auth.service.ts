import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '@environments/environment';
import {
  SIGN_IN_REQUEST_LINK,
  SIGN_OUT_REQUEST_LINK,
  SIGN_UP_REQUEST_LINK,
} from '@constants/db-requests.constants';

import { SignUpForm } from '@interfaces/signUpForm.interface';
import { SignInForm } from '@interfaces/signInForm.interface';

import { Auth } from '@interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public signUp(body: SignUpForm): Observable<Auth> {
    return this.http.post<Auth>(
      `${environment.DB_LINK}${SIGN_UP_REQUEST_LINK}`,
      body,
      { withCredentials: true }
    );
  }

  public signIn(body: SignInForm): Observable<Auth> {
    return this.http.post<Auth>(
      `${environment.DB_LINK}${SIGN_IN_REQUEST_LINK}`,
      body,
      { withCredentials: true }
    );
  }

  public signOut(): Observable<Auth> {
    return this.http.post<Auth>(
      `${environment.DB_LINK}${SIGN_OUT_REQUEST_LINK}`,
      {},
      { withCredentials: true }
    );
  }
}
