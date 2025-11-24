import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  constructor(
    private router: Router,
    public layoutService: LayoutService
  ) {
    // Collapse sidebar by default on mobile, expanded on desktop
    if (typeof window !== 'undefined') {
      this.layoutService.setSidebarCollapsed(window.innerWidth < 768);
    }

    // Auto-collapse sidebar on mobile after navigation
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (typeof window !== 'undefined' && window.innerWidth < 768) {
          this.layoutService.setSidebarCollapsed(true);
        }
      });
  }

  @HostListener('window:resize')
  onResize() {
    // Auto-collapse on mobile, auto-expand on desktop
    if (typeof window !== 'undefined') {
      this.layoutService.setSidebarCollapsed(window.innerWidth < 768);
    }
  }

  toggleSidebar() {
    this.layoutService.toggleSidebar();
  }
}
