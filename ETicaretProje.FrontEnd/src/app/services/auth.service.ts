import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly USER_KEY = 'admin';

  login(admin: any): void {
    localStorage.setItem(this.USER_KEY, JSON.stringify(admin));
  }

  logout(): void {
    localStorage.removeItem(this.USER_KEY);
  }

  getAdmin(): any {
    const adminStr = localStorage.getItem(this.USER_KEY);
    return adminStr ? JSON.parse(adminStr) : null;
  }

  isLoggedIn(): boolean {
    return this.getAdmin() !== null;
  }
}
