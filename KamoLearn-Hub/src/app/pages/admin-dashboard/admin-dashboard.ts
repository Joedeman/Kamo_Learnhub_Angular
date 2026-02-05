import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  templateUrl: './admin-dashboard.html',
  styleUrls: ['./admin-dashboard.css'],
})
export class AdminDashboard {
  constructor(private router: Router) {}

addStudent() {
   console.log('Add Student clicked!');
  this.router.navigate(['/learnhub/students/create']);
}

}

