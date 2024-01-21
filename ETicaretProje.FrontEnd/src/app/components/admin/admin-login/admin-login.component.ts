import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminFooterComponent } from '../admin-footer/admin-footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,AdminFooterComponent],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

}
