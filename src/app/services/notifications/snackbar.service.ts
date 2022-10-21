import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snack: MatSnackBar) {}

  openErrorSnackbarServer(err: any): Observable<null> {
    let message = !err.status ? 'DB connection error!' : err.error.message;
    if (!message) {
      message = 'Unknown error!';
    }
    this.snack.open(message, '', {
      duration: 3500,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'error-snack',
    });
    return of(null);
  }

  openErrorSnackbar(message: string) {
    this.snack.open(message, '', {
      duration: 3500,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'error-snack',
    });
  }
}
