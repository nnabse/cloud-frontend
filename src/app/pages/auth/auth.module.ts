import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [AuthComponent, FormComponent],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
