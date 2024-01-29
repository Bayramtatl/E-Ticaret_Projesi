import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly ADMIN_KEY = 'admin';
  private readonly CUSTOMER_KEY = 'customer';

  loginAdmin(admin: any): void {
    localStorage.setItem(this.ADMIN_KEY, JSON.stringify(admin));
  }

  logoutAdmin(): void {
    localStorage.removeItem(this.ADMIN_KEY);
  }

  getAdmin(): any {
    const adminStr = localStorage.getItem(this.ADMIN_KEY);
    return adminStr ? JSON.parse(adminStr) : null;
  }

  isLoggedInAdmin(): boolean {
    return this.getAdmin() !== null;
  }
  loginCustomer(customer: any): void {
    localStorage.setItem(this.CUSTOMER_KEY, JSON.stringify(customer));
  }

  logoutCustomer(): void {
    localStorage.removeItem(this.CUSTOMER_KEY);
  }

  getCustomer(): any {
    const customerStr = localStorage.getItem(this.CUSTOMER_KEY);
    return customerStr ? JSON.parse(customerStr) : null;
  }

  isLoggedInCustomer(): boolean {
    return this.getCustomer() !== null;
  }
}
