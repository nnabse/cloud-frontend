import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snack: MatSnackBar) {}

  openErrorSnackbar(err: any): Observable<null> {
    const message = !err.status ? 'DB connection error!' : err.error.message;
    this.snack.open(message, '', {
      duration: 3500,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      panelClass: 'error-snack',
    });
    return of(null);
  }
}
