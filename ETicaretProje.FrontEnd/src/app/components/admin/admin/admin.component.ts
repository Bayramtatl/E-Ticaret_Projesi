import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../shop/shared/footer/footer.component';
import { AdminFooterComponent } from '../admin-footer/admin-footer.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,
  AdminFooterComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private authService: AuthService,private router: Router){}
// Örneğin, bir bileşen içinde
logout(): void {
  this.authService.logout();
  this.router.navigate(['/admin/login']);
}
}
