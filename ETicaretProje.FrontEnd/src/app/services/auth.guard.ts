import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      // Kimlik doğrulanmamışsa giriş sayfasına yönlendir
      this.router.navigate(['/admin/login']);
      return false;
    }
  }
}
