import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-learnhub-navbar',
  standalone: true,
  templateUrl: './learnhub-navbar.html',
  styleUrls: ['./learnhub-navbar.css'],
  imports:[CommonModule , RouterModule]
})
export class LearnhubNavbarComponent {
  isCollapsed = false;

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
