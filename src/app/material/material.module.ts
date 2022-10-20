import { NgModule } from '@angular/core';

import { MatSnackBarModule } from '@angular/material/snack-bar';

const MaterialModules = [MatSnackBarModule];

@NgModule({
  imports: [MaterialModules],
  exports: [MaterialModules],
})
export class MaterialModule {}
