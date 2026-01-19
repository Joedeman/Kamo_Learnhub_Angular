import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoginModel } from '../models/login.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiUrl; // remember to set this in your environment files

  constructor(private http: HttpClient) {}

  // ---------------- LOGIN ----------------
  login(model: LoginModel): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Auth/login`, model)
      .pipe(
        tap(response => {
          this.storeAuthData(response.token, response.user);
        })
      );
  }

  // ---------------- LOGOUT ----------------
  logout(): void {
    localStorage.clear();
  }

  // ---------------- TOKEN ----------------
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;

    return !this.isTokenExpired(token);
  }

  // ---------------- USER ----------------
  getCurrentUser(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // ---------------- ROLE ----------------
  getUserRole(): string | null {
    const token = this.getToken();
    if (!token) return null;

    const payload = this.decodeToken(token);

    return (
      payload?.role ||
      payload?.['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    );
  }

  isAdmin(): boolean {
    return this.getUserRole() === 'Admin';
  }

  isStudent(): boolean {
    return this.getUserRole() === 'Student';
  }

  // ---------------- JWT HELPERS ----------------
  private storeAuthData(token: string, user: User): void {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  private decodeToken(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch {
      return null;
    }
  }

  private isTokenExpired(token: string): boolean {
    const payload = this.decodeToken(token);
    if (!payload?.exp) return true;

    const expiry = payload.exp * 1000;
    return Date.now() > expiry;
  }
}
