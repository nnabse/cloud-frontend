import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { AuthError } from '@interfaces/auth.interface';
import { CONN_ERR, UNKNOWN_ERR } from '@constants/snackbarMessages.constants';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snack: MatSnackBar) {}

  openErrorServer(err: AuthError): Observable<null> {
    let message = !err.status ? CONN_ERR : err.error.message;
    if (!message) message = UNKNOWN_ERR;
    this.openError(message);
    return of(null);
  }

  openError(message: string): void {
    this.snack.open(message, '', {
      duration: 3500,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'error-snack',
    });
  }
}
