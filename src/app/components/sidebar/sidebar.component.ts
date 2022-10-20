import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

import { IconsList } from '@constants/icons.constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public isFolderOpened = false;
  public icons = IconsList;

  constructor(private router: Router, private auth: AuthService) {}

  public signOut() {
    this.auth.signOut().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
