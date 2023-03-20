import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { AuthError } from '@interfaces/auth.interface';
import {
  CONNECTION_ERR,
  UNKNOWN_ERR,
} from '@constants/snackbarMessages.constants';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snack: MatSnackBar) {}

  openSuccess(message: string): void {
    this.snack.open(message, '', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'success-snack',
    });
  }

  openErrorServer(err: AuthError): Observable<null> {
    let message = !err.status ? CONNECTION_ERR : err.error.message;
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
