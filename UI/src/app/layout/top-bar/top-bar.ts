import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss',
})
export class TopBar {
  public avatarUrl = 'https://ui-avatars.com/api/?name=User&background=random';
  private authService = inject(AuthService);

  user$ = this.authService.user$;
  isProfileMenuOpen = false;

  toggleProfileMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  logout() {
    this.authService.signOut();
    this.isProfileMenuOpen = false;
  }
}
