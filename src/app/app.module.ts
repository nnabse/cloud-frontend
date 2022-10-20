import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MaterialModule } from '@material/material.module';

import { FormComponent } from '@pages/auth/form/form.component';
import { AuthComponent } from '@pages/auth/auth.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';

import { SidebarComponent } from '@components/sidebar/sidebar.component';
import { AvatarUploadComponent } from '@components/avatar-upload/avatar-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    AuthComponent,
    SidebarComponent,
    DashboardComponent,
    AvatarUploadComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
