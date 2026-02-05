import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-learnhub-navbar',
  standalone: true,
  templateUrl: './learnhub-navbar.html',
  styleUrls: ['./learnhub-navbar.css'],
  imports: [CommonModule, RouterModule]
})
export class LearnhubNavbarComponent {
  isCollapsed = false;

  constructor(private router: Router) {}

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  onLogout(): void {
    // Add your logout logic here
    // For example:
    // this.authService.logout();
    // this.router.navigate(['/login']);
    console.log('Logout clicked');
  }
}