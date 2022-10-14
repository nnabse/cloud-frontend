import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from '@pages/auth/auth.component';

const routes: Routes = [
  { path: '', redirectTo: 'signIn', pathMatch: 'full' },
  { path: 'signIn', component: AuthComponent },
  { path: 'signUp', component: AuthComponent },
  { path: '**', redirectTo: 'signIn' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
