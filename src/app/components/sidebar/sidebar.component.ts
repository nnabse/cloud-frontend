import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public isFolderOpened = false;

  public arrowToLeftIconLink = 'assets/icons/arrow-to-left.svg';
  public arrowToLeftIconDescription = 'arrow to left icon';
  public signOutIconLink = 'assets/icons/sign-out.svg';
  public signOutIconDescription = 'sign out icon';

  constructor(private router: Router, private auth: AuthService) {}

  public signOut() {
    this.auth.signOut().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
