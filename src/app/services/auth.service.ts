import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { RequestLink } from '@enums/requestLink.enums';
import { SignInForm } from '@interfaces/signInForm.interface';
import { Auth } from '@interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public signUp(body: FormData): Observable<Auth> {
    return this.http.post<Auth>(
      `${environment.DB_LINK}${RequestLink.SIGN_UP}`,
      body,
      { withCredentials: true }
    );
  }

  public signIn(body: SignInForm): Observable<Auth> {
    return this.http.post<Auth>(
      `${environment.DB_LINK}${RequestLink.SIGN_IN}`,
      body,
      { withCredentials: true }
    );
  }

  public signOut(): Observable<Auth> {
    return this.http.post<Auth>(
      `${environment.DB_LINK}${RequestLink.SIGN_OUT}`,
      {},
      { withCredentials: true }
    );
  }
}
