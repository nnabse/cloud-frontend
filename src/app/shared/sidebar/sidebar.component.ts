import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconsList } from '@constants/icons.constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public isFolderOpened = false;
  public icons = IconsList;

  constructor(private router: Router) {}

  signOut(): void {
    this.router.navigate(['/']);
  }
}
