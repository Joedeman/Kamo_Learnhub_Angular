import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../services/auth';
import { LoginModel } from '../../models/login.model';
import { ButtonComponent } from '../../shared/button/button';
import { CardComponent } from '../../shared/card/card';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, CardComponent],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginData: LoginModel = {
    email: '',
    password: ''
  };

  errorMessage = '';
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  login(): void {
    this.isLoading = true;
    this.errorMessage = '';

    this.authService.login(this.loginData).subscribe({
  next: () => {
    this.isLoading = false;

    // 🔑 Get role from token
    const role = this.authService.getUserRole();

    if (role === 'Admin') {
      this.router.navigate(['/learnhub/admin']);
    } else if (role === 'Student') {
      this.router.navigate(['/learnhub/student']);
    } else {
      // fallback (optional)
      this.router.navigate(['/']);
    }

    console.log('Login successful, role:', role);
  },
  error: err => {
    this.isLoading = false;
    this.errorMessage = err.error?.message || 'Invalid email or password';
  }
});

  }

  goBack(): void {
  this.router.navigate(['/']); 
}

ngAfterViewInit() {
  this.cdr.detectChanges();
}
}