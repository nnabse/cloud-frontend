import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';

import { FormComponent } from '@pages/auth/form/form.component';
import { AuthComponent } from '@pages/auth/auth.component';

@NgModule({
  declarations: [AppComponent, FormComponent, AuthComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
