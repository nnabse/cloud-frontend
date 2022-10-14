import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';

import { AuthFormComponent } from '@pages/auth/auth-form/auth-form.component';
import { AuthComponent } from '@pages/auth/auth/auth.component';

@NgModule({
  declarations: [AppComponent, AuthFormComponent, AuthComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
