import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private router: Router, private auth: AuthService) {}

  public isFolderOpened = false;

  public signOut() {
    this.auth.signOut().subscribe();
    this.router.navigate(['/']);
  }
}
