import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AvatarUploadComponent } from './avatar-upload/avatar-upload.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [AvatarUploadComponent, SidebarComponent],
  imports: [CommonModule, RouterModule],
  exports: [AvatarUploadComponent, SidebarComponent],
})
export class SharedModule {}
