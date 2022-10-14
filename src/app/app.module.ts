import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MaterialModule } from '@material/material.module';

import { FormComponent } from '@pages/auth/form/form.component';
import { AuthComponent } from '@pages/auth/auth.component';

@NgModule({
  declarations: [AppComponent, FormComponent, AuthComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
