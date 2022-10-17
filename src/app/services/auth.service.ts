import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { DB_LINK } from '@constants/db-link.constants';
import { SIGN_UP_REQUEST_LINK } from '@constants/db-requests.constants';

import { User } from '@interfaces/user.interface';
import { Auth } from '@interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public signUp(body: User): Observable<Auth> {
    return this.http.post<Auth>(`${DB_LINK}${SIGN_UP_REQUEST_LINK}`, body);
  }
}
